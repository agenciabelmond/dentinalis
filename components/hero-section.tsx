import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const whatsappLink =
    "https://wa.me/+55554899790532?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <section
      id="inicio"
      // 👇 Aqui está o degradê ajustável (mude 25% para mais ou menos conforme desejar)
      className="relative bg-[linear-gradient(to_bottom,_#0A2463_0%,_#0A2463_25%,_white_100%)] overflow-hidden pt-20"
    >
      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8 z-10 text-gray-900">
      <h1 className="text-5xl lg:text-6xl text-white font-bold leading-tight">
            <span className="bg-[#ffffff]/10 px-3  rounded-lg">
            Tenha dentes fixos em 72h e garantia do tratamento
            </span>
          </h1>

          <p className="text-xl text-white leading-relaxed">
            Recupere sua autoestima com um tratamento de implantes dentários que oferece dentes fixos em tempo recorde
            e sem enxertos ósseos.
          </p>
              <Button
                size="lg"
                className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  {/* Logo do WhatsApp */}
                  <img
                    src="whatsapp (2).png" // coloque o caminho correto da imagem
                    alt="WhatsApp"
                    className="mr-2 h-10 w-10"
                  />
                  Agendar minha Avaliação
                </a>
              </Button>

          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dentinalis.png"
                alt="Fachada da Clínica Dentinais"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay suave sobre a imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
