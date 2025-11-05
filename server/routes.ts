import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { promises as fs } from "fs";
import path from "path";
import { statsDataSchema } from "@shared/schema";
import { z } from "zod";

const statsFilePath = path.join(process.cwd(), "public", "data", "stats.json");

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/stats", async (_req, res) => {
    try {
      const data = await fs.readFile(statsFilePath, "utf-8");
      const parsedData = JSON.parse(data);
      const validatedData = statsDataSchema.parse(parsedData);
      res.json(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid stats data format", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to read stats" });
      }
    }
  });

  app.put("/api/stats", async (req, res) => {
    try {
      const validatedData = statsDataSchema.parse(req.body);
      await fs.writeFile(statsFilePath, JSON.stringify(validatedData, null, 2), "utf-8");
      res.json({ message: "Stats updated successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data format", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update stats" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
