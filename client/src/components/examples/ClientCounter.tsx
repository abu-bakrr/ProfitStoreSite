import ClientCounter from "../ClientCounter";

export default function ClientCounterExample() {
  const testimonials = [
    {
      quote: "За первый месяц работы сайта наши продажи выросли на 45%",
      company: "TechHub",
      industry: "Электроника",
    },
    {
      quote: "Клиенты говорят, что наш сайт удобнее, чем у конкурентов",
      company: "StyleMe",
      industry: "Мода",
    },
  ];

  return <ClientCounter clientCount={123} testimonials={testimonials} />;
}
