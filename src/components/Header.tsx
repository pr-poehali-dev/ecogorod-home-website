import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold font-heading">БЭСТ</h1>
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
  );
}