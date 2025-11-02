import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
} from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  percentage: number;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const iconMap = [Clock, Globe, Zap, Shield, BarChart3, Smartphone];

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Почему бизнесу нужен сайт
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Онлайн-магазин — это не просто витрина, а мощный инструмент для
            роста вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 md:p-8 h-full hover-elevate transition-all duration-300"
                  data-testid={`card-benefit-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {benefit.description}
                      </p>
                      <div className="text-2xl font-bold text-primary">
                        {benefit.percentage}%
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
