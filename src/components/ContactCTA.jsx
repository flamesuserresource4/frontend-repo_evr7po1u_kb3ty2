import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-[#0A0A0A] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,#fde04722,transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-12 backdrop-blur">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Готовы ускорить принятие решений?</h2>
            <p className="mt-3 text-white/70">
              Расскажите о задаче — предложим исследовательский дизайн и план измеримого эффекта в течение 48 часов.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@intellum.agency?subject=Запрос%20на%20исследование"
                className="inline-flex items-center gap-2 rounded-md bg-yellow-300 text-black px-5 py-3 font-medium shadow hover:bg-yellow-200 transition"
              >
                Написать нам
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition"
              >
                Услуги
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} ИНТЕЛЛУМ — агентство исследований. Все права защищены.</p>
      </div>
    </section>
  );
}
