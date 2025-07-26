import { Calendar, Sparkles, Bug, TrendingUp, Zap } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const updates = [
  {
    id: "1",
    title: "Novo Agrupamento Inteligente com IA",
    date: "2024-01-20",
    type: "new",
    description: "Agora você pode usar nossa IA para agrupar automaticamente seus contatos e otimizar o timing de envio. O sistema analisa padrões de resposta e sugere os melhores horários.",
    features: [
      "Análise automática de padrões de engajamento",
      "Sugestão inteligente de horários",
      "Agrupamento dinâmico de contatos"
    ],
    icon: Sparkles
  },
  {
    id: "2", 
    title: "Melhoria na Performance de Envios",
    date: "2024-01-18",
    type: "improved",
    description: "Otimizamos toda a infraestrutura de envio, resultando em 40% menos tempo para processar campanhas grandes e maior estabilidade na conexão.",
    features: [
      "40% mais rápido em campanhas grandes",
      "Melhor estabilidade de conexão",
      "Novo sistema de retry automático"
    ],
    icon: TrendingUp
  },
  {
    id: "3",
    title: "Nova Interface de Histórico",
    date: "2024-01-15", 
    type: "improved",
    description: "Redesenhamos completamente o histórico de campanhas com filtros avançados, busca em tempo real e visualização detalhada do progresso.",
    features: [
      "Filtros avançados por status e data",
      "Busca em tempo real",
      "Gráficos de performance em tempo real"
    ],
    icon: Zap
  },
  {
    id: "4",
    title: "Correção de Bug na Reconexão",
    date: "2024-01-12",
    type: "fixed",
    description: "Corrigimos um problema que ocasionalmente impedia a reconexão automática do WhatsApp após períodos de inatividade.",
    features: [
      "Reconexão mais estável",
      "Melhor detecção de status",
      "Notificações de status aprimoradas"
    ],
    icon: Bug
  }
]

const getTypeConfig = (type: string) => {
  switch (type) {
    case "new":
      return { 
        badge: "Novo", 
        variant: "default" as const,
        color: "bg-success",
        textColor: "text-success"
      }
    case "improved":
      return { 
        badge: "Melhorado", 
        variant: "secondary" as const,
        color: "bg-accent",
        textColor: "text-accent"
      }
    case "fixed":
      return { 
        badge: "Corrigido", 
        variant: "outline" as const,
        color: "bg-warning",
        textColor: "text-warning"
      }
    default:
      return { 
        badge: "Atualização", 
        variant: "secondary" as const,
        color: "bg-muted",
        textColor: "text-muted-foreground"
      }
  }
}

export default function Atualizacoes() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Atualizações
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Acompanhe as novidades e melhorias da plataforma
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          Ver Roadmap
        </Button>
      </div>

      {/* Latest Update Highlight */}
      <GlassCard variant="blur" glow className="p-6 border-primary/30">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="w-12 h-12 bg-gradient-neon rounded-2xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-success border-0">Novo</Badge>
              <span className="text-sm text-muted-foreground">20 de Janeiro, 2024</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Novo Agrupamento Inteligente com IA</h2>
              <p className="text-muted-foreground">
                Nossa mais nova funcionalidade usa inteligência artificial para otimizar automaticamente 
                seus envios, analisando padrões de engajamento e sugerindo os melhores horários para cada grupo de contatos.
              </p>
            </div>
            <Button className="gap-2">
              <Zap className="h-4 w-4" />
              Experimentar Agora
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Updates Timeline */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Histórico de Atualizações</h2>
        
        <div className="space-y-4">
          {updates.map((update, index) => {
            const typeConfig = getTypeConfig(update.type)
            const Icon = update.icon

            return (
              <GlassCard key={update.id} variant="blur" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className={`w-10 h-10 ${typeConfig.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {index < updates.length - 1 && (
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-border" />
                    )}
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant={typeConfig.variant} className={typeConfig.textColor}>
                        {typeConfig.badge}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(update.date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">{update.title}</h3>
                      <p className="text-muted-foreground mb-3">{update.description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Principais melhorias:</h4>
                      <ul className="space-y-1">
                        {update.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>

      {/* Feedback Section */}
      <GlassCard variant="blur" className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">Sua opinião é importante</h3>
          <p className="text-muted-foreground">
            Tem alguma sugestão de melhoria ou funcionalidade? Adoraríamos ouvir seu feedback!
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="outline">Enviar Feedback</Button>
            <Button variant="secondary">Solicitar Funcionalidade</Button>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}