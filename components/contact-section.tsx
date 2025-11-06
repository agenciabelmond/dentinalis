import { MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ContactSection() {
    const whatsappLink =
    "https://wa.me/+5548999790555?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004B8C] mb-4">Localização e Horário</h2>
          <p className="text-gray-600 text-lg">Estamos localizados em um ponto de fácil acesso em Criciúma/SC</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna da Imagem */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="frente.png"
                alt="Fachada da Clínica Dentinalis"
                fill
                className="object-cover"
              />
            </div>

            {/* Coluna das Informações */}
            <div className="space-y-8">
              {/* Endereço */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0B3D91] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2DC8D2]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#2DC8D2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#004B8C] mb-3">Endereço</h3>
                    <p className="text-gray-700 leading-relaxed">
                      R. Álvaro Catão, n° 596 
                      <br />
                      Santa Catarina, Criciúma/SC
                      <br />
                      CEP 88.810-255
                    </p>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0B3D91] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2DC8D2]/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#2DC8D2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#004B8C] mb-3">Horário de Funcionamento</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-medium">Segunda a Sexta:</span>
                        <span>8:00 às 12:00 - 13:30 às 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sábados:</span>
                        <span>Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0B3D91] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2DC8D2]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#2DC8D2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#004B8C] mb-3">Contato</h3>
                    <a
                      href="https://wa.me/+5548999790555?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                      className="text-gray-700 hover:text-[#2DC8D2] transition-colors text-lg"
                    >
                      (48) 99979-0555 
                    </a>
                  </div>
                </div>
              </div>

              {/* Botão de Agendar */}
              <Button
                asChild
                size="lg"
                className="w-full bg-[#2CC84D] hover:bg-[#2CC84D]/90 text-white font-semibold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                
              <a 
              href="https://wa.me/+5548999790555?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
      
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
        <br></br><br></br>
  {/* Seção Fotos da Clínica – Compacta */}
        <section className="pt-4 pb-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            {/* Centralização do grid */}
            <div className="grid md:grid-cols-3 gap-6 justify-items-center">

              {/* Foto 1 */}
              <div className="text-center">
                <img
                  src="recepcao.png"
                  alt="Recepção Dentinalis"
                  className="rounded-xl shadow-md object-cover w-80 h-52" // AUMENTO
                />
                <p className="text-[#001F47] text-sm font-medium mt-2">
                  Recepção
                </p>
              </div>

              {/* Foto 2 */}
              <div className="text-center">
                <img
                  src="consultorio.jpg"
                  alt="Consultório Dentinalis"
                  className="rounded-xl shadow-md object-cover w-80 h-52"
                />
                <p className="text-[#001F47] text-sm font-medium mt-2">
                  Consultório
                </p>
              </div>

              {/* Foto 3 */}
              <div className="text-center">
                <img
                  src="dentinalis.png.png"
                  alt="Centro Cirúrgico Dentinalis"
                  className="rounded-xl shadow-md object-cover w-80 h-52"
                />
                <p className="text-[#001F47] text-sm font-medium mt-2">
                  Fachada
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Dentinalis - Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  )
}
