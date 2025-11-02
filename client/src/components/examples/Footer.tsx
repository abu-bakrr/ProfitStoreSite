import Footer from "../Footer";

export default function FooterExample() {
  const contact = {
    email: "info@example.com",
    phone: "+7 (999) 123-45-67",
    address: "Москва, Россия"
  };

  const services = [
    "Разработка сайтов",
    "Дизайн интерфейсов",
    "SEO-оптимизация",
    "Поддержка"
  ];

  const resources = [
    "Блог",
    "Кейсы",
    "FAQ",
    "Документация"
  ];

  return (
    <Footer
      about="Мы создаем онлайн-магазины, которые приносят реальную прибыль вашему бизнесу."
      services={services}
      resources={resources}
      contact={contact}
    />
  );
}
