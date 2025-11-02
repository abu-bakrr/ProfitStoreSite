import BenefitsSection from "../BenefitsSection";

export default function BenefitsSectionExample() {
  const benefits = [
    {
      title: "24/7 Доступность",
      description: "Ваш магазин работает круглосуточно",
      percentage: 24,
    },
    {
      title: "Глобальный охват",
      description: "Продавайте по всей стране и за рубежом",
      percentage: 89,
    },
    {
      title: "Автоматизация",
      description: "Сократите время на обработку заказов",
      percentage: 70,
    },
  ];

  return <BenefitsSection benefits={benefits} />;
}
