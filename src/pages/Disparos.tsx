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
  X,
  Bot,
  Users,
  Check,
  Plus
} from "lucide-react"
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
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

const mockContacts = [
  { id: "1", name: "João Silva", phone: "(51) 99999-9999", selected: true },
  { id: "2", name: "Maria Santos", phone: "(51) 98888-8888", selected: false },
  { id: "3", name: "Pedro Costa", phone: "(51) 97777-7777", selected: true },
  { id: "4", name: "Ana Lima", phone: "(51) 96666-6666", selected: false },
]

const contactLists = [
  { id: "all", name: "Todos os contatos", count: 1250 },
  { id: "leads", name: "Leads qualificados", count: 350 },
  { id: "customers", name: "Clientes ativos", count: 200 },
  { id: "prospects", name: "Prospects", count: 700 },
]

export default function Disparos() {
  const [date, setDate] = useState<Date>()
  const [message, setMessage] = useState("")
  const [campaignName, setCampaignName] = useState("")
  const [selectedContacts, setSelectedContacts] = useState<string[]>(["1", "3"])
  const [selectedList, setSelectedList] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [showContacts, setShowContacts] = useState(false)
  const [contacts, setContacts] = useState(mockContacts)
  const [useAIGrouping, setUseAIGrouping] = useState(false)
  const [aiPrompt, setAiPrompt] = useState("")
  const [enhancingMessage, setEnhancingMessage] = useState(false)

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setUploadedFiles(prev => [...prev, ...Array.from(files)])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return Image
    if (file.type.startsWith('video/')) return Video
    return FileText
  }

  const toggleContact = (contactId: string) => {
    setContacts(prev => 
      prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, selected: !contact.selected }
          : contact
      )
    )
  }

  const enhanceMessageWithAI = async () => {
    setEnhancingMessage(true)
    // Simular chamada de IA
    setTimeout(() => {
      setMessage(prev => 
        prev + "\n\n✨ Mensagem aprimorada com IA para melhor engajamento e conversão!"
      )
      setEnhancingMessage(false)
    }, 2000)
  }

  const selectedContactsCount = contacts.filter(c => c.selected).length

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
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
                <div className="space-y-6">
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

                  {/* Contact Selection */}
                  <div className="space-y-3">
                    <Label>Selecionar Contatos</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Select value={selectedList} onValueChange={setSelectedList}>
                        <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                          <SelectValue placeholder="Lista salva" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactLists.map(list => (
                            <SelectItem key={list.id} value={list.id}>
                              {list.name} ({list.count})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Button variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload CSV
                      </Button>

                      <Dialog open={showContacts} onOpenChange={setShowContacts}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="gap-2">
                            <Users className="h-4 w-4" />
                            Manual ({selectedContactsCount})
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Selecionar Contatos</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-3 max-h-80 overflow-y-auto">
                            {contacts.map(contact => (
                              <div key={contact.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50">
                                <Checkbox
                                  checked={contact.selected}
                                  onCheckedChange={() => toggleContact(contact.id)}
                                />
                                <div className="flex-1">
                                  <div className="font-medium">{contact.name}</div>
                                  <div className="text-sm text-muted-foreground">{contact.phone}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  {/* AI Intelligent Grouping */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={useAIGrouping}
                        onCheckedChange={(checked) => setUseAIGrouping(checked === true)}
                      />
                      <Label className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-primary" />
                        Agrupamento Inteligente com IA
                      </Label>
                    </div>
                    
                    {useAIGrouping && (
                      <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                        <Input
                          placeholder="Ex: Desejo enviar 200 mensagens em 15 minutos"
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                          className="bg-card/50 backdrop-blur-sm"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          A IA calculará a melhor distribuição para evitar bloqueios
                        </p>
                      </div>
                    )}
                  </div>

                  {!useAIGrouping && (
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
                  )}
                </div>

                <div className="space-y-6">
                  {/* Message with inline AI button */}
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
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="absolute top-3 right-3 gap-2 bg-primary/10 hover:bg-primary/20"
                        onClick={enhanceMessageWithAI}
                        disabled={enhancingMessage}
                      >
                        <Sparkles className="h-4 w-4" />
                        {enhancingMessage ? "..." : "IA"}
                      </Button>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>{message.length} caracteres</span>
                    </div>
                  </div>

                  {/* Media Upload */}
                  <div className="space-y-3">
                    <Label>Upload de Mídias (Opcional)</Label>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full gap-2" asChild>
                        <label>
                          <Upload className="h-4 w-4" />
                          Adicionar Arquivos
                          <input
                            type="file"
                            multiple
                            accept="image/*,video/*,.pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      </Button>
                      
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          {uploadedFiles.map((file, index) => {
                            const FileIcon = getFileIcon(file)
                            return (
                              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-glass-border">
                                <FileIcon className="h-5 w-5 text-muted-foreground" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium truncate">{file.name}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                  </div>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeFile(index)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                    <h3 className="font-medium mb-2 text-sm">Estimativa de Envio</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total de contatos:</span>
                        <span className="font-medium">{selectedContactsCount || 1250}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tempo estimado:</span>
                        <span className="font-medium text-primary">
                          {useAIGrouping ? "Calculado pela IA" : "~2h 5min"}
                        </span>
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
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="scheduled-campaign-name">Nome da Campanha</Label>
                    <Input
                      id="scheduled-campaign-name"
                      placeholder="Ex: Newsletter Segunda-feira"
                      className="bg-card/50 backdrop-blur-sm"
                    />
                  </div>

                  {/* Same contact selection as immediate */}
                  <div className="space-y-3">
                    <Label>Selecionar Contatos</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Select>
                        <SelectTrigger className="bg-card/50 backdrop-blur-sm">
                          <SelectValue placeholder="Lista salva" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactLists.map(list => (
                            <SelectItem key={list.id} value={list.id}>
                              {list.name} ({list.count})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Button variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload CSV
                      </Button>

                      <Button variant="outline" className="gap-2">
                        <Users className="h-4 w-4" />
                        Manual
                      </Button>
                    </div>
                  </div>

                  {/* AI Grouping for scheduled */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <Label className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-primary" />
                        Agrupamento Inteligente com IA
                      </Label>
                    </div>
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

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="scheduled-message">Mensagem</Label>
                    <div className="relative">
                      <Textarea
                        id="scheduled-message"
                        placeholder="Digite sua mensagem aqui..."
                        className="min-h-[200px] bg-card/50 backdrop-blur-sm resize-none pr-20"
                      />
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="absolute top-3 right-3 gap-2 bg-primary/10 hover:bg-primary/20"
                      >
                        <Sparkles className="h-4 w-4" />
                        IA
                      </Button>
                    </div>
                  </div>

                  {/* Media Upload for scheduled */}
                  <div className="space-y-3">
                    <Label>Upload de Mídias (Opcional)</Label>
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <label>
                        <Upload className="h-4 w-4" />
                        Adicionar Arquivos
                        <input
                          type="file"
                          multiple
                          accept="image/*,video/*,.pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                    </Button>
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Histórico de Campanhas</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
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
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`w-3 h-3 rounded-full ${statusConfig.color} flex-shrink-0`} />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium truncate">{campaign.name}</h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mt-1">
                          <span>{campaign.sent} / {campaign.total} mensagens</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{campaign.date}</span>
                          <Badge variant={statusConfig.variant as any} className="text-xs">
                            {statusConfig.text}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      {campaign.status === "sending" && (
                        <div className="w-full sm:w-32">
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
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        Ver detalhes
                      </Button>
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