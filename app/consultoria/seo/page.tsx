import { Search, Target, BarChart } from "lucide-react"

export const metadata = {
  title: 'Consultoría SEO | Mr.Peak Studio',
  description: 'Servicios de optimización SEO para mejorar tu visibilidad online',
}

export default function SEOPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Consultoría SEO</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Mejora tu posicionamiento en buscadores y aumenta tu visibilidad online
        </p>

        <div className="grid gap-8">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Search className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Auditoría SEO</h2>
            <p className="text-muted-foreground">
              Análisis completo de tu sitio web para identificar áreas de mejora y oportunidades.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Target className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Optimización de Contenido</h2>
            <p className="text-muted-foreground">
              Estrategias de contenido optimizado para palabras clave relevantes.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <BarChart className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Seguimiento y Análisis</h2>
            <p className="text-muted-foreground">
              Monitorización continua del rendimiento y ajuste de estrategias.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}