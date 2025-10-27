"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloatButton() {
  const handleWhatsAppClick = () => {
    // Número do WhatsApp - ajuste conforme necessário
    const phoneNumber = "5511999999999" // Formato: código do país + DDD + número
    const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#2CC84D] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(44,200,77,0.6)] active:scale-95"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex h-5 w-5 rounded-full bg-red-500 border-2 border-white"></span>
      </span>
    </button>
  )
}
