import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface StatsBarProps {
  conversionGrowth: number;
  revenueGrowth: number;
  clients: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function StatsBar({
  conversionGrowth,
  revenueGrowth,
  clients,
}: StatsBarProps) {
  const stats = [
    {
      label: "Рост конверсий",
      value: conversionGrowth,
      suffix: "%",
      testId: "stat-conversion",
    },
    {
      label: "Увеличение прибыли",
      value: revenueGrowth,
      suffix: "%",
      testId: "stat-revenue",
    },
    {
      label: "Довольных клиентов",
      value: clients,
      suffix: "",
      testId: "stat-clients",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-center justify-center gap-2"
                data-testid={stat.testId}
              >
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
                {stat.suffix === "%" && (
                  <TrendingUp className="h-8 w-8 text-primary" />
                )}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
