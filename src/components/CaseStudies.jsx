export default function CaseStudies() {
  const cases = [
    {
      title: 'FMCG: рост выручки на 18% за 6 месяцев',
      summary:
        'Построили модель предиктивного спроса и оптимизировали промо. Внедрили дашборды для команд продаж.',
      tag: 'Data Science'
    },
    {
      title: 'FinTech: сокращение оттока на 22%',
      summary:
        'Анализ поведенческих когорт и персонализированные офферы. Запустили серию A/B тестов.',
      tag: 'Product Analytics'
    },
    {
      title: 'E‑commerce: конверсия +12%',
      summary:
        'UX-исследования, тепловые карты, улучшение поиска и карточки товара. Проверка гипотез на прототипах.',
      tag: 'Research & UX'
    }
  ];

  return (
    <section id="cases" className="relative w-full bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Кейсы</h2>
          <p className="mt-3 text-white/70">Коротко о результатах, которые мы помогли достичь клиентам.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition">
              <span className="inline-flex items-center rounded-full bg-yellow-300/20 text-yellow-300 px-3 py-1 text-xs font-medium">{c.tag}</span>
              <h3 className="mt-4 text-xl font-medium leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
