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
    <section className="py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 px-4">
            Готовы освободить своё время?
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            Пусть сайт работает за вас — принимает заказы, отвечает на вопросы и продаёт без вашего участия
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-xs md:text-sm lg:text-base"
              >
                <div className="p-1 rounded-full bg-primary/10 shrink-0">
                  <Check className="h-3 w-3 md:h-4 md:w-4 text-primary" />
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
            className="px-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 md:px-12 text-sm md:text-base lg:text-lg h-12 md:h-14 w-full sm:w-auto"
              onClick={onOrderClick}
              data-testid="button-order-cta"
            >
              Заказать разработку сайта
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
