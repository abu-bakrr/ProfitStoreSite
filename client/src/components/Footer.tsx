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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Kompaniya haqida</h3>
            <p className="text-sm text-muted-foreground">
              {about || "Biz biznesingizga haqiqiy foyda keltiradigan onlayn do'konlar yaratamiz."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Xizmatlar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(services || ["Sayt ishlab chiqish", "Interfeys dizayni", "SEO optimizatsiya", "Qo'llab-quvvatlash"]).map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resurslar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(resources || ["Blog", "Keyslar", "FAQ", "Hujjatlar"]).map((resource, idx) => (
                <li key={idx}>{resource}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontaktlar</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {contact?.email || "info@example.uz"}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {contact?.phone || "+998 90 123 45 67"}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {contact?.address || "Toshkent, O'zbekiston"}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </footer>
  );
}
