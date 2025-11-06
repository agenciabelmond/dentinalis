"use client"

import { MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";


export function WhatsAppFloatButton() {
 const handleWhatsAppClick = () => {
    const url =
      "https://wa.me/+5548999790555?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
    const fn = (window as any).gtag_report_conversion
    if (typeof fn === "function") {
      try {
        const returned = fn(url)
        if (returned === true) {
          window.open(url, "_blank", "noopener,noreferrer")
        } else {
          // fallback: abrir após pequeno atraso se a função não abrir automaticamente
          setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 200)
        }
      } catch {
        // se fn lançar erro, abrir link normalmente
        window.open(url, "_blank", "noopener,noreferrer")
      }
      return false
    }
    // se não houver função de conversão, abre normalmente
    window.open(url, "_blank", "noopener,noreferrer")
    return true
  }


  return (

    <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] active:scale-95"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="h-12 w-12" />
        <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-[#25D366] opacity-50"></span>
      </button>
  )
}
