import { useState } from "react"
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Clock, 
  Activity,
  Send,
  AlertCircle,
  CheckCircle,
  WifiOff,
  BookOpen,
  Lightbulb,
  Star,
  Plus,
  Wifi,
  Timer
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const quickStats = [
  {
    title: "📱 Contatos na plataforma",
    value: "1.283",
    icon: Users,
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "💬 Mensagens enviadas este mês", 
    value: "1.080",
    limit: "3.000",
    progress: 36,
    icon: MessageSquare,
    color: "text-success",
    gradient: "from-success/20 to-success/5"
  },
  {
    title: "🚀 Campanhas ativas",
    value: "2",
    icon: Send,
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "💎 Plano atual",
    value: "Light",
    subtitle: "Ver plano",
    icon: Star,
    color: "text-warning",
    gradient: "from-warning/20 to-warning/5",
    hasUpgrade: true
  }
]

const activities = [
  {
    action: "Campanha 'Apartamentos Centro' finalizada",
    time: "Há 2 horas",
    count: "187 mensagens",
    status: "success",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    action: "Agendamento criado para amanhã 10h",
    time: "Há 4 horas", 
    count: "Newsletter Semanal",
    status: "scheduled",
    icon: Calendar,
    color: "text-accent"
  },
  {
    action: "Lista 'Clientes VIP' atualizada",
    time: "Ontem",
    count: "45 contatos adicionados",
    status: "info",
    icon: Users,
    color: "text-primary"
  },
  {
    action: "Plano Light ativado",
    time: "3 dias atrás",
    count: "Bem-vindo ao ZapBroker!",
    status: "info",
    icon: Star,
    color: "text-warning"
  }
]

const tips = [
  "💡 Use listas segmentadas para campanhas mais eficazes",
  "⏰ Evite enviar muitas mensagens em horários de pico",
  "📊 Acompanhe suas métricas para otimizar resultados",
  "🎯 Personalize suas mensagens para cada público"
]

