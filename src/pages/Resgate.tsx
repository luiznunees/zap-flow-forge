import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  Gift, 
  Bot, 
  BarChart3, 
  GraduationCap, 
  CheckCircle, 
  Rocket,
  MessageSquare,
  Users,
  Clock
} from "lucide-react";

const Resgate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você pode integrar com backend/Supabase
    toast({
      title: "🎉 Acesso liberado!",
      description: "Enviamos suas credenciais por email. Bem-vindo ao ZapBroker!",
    });
    
    setIsDialogOpen(false);
    setFormData({ nome: "", telefone: "", email: "" });
  };

  const benefits = [
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Acesso grátis por 7 dias",
      description: "Teste completo do plano Starter sem compromisso"
    },
    {
      icon: <Bot className="w-8 h-8 text-accent" />,
      title: "IA desbloqueada",
      description: "Envios inteligentes com otimização automática"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-success" />,
      title: "Painel de relatórios",
      description: "Acompanhe suas campanhas e resultados em tempo real"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-warning" />,
      title: "Tutoriais exclusivos",
      description: "Aprenda estratégias para vender mais via WhatsApp"
    }
  ];

  const socialProof = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      metric: "2.500+",
      label: "Corretores ativos"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      metric: "1M+",
      label: "Mensagens enviadas"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-success" />,
      metric: "5x",
      label: "Mais vendas"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
      style={{
        backgroundImage: `url(/api/placeholder/1920/1080)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <GlassCard className="p-8 mb-8 max-w-4xl mx-auto" glow>
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Você foi convidado para testar o ZapBroker
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Uma plataforma de envios inteligente criada para corretores de verdade.
            </p>
          </GlassCard>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {socialProof.map((item, index) => (
              <GlassCard key={index} className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  {item.icon}
                  <span className="text-2xl font-bold ml-2">{item.metric}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            O que você vai ganhar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-all duration-300" variant="blur">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* AIDA Copy */}
        <div className="mb-12">
          <GlassCard className="p-8 md:p-12 max-w-4xl mx-auto text-center" variant="blur">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
                  Corretores que usam ZapBroker vendem 5x mais
                </h2>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-success mr-2" />
                  <span className="text-lg">Comprovado por mais de 2.500 corretores</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Dispare mensagens no WhatsApp com inteligência e evite bloqueios
                </h3>
                <p className="text-lg text-muted-foreground">
                  Nossa IA otimiza automaticamente seus envios, distribuindo as mensagens 
                  em horários ideais e evitando padrões que podem gerar bloqueios.
                </p>
              </div>

              <div>
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-primary mr-3" />
                    <span className="text-2xl font-bold">7 dias grátis</span>
                  </div>
                  <p className="text-lg">
                    Acesse gratuitamente e envie até <strong>500 mensagens</strong> com nosso plano Starter de teste
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-neon"
              >
                <Gift className="w-6 h-6 mr-3" />
                🎁 Resgatar meu acesso exclusivo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl">
                  🚀 Últimos dados para liberar seu acesso
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">WhatsApp</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                  Liberar acesso agora
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Footer */}
        <div className="text-center">
          <GlassCard className="p-6 max-w-2xl mx-auto" variant="blur">
            <p className="text-muted-foreground mb-4">
              Este acesso é exclusivo e pode ser encerrado a qualquer momento.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm">Dúvidas?</span>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Suporte no WhatsApp
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg animate-pulse"
        >
          <MessageSquare className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Resgate;