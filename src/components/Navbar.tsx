import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn.poehali.dev/projects/c6c9bb27-f60c-409f-b1ab-3cead23e8437/bucket/4be2cf64-2f3e-4e2c-bdc1-03ae7721538d.png"
            alt="ФСК — Фасадный строительный крепеж"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hover:bg-blue-800 text-white bg-blue-900">
          Получить консультацию
        </Button>
      </div>
    </nav>
  )
}