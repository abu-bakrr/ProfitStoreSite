import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">О компании</h3>
            <p className="text-sm text-muted-foreground">
              Мы создаем онлайн-магазины, которые приносят реальную прибыль
              вашему бизнесу.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Разработка сайтов</li>
              <li>Дизайн интерфейсов</li>
              <li>SEO-оптимизация</li>
              <li>Поддержка и развитие</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Блог</li>
              <li>Кейсы</li>
              <li>FAQ</li>
              <li>Документация</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@example.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Москва, Россия
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
