import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/tQoseAAHmVqmck9e/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#fde04733,transparent_40%),radial-gradient(circle_at_80%_30%,#fde04722,transparent_45%)]" />

      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Rocket className="h-4 w-4 text-yellow-300" />
            <span className="text-xs md:text-sm text-white/80">Агентство исследований ИНТЕЛЛУМ</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Инновационные исследования для роста вашего бизнеса
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-2xl">
            Соединяем данные, технологии и стратегию. Мы создаём понятные инсайты и
            решения на стыке науки и бизнеса — быстро, точно и на результат.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-yellow-300 text-black px-5 py-3 font-medium shadow hover:bg-yellow-200 transition">
              Начать проект
            </a>
            <a href="#cases" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition">
              Наши кейсы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
