import { Code, Server, Laptop } from "lucide-react"

export const metadata = {
  title: 'Implementación | Mr.Peak Studio',
  description: 'Servicios de implementación tecnológica y desarrollo de soluciones',
}

export default function ImplementacionPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Implementación Tecnológica</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Desarrollamos e implementamos soluciones tecnológicas a medida
        </p>

        <div className="grid gap-8">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Code className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Desarrollo Web</h2>
            <p className="text-muted-foreground">
              Creación de sitios web y aplicaciones web modernas y escalables.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Server className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Infraestructura Cloud</h2>
            <p className="text-muted-foreground">
              Configuración y optimización de servicios en la nube.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Laptop className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Integración de Sistemas</h2>
            <p className="text-muted-foreground">
              Conectamos y optimizamos tus sistemas empresariales.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}