import Icon from "@/components/ui/icon"

const students = [
  { rank: 1, name: "Алина Соколова", group: "ИТ-301", stars: 1240, workouts: 62, streak: 14, avatar: "👩‍💻" },
  { rank: 2, name: "Максим Петров", group: "ЭК-201", stars: 1105, workouts: 55, streak: 10, avatar: "👨‍🎓" },
  { rank: 3, name: "Дарья Новикова", group: "МЕД-102", stars: 980, workouts: 49, streak: 7, avatar: "👩‍⚕️" },
  { rank: 4, name: "Кирилл Захаров", group: "ИТ-302", stars: 870, workouts: 43, streak: 5, avatar: "👨‍💻" },
  { rank: 5, name: "Мария Иванова", group: "ПС-401", stars: 755, workouts: 38, streak: 9, avatar: "👩‍🔬" },
  { rank: 6, name: "Артём Козлов", group: "ЭК-202", stars: 640, workouts: 32, streak: 3, avatar: "👨‍🏫" },
  { rank: 7, name: "Юлия Смирнова", group: "МЕД-103", stars: 510, workouts: 26, streak: 6, avatar: "👩‍🎓" },
  { rank: 8, name: "Денис Фёдоров", group: "ИТ-101", stars: 430, workouts: 21, streak: 2, avatar: "🧑‍💻" },
]

const medals = ["🥇", "🥈", "🥉"]

export default function RatingSection() {
  const top3 = students.slice(0, 3)
  const rest = students.slice(3)

  return (
    <section id="rating" className="relative z-10 py-24 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur mb-6">
            <Icon name="Trophy" size={14} />
            Таблица лидеров
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Рейтинг студентов
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Соревнуйся с однокурсниками — кто больше двигается, тот и на вершине 🏆
          </p>
        </div>

        {/* Top 3 podium */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* 2nd place */}
          <div className="flex flex-col items-center gap-3 pt-8">
            <span className="text-3xl">{top3[1].avatar}</span>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">{top3[1].name}</p>
              <p className="text-white/40 text-xs">{top3[1].group}</p>
            </div>
            <div className="w-full rounded-t-xl bg-white/10 border border-white/10 py-4 flex flex-col items-center gap-1">
              <span className="text-2xl">🥈</span>
              <span className="text-yellow-400 font-bold">⭐ {top3[1].stars}</span>
            </div>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <span className="text-4xl">{top3[0].avatar}</span>
              <span className="absolute -top-2 -right-2 text-lg">👑</span>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">{top3[0].name}</p>
              <p className="text-white/40 text-xs">{top3[0].group}</p>
            </div>
            <div className="w-full rounded-t-xl bg-gradient-to-b from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 py-6 flex flex-col items-center gap-1">
              <span className="text-3xl">🥇</span>
              <span className="text-yellow-400 font-bold text-lg">⭐ {top3[0].stars}</span>
            </div>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center gap-3 pt-12">
            <span className="text-3xl">{top3[2].avatar}</span>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">{top3[2].name}</p>
              <p className="text-white/40 text-xs">{top3[2].group}</p>
            </div>
            <div className="w-full rounded-t-xl bg-white/5 border border-white/10 py-3 flex flex-col items-center gap-1">
              <span className="text-2xl">🥉</span>
              <span className="text-yellow-400 font-bold">⭐ {top3[2].stars}</span>
            </div>
          </div>
        </div>

        {/* Rest of rankings */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          {rest.map((s, i) => (
            <div
              key={s.rank}
              className={`flex items-center gap-4 px-6 py-4 ${i < rest.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/5 transition-colors`}
            >
              <span className="text-white/40 font-mono w-6 text-center text-sm">{s.rank}</span>
              <span className="text-2xl">{s.avatar}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{s.name}</p>
                <p className="text-white/40 text-xs">{s.group}</p>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-white/40 text-xs">
                <Icon name="Flame" size={12} className="text-orange-400" />
                <span>{s.streak} дней</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 font-semibold text-sm">
                <span>⭐</span>
                <span>{s.stars}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { label: "Участников", value: "248", icon: "Users" },
            { label: "Тренировок сегодня", value: "1 034", icon: "Zap" },
            { label: "Звёзд выдано", value: "42 580", icon: "Star" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center">
              <Icon name={stat.icon as "Users"} size={20} className="text-white/40 mx-auto mb-2" />
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
