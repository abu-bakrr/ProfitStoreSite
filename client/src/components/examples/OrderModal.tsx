import { useState } from "react";
import OrderModal from "../OrderModal";
import { Button } from "@/components/ui/button";

export default function OrderModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <OrderModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
