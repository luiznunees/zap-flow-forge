import { useState } from "react"
import { 
  Check, 
  Crown, 
  Zap, 
  TrendingUp, 
  Star, 
  Sparkles,
  X,
  ArrowRight,
  CreditCard,
  Download,
  Settings,
  BarChart3,
  MessageSquare,
  Bot,
  Calendar,
  HeadphonesIcon,
  Shield,
  Send,
  Users
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

const plans = [
  {
    id: "light",
    name: "Light",
    price: "R$ 29,90",
    period: "/mês",
    description: "Corretores iniciantes testando o digital",
    color: "from-yellow-500/20 to-yellow-600/10",
    features: [
      { name: "Envio de mensagens", value: "250/semana", included: true },
      { name: "Suporte a mídia", value: "Não", included: false },
      { name: "Acesso à IA", value: "Não", included: false },
      { name: "Visualização em tempo real", value: "Não", included: false },
      { name: "Campanhas salvas", value: "1", included: true },
      { name: "Listas de contatos", value: "1", included: true },
      { name: "Envio agendado", value: "Sim", included: true },
      { name: "Suporte prioritário", value: "Não", included: false },
      { name: "Modo IA", value: "Não", included: false }
    ],
    costPerMessage: "R$ 0,119",
    current: true
  },
  {
    id: "starter", 
    name: "Starter",
    price: "R$ 69,90",
    period: "/mês",
    description: "Corretores com baixo volume e necessidade de mídia",
    color: "from-blue-500/20 to-blue-600/10",
    features: [
      { name: "Envio de mensagens", value: "500/semana", included: true },
      { name: "Suporte a mídia", value: "Sim", included: true },
      { name: "Acesso à IA", value: "Não", included: false },
      { name: "Visualização em tempo real", value: "Sim", included: true },
      { name: "Campanhas salvas", value: "3", included: true },
      { name: "Listas de contatos", value: "3", included: true },
      { name: "Envio agendado", value: "Sim", included: true },
      { name: "Suporte prioritário", value: "Não", included: false },
      { name: "Modo IA", value: "Não", included: false }
    ],
    costPerMessage: "R$ 0,1398",
    popular: true
  },
  {
    id: "pro",
    name: "Pro", 
    price: "R$ 119,90",
    period: "/mês",
    description: "Corretores que fazem disparos frequentes com IA",
    color: "from-purple-500/20 to-purple-600/10",
    features: [
      { name: "Envio de mensagens", value: "1.250/semana", included: true },
      { name: "Suporte a mídia", value: "Sim", included: true },
      { name: "Acesso à IA", value: "Sim", included: true },
      { name: "Visualização em tempo real", value: "Sim", included: true },
      { name: "Campanhas salvas", value: "Ilimitadas", included: true },
      { name: "Listas de contatos", value: "10", included: true },
      { name: "Envio agendado", value: "Sim", included: true },
      { name: "Suporte prioritário", value: "Sim", included: true },
      { name: "Modo IA", value: "Sim", included: true }
    ],
    costPerMessage: "R$ 0,0959"
  },
  {
    id: "turbo",
    name: "Turbo",
    price: "R$ 199,90", 
    period: "/mês",
    description: "Imobiliárias ou corretores high performance",
    color: "from-green-500/20 to-green-600/10",
    features: [
      { name: "Envio de mensagens", value: "2.500/semana", included: true },
      { name: "Suporte a mídia", value: "Sim", included: true },
      { name: "Acesso à IA", value: "Sim", included: true },
      { name: "Visualização em tempo real", value: "Sim", included: true },
      { name: "Campanhas salvas", value: "Ilimitadas", included: true },
      { name: "Listas de contatos", value: "Ilimitadas", included: true },
      { name: "Envio agendado", value: "Sim", included: true },
      { name: "Suporte prioritário", value: "VIP", included: true },
      { name: "Modo IA", value: "Sim", included: true }
    ],
    costPerMessage: "R$ 0,0799",
    premium: true
  }
]

const currentUsage = {
  messages: { current: 1080, limit: 1000 }, // Light plan: 250/week * 4 weeks
  campaigns: { current: 1, limit: 1 },
  lists: { current: 1, limit: 1 },
  plan: "light"
}

const paymentHistory = [
  { date: "15/01/2024", amount: "R$ 29,90", method: "Cartão **** 1234", status: "Paga" },
  { date: "15/12/2023", amount: "R$ 29,90", method: "Cartão **** 1234", status: "Paga" },
  { date: "15/11/2023", amount: "R$ 29,90", method: "Cartão **** 1234", status: "Paga" }
]

export default function Plano() {
  const [activeTab, setActiveTab] = useState("overview")
  const currentPlan = plans.find(p => p.current) || plans[0]
  const usagePercentage = (currentUsage.messages.current / currentUsage.messages.limit) * 100

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold emoji">
            <span className="bg-gradient-neon bg-clip-text text-transparent">💎 Meu Plano</span>
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Gerencie sua assinatura e acompanhe o uso
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Alterar pagamento
          </Button>
          <Button className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Fazer upgrade
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-card/30">
          <TabsTrigger value="overview" className="emoji">📊 Resumo</TabsTrigger>
          <TabsTrigger value="usage" className="emoji">📈 Uso</TabsTrigger>
          <TabsTrigger value="plans" className="emoji">💰 Planos</TabsTrigger>
          <TabsTrigger value="billing" className="emoji">🧾 Faturas</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Current Plan Status */}
          <GlassCard variant="blur" className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold emoji">📋 Plano Atual</h2>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{currentPlan.name}</div>
                  <div className="text-muted-foreground">Renovação em 15 de fevereiro</div>
                  <Badge className="mt-2 bg-success/20 text-success">✅ Ativa</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold emoji">💬 Uso de Mensagens</h3>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Este mês</span>
                    <span className="text-sm font-medium">
                      {currentUsage.messages.current.toLocaleString()} / {currentUsage.messages.limit.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={usagePercentage} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {usagePercentage.toFixed(1)}% utilizado
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-warning" />
                  <h3 className="font-semibold emoji">⚙️ Recursos</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>IA:</span>
                    <Badge variant="secondary" className="bg-destructive/20 text-destructive">
                      ❌ Não incluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Mídia:</span>
                    <Badge variant="secondary" className="bg-destructive/20 text-destructive">
                      ❌ Não incluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Agendamento:</span>
                    <Badge variant="default" className="bg-success/20 text-success">
                      ✅ Incluído
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {usagePercentage > 80 && (
              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-2xl">
                <div className="flex items-center gap-2 text-warning">
                  <Star className="h-5 w-5" />
                  <span className="font-medium emoji">⚠️ Atenção: Limite próximo</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Você está próximo do limite mensal. Considere fazer upgrade para não perder envios.
                </div>
                <Button size="sm" className="mt-2">
                  Fazer upgrade agora
                </Button>
              </div>
            )}
          </GlassCard>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <GlassCard variant="blur" className="p-4 text-center hover-electric transition-electric cursor-pointer">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-medium emoji">🔄 Mudar Plano</div>
              <div className="text-xs text-muted-foreground">Ver opções disponíveis</div>
            </GlassCard>
            
            <GlassCard variant="blur" className="p-4 text-center hover-electric transition-electric cursor-pointer">
              <Download className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="font-medium emoji">🧾 Ver Faturas</div>
              <div className="text-xs text-muted-foreground">Histórico de pagamentos</div>
            </GlassCard>
            
            <GlassCard variant="blur" className="p-4 text-center hover-electric transition-electric cursor-pointer">
              <CreditCard className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="font-medium emoji">💳 Alterar Pagamento</div>
              <div className="text-xs text-muted-foreground">Cartão ou método</div>
            </GlassCard>
            
            <GlassCard variant="blur" className="p-4 text-center hover-electric transition-electric cursor-pointer">
              <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="font-medium emoji">📈 Ver Limites</div>
              <div className="text-xs text-muted-foreground">Acompanhe uso detalhado</div>
            </GlassCard>
          </div>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-6">
          <GlassCard variant="blur" className="p-6">
            <h2 className="text-xl font-semibold mb-6 emoji">📊 Limites do Plano</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="font-medium">Mensagens no mês</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{currentUsage.messages.current.toLocaleString()}</span>
                    <span>{currentUsage.messages.limit.toLocaleString()}</span>
                  </div>
                  <Progress value={usagePercentage} className="h-3" />
                  <div className="text-xs text-muted-foreground">
                    {(currentUsage.messages.limit - currentUsage.messages.current).toLocaleString()} mensagens restantes
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-accent" />
                  <span className="font-medium">Campanhas criadas</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{currentUsage.campaigns.current}</span>
                    <span>{currentUsage.campaigns.limit}</span>
                  </div>
                  <Progress value={(currentUsage.campaigns.current / currentUsage.campaigns.limit) * 100} className="h-3" />
                  <div className="text-xs text-muted-foreground">
                    {currentUsage.campaigns.limit - currentUsage.campaigns.current} campanhas restantes
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-warning" />
                  <span className="font-medium">Listas de contatos</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{currentUsage.lists.current}</span>
                    <span>{currentUsage.lists.limit}</span>
                  </div>
                  <Progress value={(currentUsage.lists.current / currentUsage.lists.limit) * 100} className="h-3" />
                  <div className="text-xs text-muted-foreground">
                    {currentUsage.lists.limit - currentUsage.lists.current} listas restantes
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-electric rounded-2xl border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium emoji">📈 Precisa de mais?</h3>
                  <p className="text-sm text-muted-foreground">
                    Faça upgrade para aumentar seus limites
                  </p>
                </div>
                <Button>Ver planos</Button>
              </div>
            </div>
          </GlassCard>
        </TabsContent>

        {/* Plans Tab */}
        <TabsContent value="plans" className="space-y-6">
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold emoji">🚀 Escolha o plano ideal para você</h2>
              <p className="text-muted-foreground">
                Compare todos os recursos e escolha o que melhor atende suas necessidades
              </p>
            </div>
            
            {/* Plans Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {plans.map((plan) => (
                <GlassCard 
                  key={plan.id}
                  variant="blur"
                  glow={plan.popular || plan.current}
                  className={`p-6 relative ${plan.popular ? 'border-primary/50' : plan.current ? 'border-success/50' : ''}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-neon border-0">
                      🔥 Mais Popular
                    </Badge>
                  )}

                  {plan.current && (
                    <Badge className="absolute -top-3 right-4 bg-success border-0">
                      ✅ Atual
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

                    <div className="text-xs text-center p-2 bg-gradient-electric rounded-lg border border-primary/20">
                      <span className="emoji">💰 {plan.costPerMessage}/mensagem</span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Recursos inclusos:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            {feature.included ? (
                              <Check className="h-4 w-4 text-success flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            )}
                            <span className={feature.included ? '' : 'text-muted-foreground'}>
                              {feature.name}: {feature.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full" 
                      variant={plan.current ? "secondary" : plan.popular ? "default" : "outline"}
                      disabled={plan.current}
                    >
                      {plan.current ? "✅ Plano Atual" : "Escolher Plano"}
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Comparison with WhatsApp API */}
            <GlassCard variant="blur" className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold emoji">💸 Por que ZapBroker é mais barato?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl">
                    <h4 className="font-semibold text-destructive mb-2 emoji">❌ WhatsApp Cloud API</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• R$ 0,16 a R$ 0,20 por mensagem</li>
                      <li>• Custo para 1.250 msgs/semana: R$ 800-1.000/mês</li>
                      <li>• Exige aprovação de template</li>
                      <li>• Integração técnica complexa</li>
                      <li>• Necessita servidores próprios</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-success/10 border border-success/20 rounded-2xl">
                    <h4 className="font-semibold text-success mb-2 emoji">✅ ZapBroker</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Até 20x mais barato por mensagem</li>
                      <li>• Envio simples e rápido</li>
                      <li>• Sem integrações técnicas complexas</li>
                      <li>• Interface amigável</li>
                      <li>• Já pronto para uso</li>
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <GlassCard variant="blur" className="p-6">
                <h2 className="text-xl font-semibold mb-6 emoji">🧾 Histórico de Pagamentos</h2>
                
                <div className="space-y-3">
                  {paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-card rounded-2xl border border-glass-border">
                      <div>
                        <div className="font-medium">{payment.date}</div>
                        <div className="text-sm text-muted-foreground">{payment.method}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-medium">{payment.amount}</div>
                          <Badge variant="default" className="bg-success/20 text-success">
                            ✅ {payment.status}
                          </Badge>
                        </div>
                        <Button size="sm" variant="ghost" className="gap-1">
                          <Download className="h-3 w-3" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="space-y-6">
              <GlassCard variant="blur" className="p-6">
                <h3 className="font-semibold mb-4 emoji">💳 Próxima Cobrança</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span className="font-medium">15/02/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor:</span>
                    <span className="font-medium text-primary">R$ 29,90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Método:</span>
                    <span className="font-medium">Cartão **** 1234</span>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full">
                    Alterar método
                  </Button>
                </div>
              </GlassCard>

              <GlassCard variant="blur" className="p-6">
                <h3 className="font-semibold mb-4 emoji">⚙️ Configurações</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full gap-2">
                    <CreditCard className="h-4 w-4" />
                    Alterar pagamento
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Exportar faturas
                  </Button>
                  <Button variant="ghost" className="w-full text-destructive gap-2">
                    <X className="h-4 w-4" />
                    Cancelar assinatura
                  </Button>
                </div>
              </GlassCard>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}