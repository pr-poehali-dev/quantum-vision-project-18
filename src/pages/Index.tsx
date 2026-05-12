import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="lg:mx-12">
          <Hero7
            heading="Крепёж для фасадов и строительства с 2016 года"
            description="Официальный дистрибьютор ведущих российских заводов. Качественный ассортимент крепежа по принципу «цена-качество»: консультации, испытания на объектах, поставка под ключ и покраска крепежа."
            button={{ text: "Получить консультацию", url: "#" }}

          />
        </main>
      </div>
    </div>
  )
}

export default Index