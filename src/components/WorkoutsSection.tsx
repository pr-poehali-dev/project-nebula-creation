import Icon from "@/components/ui/icon"
import { useState } from "react"

const workouts = [
  {
    id: 1,
    emoji: "🧘",
    title: "Растяжка шеи и плеч",
    duration: "5 мин",
    stars: 10,
    level: "Лёгкий",
    levelColor: "text-green-400",
    description: "Снимает напряжение после долгого сидения за компьютером. Идеально между парами.",
    steps: ["Наклоны головы влево-вправо", "Круговые движения плечами", "Растяжка трапеции"],
  },
  {
    id: 2,
    emoji: "🔥",
    title: "Зарядка для бодрости",
    duration: "7 мин",
    stars: 15,
    level: "Средний",
    levelColor: "text-yellow-400",
    description: "Разгоняет кровообращение и заряжает энергией на следующую пару.",
    steps: ["Приседания 10 раз", "Прыжки на месте", "Отжимания от стола"],
  },
  {
    id: 3,
    emoji: "🌬️",
    title: "Дыхательные практики",
    duration: "3 мин",
    stars: 8,
    level: "Лёгкий",
    levelColor: "text-green-400",
    description: "Успокаивает нервную систему перед экзаменом или сложной лекцией.",
    steps: ["Вдох на 4 счёта", "Задержка на 4 счёта", "Выдох на 8 счётов"],
  },
  {
    id: 4,
    emoji: "💪",
    title: "Силовая мини-сессия",
    duration: "10 мин",
    stars: 20,
    level: "Сложный",
    levelColor: "text-red-400",
    description: "Полноценная тренировка для тех, у кого есть окно между занятиями.",
    steps: ["Планка 30 сек", "Выпады 10 раз", "Подъём на носки 20 раз"],
  },
  {
    id: 5,
    emoji: "👁️",
    title: "Гимнастика для глаз",
    duration: "2 мин",
    stars: 5,
    level: "Лёгкий",
    levelColor: "text-green-400",
    description: "Снимает усталость глаз после работы за компьютером и чтения.",
    steps: ["Фокусировка на дальнем объекте", "Круговые движения глазами", "Частое моргание"],
  },
  {
    id: 6,
    emoji: "🚶",
    title: "Активная прогулка",
    duration: "10 мин",
    stars: 15,
    level: "Средний",
    levelColor: "text-yellow-400",
    description: "Быстрая ходьба по коридору или вокруг корпуса — простой и эффективный способ двигаться.",
    steps: ["Выйди из аудитории", "Быстрым шагом пройди 1000 м", "Сделай несколько махов руками"],
  },
]

export default function WorkoutsSection() {
  const [activeWorkout, setActiveWorkout] = useState<number | null>(null)
  const [completed, setCompleted] = useState<number[]>([])

  const handleComplete = (id: number) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id])
    }
    setActiveWorkout(null)
  }

  return (
    <section id="workouts" className="relative z-10 py-24 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur mb-6">
            <Icon name="Dumbbell" size={14} />
            Библиотека тренировок
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Выбери тренировку
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            От 2 до 10 минут — найди то, что подходит прямо сейчас. За каждую выполненную тренировку — звёзды ⭐
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((w) => {
            const isDone = completed.includes(w.id)
            const isOpen = activeWorkout === w.id
            return (
              <div
                key={w.id}
                className={`relative rounded-2xl border backdrop-blur p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer group
                  ${isDone
                    ? "border-green-500/50 bg-green-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                  }`}
                onClick={() => setActiveWorkout(isOpen ? null : w.id)}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{w.emoji}</span>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                    <span>⭐</span>
                    <span>+{w.stars}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{w.title}</h3>
                  <p className="text-white/50 text-sm">{w.description}</p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-white/60">
                    <Icon name="Clock" size={13} />
                    {w.duration}
                  </span>
                  <span className={`font-medium ${w.levelColor}`}>{w.level}</span>
                </div>

                {/* Expanded steps */}
                {isOpen && (
                  <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                    <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Шаги:</p>
                    <ol className="flex flex-col gap-2">
                      {w.steps.map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleComplete(w.id) }}
                      className="mt-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Icon name="CheckCircle" size={18} />
                      Выполнено! +{w.stars} ⭐
                    </button>
                  </div>
                )}

                {isDone && (
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <Icon name="CheckCircle" size={15} />
                    Выполнено сегодня
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Stars earned */}
        {completed.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-8 py-4 text-white backdrop-blur">
              <span className="text-3xl">⭐</span>
              <div className="text-left">
                <p className="text-yellow-400 font-bold text-xl">
                  +{workouts.filter(w => completed.includes(w.id)).reduce((sum, w) => sum + w.stars, 0)} звёзд заработано
                </p>
                <p className="text-white/60 text-sm">Сегодня выполнено {completed.length} тренировок</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
