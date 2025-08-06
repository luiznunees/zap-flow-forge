import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Target, 
  Eye, 
  Heart, 
  MapPin, 
  Code, 
  Zap,
  TrendingUp,
  Shield,
  Users,
  Mail,
  Phone
} from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/login">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Sobre Nós</h1>
            <p className="text-muted-foreground">
              Conheça a história por trás do ZapBroker
            </p>
          </div>
        </div>

        {/* História */}
        <GlassCard className="p-8 mb-8">
          <div className="text-center mb-8">
            <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Por que criamos o ZapBroker?
            </h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Tudo começou quando percebemos que corretores de imóveis talentosos estavam 
              perdendo vendas por não conseguirem se comunicar de forma eficiente com seus 
              leads via WhatsApp.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">O Problema</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mensagens manuais tomavam muito tempo</li>
                  <li>• Leads "esfriavam" antes do contato</li>
                  <li>• Bloqueios frequentes no WhatsApp</li>
                  <li>• Falta de organização dos contatos</li>
                  <li>• Dificuldade para acompanhar resultados</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Nossa Solução</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Disparos automatizados e seguros</li>
                  <li>• IA para otimizar mensagens</li>
                  <li>• Gestão inteligente de contatos</li>
                  <li>• Relatórios detalhados de performance</li>
                  <li>• Interface amigável e intuitiva</li>
                </ul>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Fundador */}
        <GlassCard className="p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="mr-3 h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Nosso Fundador</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center">
              <div className="w-32 h-32 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center">
                <Code className="h-16 w-16 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">João Silva</h3>
              <p className="text-muted-foreground">Desenvolvedor & Empreendedor</p>
              <div className="flex items-center justify-center mt-2 text-accent">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">Litoral Norte, RS</span>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nascido e criado no Litoral Norte do Rio Grande do Sul, João sempre teve 
                paixão por tecnologia e empreendedorismo. Aos 25 anos, após trabalhar 
                como desenvolvedor em várias startups, decidiu criar uma solução que 
                realmente fizesse diferença na vida dos profissionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "Vi muitos corretores brilhantes perdendo oportunidades por falta de 
                ferramentas adequadas. O ZapBroker nasceu para democratizar o acesso à 
                tecnologia de ponta no setor imobiliário."
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
            <p className="text-muted-foreground">
              Potencializar as vendas de corretores através da automação inteligente 
              no WhatsApp, democratizando o acesso à tecnologia de ponta.
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
            <p className="text-muted-foreground">
              Ser a plataforma de referência para comunicação automatizada no 
              mercado imobiliário brasileiro até 2030.
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <Heart className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Valores</h3>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Inovação constante</li>
              <li>• Transparência total</li>
              <li>• Foco no cliente</li>
              <li>• Crescimento sustentável</li>
            </ul>
          </GlassCard>
        </div>

        {/* Números e Conquistas */}
        <GlassCard className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Nossos Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Corretores ativos</div>
            </div>
            <div>
              <Zap className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2M+</div>
              <div className="text-sm text-muted-foreground">Mensagens enviadas</div>
            </div>
            <div>
              <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime da plataforma</div>
            </div>
            <div>
              <Users className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Satisfação do cliente</div>
            </div>
          </div>
        </GlassCard>

        {/* Contato Institucional */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Contato Institucional
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Informações Gerais</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-foreground">contato@zapbroker.com</p>
                    <p className="text-sm text-muted-foreground">Contato geral</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-foreground">parcerias@zapbroker.com</p>
                    <p className="text-sm text-muted-foreground">Parcerias e negócios</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-success mr-3" />
                  <div>
                    <p className="text-foreground">(51) 99999-9999</p>
                    <p className="text-sm text-muted-foreground">WhatsApp empresarial</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Dados da Empresa</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Razão Social:</strong> ZapBroker Tecnologia Ltda</p>
                <p><strong className="text-foreground">CNPJ:</strong> 00.000.000/0001-00</p>
                <p><strong className="text-foreground">Endereço:</strong> Rua das Tecnologias, 123</p>
                <p><strong className="text-foreground">Cidade:</strong> Torres, RS - CEP 95560-000</p>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="text-center mt-8">
          <Link to="/login">
            <Button size="lg">
              Começar a Usar ZapBroker
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}