import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const projects = [
  {
    id: 1,
    title: 'Каркасный дом',
    description: 'Современный каркасный дом с панорамным остеклением и террасой',
    size: '10,58 × 16 м',
    height: 'Высота этажа: 2700 мм, конька: 5395 мм',
    price: 'от 2 500 000',
    features: ['Энергоэффективность', 'Быстрое строительство', 'Экологичность', 'Современный дизайн'],
    images: [
      'https://cdn.poehali.dev/files/edb3aef5-c539-4193-bb47-c5ecc7a7d95b.png',
      'https://cdn.poehali.dev/files/8203a9f8-ad06-4459-bb14-54aa12d6cb44.png',
      'https://cdn.poehali.dev/files/9a783f63-2109-483b-be88-a46bba64b878.png'
    ]
  },
  {
    id: 2,
    title: 'Дом из газобетона',
    description: 'Комфортабельный одноэтажный дом из газобетона с террасой',
    size: 'Площадь: 120 м²',
    height: 'Одноэтажный',
    price: 'от 3 200 000',
    features: ['Теплоизоляция', 'Долговечность', 'Звукоизоляция', 'Надежность'],
    images: [
      'https://cdn.poehali.dev/files/a4f78eab-8d23-439e-ae8f-d5787aaed81f.png',
      'https://cdn.poehali.dev/files/54760c02-6aad-4d70-a3f9-f5dde5a2fe35.png'
    ]
  }
];

const advantages = [
  { icon: 'Shield', title: 'Гарантия качества', description: 'Полная гарантия на все виды работ' },
  { icon: 'Clock', title: 'Точные сроки', description: 'Строим в срок по договору' },
  { icon: 'Award', title: 'Опыт 15+ лет', description: 'Построено более 200 домов' },
  { icon: 'FileCheck', title: 'Под ключ', description: 'Полный цикл строительства' }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const { toast } = useToast();

  const [calcParams, setCalcParams] = useState({
    projectType: 'frame',
    area: [100],
    floors: '1',
    foundation: 'pile'
  });

  const calculatePrice = () => {
    const basePrice = calcParams.projectType === 'frame' ? 25000 : 32000;
    const areaPrice = calcParams.area[0] * basePrice;
    const floorMultiplier = calcParams.floors === '2' ? 1.3 : 1;
    const foundationPrice = {
      pile: 300000,
      strip: 500000,
      slab: 700000
    }[calcParams.foundation];
    
    return Math.round((areaPrice * floorMultiplier + foundationPrice) / 1000) * 1000;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold font-heading">ЭКОГОРОД</h1>
                <p className="text-xs text-muted-foreground">Строим дома под ключ</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#projects" className="story-link hover:text-primary transition-colors">Проекты</a>
              <a href="#calculator" className="story-link hover:text-primary transition-colors">Калькулятор</a>
              <a href="#about" className="story-link hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="story-link hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Строим дома <span className="text-primary">под ключ</span> в Туле
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Индивидуальное жилищное строительство с гарантией качества. Полный цикл работ от проекта до сдачи.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Building2" size={20} className="mr-2" />
                  Смотреть проекты
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={projects[0].images[0]} 
                alt="Каркасный дом" 
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm">построенных домов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Icon name={advantage.icon as any} size={40} className="text-primary mb-4" />
                  <CardTitle className="font-heading">{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Хиты строительной компании ЭКОГОРОД</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className={`cursor-pointer hover-scale transition-all ${selectedProject.id === project.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">{project.size}</p>
                      <p className="text-sm text-muted-foreground">{project.height}</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">{project.price} ₽</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <h3 className="text-2xl font-bold font-heading mb-6">{selectedProject.title} - Галерея</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {selectedProject.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${selectedProject.title} ${index + 1}`} 
                  className="w-full h-64 object-cover rounded-lg hover-scale cursor-pointer"
                />
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">Рассчитайте примерную стоимость строительства</p>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <Label className="text-lg mb-3 block">Тип проекта</Label>
                <Select value={calcParams.projectType} onValueChange={(value) => setCalcParams({...calcParams, projectType: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frame">Каркасный дом</SelectItem>
                    <SelectItem value="aerated">Дом из газобетона</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Площадь дома: {calcParams.area[0]} м²</Label>
                <Slider 
                  value={calcParams.area} 
                  onValueChange={(value) => setCalcParams({...calcParams, area: value})}
                  min={50}
                  max={300}
                  step={10}
                  className="py-4"
                />
              </div>

              <div>
                <Label className="text-lg mb-3 block">Количество этажей</Label>
                <Select value={calcParams.floors} onValueChange={(value) => setCalcParams({...calcParams, floors: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 этаж</SelectItem>
                    <SelectItem value="2">2 этажа</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Тип фундамента</Label>
                <Select value={calcParams.foundation} onValueChange={(value) => setCalcParams({...calcParams, foundation: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pile">Свайный</SelectItem>
                    <SelectItem value="strip">Ленточный</SelectItem>
                    <SelectItem value="slab">Плитный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">Примерная стоимость:</span>
                  <span className="text-4xl font-bold text-primary">{calculatePrice().toLocaleString('ru-RU')} ₽</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  * Точная стоимость рассчитывается индивидуально после выезда специалиста на участок
                </p>
                <Button className="w-full" size="lg" onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить точный расчет
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground">ЭКОГОРОД - надежный партнер в строительстве вашего дома</p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">ООО "ЭКОГОРОД"</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Icon name="Building" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">ИНН</p>
                      <p className="text-muted-foreground">7104078910</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">300013, Тульская область, г. Тула, ул. Ш. Руставели, д. 1/13</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">Наши преимущества</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Опыт работы более 15 лет</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Более 200 построенных домов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Собственное производство</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Гарантия на все виды работ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Фиксированная цена в договоре</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-scale">
              <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold font-heading mb-2">Телефон</h3>
              <a href="tel:+78007007070" className="text-primary story-link">+7 (800) 700-70-70</a>
              <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
            </Card>
            
            <Card className="p-6 text-center hover-scale">
              <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold font-heading mb-2">Email</h3>
              <a href="mailto:info@ecogorod-tula.ru" className="text-primary story-link">info@ecogorod-tula.ru</a>
              <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
            </Card>
            
            <Card className="p-6 text-center hover-scale">
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold font-heading mb-2">Офис</h3>
              <p className="text-sm">г. Тула</p>
              <p className="text-sm">ул. Ш. Руставели, 1/13</p>
              <p className="text-sm text-muted-foreground mt-2">300013</p>
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
                <li><a href="#projects" className="story-link text-muted-foreground hover:text-foreground">Проекты</a></li>
                <li><a href="#calculator" className="story-link text-muted-foreground hover:text-foreground">Калькулятор</a></li>
                <li><a href="#about" className="story-link text-muted-foreground hover:text-foreground">О компании</a></li>
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
    </div>
  );
}