import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderModal({ open, onOpenChange }: OrderModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted:", { name, phone, comment });
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setName("");
    setPhone("");
    setComment("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)]" data-testid="modal-order">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">Sayt buyurtma qilish</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 mt-2 md:mt-4">
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="name" className="text-sm">Ismingiz</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alijon Valiyev"
              required
              data-testid="input-name"
              className="text-sm md:text-base"
            />
          </div>
          
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="phone" className="text-sm">Telefon</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 123 45 67"
              required
              data-testid="input-phone"
              className="text-sm md:text-base"
            />
          </div>
          
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="comment" className="text-sm">Izoh</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Loyihangiz haqida..."
              rows={3}
              data-testid="textarea-comment"
              className="text-sm md:text-base resize-none"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full text-sm md:text-base"
            size="lg"
            data-testid="button-submit-order"
          >
            Arizani yuborish
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
