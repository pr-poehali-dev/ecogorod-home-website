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
  { icon: 'Shield', title: 'СНиП / ГОСТ', description: 'Соблюдение всех строительных норм' },
  { icon: 'Clock', title: 'Точные сроки', description: 'Строим в срок по договору' },
  { icon: 'Award', title: 'Опыт 15+ лет', description: 'Построено более 200 домов' },
  { icon: 'Factory', title: 'Своя лесопилка', description: 'Низкие цены при высоком качестве' }
];

const lumberProducts = [
  { name: 'Доска обрезная', price: 'от 7 000 ₽/м³', icon: 'Box' },
  { name: 'Вагонка', price: 'от 12 000 ₽/м³', icon: 'Layers' },
  { name: 'Брус', price: 'от 8 500 ₽/м³', icon: 'PackageOpen' },
  { name: 'Горбыль', price: 'от 500 ₽/м³', icon: 'Trash2' },
  { name: 'Дрова для печек', price: 'от 1 500 ₽/м³', icon: 'Flame' },
];

const repairServices = [
  { icon: 'Building2', name: 'Вентилируемый фасад', description: 'Монтаж современных фасадных систем' },
  { icon: 'Droplet', name: 'Системы отопления', description: 'Замена и модернизация отопления' },
  { icon: 'Waves', name: 'Водоснабжение', description: 'Прокладка водопровода и канализации' },
  { icon: 'Home', name: 'Замена кровли', description: 'Ремонт и монтаж любых типов кровли' },
  { icon: 'DoorOpen', name: 'Ремонт подъездов', description: 'Комплексный ремонт МКД' },
  { icon: 'Wrench', name: 'Технические этажи', description: 'Ремонт и обслуживание техэтажей' },
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
              <a href="#services" className="story-link hover:text-primary transition-colors">Услуги</a>
              <a href="#lumber" className="story-link hover:text-primary transition-colors">Пиломатериалы</a>
              <a href="#mortgage" className="story-link hover:text-primary transition-colors">Ипотека</a>
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
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="tel:+79109420777">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (910) 942-07-77
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Собственная лесопилка — низкие цены при профессиональном качестве</span>
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

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Капитальный ремонт зданий</h2>
            <p className="text-xl text-muted-foreground">Профессиональные строительные услуги для МКД и промышленных объектов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <Icon name={service.icon as any} size={40} className="text-primary mb-4" />
                  <CardTitle className="font-heading">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="BadgeCheck" size={24} className="text-primary" />
                <p className="text-lg font-semibold">Работаем по СНиП, ГОСТ и СанПиН</p>
              </div>
              <p className="text-muted-foreground">Соблюдаем все строительные нормы и правила. Полный пакет документов.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="lumber" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Пиломатериалы с собственной лесопилки</h2>
            <p className="text-xl text-muted-foreground">Высокое качество по доступным ценам. Доставка манипулятором.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {lumberProducts.map((product, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardHeader>
                  <Icon name={product.icon as any} size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle className="font-heading">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary mt-2">{product.price}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <img 
                src="https://cdn.poehali.dev/files/3dd60797-4455-4aac-ab2e-ed46f2541f7c.png"
                alt="Проект дома"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold font-heading mb-2">Качественные материалы</h3>
              <p className="text-muted-foreground">Вся продукция производится на собственной лесопилке с соблюдением технологии сушки и обработки.</p>
            </Card>
            
            <Card className="p-6">
              <div className="h-64 flex flex-col justify-center">
                <Icon name="Truck" size={64} className="mx-auto text-primary mb-6" />
                <h3 className="text-xl font-bold font-heading mb-2 text-center">Доставка манипулятором</h3>
                <p className="text-muted-foreground text-center">Быстрая и удобная доставка пиломатериалов собственным транспортом в любую точку региона.</p>
                <Button className="mt-6" size="lg" asChild>
                  <a href="tel:+79109420777">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Заказать доставку
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="mortgage" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Home" size={64} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold font-heading mb-4">Ипотека на строительство дома</h2>
          <p className="text-xl mb-8 opacity-90">
            Помогаем оформить ипотеку на индивидуальное жилищное строительство. Работаем с ведущими банками России.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl font-bold mb-2">от 8%</p>
              <p className="opacity-90">Процентная ставка</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl font-bold mb-2">до 30 лет</p>
              <p className="opacity-90">Срок кредита</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl font-bold mb-2">от 15%</p>
              <p className="opacity-90">Первоначальный взнос</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать ипотеку
          </Button>
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
                  <div className="flex gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <a href="tel:+79109420777" className="text-primary story-link">+7 (910) 942-07-77</a>
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
                    <span>Собственная лесопилка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Соблюдение СНиП, ГОСТ, СанПиН</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Низкие цены при высоком качестве</span>
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
                    <a href="tel:+79109420777" className="text-xl text-primary story-link">+7 (910) 942-07-77</a>
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
    </div>
  );
}