import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logo from "@assets/logo.svg";

interface HeaderProps {
  onOrderClick?: () => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const [location] = useLocation();
  const isAdminPage = location === "/admin";

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
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={logo} 
                alt="Oen Profit" 
                className="h-10 md:h-14 w-auto"
                data-testid="img-logo"
              />
            </div>
          </Link>
          
          {!isAdminPage ? (
            <>
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
                <Link href="/admin">
                  <Button
                    variant="ghost"
                    data-testid="button-nav-admin"
                  >
                    Админка
                  </Button>
                </Link>
                <Button
                  onClick={onOrderClick}
                  data-testid="button-order-header"
                >
                  Заказать сайт
                </Button>
              </nav>

              <div className="flex md:hidden gap-2">
                <Link href="/admin">
                  <Button
                    variant="ghost"
                    size="sm"
                    data-testid="button-nav-admin-mobile"
                  >
                    Админка
                  </Button>
                </Link>
                <Button
                  size="sm"
                  onClick={onOrderClick}
                  data-testid="button-order-header-mobile"
                >
                  Заказать
                </Button>
              </div>
            </>
          ) : (
            <Link href="/">
              <Button variant="ghost" data-testid="button-back-home">
                На главную
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
}
