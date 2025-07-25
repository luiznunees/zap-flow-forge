import { Check, Crown, Zap, TrendingUp, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const plans = [
  {
    name: "Básico",
    price: "R$ 29",
    period: "/mês",
    description: "Ideal para pequenos negócios",
    features: [
      "500 mensagens/mês",
      "1 número WhatsApp",
      "Suporte por email",
      "Relatórios básicos"
    ],
    limitations: [
      "Sem IA",
      "Sem agendamento avançado"
    ],
    popular: false
  },
  {
    name: "Profissional",
    price: "R$ 79",
    period: "/mês", 
    description: "Para empresas em crescimento",
    features: [
      "2.000 mensagens/mês",
      "3 números WhatsApp",
      "IA para otimização",
      "Agendamento inteligente",
      "Relatórios avançados",
      "Suporte prioritário"
    ],
    limitations: [],
    popular: true,
    current: true
  },
  {
    name: "Enterprise",
    price: "R$ 199",
    period: "/mês",
    description: "Para grandes operações",
    features: [
      "10.000 mensagens/mês",
      "Números ilimitados",
      "IA avançada completa",
      "API personalizada",
      "Suporte 24/7",
      "Gerente de conta dedicado"
    ],
    limitations: [],
    popular: false
  }
]

export default function Plano() {
  const currentPlan = plans.find(p => p.current)
  const usagePercentage = 62.5 // 1250/2000

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Meu Plano
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie sua assinatura e acompanhe o uso
          </p>
        </div>
      </div>

      {/* Current Plan Status */}
      <GlassCard variant="blur" className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Plano Atual</h2>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{currentPlan?.name}</div>
              <div className="text-muted-foreground">
                Renovação em 15 de fevereiro
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Uso de Mensagens</h3>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Este mês</span>
                <span className="text-sm font-medium">1.250 / 2.000</span>
              </div>
              <Progress value={usagePercentage} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">
                {usagePercentage.toFixed(1)}% utilizado
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-warning" />
              <h3 className="font-semibold">Recursos IA</h3>
            </div>
            <div className="space-y-2">
              <Badge variant="default" className="bg-success">
                Ativo
              </Badge>
              <div className="text-sm text-muted-foreground">
                Otimização inteligente habilitada
              </div>
            </div>
          </div>
        </div>

        {usagePercentage > 80 && (
          <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-2xl">
            <div className="flex items-center gap-2 text-warning">
              <Star className="h-5 w-5" />
              <span className="font-medium">Atenção: Limite próximo</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Você está próximo do limite mensal. Considere fazer upgrade para não perder envios.
            </div>
          </div>
        )}
      </GlassCard>

      {/* Plans Comparison */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Comparação de Planos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <GlassCard 
              key={plan.name}
              variant="blur"
              glow={plan.popular}
              className={`p-6 relative ${plan.popular ? 'border-primary/50' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-neon border-0">
                  Mais Popular
                </Badge>
              )}

              {plan.current && (
                <Badge className="absolute -top-3 right-4 bg-success border-0">
                  Atual
                </Badge>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Incluído:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="pt-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Limitações:</h4>
                      <ul className="space-y-1 mt-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button 
                  className="w-full" 
                  variant={plan.current ? "secondary" : plan.popular ? "default" : "outline"}
                  disabled={plan.current}
                >
                  {plan.current ? "Plano Atual" : "Escolher Plano"}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Upgrade Benefits */}
      <GlassCard variant="blur" className="p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Por que fazer upgrade?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-neon rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">IA Avançada</h3>
              <p className="text-sm text-muted-foreground">
                Otimize automaticamente seus textos e horários de envio
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-neon rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Mais Alcance</h3>
              <p className="text-sm text-muted-foreground">
                Envie mais mensagens e conecte múltiplos números
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-neon rounded-2xl flex items-center justify-center mx-auto">
                <Crown className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Suporte Premium</h3>
              <p className="text-sm text-muted-foreground">
                Atendimento prioritário e gerente dedicado
              </p>
            </div>
          </div>

          <Button size="lg" className="mt-6">
            Fazer Upgrade Agora
          </Button>
        </div>
      </GlassCard>
    </div>
  )
}