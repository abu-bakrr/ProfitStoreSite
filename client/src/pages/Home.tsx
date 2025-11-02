import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import BenefitsSection from "@/components/BenefitsSection";
import ChartSection from "@/components/ChartSection";
import ClientCounter from "@/components/ClientCounter";
import CTASection from "@/components/CTASection";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";

interface StatsData {
  kpi: {
    conversionGrowth: number;
    revenueGrowth: number;
    trustIncrease: number;
  };
  chartData: Array<{ name: string; value: number }>;
  clients: number;
  benefits: Array<{
    title: string;
    description: string;
    percentage: number;
  }>;
  testimonials: Array<{
    quote: string;
    company: string;
    industry: string;
  }>;
}

const defaultStats: StatsData = {
  kpi: {
    conversionGrowth: 35,
    revenueGrowth: 42,
    trustIncrease: 57,
  },
  chartData: [
    { name: "Янв", value: 20 },
    { name: "Фев", value: 35 },
    { name: "Мар", value: 50 },
    { name: "Апр", value: 45 },
    { name: "Май", value: 65 },
    { name: "Июн", value: 75 },
    { name: "Июл", value: 85 },
    { name: "Авг", value: 90 },
    { name: "Сен", value: 100 },
    { name: "Окт", value: 110 },
    { name: "Ноя", value: 125 },
    { name: "Дек", value: 140 },
  ],
  clients: 123,
  benefits: [
    {
      title: "24/7 Доступность",
      description: "Ваш магазин работает круглосуточно",
      percentage: 24,
    },
    {
      title: "Глобальный охват",
      description: "Продавайте по всей стране",
      percentage: 89,
    },
    {
      title: "Автоматизация",
      description: "Сократите время обработки",
      percentage: 70,
    },
    {
      title: "Рост доверия",
      description: "Повысьте доверие клиентов",
      percentage: 57,
    },
    {
      title: "Аналитика",
      description: "Отслеживайте эффективность",
      percentage: 95,
    },
    {
      title: "Мобильные покупки",
      description: "65% покупают со смартфонов",
      percentage: 65,
    },
  ],
  testimonials: [
    {
      quote: "За первый месяц продажи выросли на 45%",
      company: "TechHub",
      industry: "Электроника",
    },
    {
      quote: "Наш сайт удобнее конкурентов",
      company: "StyleMe",
      industry: "Мода",
    },
    {
      quote: "Освободили 15 часов в неделю",
      company: "FitGear",
      industry: "Спорт",
    },
  ],
};

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const { data: stats = defaultStats } = useQuery<StatsData>({
    queryKey: ["/data/stats.json"],
    queryFn: async () => {
      try {
        const response = await fetch("/data/stats.json");
        if (!response.ok) throw new Error("Failed to fetch");
        return await response.json();
      } catch (error) {
        console.log("Using default stats:", error);
        return defaultStats;
      }
    },
  });

  const downloadCSV = () => {
    const csvData = [
      ["Месяц", "Значение"],
      ...stats.chartData.map((item) => [item.name, item.value]),
    ];

    const csvContent = csvData.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "sales_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onOrderClick={() => setOrderModalOpen(true)} />
      <StatsBar
        conversionGrowth={stats.kpi.conversionGrowth}
        revenueGrowth={stats.kpi.revenueGrowth}
        clients={stats.clients}
      />
      <BenefitsSection benefits={stats.benefits} />
      <ChartSection chartData={stats.chartData} onDownloadCSV={downloadCSV} />
      <ClientCounter
        clientCount={stats.clients}
        testimonials={stats.testimonials}
      />
      <CTASection onOrderClick={() => setOrderModalOpen(true)} />
      <Footer />
      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    </div>
  );
}
