import { Brain, Bot, ChartBar } from "lucide-react"

export const metadata = {
  title: 'Consultoría IA | Mr.Peak Studio',
  description: 'Servicios de consultoría en Inteligencia Artificial para empresas',
}

export default function IAPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Consultoría en Inteligencia Artificial</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Potencia tu negocio con soluciones de IA personalizadas
        </p>

        <div className="grid gap-8">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Brain className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Machine Learning</h2>
            <p className="text-muted-foreground">
              Implementamos soluciones de aprendizaje automático para optimizar tus procesos empresariales.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Bot className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Chatbots Inteligentes</h2>
            <p className="text-muted-foreground">
              Desarrollamos asistentes virtuales que mejoran la atención al cliente 24/7.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <ChartBar className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Análisis Predictivo</h2>
            <p className="text-muted-foreground">
              Utilizamos IA para analizar datos y predecir tendencias de mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}