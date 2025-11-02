import ChartSection from "../ChartSection";

export default function ChartSectionExample() {
  const chartData = [
    { name: "Янв", value: 20 },
    { name: "Фев", value: 35 },
    { name: "Мар", value: 50 },
    { name: "Апр", value: 45 },
    { name: "Май", value: 65 },
    { name: "Июн", value: 75 },
  ];

  return (
    <ChartSection
      chartData={chartData}
      onDownloadCSV={() => console.log("Download CSV")}
    />
  );
}
