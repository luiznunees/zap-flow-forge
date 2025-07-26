import { Play, Clock, Users, Zap, BookOpen, ExternalLink, Youtube } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tutorials = [
  {
    id: "1",
    title: "Como fazer disparo na hora",
    description: "Aprenda a enviar mensagens imediatamente para sua lista de contatos",
    duration: "3:45",
    difficulty: "Básico",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "1.2k",
    category: "Disparos"
  },
  {
    id: "2", 
    title: "Como agendar envios",
    description: "Configure campanhas para serem enviadas automaticamente no futuro",
    duration: "5:20",
    difficulty: "Básico",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "890",
    category: "Agendamento"
  },
  {
    id: "3",
    title: "Como usar o modo IA",
    description: "Maximize seus resultados com otimização inteligente de mensagens",
    duration: "8:15",
    difficulty: "Intermediário", 
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "2.1k",
    category: "IA",
    premium: true
  },
  {
    id: "4",
    title: "Como conectar o WhatsApp",
    description: "Passo a passo para vincular seu número e começar a usar",
    duration: "2:30",
    difficulty: "Básico",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", 
    views: "3.5k",
    category: "Configuração"
  },
  {
    id: "5",
    title: "Como acompanhar seu plano",
    description: "Entenda seu consumo e saiba quando fazer upgrade",
    duration: "4:10",
    difficulty: "Básico",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "756",
    category: "Planos"
  },
  {
    id: "6",
    title: "Análise de resultados avançada",
    description: "Interprete métricas e otimize suas campanhas",
    duration: "12:30",
    difficulty: "Avançado",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "1.8k", 
    category: "Análises",
    premium: true
  }
]

const categories = [
  { name: "Todos", icon: BookOpen, count: tutorials.length },
  { name: "Disparos", icon: Zap, count: tutorials.filter(t => t.category === "Disparos").length },
  { name: "Agendamento", icon: Clock, count: tutorials.filter(t => t.category === "Agendamento").length },
  { name: "IA", icon: Users, count: tutorials.filter(t => t.category === "IA").length },
  { name: "Configuração", icon: Users, count: tutorials.filter(t => t.category === "Configuração").length }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Básico":
      return "bg-success text-success-foreground"
    case "Intermediário":
      return "bg-warning text-warning-foreground"
    case "Avançado":
      return "bg-destructive text-destructive-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function Tutoriais() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Tutoriais
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Aprenda a usar todos os recursos da plataforma
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Youtube className="h-4 w-4" />
          Canal no YouTube
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>

      {/* Featured Tutorial */}
      <GlassCard variant="blur" glow className="p-6 border-primary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-card rounded-2xl overflow-hidden">
              <img 
                src={tutorials[2].thumbnail}
                alt={tutorials[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              {tutorials[2].premium && (
                <Badge className="absolute top-3 right-3 bg-gradient-neon border-0">
                  Premium
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Badge className={getDifficultyColor(tutorials[2].difficulty)}>
                {tutorials[2].difficulty}
              </Badge>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{tutorials[2].title}</h2>
              <p className="text-muted-foreground">{tutorials[2].description}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{tutorials[2].duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Play className="h-4 w-4" />
                <span>{tutorials[2].views} visualizações</span>
              </div>
            </div>
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Assistir Tutorial
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Categories */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <GlassCard key={category.name} variant="blur" className="p-4 cursor-pointer hover:shadow-glass transition-all">
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-gradient-neon rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{category.name}</div>
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
        <h2 className="text-xl font-semibold">Todos os Tutoriais</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <GlassCard key={tutorial.id} variant="blur" className="group cursor-pointer hover:shadow-glass transition-all overflow-hidden">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
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
                    Premium
                  </Badge>
                )}
                
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                  {tutorial.duration}
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tutorial.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{tutorial.views} views</span>
                  <span>{tutorial.category}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <GlassCard variant="blur" className="p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Não encontrou o que procurava?</h3>
          </div>
          <p className="text-muted-foreground">
            Nossa equipe está sempre criando novos conteúdos. Sugira um tutorial ou entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="outline">Sugerir Tutorial</Button>
            <Button variant="secondary">Entrar em Contato</Button>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}