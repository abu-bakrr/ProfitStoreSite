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
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Kompaniya haqida</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {about || "Biz biznesingizga haqiqiy foyda keltiradigan onlayn do'konlar yaratamiz."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Xizmatlar</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              {(services || ["Sayt ishlab chiqish", "Interfeys dizayni", "SEO optimizatsiya", "Qo'llab-quvvatlash"]).map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Resurslar</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              {(resources || ["Blog", "Keyslar", "FAQ", "Hujjatlar"]).map((resource, idx) => (
                <li key={idx}>{resource}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Kontaktlar</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                <span className="break-all">{contact?.email || "info@example.uz"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                <span>{contact?.phone || "+998 90 123 45 67"}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                <span>{contact?.address || "Toshkent, O'zbekiston"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p>© {currentYear} Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </footer>
  );
}
