import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Check, 
  ArrowLeft, 
  Mail, 
  User, 
  Phone, 
  Gift,
  Clock,
  Shield,
  TrendingUp,
  MessageCircle
} from "lucide-react";

export default function TesteGratuito() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <GlassCard className="w-full max-w-md p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center">
              <Check className="h-8 w-8 text-background" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              🎉 Teste Liberado!
            </h1>
            <p className="text-muted-foreground">
              Seu acesso gratuito foi ativado com sucesso.
            </p>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              Você receberá um e-mail em breve com suas credenciais de acesso 
              e instruções para começar.
            </p>
          </div>

          <div className="space-y-3">
            <Link to="/dashboard">
              <Button className="w-full">
                Acessar Painel Agora
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full">
                Fazer Login
              </Button>
            </Link>
          </div>
        </GlassCard>
      </div>
    );
  }

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
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center">
                <Gift className="h-10 w-10 text-background" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Experimente o ZapBroker
              </h1>
              <p className="text-xl text-muted-foreground">
                7 dias grátis • Sem necessidade de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                O que está incluso no seu teste:
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">500 mensagens gratuitas</h3>
                    <p className="text-sm text-muted-foreground">
                      Teste com volume real de envios para seus leads
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">IA para otimização</h3>
                    <p className="text-sm text-muted-foreground">
                      Melhore suas mensagens automaticamente com inteligência artificial
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success/20 rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Relatórios completos</h3>
                    <p className="text-sm text-muted-foreground">
                      Acompanhe taxa de entrega, abertura e engajamento
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center mr-3">
                    <Shield className="h-4 w-4 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Envios seguros</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistema anti-bloqueio para proteger seu WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Agendamento avançado</h3>
                    <p className="text-sm text-muted-foreground">
                      Programe campanhas para os melhores horários
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                💡 Por que testar o ZapBroker?
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-sm">
                  ✅ <strong className="text-foreground">Aumente suas vendas:</strong> Corretores 
                  que usam nossa plataforma vendem em média 5x mais
                </p>
                <p className="text-sm">
                  ✅ <strong className="text-foreground">Economize tempo:</strong> Automatize 
                  tarefas que tomam horas do seu dia
                </p>
                <p className="text-sm">
                  ✅ <strong className="text-foreground">Sem riscos:</strong> Teste completo 
                  por 7 dias, cancele quando quiser
                </p>
                <p className="text-sm">
                  ✅ <strong className="text-foreground">Suporte incluído:</strong> Nossa equipe 
                  te ajuda a configurar tudo
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div>
            <GlassCard className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Comece seu teste agora
                </h2>
                <p className="text-muted-foreground">
                  Preencha os dados abaixo e tenha acesso imediato
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="name"
                      placeholder="Seu nome completo"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail profissional</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="whatsapp"
                      placeholder="(51) 99999-9999"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground">Garantia de Segurança</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Seus dados estão protegidos. Não enviamos spam e você pode 
                    cancelar a qualquer momento.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Gift className="mr-2 h-5 w-5" />
                  Começar Teste Gratuito
                </Button>
              </form>

              <div className="mt-6 space-y-3">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Ao criar sua conta, você concorda com nossos{" "}
                    <Link to="/termos" className="text-primary hover:underline">
                      Termos de Uso
                    </Link>
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Já tem uma conta?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Fazer login
                    </Link>
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Testimonial */}
            <GlassCard className="p-6 mt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Em 1 semana usando o ZapBroker, consegui agendar mais visitas 
                  do que em todo o mês anterior. A IA realmente faz diferença!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full mr-3" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Marina Silva</p>
                    <p className="text-xs text-muted-foreground">Corretor Independente</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}