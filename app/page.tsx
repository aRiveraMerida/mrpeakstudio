import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, Search, Code } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 pt-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Bienvenido a Mr.Peak<span className="text-primary">Studio</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Transformamos tu negocio digital con soluciones innovadoras en IA, SEO e implementación tecnológica.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/consultoria/ia">
                Descubre Nuestros Servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Consultoría IA</h3>
              <p className="text-muted-foreground mb-4">
                Implementamos soluciones de IA para optimizar tus procesos empresariales.
              </p>
              <Button variant="link" asChild>
                <Link href="/consultoria/ia">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-muted-foreground mb-4">
                Mejoramos tu visibilidad online con estrategias SEO efectivas.
              </p>
              <Button variant="link" asChild>
                <Link href="/consultoria/seo">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Implementación</h3>
              <p className="text-muted-foreground mb-4">
                Desarrollamos y desplegamos soluciones tecnológicas a medida.
              </p>
              <Button variant="link" asChild>
                <Link href="/implementacion">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}