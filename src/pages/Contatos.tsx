import { useState } from "react"
import { 
  Plus,
  Search,
  Edit,
  Trash2,
  Upload,
  Download,
  Users,
  FileText,
  Eye,
  Check,
  X,
  Filter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

const mockLists = [
  {
    id: "1",
    name: "Clientes Quentes",
    count: 153,
    created: "15/01/2024",
    lastUsed: "Ontem"
  },
  {
    id: "2", 
    name: "Leads Imobiliária Central",
    count: 287,
    created: "10/01/2024", 
    lastUsed: "2 dias atrás"
  },
  {
    id: "3",
    name: "Prospects Centro",
    count: 89,
    created: "05/01/2024",
    lastUsed: "1 semana atrás"
  },
  {
    id: "4",
    name: "Clientes VIP Premium",
    count: 45,
    created: "20/12/2023",
    lastUsed: "3 dias atrás"
  }
]

const mockContacts = [
  { id: 1, name: "João Silva", phone: "+55 11 99999-9999", valid: true },
  { id: 2, name: "Maria Santos", phone: "+55 11 88888-8888", valid: true },
  { id: 3, name: "Pedro Costa", phone: "+55 11 77777-7777", valid: false },
  { id: 4, name: "Ana Lima", phone: "+55 11 66666-6666", valid: true },
  { id: 5, name: "Carlos Oliveira", phone: "+55 11 55555-5555", valid: true }
]

export default function Contatos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [selectedList, setSelectedList] = useState<any>(null)
  const [newListName, setNewListName] = useState("")
  const [createMethod, setCreateMethod] = useState("manual")
  const [manualContacts, setManualContacts] = useState([
    { name: "", phone: "" }
  ])
  const [selectedContacts, setSelectedContacts] = useState<number[]>([])

  const filteredLists = mockLists.filter(list =>
    list.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddContact = () => {
    setManualContacts([...manualContacts, { name: "", phone: "" }])
  }

  const handleRemoveContact = (index: number) => {
    setManualContacts(manualContacts.filter((_, i) => i !== index))
  }

  const handleContactChange = (index: number, field: string, value: string) => {
    const updated = [...manualContacts]
    updated[index] = { ...updated[index], [field]: value }
    setManualContacts(updated)
  }

  const handleContactSelect = (contactId: number) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    )
  }

  const handleSelectAll = () => {
    setSelectedContacts(
      selectedContacts.length === mockContacts.length 
        ? [] 
        : mockContacts.map(c => c.id)
    )
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold emoji">
            <span className="bg-gradient-neon bg-clip-text text-transparent">📒 Contatos</span>
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Gerencie suas listas de contatos para campanhas
          </p>
        </div>
        
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 electric-glow">
              <Plus className="h-4 w-4" />
              Criar nova lista
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="emoji">📝 Criar Nova Lista de Contatos</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="list-name">Nome da Lista</Label>
                <Input
                  id="list-name"
                  placeholder="Ex: Clientes Premium"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="bg-card/50"
                />
              </div>

              <Tabs value={createMethod} onValueChange={setCreateMethod} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-card/30">
                  <TabsTrigger value="manual" className="emoji">✏️ Manual</TabsTrigger>
                  <TabsTrigger value="csv" className="emoji">📄 CSV</TabsTrigger>
                  <TabsTrigger value="excel" className="emoji">📊 Excel</TabsTrigger>
                </TabsList>

                <TabsContent value="manual" className="space-y-4">
                  <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium emoji">👥 Adicionar contatos manualmente</h3>
                      <Button onClick={handleAddContact} size="sm" variant="outline">
                        <Plus className="h-4 w-4 mr-1" />
                        Adicionar linha
                      </Button>
                    </div>
                    
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {manualContacts.map((contact, index) => (
                        <div key={index} className="flex gap-3 items-center">
                          <div className="flex-1">
                            <Input
                              placeholder="Nome (opcional)"
                              value={contact.name}
                              onChange={(e) => handleContactChange(index, "name", e.target.value)}
                              className="bg-card/50"
                            />
                          </div>
                          <div className="flex-1">
                            <Input
                              placeholder="(11) 99999-9999"
                              value={contact.phone}
                              onChange={(e) => handleContactChange(index, "phone", e.target.value)}
                              className="bg-card/50"
                            />
                          </div>
                          {manualContacts.length > 1 && (
                            <Button
                              onClick={() => handleRemoveContact(index)}
                              size="sm"
                              variant="ghost"
                              className="text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="csv" className="space-y-4">
                  <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                    <h3 className="font-medium mb-4 emoji">📄 Importar arquivo CSV</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Button variant="outline" className="gap-2">
                          <Upload className="h-4 w-4" />
                          Escolher arquivo CSV
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Baixar modelo
                        </Button>
                      </div>
                      
                      <div className="p-3 bg-muted/20 rounded-lg text-sm">
                        <p className="font-medium mb-1 emoji">📋 Formato obrigatório:</p>
                        <p className="text-muted-foreground">Coluna 1: Nome (opcional) | Coluna 2: Telefone (obrigatório)</p>
                        <p className="text-muted-foreground">Exemplo: João Silva,(11) 99999-9999</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="excel" className="space-y-4">
                  <div className="p-4 bg-gradient-card rounded-2xl border border-glass-border">
                    <h3 className="font-medium mb-4 emoji">📊 Importar arquivo Excel</h3>
                    
                    <div className="space-y-4">
                      <Button variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Escolher arquivo .xlsx
                      </Button>
                      
                      <div className="p-3 bg-muted/20 rounded-lg text-sm">
                        <p className="font-medium mb-1 emoji">📋 Colunas suportadas:</p>
                        <p className="text-muted-foreground">A: Nome (opcional) | B: Telefone (obrigatório)</p>
                        <p className="text-muted-foreground">Primeira linha pode conter cabeçalhos</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-3">
                <Button
                  onClick={() => setIsCreateModalOpen(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  className="flex-1"
                  disabled={!newListName.trim()}
                >
                  Salvar lista
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar listas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-card/50 backdrop-blur-sm"
            />
          </div>
        </div>
        
        <GlassCard variant="blur" className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {mockLists.reduce((acc, list) => acc + list.count, 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground emoji">👥 Total de contatos</div>
          </div>
        </GlassCard>
      </div>

      {/* Lists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLists.map((list) => (
          <GlassCard key={list.id} variant="blur" className="p-6 hover-electric transition-electric">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{list.name}</h3>
                  <p className="text-sm text-muted-foreground emoji">
                    👤 {list.count} contatos
                  </p>
                </div>
                <div className="flex gap-1">
                  <Dialog open={isViewModalOpen && selectedList?.id === list.id} onOpenChange={(open) => {
                    setIsViewModalOpen(open)
                    if (open) setSelectedList(list)
                  }}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="emoji">👀 {selectedList?.name}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button
                              onClick={handleSelectAll}
                              variant="outline"
                              size="sm"
                              className="gap-2"
                            >
                              <Checkbox 
                                checked={selectedContacts.length === mockContacts.length}
                                onCheckedChange={handleSelectAll}
                              />
                              Selecionar todos
                            </Button>
                            <span className="text-sm text-muted-foreground">
                              {selectedContacts.length} de {mockContacts.length} selecionados
                            </span>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="gap-2">
                              <Plus className="h-4 w-4" />
                              Adicionar
                            </Button>
                            <Button size="sm" variant="outline" className="gap-2">
                              <Download className="h-4 w-4" />
                              Exportar
                            </Button>
                          </div>
                        </div>

                        <div className="border border-glass-border rounded-2xl overflow-hidden">
                          <div className="max-h-96 overflow-y-auto">
                            {mockContacts.map((contact) => (
                              <div 
                                key={contact.id} 
                                className={`
                                  flex items-center gap-4 p-3 border-b border-glass-border last:border-b-0
                                  hover:bg-card/30 transition-colors cursor-pointer
                                  ${selectedContacts.includes(contact.id) ? 'bg-primary/10' : ''}
                                `}
                                onClick={() => handleContactSelect(contact.id)}
                              >
                                <Checkbox 
                                  checked={selectedContacts.includes(contact.id)}
                                  onCheckedChange={() => handleContactSelect(contact.id)}
                                />
                                <div className="flex-1">
                                  <div className="font-medium">{contact.name}</div>
                                  <div className="text-sm text-muted-foreground">{contact.phone}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {contact.valid ? (
                                    <Badge variant="default" className="bg-success/20 text-success">
                                      <Check className="h-3 w-3 mr-1" />
                                      Válido
                                    </Badge>
                                  ) : (
                                    <Badge variant="destructive" className="bg-destructive/20">
                                      <X className="h-3 w-3 mr-1" />
                                      Inválido
                                    </Badge>
                                  )}
                                  <Button size="sm" variant="ghost">
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            onClick={() => setIsViewModalOpen(false)}
                            variant="outline"
                            className="flex-1"
                          >
                            Fechar
                          </Button>
                          <Button className="flex-1">
                            Salvar alterações
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Criada em:</span>
                  <span>{list.created}</span>
                </div>
                <div className="flex justify-between">
                  <span>Último uso:</span>
                  <span>{list.lastUsed}</span>
                </div>
              </div>

              <Separator />

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-1">
                  <Edit className="h-3 w-3" />
                  Editar
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="gap-1"
                  onClick={() => {
                    setSelectedList(list)
                    setIsViewModalOpen(true)
                  }}
                >
                  <Eye className="h-3 w-3" />
                  Ver
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {filteredLists.length === 0 && (
        <GlassCard variant="blur" className="p-12">
          <div className="text-center space-y-4">
            <Users className="h-12 w-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="text-lg font-semibold">Nenhuma lista encontrada</h3>
              <p className="text-muted-foreground">
                {searchTerm ? "Tente buscar por outro termo" : "Crie sua primeira lista de contatos"}
              </p>
            </div>
            <Button onClick={() => setIsCreateModalOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Criar primeira lista
            </Button>
          </div>
        </GlassCard>
      )}

      {/* Tips */}
      <GlassCard variant="blur" className="p-6">
        <div className="space-y-4">
          <h3 className="font-semibold emoji">💡 Dicas para gerenciar contatos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-gradient-electric rounded-xl border border-primary/20">
              <p className="emoji"><strong>📋 Organize por segmento:</strong> Crie listas específicas como "Clientes VIP", "Leads Frios", etc.</p>
            </div>
            <div className="p-3 bg-gradient-electric rounded-xl border border-primary/20">
              <p className="emoji"><strong>🔍 Valide números:</strong> Remova números inválidos para melhorar a taxa de entrega.</p>
            </div>
            <div className="p-3 bg-gradient-electric rounded-xl border border-primary/20">
              <p className="emoji"><strong>📊 Use CSV/Excel:</strong> Importe listas grandes usando arquivos estruturados.</p>
            </div>
            <div className="p-3 bg-gradient-electric rounded-xl border border-primary/20">
              <p className="emoji"><strong>🔄 Mantenha atualizado:</strong> Remova contatos inativos regularmente.</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}