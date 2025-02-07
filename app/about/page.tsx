import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: 'Sobre Nosotros | Mr.Peak Studio',
  description: 'Conoce más sobre Mr.Peak Studio y nuestro equipo',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sobre Mr.Peak Studio</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Somos un estudio digital especializado en transformar negocios a través de la tecnología
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            En Mr.Peak Studio, nos apasiona ayudar a las empresas a alcanzar su máximo potencial digital. 
            Nuestro equipo de expertos combina conocimientos en IA, SEO y desarrollo tecnológico para 
            ofrecer soluciones integrales que impulsan el crecimiento de tu negocio.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Nuestra Misión</h2>
          <p>
            Transformar el panorama digital proporcionando soluciones innovadoras y efectivas que 
            ayuden a nuestros clientes a destacar en un mercado cada vez más competitivo.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Nuestros Valores</h2>
          <ul>
            <li>Innovación constante</li>
            <li>Excelencia en el servicio</li>
            <li>Compromiso con resultados</li>
            <li>Transparencia y honestidad</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/consultoria/ia">
              Explora Nuestros Servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}