import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

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

export default function HeroSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

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

  return (
    <>
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
    </>
  );
}
