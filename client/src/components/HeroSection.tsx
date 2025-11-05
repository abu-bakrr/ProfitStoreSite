import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/E-commerce_dashboard_hero_illustration_f3c86e21.png";

interface HeroSectionProps {
  onOrderClick: () => void;
  demoUrl?: string;
}

export default function HeroSection({ onOrderClick, demoUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
            >
              Сайт магазина,{" "}
              <span className="text-primary">который приносит прибыль</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              Профессиональная разработка онлайн-магазинов для вашего бизнеса.
              Увеличьте продажи, автоматизируйте процессы и выходите на новый уровень.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-6 md:px-8 text-sm md:text-base w-full sm:w-auto"
                onClick={onOrderClick}
                data-testid="button-order-hero"
              >
                Заказать сайт
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 md:px-8 text-sm md:text-base w-full sm:w-auto"
                data-testid="button-demo"
                asChild
              >
                <a href={demoUrl || "#"} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Смотреть демо
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Современная панель управления интернет-магазином"
                className="w-full h-auto rounded-xl md:rounded-2xl"
                data-testid="img-hero"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl md:rounded-2xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
