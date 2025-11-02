import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface CTASectionProps {
  onOrderClick: () => void;
}

export default function CTASection({ onOrderClick }: CTASectionProps) {
  const features = [
    "Первая консультация — бесплатно",
    "Запуск от 2 недель",
    "Поддержка 24/7",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Готовы увеличить прибыль?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Присоединяйтесь к сотням компаний, которые уже растут вместе с нами
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <div className="p-1 rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="rounded-full px-12 text-lg h-14"
              onClick={onOrderClick}
              data-testid="button-order-cta"
            >
              Заказать разработку сайта
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
