import { useState } from "react"
import Icon from "@/components/ui/icon"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register">("login")
  const [form, setForm] = useState({ name: "", email: "", group: "", password: "" })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/20 bg-[#0d1117]/95 backdrop-blur shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <Icon name="X" size={14} />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⚡</span>
            <span className="text-white font-bold text-xl">MoveUp</span>
          </div>
          <p className="text-white/50 text-sm">
            {tab === "login" ? "Войди, чтобы отслеживать прогресс и звёзды" : "Создай аккаунт и начни зарабатывать звёзды"}
          </p>
        </div>

        {/* Tabs */}
        <div className="px-8 mb-6">
          <div className="flex rounded-xl border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${tab === "login" ? "bg-green-500 text-white shadow" : "text-white/50 hover:text-white"}`}
            >
              Войти
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${tab === "register" ? "bg-green-500 text-white shadow" : "text-white/50 hover:text-white"}`}
            >
              Регистрация
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-4">
          {tab === "register" && (
            <>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Имя и фамилия</label>
                <input
                  type="text"
                  placeholder="Алина Соколова"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Группа</label>
                <input
                  type="text"
                  placeholder="ИТ-301"
                  value={form.group}
                  onChange={(e) => setForm({ ...form, group: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="text-white/60 text-xs mb-1.5 block">Email</label>
            <input
              type="email"
              placeholder="student@university.ru"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              required
            />
          </div>

          <div>
            <label className="text-white/60 text-xs mb-1.5 block">Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
          >
            <Icon name="Zap" size={18} />
            {tab === "login" ? "Войти и тренироваться" : "Создать аккаунт"}
          </button>

          {tab === "login" && (
            <p className="text-center text-white/40 text-xs">
              Нет аккаунта?{" "}
              <button type="button" onClick={() => setTab("register")} className="text-green-400 hover:text-green-300 transition-colors">
                Зарегистрироваться
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
