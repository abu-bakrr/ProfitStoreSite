import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  company: string;
  industry: string;
}

interface ClientCounterProps {
  clientCount: number;
  testimonials: Testimonial[];
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const steps = 80;
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

export default function ClientCounter({
  clientCount,
  testimonials,
}: ClientCounterProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="clients" className="py-12 md:py-16 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-3 md:mb-4"
            data-testid="text-client-count"
          >
            <AnimatedCounter value={clientCount} />+
          </div>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 px-4">
            Компаний уже получили свой сайт
          </p>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">
            И каждый день к нам обращаются новые клиенты
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                data-testid="button-prev-testimonial"
                className="h-7 w-7 md:h-8 md:w-8"
              >
                <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                data-testid="button-next-testimonial"
                className="h-7 w-7 md:h-8 md:w-8"
              >
                <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>

            <div className="min-h-[180px] md:min-h-[200px] flex flex-col justify-center pr-16 md:pr-0">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-4 md:mb-6 leading-relaxed">
                  "{testimonials[activeIndex]?.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div>
                    <div
                      className="font-semibold text-sm md:text-base"
                      data-testid={`text-testimonial-company-${activeIndex}`}
                    >
                      {testimonials[activeIndex]?.company}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {testimonials[activeIndex]?.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-4 md:mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 md:h-2 rounded-full transition-all ${
                    idx === activeIndex ? "w-6 md:w-8 bg-primary" : "w-1.5 md:w-2 bg-border"
                  }`}
                  data-testid={`button-testimonial-dot-${idx}`}
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
