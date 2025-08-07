import { useState } from "react"
import { 
  Clock, 
  Send, 
  Sparkles, 
  Filter, 
  Search, 
  Calendar as CalendarIcon,
  Upload,
  FileText,
  Image,
  Video,
  Shield,
  Zap,
  Bot,
  Settings,
  CheckCircle,
  AlertTriangle,
  Pause,
  Play,
  Users,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Wizard Steps
const STEPS = {
  TYPE: 1,
  MESSAGE: 2,
  CONTACTS: 3,
  CONFIG: 4,
  SCHEDULE: 5,
  REVIEW: 6,
  STATUS: 7
}

const sendingModes = [
  {
    id: "safe",
    name: "🛡️ Modo Seguro",
    description: "Ideal para evitar bloqueios",
    details: "5 mensagens a cada 60 segundos • ~100/hora",
    recommended: "Contas novas, aquecimento"
  },
  {
    id: "fast", 
    name: "⚡ Modo Rápido",
    description: "Envio acelerado",
    details: "10 mensagens a cada 30 segundos • ~1000/hora",
    recommended: "Conta validada, número forte"
  },
  {
    id: "ai",
    name: "🤖 Modo IA Otimizado", 
    description: "Planejamento inteligente",
    details: "IA calcula melhor estratégia baseada no histórico",
    recommended: "Planos Pro/Turbo",
    premium: true
  },
  {
    id: "balanced",
    name: "⚙️ Modo Balanceado",
    description: "Intermediário entre segurança e velocidade", 
    details: "8 mensagens a cada 40 segundos • ~700/hora",
    recommended: "Campanhas regulares"
  },
  {
    id: "custom",
    name: "🛠️ Modo Personalizado",
    description: "Configure manualmente",
    details: "Defina quantidade e intervalos",
    recommended: "Usuários avançados"
  }
]

const mockLists = [
  { id: "1", name: "Clientes Quentes", count: 153, lastUsed: "Ontem" },
  { id: "2", name: "Leads Imobiliária", count: 287, lastUsed: "2 dias atrás" },
  { id: "3", name: "Prospects Centro", count: 89, lastUsed: "1 semana atrás" },
  { id: "4", name: "Clientes VIP", count: 45, lastUsed: "3 dias atrás" }
]

const mockHistory = [
  {
    id: "1",
    name: "Promoção Apartamentos",
    total: 250,
    sent: 250,
    status: "completed",
    date: "Hoje 14:30",
    success: 245,
    failed: 5
  },
  {
    id: "2", 
    name: "Newsletter Semanal",
    total: 150,
    sent: 89,
    status: "sending",
    date: "Hoje 16:00",
    success: 85,
    failed: 4
  },
  {
    id: "3",
    name: "Lançamento Projeto X",
    total: 300,
    sent: 0,
    status: "scheduled",
    date: "Amanhã 09:00",
    success: 0,
    failed: 0
  }
]

export default function Disparos() {
  const [currentStep, setCurrentStep] = useState(STEPS.TYPE)
  const [date, setDate] = useState<Date>()
  const [message, setMessage] = useState("")
  const [campaignName, setCampaignName] = useState("")
  const [selectedList, setSelectedList] = useState("")
  const [sendingMode, setSendingMode] = useState("")
  const [dispatchType, setDispatchType] = useState("")
  const [isAiModalOpen, setIsAiModalOpen] = useState(false)
  const [aiPrompt, setAiPrompt] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [customConfig, setCustomConfig] = useState({
    messagesPerBatch: 5,
    intervalSeconds: 30,
    useAI: false
  })

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return { variant: "default", text: "✅ Concluído", color: "bg-success", icon: CheckCircle }
      case "sending":
        return { variant: "secondary", text: "📤 Enviando", color: "bg-warning", icon: Play }
      case "scheduled":
        return { variant: "outline", text: "📅 Agendado", color: "bg-accent", icon: Clock }
      case "paused":
        return { variant: "secondary", text: "⏸️ Pausado", color: "bg-muted", icon: Pause }
      default:
        return { variant: "secondary", text: "❓ Desconhecido", color: "bg-muted", icon: AlertTriangle }
    }
  }

  const handleNextStep = () => {
    if (currentStep === STEPS.SCHEDULE && dispatchType === "immediate") {
      setCurrentStep(STEPS.REVIEW)
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep === STEPS.REVIEW && dispatchType === "immediate") {
      setCurrentStep(STEPS.CONFIG)
    } else {
      setCurrentStep(prev => prev - 1)
    }
  }

  const renderStepIndicator = () => {
    const maxStep = dispatchType === "immediate" ? 6 : 7
    const steps = [
      "Tipo",
      "Mensagem", 
      "Contatos",
      "Configuração",
      ...(dispatchType === "scheduled" ? ["Agendamento"] : []),
      "Revisão",
      "Status"
    ]
    
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-2">
          {steps.slice(0, maxStep).map((step, index) => {
            const stepNumber = index + 1
            const isActive = stepNumber === currentStep
            const isCompleted = stepNumber < currentStep
            
            return (
              <div key={step} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all
                  ${isCompleted ? 'bg-success text-success-foreground' :
                    isActive ? 'bg-primary text-primary-foreground' : 
                    'bg-muted text-muted-foreground'}
                `}>
                  {isCompleted ? <CheckCircle className="h-4 w-4" /> : stepNumber}
                </div>
                <span className={`ml-2 text-xs ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {step}
                </span>
                {index < steps.slice(0, maxStep).length - 1 && (
                  <div className={`w-8 h-px mx-3 ${stepNumber < currentStep ? 'bg-success' : 'bg-muted'}`} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (currentStep === STEPS.STATUS) {
    // Status em tempo real
    return (
      <div className="space-y-6 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold emoji">📤 Acompanhe seu envio</h1>
            <p className="text-muted-foreground">Campanha: {campaignName || "Sem nome"}</p>
          </div>
          <Button onClick={() => setCurrentStep(STEPS.TYPE)}>
            Fazer novo disparo
          </Button>
        </div>

        <GlassCard variant="blur" className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Status do Envio</h2>
              <Badge className="bg-warning/20 text-warning">Em progresso</Badge>
            </div>

            <div className="space-y-4">
              <Progress value={65} className="h-3" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">89</div>
                  <div className="text-xs text-muted-foreground">Enviadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">4</div>
                  <div className="text-xs text-muted-foreground">Falhas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">57</div>
                  <div className="text-xs text-muted-foreground">Pendentes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">~12min</div>
                  <div className="text-xs text-muted-foreground">Restante</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Detalhes por contato:</h3>
              <div className="max-h-60 overflow-y-auto space-y-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex items-center justify-between p-2 bg-card/30 rounded-lg text-sm">
                    <span>+55 11 9{i}999-999{i}</span>
                    <Badge variant="outline" className="text-xs">
                      {i % 3 === 0 ? "❌ Falhou" : "✅ Enviado"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold emoji">
            <span className="bg-gradient-neon bg-clip-text text-transparent">📤 Disparos</span>
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Envie mensagens em massa de forma inteligente
          </p>
        </div>
      </div>

      {renderStepIndicator()}

      {/* Step 1: Tipo de Disparo */}
      {currentStep === STEPS.TYPE && (
        <GlassCard variant="blur" className="p-6 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold emoji">🚀 Como deseja disparar sua mensagem?</h2>
              <p className="text-muted-foreground mt-2">Escolha entre envio imediato ou agendado</p>
            </div>

            <RadioGroup value={dispatchType} onValueChange={setDispatchType} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <RadioGroupItem value="immediate" id="immediate" className="peer sr-only" />
                <Label 
                  htmlFor="immediate" 
                  className="flex flex-col items-center justify-center p-6 bg-card/30 rounded-2xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/10 hover:bg-card/50 cursor-pointer transition-all"
                >
                  <Send className="h-8 w-8 text-primary mb-3" />
                  <span className="font-semibold emoji">⏱️ Disparo imediato</span>
                  <span className="text-sm text-muted-foreground mt-1">Envie agora mesmo</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="scheduled" id="scheduled" className="peer sr-only" />
                <Label 
                  htmlFor="scheduled" 
                  className="flex flex-col items-center justify-center p-6 bg-card/30 rounded-2xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/10 hover:bg-card/50 cursor-pointer transition-all"
                >
                  <Clock className="h-8 w-8 text-accent mb-3" />
                  <span className="font-semibold emoji">📅 Agendar envio</span>
                  <span className="text-sm text-muted-foreground mt-1">Programe para depois</span>
                </Label>
              </div>
            </RadioGroup>

            <div className="flex justify-end">
              <Button onClick={handleNextStep} disabled={!dispatchType}>
                Próxima etapa
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Step 2: Mensagem */}
      {currentStep === STEPS.MESSAGE && (
        <GlassCard variant="blur" className="p-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold emoji">✍️ Escreva a mensagem que será enviada</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Digite sua mensagem aqui..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[200px] bg-card/50 backdrop-blur-sm resize-none pr-20"
                    />
                    <Dialog open={isAiModalOpen} onOpenChange={setIsAiModalOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          className="absolute bottom-3 right-3 gap-1"
                          variant="secondary"
                        >
                          <Sparkles className="h-4 w-4" />
                          IA
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="emoji">🤖 Melhorar com IA</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Como você quer melhorar a mensagem?</Label>
                            <Textarea
                              placeholder="Ex: Torne mais persuasiva para vendas de imóveis"
                              value={aiPrompt}
                              onChange={(e) => setAiPrompt(e.target.value)}
                              className="bg-card/50"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              onClick={() => setIsAiModalOpen(false)}
                              variant="outline"
                              className="flex-1"
                            >
                              Cancelar
                            </Button>
                            <Button className="flex-1">
                              Melhorar
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{message.length} caracteres</span>
                  </div>
                </div>

                {/* Upload de Mídia */}
                <div>
                  <Label>📎 Anexar mídia (opcional)</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Image className="h-4 w-4" />
                      Imagem
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Video className="h-4 w-4" />
                      Vídeo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {uploadedFiles.map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-card/30 rounded text-sm">
                          <span>{file.name}</span>
                          <Button size="sm" variant="ghost">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                  <h3 className="font-medium mb-3 emoji">📊 Pré-visualização</h3>
                  <div className="bg-card/50 rounded-xl p-3 text-sm">
                    {message || "Sua mensagem aparecerá aqui..."}
                  </div>
                </div>

                <div className="p-4 bg-gradient-electric rounded-2xl border border-primary/20">
                  <h3 className="font-medium mb-2 emoji">💡 Dicas de boas práticas</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Seja direto e objetivo</li>
                    <li>• Use emojis com moderação</li>
                    <li>• Evite palavras como "promoção" ou "grátis"</li>
                    <li>• Personalize quando possível</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Voltar
              </Button>
              <Button onClick={handleNextStep} disabled={!message.trim()}>
                Próxima etapa
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Step 3: Contatos */}
      {currentStep === STEPS.CONTACTS && (
        <GlassCard variant="blur" className="p-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold emoji">📋 Selecione a lista de contatos</h2>
            
            <div className="space-y-4">
              <Select value={selectedList} onValueChange={setSelectedList}>
                <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                  <SelectValue placeholder="Escolha uma lista salva" />
                </SelectTrigger>
                <SelectContent>
                  {mockLists.map(list => (
                    <SelectItem key={list.id} value={list.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{list.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({list.count} contatos)
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedList && (
                <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium emoji">👥 Pré-visualização da lista</h3>
                    <Button variant="ghost" size="sm">
                      Editar lista
                    </Button>
                  </div>
                  
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {[1,2,3,4,5].map(i => {
                      const list = mockLists.find(l => l.id === selectedList)
                      return (
                        <div key={i} className="flex items-center justify-between p-2 bg-card/30 rounded text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span>João Silva {i}</span>
                          </div>
                          <span className="text-muted-foreground">+55 11 9999-999{i}</span>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="mt-3 text-sm text-muted-foreground">
                    <strong>{mockLists.find(l => l.id === selectedList)?.count}</strong> contatos válidos selecionados
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Voltar
              </Button>
              <Button onClick={handleNextStep} disabled={!selectedList}>
                Próxima etapa
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Step 4: Configuração */}
      {currentStep === STEPS.CONFIG && (
        <GlassCard variant="blur" className="p-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold emoji">⚙️ Configure o ritmo do envio</h2>
            
            <RadioGroup value={sendingMode} onValueChange={setSendingMode} className="space-y-3">
              {sendingModes.map(mode => (
                <div key={mode.id}>
                  <RadioGroupItem value={mode.id} id={mode.id} className="peer sr-only" />
                  <Label 
                    htmlFor={mode.id}
                    className={`
                      flex items-start gap-4 p-4 bg-card/30 rounded-2xl border-2 border-transparent 
                      peer-checked:border-primary peer-checked:bg-primary/10 hover:bg-card/50 
                      cursor-pointer transition-all
                      ${mode.premium ? 'opacity-50' : ''}
                    `}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{mode.name}</span>
                        {mode.premium && <Badge variant="outline">Pro</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{mode.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{mode.details}</p>
                      <p className="text-xs text-accent mt-1">Recomendado: {mode.recommended}</p>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {sendingMode === "custom" && (
              <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border space-y-4">
                <h3 className="font-medium emoji">🛠️ Configuração personalizada</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Mensagens por lote</Label>
                    <Input
                      type="number"
                      value={customConfig.messagesPerBatch}
                      onChange={(e) => setCustomConfig(prev => ({
                        ...prev, 
                        messagesPerBatch: parseInt(e.target.value) || 5
                      }))}
                      className="bg-card/50"
                    />
                  </div>
                  <div>
                    <Label>Intervalo (segundos)</Label>
                    <Input
                      type="number"
                      value={customConfig.intervalSeconds}
                      onChange={(e) => setCustomConfig(prev => ({
                        ...prev,
                        intervalSeconds: parseInt(e.target.value) || 30
                      }))}
                      className="bg-card/50"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Voltar
              </Button>
              <Button onClick={handleNextStep} disabled={!sendingMode}>
                Próxima etapa
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Step 5: Agendamento (apenas se scheduled) */}
      {currentStep === STEPS.SCHEDULE && dispatchType === "scheduled" && (
        <GlassCard variant="blur" className="p-6 max-w-2xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold emoji">📅 Quando deseja enviar?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Data</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full bg-card/50 backdrop-blur-sm justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Horário</Label>
                <Input
                  type="time"
                  className="bg-card/50 backdrop-blur-sm"
                  defaultValue="09:00"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Voltar
              </Button>
              <Button onClick={handleNextStep} disabled={!date}>
                Próxima etapa
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Step 6: Revisão */}
      {currentStep === STEPS.REVIEW && (
        <GlassCard variant="blur" className="p-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold emoji">👀 Revise seu disparo</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                  <h3 className="font-medium mb-2 emoji">📝 Mensagem</h3>
                  <p className="text-sm bg-card/50 p-3 rounded-lg">{message}</p>
                </div>

                <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                  <h3 className="font-medium mb-2 emoji">👥 Contatos</h3>
                  <p className="text-sm">
                    Lista: <strong>{mockLists.find(l => l.id === selectedList)?.name}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {mockLists.find(l => l.id === selectedList)?.count} contatos selecionados
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                  <h3 className="font-medium mb-2 emoji">⚙️ Configuração</h3>
                  <p className="text-sm">
                    Modo: <strong>{sendingModes.find(m => m.id === sendingMode)?.name}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {sendingModes.find(m => m.id === sendingMode)?.description}
                  </p>
                </div>

                {dispatchType === "scheduled" && date && (
                  <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                    <h3 className="font-medium mb-2 emoji">📅 Agendamento</h3>
                    <p className="text-sm">
                      Data: <strong>{format(date, "dd/MM/yyyy", { locale: ptBR })}</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">Às 09:00</p>
                  </div>
                )}

                <div className="p-4 bg-gradient-electric rounded-2xl border border-primary/20">
                  <h3 className="font-medium mb-2 emoji">📊 Estimativa</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Total de contatos:</span>
                      <span className="font-medium">{mockLists.find(l => l.id === selectedList)?.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tempo estimado:</span>
                      <span className="font-medium text-primary">~25 min</span>
                    </div>
                    {dispatchType === "immediate" && (
                      <div className="flex justify-between">
                        <span>Término previsto:</span>
                        <span className="font-medium">Hoje às 17:30</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Voltar
              </Button>
              <Button onClick={handleNextStep} className="gap-2">
                <Send className="h-4 w-4" />
                {dispatchType === "immediate" ? "Disparar Agora" : "Agendar Disparo"}
              </Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* History Section - sempre visível */}
      {currentStep <= STEPS.REVIEW && (
        <GlassCard variant="blur" className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold emoji">📈 Histórico de Campanhas</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar campanhas..." 
                    className="pl-9 bg-card/50 backdrop-blur-sm w-64"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {mockHistory.map((campaign) => {
                const statusConfig = getStatusConfig(campaign.status)
                const progress = campaign.sent / campaign.total * 100

                return (
                  <GlassCard key={campaign.id} variant="blur" className="p-4 hover:shadow-glass transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${statusConfig.color}`} />
                        <div>
                          <h3 className="font-medium">{campaign.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>{campaign.sent} / {campaign.total} mensagens</span>
                            <span>•</span>
                            <span>{campaign.date}</span>
                            <Badge variant={statusConfig.variant as any} className="text-xs emoji">
                              {statusConfig.text}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {campaign.status === "sending" && (
                          <div className="w-32">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                        )}
                        <Button variant="ghost" size="sm">Ver detalhes</Button>
                      </div>
                    </div>
                  </GlassCard>
                )
              })}
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  )
}