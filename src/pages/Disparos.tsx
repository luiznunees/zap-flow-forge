import { useState } from "react"
import { Clock, Send, Sparkles, Plus, Filter, Search, Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

const mockHistory = [
  {
    id: "1",
    name: "Promoção Black Friday",
    total: 250,
    sent: 250,
    status: "completed",
    date: "2024-01-20 14:30",
    type: "immediate"
  },
  {
    id: "2", 
    name: "Lançamento Produto X",
    total: 150,
    sent: 89,
    status: "sending",
    date: "2024-01-20 16:00",
    type: "immediate"
  },
  {
    id: "3",
    name: "Newsletter Semanal",
    total: 300,
    sent: 0,
    status: "scheduled",
    date: "2024-01-22 09:00",
    type: "scheduled"
  }
]

export default function Disparos() {
  const [date, setDate] = useState<Date>()
  const [message, setMessage] = useState("")
  const [campaignName, setCampaignName] = useState("")
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return { variant: "default", text: "Concluído", color: "bg-success" }
      case "sending":
        return { variant: "secondary", text: "Enviando", color: "bg-warning" }
      case "scheduled":
        return { variant: "outline", text: "Agendado", color: "bg-accent" }
      case "cancelled":
        return { variant: "destructive", text: "Cancelado", color: "bg-destructive" }
      default:
        return { variant: "secondary", text: "Desconhecido", color: "bg-muted" }
    }
  }

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Disparos
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Envie mensagens em massa de forma inteligente
          </p>
        </div>
      </div>

      <Tabs defaultValue="immediate" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-card/30 backdrop-blur-glass">
          <TabsTrigger value="immediate" className="gap-2">
            <Send className="h-4 w-4" />
            Disparo na Hora
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="gap-2">
            <Clock className="h-4 w-4" />
            Agendar Disparo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="immediate" className="space-y-6">
          <GlassCard variant="blur" className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Novo Disparo Imediato</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="campaign-name">Nome da Campanha</Label>
                    <Input
                      id="campaign-name"
                      placeholder="Ex: Promoção de Janeiro"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                      className="bg-card/50 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <Label>Selecionar Contatos</Label>
                    <Select>
                      <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                        <SelectValue placeholder="Escolha uma lista" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os contatos (1.250)</SelectItem>
                        <SelectItem value="leads">Leads qualificados (350)</SelectItem>
                        <SelectItem value="customers">Clientes ativos (200)</SelectItem>
                        <SelectItem value="prospects">Prospects (700)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Configuração de Envio</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-sm text-muted-foreground">Msgs por minuto</Label>
                        <Select defaultValue="10">
                          <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 msgs/min</SelectItem>
                            <SelectItem value="10">10 msgs/min</SelectItem>
                            <SelectItem value="20">20 msgs/min</SelectItem>
                            <SelectItem value="50">50 msgs/min</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Intervalo</Label>
                        <Select defaultValue="3">
                          <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 segundo</SelectItem>
                            <SelectItem value="3">3 segundos</SelectItem>
                            <SelectItem value="5">5 segundos</SelectItem>
                            <SelectItem value="10">10 segundos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Sparkles className="h-4 w-4" />
                        Melhorar com IA
                      </Button>
                    </div>
                    <Textarea
                      id="message"
                      placeholder="Digite sua mensagem aqui..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[200px] bg-card/50 backdrop-blur-sm resize-none"
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>{message.length} caracteres</span>
                      <span>Variáveis: {"{nome}"}, {"{empresa}"}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                    <h3 className="font-medium mb-2 text-sm">Estimativa de Envio</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total de contatos:</span>
                        <span className="font-medium">1.250</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tempo estimado:</span>
                        <span className="font-medium text-primary">~2h 5min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Término previsto:</span>
                        <span className="font-medium">Hoje às 18:30</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full gap-2 h-12" 
                    disabled={!campaignName || !message}
                  >
                    <Send className="h-4 w-4" />
                    Disparar Agora
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <GlassCard variant="blur" className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-semibold">Agendar Novo Disparo</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="scheduled-campaign-name">Nome da Campanha</Label>
                    <Input
                      id="scheduled-campaign-name"
                      placeholder="Ex: Newsletter Segunda-feira"
                      className="bg-card/50 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <Label>Selecionar Contatos</Label>
                    <Select>
                      <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                        <SelectValue placeholder="Escolha uma lista" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os contatos (1.250)</SelectItem>
                        <SelectItem value="leads">Leads qualificados (350)</SelectItem>
                        <SelectItem value="customers">Clientes ativos (200)</SelectItem>
                        <SelectItem value="prospects">Prospects (700)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Data e Hora do Envio</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-card/50 backdrop-blur-sm justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "dd/MM/yyyy") : "Selecionar data"}
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
                      <Input
                        type="time"
                        className="bg-card/50 backdrop-blur-sm"
                        defaultValue="09:00"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="scheduled-message">Mensagem</Label>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Sparkles className="h-4 w-4" />
                        Melhorar com IA
                      </Button>
                    </div>
                    <Textarea
                      id="scheduled-message"
                      placeholder="Digite sua mensagem aqui..."
                      className="min-h-[200px] bg-card/50 backdrop-blur-sm resize-none"
                    />
                  </div>

                  <Button className="w-full gap-2 h-12" variant="secondary">
                    <Clock className="h-4 w-4" />
                    Agendar Envio
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>

      {/* History Section */}
      <GlassCard variant="blur" className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Histórico de Campanhas</h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar campanhas..." 
                    className="pl-9 bg-card/50 backdrop-blur-sm"
                  />
                </div>
                <Button variant="outline" size="icon" className="self-end sm:self-auto">
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
                          <Badge variant={statusConfig.variant as any} className="text-xs">
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
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-neon h-2 rounded-full transition-all"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
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
    </div>
  )
}
