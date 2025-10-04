import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [fullName, setFullName] = useState("");
  const [whyJoined, setWhyJoined] = useState("");
  const [expectations, setExpectations] = useState("");

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 sm:p-12 shadow-lg border-border">
          <div className="mb-8">
            <Input
              type="text"
              placeholder="Укажите здесь свою фамилию и своё имя"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-3xl sm:text-4xl font-bold text-center border-none focus-visible:ring-0 p-0 h-auto font-serif placeholder:text-muted-foreground/40"
            />
          </div>

          <Separator className="my-8 bg-primary/20" />

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="HelpCircle" className="text-primary" size={24} />
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Почему я решил прийти на данный курс?
                </h2>
              </div>
              <Textarea
                placeholder="Напишите ваш ответ здесь..."
                value={whyJoined}
                onChange={(e) => setWhyJoined(e.target.value)}
                className="min-h-[120px] resize-none border-input focus-visible:ring-primary text-base leading-relaxed"
              />
            </div>

            <Separator className="my-8 bg-primary/20" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Какие мои ожидания от данного курса?
                </h2>
              </div>
              <Textarea
                placeholder="Напишите ваш ответ здесь..."
                value={expectations}
                onChange={(e) => setExpectations(e.target.value)}
                className="min-h-[120px] resize-none border-input focus-visible:ring-primary text-base leading-relaxed"
              />
            </div>

            <Separator className="my-8 bg-primary/20" />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="GraduationCap" size={20} />
              <span>Личная страница курса</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
