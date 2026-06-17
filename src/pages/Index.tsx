import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { label: 'Вольеры', href: '#volyery' },
  { label: 'Навесы', href: '#navesy' },
  { label: 'Ворота', href: '#vorota' },
  { label: 'Контакты', href: '#contacts' },
];

const PRODUCTS = [
  {
    id: 'volyery',
    title: 'Вольеры',
    desc: 'Сварные металлические вольеры для собак и других животных. Оцинкованная сетка, надёжный каркас из профильной трубы, любые размеры под заказ.',
    img: 'https://cdn.poehali.dev/projects/b9501066-c197-479c-94a8-e61e90507c6d/files/1317b18e-5aab-4304-8178-6a2801065b88.jpg',
    features: ['Размер под заказ', 'Оцинковка или порошковая покраска', 'Сборка входит в стоимость'],
  },
  {
    id: 'navesy',
    title: 'Навесы',
    desc: 'Металлические навесы для автомобилей, террас и входных групп. Каркас из профильной трубы, кровля — поликарбонат или профлист.',
    img: 'https://cdn.poehali.dev/projects/b9501066-c197-479c-94a8-e61e90507c6d/files/8c63a47b-88d2-48fd-bed7-522e7874e3a4.jpg',
    features: ['Под авто, мотоцикл, дрова', 'Поликарбонат или профлист', 'Монтаж под ключ'],
  },
  {
    id: 'vorota',
    title: 'Откатные ворота',
    desc: 'Откатные ворота из профильной трубы с обшивкой профлистом. Ручные или с электроприводом, антикоррозийное покрытие.',
    img: 'https://cdn.poehali.dev/projects/b9501066-c197-479c-94a8-e61e90507c6d/files/75990ee3-6eb0-4d19-b48f-c414180c9fa9.jpg',
    features: ['Ручные и автоматические', 'Любая ширина проёма', 'Гарантия 2 года'],
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/96 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <span className="flex h-8 w-8 items-center justify-center bg-accent">
              <Icon name="Wrench" size={16} className="text-white" />
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-widest">МеталСтрой</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-primary-foreground/75 hover:text-accent transition-colors uppercase tracking-wide">
                {n.label}
              </a>
            ))}
          </nav>

          <a href="tel:+70000000000" className="hidden md:flex items-center gap-2 text-primary-foreground text-sm font-medium">
            <Icon name="Phone" size={14} className="text-accent" />
            +7 (000) 000-00-00
          </a>

          <button className="md:hidden text-primary-foreground" onClick={() => setMenuOpen(v => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-primary px-4 pb-4 flex flex-col gap-3 border-t border-white/10">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-primary-foreground/75 hover:text-accent uppercase text-sm tracking-wide">
                {n.label}
              </a>
            ))}
            <a href="tel:+70000000000" className="text-accent font-medium text-sm">+7 (000) 000-00-00</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(180deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)' }}
        />
        <div className="container mx-auto px-4 relative pt-16">
          <div className="inline-block border-l-4 border-accent pl-3 mb-5">
            <span className="font-display text-accent uppercase tracking-[0.2em] text-sm">Производство и монтаж</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase leading-[0.95] max-w-2xl">
            Металлоконструкции<br /><span className="text-accent">под ключ</span>
          </h1>
          <p className="mt-5 text-primary-foreground/70 max-w-lg text-base">
            Вольеры, навесы и откатные ворота от ИП МеталСтрой. Изготовим по вашим размерам, привезём и установим.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button className="bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wide h-12 px-7 rounded-none" asChild>
              <a href="#contacts">Узнать цену</a>
            </Button>
            <Button variant="outline" className="border-white/30 text-primary-foreground bg-transparent hover:bg-white/10 font-display uppercase tracking-wide h-12 px-7 rounded-none" asChild>
              <a href="#volyery">Наши работы</a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      {PRODUCTS.map((p, i) => (
        <section key={p.id} id={p.id} className={`py-20 ${i % 2 === 1 ? 'bg-secondary' : 'bg-background'}`}>
          <div className={`container mx-auto px-4 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <div className="md:w-1/2">
              <img src={p.img} alt={p.title} className="w-full h-72 md:h-96 object-cover" />
            </div>
            <div className="md:w-1/2">
              <span className="text-accent font-display uppercase tracking-[0.2em] text-sm">Продукция</span>
              <h2 className="font-display text-4xl font-bold uppercase mt-2 mb-4">{p.title}</h2>
              <p className="text-muted-foreground mb-6">{p.desc}</p>
              <ul className="space-y-2 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center bg-accent shrink-0">
                      <Icon name="Check" size={14} className="text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display uppercase tracking-wide h-11 px-6 rounded-none" asChild>
                <a href="#contacts">Рассчитать стоимость</a>
              </Button>
            </div>
          </div>
        </section>
      ))}

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14">
          <div>
            <span className="text-accent font-display uppercase tracking-[0.2em] text-sm">Напишите нам</span>
            <h2 className="font-display text-4xl font-bold uppercase mt-2 mb-6">Контакты</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-sm">Оставьте заявку — перезвоним в течение часа и обсудим детали.</p>
            <div className="space-y-4">
              {[
                { icon: 'Phone', text: '+7 (000) 000-00-00' },
                { icon: 'MessageCircle', text: 'WhatsApp / Telegram' },
                { icon: 'MapPin', text: 'Ваш город' },
              ].map(r => (
                <div key={r.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-accent shrink-0">
                    <Icon name={r.icon} size={18} className="text-white" />
                  </span>
                  <span className="font-display font-medium">{r.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-card text-card-foreground p-8" onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <h3 className="font-display text-2xl font-bold uppercase mb-5">Оставить заявку</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-48 gap-3 text-center">
                <Icon name="CheckCircle" size={40} className="text-accent" />
                <p className="font-display uppercase tracking-wide">Заявка принята! Скоро свяжемся.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <input required className="w-full h-11 px-4 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent text-sm" placeholder="Имя" />
                <input required className="w-full h-11 px-4 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent text-sm" placeholder="Телефон" />
                <select className="w-full h-11 px-4 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent text-sm text-muted-foreground">
                  <option value="">Что интересует?</option>
                  <option>Вольер</option>
                  <option>Навес</option>
                  <option>Откатные ворота</option>
                  <option>Другое</option>
                </select>
                <textarea className="w-full px-4 py-3 bg-secondary border-0 focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none" rows={3} placeholder="Размеры, пожелания..." />
                <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wide h-11 rounded-none">
                  Отправить
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary border-t border-white/10 py-6 text-primary-foreground/50 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-2">
          <span className="font-display uppercase text-primary-foreground tracking-widest text-sm">МеталСтрой</span>
          <span>© 2026 ИП МеталСтрой. Металлоконструкции под заказ.</span>
        </div>
      </footer>
    </div>
  );
}