export default function Home() {
  const [userName] = useState("João")
  const [currentPlan] = useState("Light")
  const [tipIndex, setTipIndex] = useState(0)
  
  const planUsage = { current: 1080, limit: 3000 }
  const usagePercentage = (planUsage.current / planUsage.limit) * 100
  
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Bom dia"
    if (hour < 18) return "Boa tarde"
    return "Boa noite"
  }

  // Simula próximo agendamento
  const nextScheduled = {
    name: "Newsletter Semanal",
    list: "Clientes Ativos",
    time: "Amanhã às 10:00",
    status: "programado"
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold emoji">
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                {getGreeting()}, {userName}
              </span> 👋
            </h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Você está no plano <span className="font-medium text-primary">{currentPlan}</span> 
              {" • "}Status: <span className="text-success">✅ Ativa</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats & Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickStats.map((stat, index) => (
              <GlassCard key={index} variant="blur" className="p-4 space-y-3 hover-electric transition-electric">
                <div className="flex items-center justify-between">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  {stat.hasUpgrade && (
                    <Button size="sm" variant="outline" className="text-xs h-7 electric-border">
                      Upgrade
                    </Button>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground emoji">{stat.title}</h3>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">{stat.value}</span>
                      {stat.limit && (
                        <span className="text-sm text-muted-foreground">/ {stat.limit}</span>
                      )}
                    </div>
                    {stat.subtitle && (
                      <Link to="/plano" className="text-sm text-primary hover:text-primary/80 transition-colors">
                        {stat.subtitle} →
                      </Link>
                    )}
                    {stat.progress && (
                      <Progress value={stat.progress} className="h-2 mt-2" />
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Quick Actions */}
          <GlassCard variant="blur" className="p-6">
            <h2 className="text-lg font-semibold mb-4 emoji">⚡ Ações rápidas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/disparos">
                <Button variant="glass" className="w-full h-auto p-4 flex-col gap-2 items-start hover-electric transition-electric">
                  <Send className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium emoji">🚀 Criar nova campanha</div>
                    <div className="text-xs text-muted-foreground">Dispare mensagens agora</div>
                  </div>
                </Button>
              </Link>
              
              <Button variant="glass" className="w-full h-auto p-4 flex-col gap-2 items-start hover-electric transition-electric">
                <Users className="h-5 w-5 text-accent" />
                <div className="text-left">
                  <div className="font-medium emoji">📋 Gerenciar contatos</div>
                  <div className="text-xs text-muted-foreground">Organize suas listas</div>
                </div>
              </Button>
              
              <Link to="/disparos">
                <Button variant="glass" className="w-full h-auto p-4 flex-col gap-2 items-start hover-electric transition-electric">
                  <Calendar className="h-5 w-5 text-warning" />
                  <div className="text-left">
                    <div className="font-medium emoji">📅 Agendar disparo</div>
                    <div className="text-xs text-muted-foreground">Programe para depois</div>
                  </div>
                </Button>
              </Link>
              
              <Link to="/tutoriais">
                <Button variant="glass" className="w-full h-auto p-4 flex-col gap-2 items-start hover-electric transition-electric">
                  <BookOpen className="h-5 w-5 text-success" />
                  <div className="text-left">
                    <div className="font-medium emoji">📚 Ver relatórios</div>
                    <div className="text-xs text-muted-foreground">Acompanhe resultados</div>
                  </div>
                </Button>
              </Link>
            </div>
          </GlassCard>

          {/* Next Scheduled */}
          <GlassCard variant="blur" className="p-6">
            <h2 className="text-lg font-semibold mb-4 emoji">📅 Próximo agendamento</h2>
            <div className="flex items-center justify-between p-4 bg-gradient-card rounded-2xl border border-glass-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-neon rounded-xl flex items-center justify-center">
                  <Timer className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium">{nextScheduled.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Lista: {nextScheduled.list} • {nextScheduled.time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  Programado
                </Badge>
                <Button variant="ghost" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </div>
          </GlassCard>

          {/* Tips Section */}
          <GlassCard variant="blur" className="p-6">
            <h2 className="text-lg font-semibold mb-4 emoji">💡 Dica do dia</h2>
            <div className="p-4 bg-gradient-electric rounded-2xl border border-primary/20">
              <p className="text-sm emoji">{tips[tipIndex]}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 text-primary"
                onClick={() => setTipIndex((prev) => (prev + 1) % tips.length)}
              >
                Próxima dica →
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Right Column - Activity & Status */}
        <div className="space-y-6">
          {/* Current Status */}
          <GlassCard variant="blur" className="p-4">
            <h3 className="font-semibold mb-3 emoji">🔥 Status em tempo real</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">WhatsApp</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-xs text-success">Conectado</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Plano</span>
                <span className="text-xs text-warning">{currentPlan}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Limite mensal</span>
                <span className="text-xs">{usagePercentage.toFixed(0)}% usado</span>
              </div>
            </div>
          </GlassCard>

          {/* Activity Timeline */}
          <GlassCard variant="blur" className="p-4">
            <h3 className="font-semibold mb-4 emoji">🕓 Atividade recente</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-card/50 flex items-center justify-center border border-glass-border">
                      <activity.icon className={`h-4 w-4 ${activity.color}`} />
                    </div>
                    {index < activities.length - 1 && (
                      <div className="w-px h-6 bg-glass-border mx-auto mt-2" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    <p className="text-xs text-muted-foreground">{activity.count}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <Button variant="ghost" size="sm" className="w-full justify-center gap-2">
              Ver todas atividades
              <ArrowRight className="h-4 w-4" />
            </Button>
          </GlassCard>

          {/* Promotional Banner */}
          <GlassCard variant="blur" className="p-4 border-primary/30">
            <div className="text-center space-y-3">
              <div className="emoji text-lg">🎁</div>
              <div>
                <div className="font-semibold text-sm">Convide 3 corretores</div>
                <div className="text-xs text-muted-foreground">Ganhe 30% de desconto no próximo mês!</div>
              </div>
              <Button size="sm" className="w-full">
                Convidar amigos
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}