import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"
import WorkoutsSection from "@/components/WorkoutsSection"
import RatingSection from "@/components/RatingSection"

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#0d1117", "#1a1035", "#2d1b69", "#16a34a"]}
          angle={15}
          noise={0.25}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <span className="text-yellow-400 text-base">⭐</span>
                Зарабатывай звёзды за каждую тренировку
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                Двигайся больше.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Учись лучше.
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl text-pretty drop-shadow-lg">
                Микро-тренировки прямо между парами — 5–10 минут движения, которые снижают усталость, улучшают концентрацию и приносят звёзды за активность.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-8 text-white/60 text-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-white">5 мин</span>
                  <span>одна тренировка</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-white">⭐ +10</span>
                  <span>звёзд за сессию</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-white">0 ₽</span>
                  <span>абсолютно бесплатно</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-400 shadow-2xl shadow-green-500/30">
                  <Icon name="Zap" size={20} />
                  Начать тренировку
                </button>
                <button className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 shadow-xl">
                  Смотреть как это работает
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Workouts Section */}
        <WorkoutsSection />

        {/* Rating Section */}
        <RatingSection />

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-8 px-5 text-center text-white/30 text-sm">
          <p>⚡ MoveUp — движение делает тебя умнее</p>
        </footer>
      </div>
    </main>
  )
}

export default Index