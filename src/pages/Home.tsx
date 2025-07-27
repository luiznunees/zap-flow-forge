import { useState } from "react"
import { 
  Home as HomeIcon, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Clock, 
  Users,
  Activity,
  PlayCircle,
  BookOpen,
  Lightbulb,
  Send,
  Settings,
  AlertCircle,
  CheckCircle,
  WifiOff
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const statsCards = [
  {
    title: "Mensagens Enviadas",
    value: "1.250",
    limit: "2.000",
    progress: 62.5,
    icon: MessageSquare,
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "Próximo Agendamento", 
    value: "30/07 às 11h",
    subtitle: "Newsletter Semanal",
    icon: Calendar,
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "Última Campanha",
    value: "187 mensagens",
    subtitle: "Residencial Solar",
    icon: Send,
    color: "text-success",
    gradient: "from-success/20 to-success/5"
  },
]

const alerts = [
  {
    type: "warning",
    title: "Limite de mensagens",
    message: "Você usou 90% do limite de mensagens este mês",
    icon: AlertCircle,
    color: "text-warning",
    bg: "bg-warning/10 border-warning/20"
  },
  {
    type: "error", 
    title: "Conexão WhatsApp",
    message: "Sua conexão com o WhatsApp expirou - reconecte-se",
    icon: WifiOff,
    color: "text-destructive",
    bg: "bg-destructive/10 border-destructive/20"
  }
]

const recommendations = [
  {
    title: "Ver tutorial: Como fazer disparos sem bloqueio",
    icon: BookOpen,
    color: "text-accent"
  },
  {
    title: "Dica do dia: Use horários entre 11h e 12h para maior abertura",
    icon: Lightbulb,
    color: "text-success"
  },
  {
    title: "Vídeo novo: Como conectar o WhatsApp sem erro",
    icon: PlayCircle,
    color: "text-primary"
  }
]

const activities = [
  {
    action: "Enviou 220 mensagens — campanha 'Solar Sul'",
    time: "24/07 às 17h",
    icon: Send,
    color: "text-primary"
  },
  {
    action: "Agendou envio para 26/07 às 11h",
    time: "23/07 às 21h",
    icon: Calendar,
    color: "text-accent"
  },
  {
    action: "Alterou plano para Starter",
    time: "20/07",
    icon: Settings,
    color: "text-success"
  }
]

export default function Home() {
  const [userName] = useState("Luis")
  const planUsage = { current: 1250, limit: 2000 }
  const usagePercentage = (planUsage.current / planUsage.limit) * 100
  
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Bom dia"
    if (hour < 18) return "Boa tarde"
    return "Boa noite"
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              {getGreeting()}, {userName} 👋
            </h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Você está no plano <span className="font-medium text-foreground">Starter</span> — {planUsage.current.toLocaleString()} de {planUsage.limit.toLocaleString()} mensagens enviadas este mês.
            </p>
          </div>
          <Button className="gap-2 self-start sm:self-auto">
            <TrendingUp className="h-4 w-4" />
            Fazer Upgrade
          </Button>
        </div>
        
        <div className="w-full">
          <Progress value={usagePercentage} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{usagePercentage.toFixed(1)}% utilizado</span>
            <span>{planUsage.limit - planUsage.current} mensagens restantes</span>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <GlassCard key={index} className={`p-4 ${alert.bg} border`}>
              <div className="flex items-start gap-3">
                <alert.icon className={`h-5 w-5 mt-0.5 ${alert.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{alert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {statsCards.map((stat, index) => (
          <GlassCard key={index} variant="blur" className="p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold">{stat.value}</span>
                  {stat.limit && (
                    <span className="text-sm text-muted-foreground">/ {stat.limit}</span>
                  )}
                </div>
                {stat.subtitle && (
                  <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                )}
                {stat.progress && (
                  <Progress value={stat.progress} className="h-2 mt-2" />
                )}
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="w-full justify-between p-2 h-8">
              <span className="text-xs">Ver detalhes</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </GlassCard>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard variant="blur" className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              Recomendações & Ajuda Rápida
            </h2>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-card/50 transition-colors cursor-pointer">
                  <rec.icon className={`h-5 w-5 ${rec.color} flex-shrink-0`} />
                  <span className="text-sm flex-1">{rec.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </GlassCard>

        </div>

        {/* Activities Timeline */}
        <GlassCard variant="blur" className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-success" />
            Atividades Recentes
          </h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-card/50 flex items-center justify-center border border-glass-border`}>
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  {index < activities.length - 1 && (
                    <div className="w-px h-6 bg-glass-border mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium break-words">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
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
      </div>

    </div>
  )
}