import { Star } from "lucide-react"
import { motion } from "framer-motion"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const PRODUCTS = [
  {
    src: "https://cdn.poehali.dev/projects/c6c9bb27-f60c-409f-b1ab-3cead23e8437/bucket/afd7b6ab-9286-46f9-9137-8bd0e9471b75.jpeg",
    alt: "Анкерный болт",
    label: "Анкерный болт",
  },
  {
    src: "https://cdn.poehali.dev/projects/c6c9bb27-f60c-409f-b1ab-3cead23e8437/bucket/a1dc6744-9b1b-4a1d-8eed-65e5a89fed2e.jpeg",
    alt: "Силиконовый герметик SANZ",
    label: "Герметик",
  },
  {
    src: "https://cdn.poehali.dev/projects/c6c9bb27-f60c-409f-b1ab-3cead23e8437/bucket/97803019-4c01-49bc-b5da-4d2b387133ed.jpeg",
    alt: "Буры для перфоратора",
    label: "Буры",
  },
  {
    src: "https://cdn.poehali.dev/projects/c6c9bb27-f60c-409f-b1ab-3cead23e8437/bucket/7625dd43-2f3b-4402-98ae-4c48db04ce5b.jpeg",
    alt: "Фиксар П-410",
    label: "Химический анкер",
  },
  {
    src: "https://cdn.poehali.dev/projects/c6c9bb27-f60c-409f-b1ab-3cead23e8437/bucket/ed35956e-3680-416c-94a4-4a4a4dbbbde9.jpeg",
    alt: "Строительная ткань ISOMAX",
    label: "Строительная ткань",
  },
]

interface Hero7Props {
  heading?: string
  description?: string
  button?: {
    text: string
    url: string
  }
  reviews?: {
    count: number
    rating?: number
    avatars: {
      src: string
      alt: string
    }[]
  }
}

const Hero7 = ({
  heading = "Премиум шаблоны для продуктивности",
  description = "Стильные профессиональные шаблоны для повышения продуктивности и оптимизации рабочего процесса. Готовы к использованию, легко настраиваются.",
  button = {
    text: "Смотреть шаблоны",
    url: "#",
  },
  reviews = {
    count: 500,
    rating: 4.9,
    avatars: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero7Props) => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <motion.h1
            className="text-3xl font-extrabold lg:text-6xl font-heading text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            {heading}
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-balance lg:text-lg font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <Button asChild size="lg" className="mt-10">
            <a href={button.url}>{button.text}</a>
          </Button>
        </motion.div>
        <motion.div
          className="mx-auto mt-14 grid grid-cols-3 gap-4 sm:grid-cols-5 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          {PRODUCTS.map((product, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 aspect-square w-full">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium text-center">{product.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.8,
          }}
        >
          <span className="mx-4 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src || "/placeholder.svg"} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="mr-1 font-semibold">{reviews.rating?.toFixed(1)}</span>
            </div>
            <p className="text-muted-foreground text-left font-medium">{reviews.count}+ отзывов</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Hero7 }