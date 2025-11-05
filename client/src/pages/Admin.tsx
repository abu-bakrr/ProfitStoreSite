import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";
import { queryClient, apiRequest } from "@/lib/queryClient";
import Header from "@/components/Header";
import type { Testimonial, StatsData } from "@shared/schema";

export default function Admin() {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const { data: stats, isLoading } = useQuery<StatsData>({
    queryKey: ["/api/stats"],
  });

  useEffect(() => {
    if (stats) {
      setTestimonials(stats.testimonials);
    }
  }, [stats]);

  const updateStatsMutation = useMutation({
    mutationFn: async (newTestimonials: Testimonial[]) => {
      if (!stats) return;
      const updatedStats = { ...stats, testimonials: newTestimonials };
      return apiRequest("PUT", "/api/stats", updatedStats);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/stats"] });
      queryClient.invalidateQueries({ queryKey: ["/data/stats.json"] });
      toast({
        title: "Успешно сохранено",
        description: "Отзывы обновлены",
      });
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить отзывы",
        variant: "destructive",
      });
    },
  });

  const addTestimonial = () => {
    setTestimonials([
      ...testimonials,
      { quote: "", company: "", industry: "" },
    ]);
  };

  const removeTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const updateTestimonial = (
    index: number,
    field: keyof Testimonial,
    value: string
  ) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setTestimonials(updated);
  };

  const handleSave = () => {
    const validTestimonials = testimonials.filter(
      (t) => t.quote.trim() && t.company.trim() && t.industry.trim()
    );
    
    if (validTestimonials.length === 0) {
      toast({
        title: "Ошибка",
        description: "Добавьте хотя бы один отзыв с заполненными полями",
        variant: "destructive",
      });
      return;
    }
    
    updateStatsMutation.mutate(validTestimonials);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Управление отзывами
            </h1>
            <p className="text-muted-foreground">
              Добавляйте и редактируйте отзывы на главной странице
            </p>
          </div>
          <Button
            onClick={handleSave}
            disabled={updateStatsMutation.isPending}
            data-testid="button-save"
          >
            <Save className="mr-2 h-4 w-4" />
            Сохранить
          </Button>
        </div>

        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold">Отзыв {index + 1}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTestimonial(index)}
                  data-testid={`button-delete-${index}`}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Текст отзыва
                  </label>
                  <Textarea
                    value={testimonial.quote}
                    onChange={(e) =>
                      updateTestimonial(index, "quote", e.target.value)
                    }
                    placeholder="Введите текст отзыва..."
                    rows={3}
                    data-testid={`input-quote-${index}`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Компания
                    </label>
                    <Input
                      value={testimonial.company}
                      onChange={(e) =>
                        updateTestimonial(index, "company", e.target.value)
                      }
                      placeholder="Название компании"
                      data-testid={`input-company-${index}`}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Отрасль
                    </label>
                    <Input
                      value={testimonial.industry}
                      onChange={(e) =>
                        updateTestimonial(index, "industry", e.target.value)
                      }
                      placeholder="Отрасль бизнеса"
                      data-testid={`input-industry-${index}`}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Button
            variant="outline"
            className="w-full"
            onClick={addTestimonial}
            data-testid="button-add-testimonial"
          >
            <Plus className="mr-2 h-4 w-4" />
            Добавить отзыв
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
