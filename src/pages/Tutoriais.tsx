import { useState } from "react"
import { 
  Play, 
  Clock, 
  Users, 
  Zap, 
  BookOpen, 
  ExternalLink, 
  Youtube,
  Search,
  Filter,
  Star,
  ThumbsUp,
  ThumbsDown,
  Settings,
  MessageSquare,
  Calendar,
  BarChart3,
  Bot,
  Smartphone,
  CreditCard,
  Check,
  Plus
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tutorials = [
  {
    id: "1",
    title: "Como fazer seu primeiro disparo",
    description: "Aprenda a enviar mensagens imediatamente para sua lista de contatos",
    duration: "3:45",
    difficulty: "Básico",
    views: "1.2k",
    category: "Disparos",
    emoji: "🚀",
    featured: false,
    completed: true
  },
  {
    id: "2", 
    title: "Como agendar envios inteligentes",
    description: "Configure campanhas para serem enviadas automaticamente no futuro",
    duration: "5:20",
    difficulty: "Básico",
    views: "890",
    category: "Agendamento",
    emoji: "📅",
    featured: false,
    completed: false
  },
  {
    id: "3",
    title: "Dominando o modo IA para disparos",
    description: "Maximize seus resultados com otimização inteligente de mensagens e agrupamento",
    duration: "8:15",
    difficulty: "Intermediário", 
    views: "2.1k",
    category: "IA",
    emoji: "🤖",
    premium: true,
    featured: true,
    completed: false
  },
  {
    id: "4",
    title: "Como conectar o WhatsApp sem erros",
    description: "Passo a passo para vincular seu número e começar a usar o ZapBroker",
    duration: "2:30",
    difficulty: "Básico",
    views: "3.5k",
    category: "Configuração",
    emoji: "📱",
    featured: false,
    completed: true
  },
  {
    id: "5",
    title: "Gerenciando seu plano e limites",
    description: "Entenda seu consumo, acompanhe métricas e saiba quando fazer upgrade",
    duration: "4:10",
    difficulty: "Básico",
    views: "756",
    category: "Planos",
    emoji: "💎",
    featured: false,
    completed: false
  },
  {
    id: "6",
    title: "Análise avançada de resultados",
    description: "Interprete métricas, taxas de entrega e otimize suas campanhas",
    duration: "12:30",
    difficulty: "Avançado",
    views: "1.8k", 
    category: "Análises",
    emoji: "📊",
    premium: true,
    featured: false,
    completed: false
  },
  {
    id: "7",
    title: "Criando listas de contatos eficazes",
    description: "Organize, importe e gerencie seus contatos de forma profissional",
    duration: "6:45",
    difficulty: "Intermediário",
    views: "1.3k",
    category: "Contatos",
    emoji: "👥",
    featured: false,
    completed: false
  },
  {
    id: "8",
    title: "Evitando bloqueios no WhatsApp",
    description: "Melhores práticas para manter sua conta segura e ativa",
    duration: "9:20",
    difficulty: "Intermediário",
    views: "2.8k",
    category: "Boas Práticas",
    emoji: "🛡️",
    featured: false,
    completed: false
  }
]

const categories = [
  { name: "Todos", icon: BookOpen, count: tutorials.length, emoji: "📚" },
  { name: "Iniciantes", icon: Play, count: tutorials.filter(t => t.difficulty === "Básico").length, emoji: "🟢" },
  { name: "Disparos", icon: Zap, count: tutorials.filter(t => t.category === "Disparos").length, emoji: "🚀" },
  { name: "IA", icon: Bot, count: tutorials.filter(t => t.category === "IA").length, emoji: "🤖" },
  { name: "Configuração", icon: Settings, count: tutorials.filter(t => t.category === "Configuração").length, emoji: "⚙️" },
  { name: "Análises", icon: BarChart3, count: tutorials.filter(t => t.category === "Análises").length, emoji: "📊" }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Básico":
      return "bg-success/20 text-success"
    case "Intermediário":
      return "bg-warning/20 text-warning"
    case "Avançado":
      return "bg-destructive/20 text-destructive"
    default:
      return "bg-muted/20 text-muted-foreground"
  }
}

