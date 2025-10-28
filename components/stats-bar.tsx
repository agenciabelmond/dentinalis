import { MapPin, Users, Award } from "lucide-react"

export function StatsBar() {
  return (
    <div className="relative bg-gradient-to-r from-[#0A2463] to-[#0B3D91] text-white py-8 shadow-lg overflow-hidden">
      {/* Borda branca animada */}
      <div className="absolute inset-0 border-4 border-white/30 animate-pulse"></div>
      <div className="absolute inset-0 border-2 border-white/50 rounded-lg m-2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-8 w-8 text-white" />
            <span className="text-lg font-semibold">Criciúma - SC</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-white" />
            <span className="text-lg font-semibold">+ 15 anos de Experiência</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-white" />
            <span className="text-lg font-semibold">Resultados Incríveis</span>
          </div>
        </div>
      </div>
    </div>
  )
}
