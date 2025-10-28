import { Button } from "@/components/ui/button" 
import { MessageCircle } from "lucide-react"

export function VideoSection() {
  const whatsappLink =
    "https://wa.me/+55554899790532?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <>
      {/* Seção Conheça nossa clínica */}
      <section className="py-16 bg-[#004B8C]">  
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Conheça nossa clínica</h2>

              <p className="text-lg text-white leading-relaxed">
                Na Dentinalis, entendemos que um sorriso saudável vai além da estética
                ele reflete bem-estar e confiança. Desde 2009, nossa missão é oferecer um atendimento completo e humano, 
                integrando diversas especialidades em um único espaço.
              </p>

              <p className="text-lg text-white leading-relaxed">
                roporcionamos uma solução fixa e segura, permitindo que você mastigue, fale e sorria com naturalidade e conforto. Nossa equipe qualificada e 
                ambiente acolhedor garantem uma experiência única e transformadora.
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
                  className="mr-2 h-9 w-9"
                />
                Agendar minha Avaliação
              </a>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-16 bg-[#E6F7F9]">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Se ainda não está convencido, veja os depoimentos
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Se você ainda duvida de como o tratamento com implantes dentários pode transformar a vida das pessoas e
            ainda ser rápido e sem dor, veja o que nossos pacientes disseram após realizar o procedimento.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Giovane Savio da Rosa",
              "Dona Dulcilene Pereira",
              "Marilda Pirola",
              "Jorge de Azevedo Pinheiro",
              "Gorete Natal",
              "Paulo Coiti Hirai",
            ].map((name, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-[#004B8C] rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Depoimento</p>
                    <p className="text-xs text-gray-600">{name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
