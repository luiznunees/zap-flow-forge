import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  HelpCircle, 
  Ticket, 
  ArrowLeft,
  Clock,
  CheckCircle2,
  Send
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Suporte() {
  const [ticketSent, setTicketSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSent(true);
  };

  if (ticketSent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <GlassCard className="w-full max-w-md p-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Ticket Enviado!</h1>
          <p className="text-muted-foreground mb-6">
            Recebemos sua solicitação. Nossa equipe responderá em até 24 horas no seu e-mail.
          </p>
          <div className="space-y-3">
            <Link to="/dashboard">
              <Button className="w-full">
                Ir para o Dashboard
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setTicketSent(false)}
            >
              Enviar Outro Ticket
            </Button>
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Precisa de Ajuda?</h1>
            <p className="text-muted-foreground">
              Nossa equipe está aqui para ajudá-lo a ter sucesso com o ZapBroker
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Opções de Contato */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Canais de Suporte</h2>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/5551999999999?text=Olá,%20preciso%20de%20ajuda%20com%20o%20ZapBroker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-success/20 bg-success/10 hover:bg-success/20 transition-all group"
                >
                  <MessageCircle className="h-8 w-8 text-success mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Resposta imediata</p>
                  </div>
                </a>

                <Link
                  to="/faq"
                  className="flex items-center p-4 rounded-lg border border-accent/20 bg-accent/10 hover:bg-accent/20 transition-all group"
                >
                  <HelpCircle className="h-8 w-8 text-accent mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">FAQ</h3>
                    <p className="text-sm text-muted-foreground">Respostas rápidas</p>
                  </div>
                </Link>

                <div className="flex items-center p-4 rounded-lg border border-border">
                  <Mail className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">E-mail</h3>
                    <p className="text-sm text-muted-foreground">suporte@zapbroker.com</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Horários de Atendimento</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Sábado: 8h às 12h</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  WhatsApp: atendimento 24/7
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Formulário de Ticket */}
          <div className="lg:col-span-2">
            <GlassCard className="p-8">
              <div className="flex items-center mb-6">
                <Ticket className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Abrir Ticket de Suporte</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input 
                      id="name"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoria do problema</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Problema técnico</SelectItem>
                      <SelectItem value="billing">Cobrança/Planos</SelectItem>
                      <SelectItem value="whatsapp">Conexão WhatsApp</SelectItem>
                      <SelectItem value="features">Dúvidas sobre recursos</SelectItem>
                      <SelectItem value="account">Problemas na conta</SelectItem>
                      <SelectItem value="other">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject"
                    placeholder="Descreva brevemente o problema"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Descrição detalhada</Label>
                  <Textarea 
                    id="message"
                    placeholder="Descreva seu problema em detalhes. Inclua os passos que você seguiu e o que esperava que acontecesse."
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridade</Label>
                  <Select defaultValue="medium" required>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baixa - Pergunta geral</SelectItem>
                      <SelectItem value="medium">Média - Problema que afeta o uso</SelectItem>
                      <SelectItem value="high">Alta - Sistema não funciona</SelectItem>
                      <SelectItem value="urgent">Urgente - Perda de vendas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-accent">Dica:</strong> Para um atendimento mais rápido, 
                    inclua prints de tela, mensagens de erro e descreva os passos que levaram ao problema.
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Ticket
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-12">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Perguntas Frequentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Como conectar meu WhatsApp?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Acesse o dashboard, clique em "Conectar WhatsApp" e escaneie o QR Code 
                    com seu celular.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Posso mudar de plano a qualquer momento?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento 
                    na aba "Planos".
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Minha conta foi bloqueada, e agora?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato conosco imediatamente via WhatsApp ou abra um ticket 
                    urgente para análise.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Como importar minha lista de contatos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Na página "Disparos", clique em "Importar CSV" e siga as instruções 
                    para formatar seu arquivo.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}