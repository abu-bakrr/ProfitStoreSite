import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  about?: string;
  services?: string[];
  resources?: string[];
  contact?: {
    email: string;
    phone: string;
    address: string;
  };
}

export default function Footer({ about, services, resources, contact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">О компании</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {about || "Мы создаем онлайн-магазины, которые приносят реальную прибыль вашему бизнесу."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Услуги</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              {(services || ["Разработка сайтов", "Дизайн интерфейсов", "SEO-оптимизация", "Поддержка"]).map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Ресурсы</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              {(resources || ["Блог", "Кейсы", "FAQ", "Документация"]).map((resource, idx) => (
                <li key={idx}>{resource}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Контакты</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                <span className="break-all">{contact?.email || "info@example.com"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                <span>{contact?.phone || "+7 (999) 123-45-67"}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                <span>{contact?.address || "Москва, Россия"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p>© {currentYear} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
