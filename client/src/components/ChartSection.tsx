import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartDataPoint {
  name: string;
  value: number;
}

interface ChartSectionProps {
  chartData: ChartDataPoint[];
  onDownloadCSV: () => void;
}

export default function ChartSection({
  chartData,
  onDownloadCSV,
}: ChartSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24 xl:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 px-4">
            Наблюдайте за ростом вашего бизнеса
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Реальные показатели роста прибыли наших клиентов за год
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-4 md:p-6 lg:p-8" data-testid="card-chart">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
              <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                Динамика роста продаж
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={onDownloadCSV}
                data-testid="button-download-csv"
                className="gap-2 text-xs md:text-sm"
              >
                <Download className="h-3 w-3 md:h-4 md:w-4" />
                Скачать данные
              </Button>
            </div>

            <div className="h-64 md:h-80 lg:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#colorValue)"
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
