import { Card, CardContent } from "@/components/ui/card"
import { Shield, Anchor, Smile, Utensils, Clock, Sparkles, Zap, CheckCircle2 } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Durabilidade Elevada",
      description: "Uma solução para toda a vida, feita para durar.",
    },
   {
      icon: Utensils,
      title: "Melhora na Mastigação e Paladar",
      description: "Sem limitações para apreciar suas refeições favoritas, sentindo o sabor de cada alimento.",
    },
    {
      icon: Smile,
      title: "Natural e Confortável",
      description: "Não solta, não incomoda e permite uma experiência de um sorriso mais natural.",
    },
 

  ]

  const advantages = [
    {
      icon: Zap,
      title: "Velocidade",
      description: "Sob avaliação tenha seus dentes fixos em 72 horas.",
    },

    {
      icon: Clock,
      title: "Tempo",
      description: "Tratamento bem mais rápido, comparado aos outros.",
    },
  ]

  return (
    <section id="servicos" className="py-16 bg-gradient-to-br from-[#004B8C] to-[#003366]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Os Implantes Dentários e a Prótese Protocolo são a solução mais rápida e fácil para recuperar seu sorriso e
            qualidade de vida.
          </h2>
          <div className="h-1 w-20 bg-[#2DC8D2] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white relative overflow-hidden group"
            >
              {/* Borda inferior animada */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#2DC8D2] w-0 group-hover:w-full transition-all duration-500"></div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DC8D2] rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      <div className="grid md:grid-cols-1 gap-2 justify-center grid md:grid-cols-2 gap-3 justify-center">
        {advantages.map((advantage, index) => (
          <Card
            key={index}
            className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white relative overflow-hidden group max-w-md mx-auto"
          >
            <div className="absolute bottom-0 left-0 h-1 bg-[#2DC8D2] w-0 group-hover:w-full transition-all duration-500"></div>
            <CardContent className="p-6"> {/* Aumentei o padding */}
              <div className="w-12 h-12 bg-[#004B8C] rounded-xl flex items-center justify-center mb-4"> {/* Ícone maior */}
                <advantage.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3> {/* Fonte maior */}
              <p className="text-gray-700 text-base">{advantage.description}</p> {/* Fonte maior */}
            </CardContent>
          </Card>
        ))}
      </div>


      </div>
    </section>
  )
}