export default function Tutoriais() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedDifficulty, setSelectedDifficulty] = useState("Todos")
  
  const featuredTutorial = tutorials.find(t => t.featured) || tutorials[2]
  
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || 
                           tutorial.category === selectedCategory ||
                           (selectedCategory === "Iniciantes" && tutorial.difficulty === "Básico")
    const matchesDifficulty = selectedDifficulty === "Todos" || tutorial.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="space-y-6 p-4 sm:p-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold emoji">
            <span className="bg-gradient-neon bg-clip-text text-transparent">📚 Tutoriais</span>
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Aprenda a usar todos os recursos da plataforma
          </p>
        </div>
        <Button variant="outline" className="gap-2 electric-border">
          <Youtube className="h-4 w-4" />
          Canal no YouTube
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar tutoriais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-card/50"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="bg-card/50">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat.name} value={cat.name}>
                <span className="emoji">{cat.emoji} {cat.name} ({cat.count})</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="bg-card/50">
            <SelectValue placeholder="Dificuldade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todas as dificuldades</SelectItem>
            <SelectItem value="Básico">🟢 Básico</SelectItem>
            <SelectItem value="Intermediário">🟡 Intermediário</SelectItem>
            <SelectItem value="Avançado">🔴 Avançado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Featured Tutorial */}
      <GlassCard variant="blur" glow className="p-6 border-primary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-card rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">{featuredTutorial.emoji}</div>
                  <div className="text-white font-medium">Clique para assistir</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 electric-glow">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              {featuredTutorial.premium && (
                <Badge className="absolute top-3 right-3 bg-gradient-neon border-0">
                  ✨ Premium
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Badge className={getDifficultyColor(featuredTutorial.difficulty)}>
                {featuredTutorial.difficulty}
              </Badge>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 emoji">
                {featuredTutorial.emoji} {featuredTutorial.title}
              </h2>
              <p className="text-muted-foreground">{featuredTutorial.description}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{featuredTutorial.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Play className="h-4 w-4" />
                <span>{featuredTutorial.views} visualizações</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{featuredTutorial.category}</span>
              </div>
            </div>
            <Button className="gap-2 electric-glow">
              <Play className="h-4 w-4" />
              Assistir Tutorial
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Categories Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold emoji">🎯 Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.name
            return (
              <GlassCard 
                key={category.name} 
                variant="blur" 
                className={`p-4 cursor-pointer hover-electric transition-electric ${
                  isSelected ? 'border-primary/50 bg-primary/10' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl emoji">{category.emoji}</div>
                  <div>
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs text-muted-foreground">{category.count} vídeos</div>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold emoji">📹 Todos os Tutoriais</h2>
          <span className="text-sm text-muted-foreground">
            {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''} encontrado{filteredTutorials.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTutorials.map((tutorial) => (
            <GlassCard 
              key={tutorial.id} 
              variant="blur" 
              className="group cursor-pointer hover-electric transition-electric overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden bg-gradient-card">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="text-4xl emoji">{tutorial.emoji}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center electric-glow">
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-3 left-3">
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                
                {tutorial.premium && (
                  <Badge className="absolute top-3 right-3 bg-gradient-neon border-0">
                    ✨ Pro
                  </Badge>
                )}
                
                {tutorial.completed && (
                  <div className="absolute bottom-3 left-3 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-success-foreground" />
                  </div>
                )}
                
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                  {tutorial.duration}
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tutorial.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Play className="h-3 w-3" />
                    <span>{tutorial.views}</span>
                  </div>
                  <span className="emoji">{tutorial.category}</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="ghost" className="flex-1 gap-1">
                    <ThumbsUp className="h-3 w-3" />
                    Útil
                  </Button>
                  <Button size="sm" variant="ghost" className="gap-1">
                    <Star className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {filteredTutorials.length === 0 && (
        <GlassCard variant="blur" className="p-12">
          <div className="text-center space-y-4">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="text-lg font-semibold">Nenhum tutorial encontrado</h3>
              <p className="text-muted-foreground">
                Tente ajustar os filtros ou buscar por outros termos
              </p>
            </div>
            <Button onClick={() => {
              setSearchTerm("")
              setSelectedCategory("Todos")
              setSelectedDifficulty("Todos")
            }}>
              Limpar filtros
            </Button>
          </div>
        </GlassCard>
      )}

      {/* Help Section */}
      <GlassCard variant="blur" className="p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold emoji">❓ Não encontrou o que procurava?</h3>
          </div>
          <p className="text-muted-foreground">
            Nossa equipe está sempre criando novos conteúdos. Sugira um tutorial ou entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="outline" className="gap-2">
              <Plus className="h-4 w-4" />
              Sugerir Tutorial
            </Button>
            <Button variant="secondary" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Entrar em Contato
            </Button>
          </div>
          
          <div className="pt-4 text-sm text-muted-foreground">
            <p className="emoji">💡 <strong>Dica:</strong> Use nosso suporte via WhatsApp para dúvidas rápidas!</p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}