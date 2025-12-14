import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const repairServices = [
  { icon: 'Building2', name: 'Вентилируемый фасад', description: 'Монтаж современных фасадных систем' },
  { icon: 'Droplet', name: 'Системы отопления', description: 'Замена и модернизация отопления' },
  { icon: 'Waves', name: 'Водоснабжение', description: 'Прокладка водопровода и канализации' },
  { icon: 'Home', name: 'Замена кровли', description: 'Ремонт и монтаж любых типов кровли' },
  { icon: 'DoorOpen', name: 'Ремонт подъездов', description: 'Комплексный ремонт МКД' },
  { icon: 'Wrench', name: 'Технические этажи', description: 'Ремонт и обслуживание техэтажей' },
];

const lumberProducts = [
  { name: 'Доска обрезная', price: 'от 7 000 ₽/м³', icon: 'Box' },
  { name: 'Вагонка', price: 'от 12 000 ₽/м³', icon: 'Layers' },
  { name: 'Брус', price: 'от 8 500 ₽/м³', icon: 'PackageOpen' },
  { name: 'Горбыль', price: 'от 500 ₽/м³', icon: 'Trash2' },
  { name: 'Дрова для печек', price: 'от 2 500 ₽/м³', icon: 'Flame' },
  { name: 'Опилки', price: 'от 300 ₽/м³', icon: 'Sparkles' },
];

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Капитальный ремонт зданий <span className="font-extrabold">Работаем с НДС 20%</span></h2>
            <p className="text-xl text-muted-foreground">Профессиональные строительные услуги для МКД и промышленных объектов</p>
            <p className="text-lg text-muted-foreground mt-2">Собственный материал или давальческая схема из материала заказчика</p>
            <p className="text-lg font-semibold text-primary mt-3">Выполненные проекты: Зеленоград, Подольск, Климовск</p>
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

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="BadgeCheck" size={24} className="text-primary" />
                <p className="text-lg font-semibold">Работаем по СНиП, ГОСТ и СанПиН</p>
              </div>
              <p className="text-muted-foreground">Соблюдаем все строительные нормы и правила. Полный пакет документов.</p>
            </Card>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Package" size={24} className="text-primary" />
                <p className="text-lg font-semibold">Гибкая схема работы</p>
              </div>
              <p className="text-muted-foreground">Работаем с собственным материалом или по давальческой схеме из материала заказчика.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="lumber" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Пиломатериалы с собственной лесопилки</h2>
            <p className="text-xl text-muted-foreground">Высокое качество по доступным ценам. Доставка собственным манипулятором или собственным транспортом.</p>
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
                <h3 className="text-xl font-bold font-heading mb-2 text-center">Доставка собственным транспортом</h3>
                <p className="text-muted-foreground text-center">Быстрая и удобная доставка пиломатериалов собственным манипулятором или транспортом в любую точку региона.</p>
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1" size="lg" asChild>
                    <a href="tel:+79265500974">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                  <Button className="flex-1" variant="outline" size="lg" onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Заказать
                  </Button>
                </div>
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
    </>
  );
}