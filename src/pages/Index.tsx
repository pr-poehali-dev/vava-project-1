import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/b9501066-c197-479c-94a8-e61e90507c6d/files/5a3bf480-b2a7-4d06-8993-662aa182b455.jpg';
const PROJECT_IMG = 'https://cdn.poehali.dev/projects/b9501066-c197-479c-94a8-e61e90507c6d/files/7facbf11-cb2a-48fd-aca6-b0e0008d248c.jpg';

const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Продукция', href: '#products' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
];

const SERVICES = [
  { icon: 'Ruler', title: 'Проектирование', text: 'Разработка чертежей и КМД с расчётом нагрузок и согласованием.' },
  { icon: 'Factory', title: 'Производство', text: 'Изготовление конструкций любой сложности на собственном заводе.' },
  { icon: 'Truck', title: 'Доставка', text: 'Логистика по всей России собственным и привлечённым транспортом.' },
  { icon: 'HardHat', title: 'Монтаж', text: 'Профессиональный монтаж бригадами с допусками СРО.' },
];

const PRODUCTS = [
  { icon: 'Building2', title: 'Каркасы зданий', text: 'Быстровозводимые ангары, склады, цеха и торговые комплексы.' },
  { icon: 'GitBranch', title: 'Фермы и балки', text: 'Стропильные фермы, прогоны и несущие балки под нагрузку.' },
  { icon: 'Layers', title: 'Лестницы и площадки', text: 'Технологические лестницы, ограждения и рабочие площадки.' },
  { icon: 'Cylinder', title: 'Ёмкости и резервуары', text: 'Металлические баки, бункеры и резервуарное оборудование.' },
];

const PROJECTS = [
  { title: 'Складской комплекс', area: '4 200 м²', city: 'Московская область' },
  { title: 'Производственный цех', area: '2 800 м²', city: 'Калужская область' },
  { title: 'Торговый павильон', area: '1 500 м²', city: 'г. Тула' },
];

const STATS = [
  { value: '15', label: 'лет на рынке' },
  { value: '480+', label: 'объектов сдано' },
  { value: '12 000', label: 'тонн в год' },
  { value: '100%', label: 'гарантия качества' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#hero" className="flex items-center gap-2 text-primary-foreground">
            <span className="flex h-9 w-9 items-center justify-center bg-accent">
              <Icon name="Hexagon" size={20} className="text-accent-foreground" />
            </span>
            <span className="font-display text-xl font-bold tracking-wide uppercase">СтальПром</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors uppercase tracking-wide">
                {n.label}
              </a>
            ))}
          </nav>

          <a href="tel:+74950000000" className="hidden md:flex items-center gap-2 text-primary-foreground font-display font-semibold">
            <Icon name="Phone" size={16} className="text-accent" />
            +7 (495) 000-00-00
          </a>

          <button className="md:hidden text-primary-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-primary border-t border-white/10 px-4 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-primary-foreground/80 hover:text-accent uppercase tracking-wide text-sm">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Производство металлоконструкций" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="container mx-auto relative px-4 py-24">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 border-l-4 border-accent pl-3 mb-6">
              <span className="text-accent font-display uppercase tracking-[0.2em] text-sm">Производство полного цикла</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] text-primary-foreground text-balance">
              Металлоконструкции <span className="text-accent">любой</span> сложности
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              Проектируем, изготавливаем и монтируем металлоконструкции для промышленного и гражданского строительства. Собственный завод и инженерное бюро.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display uppercase tracking-wide h-14 px-8 rounded-none" asChild>
                <a href="#contacts">Рассчитать проект</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-display uppercase tracking-wide h-14 px-8 rounded-none" asChild>
                <a href="#products">Каталог продукции</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground border-t border-white/10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 px-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`py-10 text-center ${i !== 0 ? 'md:border-l border-white/10' : ''}`}>
              <div className="font-display text-4xl md:text-5xl font-bold text-accent">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Что мы делаем" title="Услуги" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-12">
            {SERVICES.map((s) => (
              <div key={s.title} className="group bg-card p-8 hover:bg-primary transition-colors duration-300">
                <span className="flex h-14 w-14 items-center justify-center bg-secondary group-hover:bg-accent transition-colors">
                  <Icon name={s.icon} size={26} className="text-primary group-hover:text-accent-foreground transition-colors" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide group-hover:text-primary-foreground transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Каталог" title="Продукция" />
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="flex gap-5 bg-card p-8 border-l-4 border-accent hover-scale">
                <span className="shrink-0 flex h-12 w-12 items-center justify-center bg-primary">
                  <Icon name={p.icon} size={24} className="text-accent" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Портфолио" title="Реализованные проекты" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group relative overflow-hidden">
                <img src={PROJECT_IMG} alt={p.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-accent font-display text-sm uppercase tracking-wide">{p.city}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold uppercase text-primary-foreground">{p.title}</h3>
                  <div className="mt-2 inline-block bg-accent text-accent-foreground font-display text-sm px-3 py-1">{p.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle eyebrow="Связаться с нами" title="Контакты" light />
            <p className="mt-6 text-primary-foreground/70 max-w-md">
              Оставьте заявку — инженер свяжется с вами в течение 30 минут и рассчитает стоимость вашего проекта.
            </p>
            <div className="mt-10 space-y-5">
              <ContactRow icon="Phone" label="Телефон" value="+7 (495) 000-00-00" />
              <ContactRow icon="Mail" label="Почта" value="info@stalprom.ru" />
              <ContactRow icon="MapPin" label="Адрес" value="г. Москва, Промзона 24, корп. 3" />
              <ContactRow icon="Clock" label="Режим работы" value="Пн–Пт 8:00–19:00" />
            </div>
          </div>

          <form className="bg-card text-card-foreground p-8" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-2xl font-semibold uppercase">Оставить заявку</h3>
            <div className="mt-6 space-y-4">
              <input className="w-full h-12 px-4 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Ваше имя" />
              <input className="w-full h-12 px-4 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Телефон" />
              <textarea className="w-full px-4 py-3 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent resize-none" rows={4} placeholder="Опишите задачу" />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display uppercase tracking-wide h-12 rounded-none">
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary border-t border-white/10 text-primary-foreground/60 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 font-display uppercase tracking-wide text-primary-foreground">
            <Icon name="Hexagon" size={18} className="text-accent" /> СтальПром
          </div>
          <span>© 2026 СтальПром. Производство металлоконструкций.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div>
      <span className="text-accent font-display uppercase tracking-[0.2em] text-sm">{eyebrow}</span>
      <h2 className={`mt-2 font-display text-4xl md:text-5xl font-bold uppercase ${light ? 'text-primary-foreground' : ''}`}>{title}</h2>
    </div>
  );
}

function ContactRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center bg-accent shrink-0">
        <Icon name={icon} size={20} className="text-accent-foreground" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wide text-primary-foreground/50">{label}</div>
        <div className="font-display font-medium text-lg">{value}</div>
      </div>
    </div>
  );
}
