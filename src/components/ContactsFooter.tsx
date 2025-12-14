import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactsFooter() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <>
      <section id="feedback" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Обратная связь</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и мы свяжемся с вами в течение часа</p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input id="name" required placeholder="Иван Иванов" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input id="phone" type="tel" required placeholder="+7 (900) 123-45-67" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="ivan@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={5} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="p-6 hover-scale">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={40} className="text-primary" />
                  <div>
                    <h3 className="font-bold font-heading mb-1">Телефон</h3>
                    <a href="tel:+79265500974" className="text-xl text-primary story-link">+7 (926) 550-09-74</a>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-scale">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={40} className="text-primary" />
                  <div>
                    <h3 className="font-bold font-heading mb-1">Email</h3>
                    <a href="mailto:info@ecogorod-tula.ru" className="text-primary story-link">info@ecogorod-tula.ru</a>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-scale">
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={40} className="text-primary" />
                  <div>
                    <h3 className="font-bold font-heading mb-1">Офис</h3>
                    <p className="text-sm">300013, Тульская область</p>
                    <p className="text-sm">г. Тула, ул. Ш. Руставели, д. 1/13</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-0 overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.618423%2C54.193122&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE3NzMxMhJP0KDQvtGB0YHQuNGPLCDQotGD0LvQsCwg0YPQu9C40YbQsCDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LgsIDEvMTMiCg1e2jVCFUJtXkI%2C&z=17"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ minHeight: '400px' }}
                title="Яндекс Карта"
              />
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={32} className="text-primary" />
                <div>
                  <h3 className="text-xl font-bold font-heading">ЭКОГОРОД</h3>
                  <p className="text-xs text-muted-foreground">Строим дома под ключ</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Индивидуальное жилищное строительство в Туле и области. Полный цикл работ от проекта до сдачи.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold font-heading mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#projects" className="story-link text-muted-foreground hover:text-foreground">Проекты домов</a></li>
                <li><a href="#services" className="story-link text-muted-foreground hover:text-foreground">Капремонт</a></li>
                <li><a href="#lumber" className="story-link text-muted-foreground hover:text-foreground">Пиломатериалы</a></li>
                <li><a href="#mortgage" className="story-link text-muted-foreground hover:text-foreground">Ипотека</a></li>
                <li><a href="#contacts" className="story-link text-muted-foreground hover:text-foreground">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold font-heading mb-4">Реквизиты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>ООО "ЭКОГОРОД"</li>
                <li>ИНН: 7104078910</li>
                <li>300013, Тульская область</li>
                <li>г. Тула, ул. Ш. Руставели, д. 1/13</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 ООО "ЭКОГОРОД". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}