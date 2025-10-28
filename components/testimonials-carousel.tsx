"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function TestimonialsCarousel() {
  const whatsappLink =
    "https://wa.me/+55554899790532?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Confira as Transformações dos nossos pacientes:
          </h2>
          <p className="text-xl text-gray-700">
            Centenas de pessoas transformaram a sua aparência, confiança e sua qualidade de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/before-after-dental-implant-transformation-patient.jpg?height=300&width=400&query=before after dental implant transformation patient ${i}`}
                alt={`Transformação paciente ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
       
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
                  className="mr-2 h-9 w-9"
                />
                Agendar minha Avaliação
              </a>
            </Button>
        </div>
      </div>
    </section>
  )
}
