import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const whatsappLink =
    "https://wa.me/+55554899790532?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <section id="quem-somos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-[#004B8C] uppercase tracking-wide">
              
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Quem somos?</h2>

            <div className="h-1 w-20 bg-[#2DC8D2]"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Desde 2009</strong>, a Dentinalis Odontologia Integrada cuida de pessoas com atendimento completo,
              humano e de excelência técnica. Acreditamos que a <strong>odontologia transforma autoestima, bem-estar e qualidade de vida</strong>, 
              oferecendo diversas especialidades em um único espaço. Com tecnologia avançada e atualização constante, consolidamo-nos como <strong>referência no sul de Santa Catarina.</strong>
             Nossa estrutura moderna e acolhedora reflete ética, confiança e cuidado em cada detalhe. Mais de uma década depois, seguimos unindo ciência e empatia para transformar sorrisos e histórias.
            </p>

            <Button
              size="lg"
              className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Agendar minha Avaliação
              </a>
            </Button>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/happy-patient-with-dentist-holding-certificate-tra.jpg"
              alt="Paciente satisfeito com tratamento"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
