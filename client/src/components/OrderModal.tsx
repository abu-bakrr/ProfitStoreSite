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
  const [telegram, setTelegram] = useState("");
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, telegram, comment }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      setName("");
      setPhone("");
      setTelegram("");
      setComment("");
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)]" data-testid="modal-order">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">Заказать сайт</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 mt-2 md:mt-4">
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="name" className="text-sm">Ваше имя</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              required
              data-testid="input-name"
              className="text-sm md:text-base"
            />
          </div>
          
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="phone" className="text-sm">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (999) 123-45-67"
              required
              data-testid="input-phone"
              className="text-sm md:text-base"
            />
          </div>

          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="telegram" className="text-sm">Telegram (необязательно)</Label>
            <Input
              id="telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder="@username"
              data-testid="input-telegram"
              className="text-sm md:text-base"
            />
          </div>
          
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="comment" className="text-sm">Комментарий</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Расскажите о вашем проекте..."
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
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
