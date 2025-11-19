import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ВетЗабота</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Мои пациенты</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Забота о ваших питомцах с любовью и профессионализмом
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 10 лет опыта в ветеринарии. Каждое животное получает индивидуальный подход и внимательное отношение.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg" asChild>
                <a href="#contact">Записаться на приём</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#services">Узнать больше</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/145c71a0-c80a-4341-a77a-847c13bbca37/files/5041c103-61b9-4ebe-b26c-6dd0224eced8.jpg"
              alt="Ветеринар с собакой"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/145c71a0-c80a-4341-a77a-847c13bbca37/files/810b2af2-f23b-4ff8-a090-74ecab0f7c34.jpg"
              alt="Портрет ветеринара"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">Обо мне</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Меня зовут Анна Петрова, и я занимаюсь ветеринарией уже более 10 лет. 
              Окончила Московскую государственную академию ветеринарной медицины и биотехнологии.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Моя специализация — терапия мелких домашних животных. За годы практики я помогла 
              более чем 3000 питомцам вернуться к здоровой и счастливой жизни.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">3000+</div>
                <div className="text-sm text-muted-foreground">пациентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">довольных</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Мои услуги</h3>
            <p className="text-xl text-muted-foreground">Полный спектр ветеринарной помощи для ваших любимцев</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Stethoscope", title: "Общий осмотр", desc: "Регулярные проверки здоровья и профилактика заболеваний" },
              { icon: "Syringe", title: "Вакцинация", desc: "Полный комплекс прививок для защиты вашего питомца" },
              { icon: "Activity", title: "Диагностика", desc: "УЗИ, анализы крови, рентген и другие исследования" },
              { icon: "Heart", title: "Кардиология", desc: "Диагностика и лечение заболеваний сердца" },
              { icon: "Scissors", title: "Хирургия", desc: "Операции любой сложности в современной операционной" },
              { icon: "Pill", title: "Терапия", desc: "Лечение острых и хронических заболеваний" },
            ].map((service, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Мои счастливые пациенты</h3>
            <p className="text-xl text-muted-foreground">Истории успеха и выздоровления</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/145c71a0-c80a-4341-a77a-847c13bbca37/files/57022cd0-3fc5-428f-8483-041788d82c8f.jpg"
              alt="Счастливые питомцы"
              className="w-full object-cover aspect-[21/9]"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { name: "Рыжик", type: "Кот", story: "Успешно вылечен от хронического заболевания почек" },
              { name: "Барон", type: "Собака", story: "Полное восстановление после сложной операции" },
              { name: "Снежок", type: "Кролик", story: "Вернулся к активной жизни после травмы" },
            ].map((patient, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Heart" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg">{patient.name}</h5>
                      <p className="text-sm text-muted-foreground">{patient.type}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{patient.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Запишитесь на приём</h3>
            <p className="text-xl text-muted-foreground">Свяжитесь со мной удобным способом</p>
          </div>
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" type="tel" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="email@example.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем питомце и причине обращения" rows={4} />
                </div>
                <Button className="w-full" size="lg">Отправить заявку</Button>
              </div>
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@vetzabota.ru</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, ул. Ветеринарная, д. 10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ВетЗабота. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
