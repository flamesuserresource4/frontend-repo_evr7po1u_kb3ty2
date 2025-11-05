import { Lightbulb, Brain, LineChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Маркетинговые исследования',
    desc: 'Глубинные интервью, количественные опросы и сегментация для точного понимания аудитории.'
  },
  {
    icon: Brain,
    title: 'Аналитика данных и ML',
    desc: 'Построение моделей, прогнозирование спроса и поведенческий анализ на реальных данных.'
  },
  {
    icon: LineChart,
    title: 'Стратегия роста',
    desc: 'Аналитические дашборды, KPI и продуктовая аналитика для уверенных решений.'
  },
  {
    icon: Shield,
    title: 'Тестирование гипотез',
    desc: 'A/B, UX-тесты и прототипирование для быстрого подтверждения идей.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#070707] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Что мы делаем</h2>
          <p className="mt-3 text-white/70">Фокусируемся на практической ценности: от гипотез до внедрения и измеримого эффекта.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300/20">
                <Icon className="h-5 w-5 text-yellow-300" />
              </div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
