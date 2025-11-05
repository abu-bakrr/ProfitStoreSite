import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo.svg";

interface HeaderProps {
  onOrderClick?: () => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Oen Profit" 
              className="h-10 md:h-14 w-auto"
              data-testid="img-logo"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("benefits")}
              data-testid="button-nav-benefits"
            >
              Преимущества
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("clients")}
              data-testid="button-nav-clients"
            >
              Клиенты
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("footer")}
              data-testid="button-nav-contacts"
            >
              Контакты
            </Button>
            <Button
              onClick={onOrderClick}
              data-testid="button-order-header"
            >
              Заказать сайт
            </Button>
          </nav>

          <div className="flex md:hidden">
            <Button
              size="sm"
              onClick={onOrderClick}
              data-testid="button-order-header-mobile"
            >
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
