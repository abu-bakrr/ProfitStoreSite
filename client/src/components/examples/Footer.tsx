import Footer from "../Footer";

export default function FooterExample() {
  const contact = {
    email: "info@example.uz",
    phone: "+998 90 123 45 67",
    address: "Toshkent, O'zbekiston"
  };

  const services = [
    "Sayt ishlab chiqish",
    "Interfeys dizayni",
    "SEO optimizatsiya",
    "Qo'llab-quvvatlash"
  ];

  const resources = [
    "Blog",
    "Keyslar",
    "FAQ",
    "Hujjatlar"
  ];

  return (
    <Footer
      about="Biz biznesingizga haqiqiy foyda keltiradigan onlayn do'konlar yaratamiz."
      services={services}
      resources={resources}
      contact={contact}
    />
  );
}
