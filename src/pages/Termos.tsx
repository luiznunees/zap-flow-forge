import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Users, Zap } from "lucide-react";

export default function Termos() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/login">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Login
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        <GlassCard className="p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Shield className="mr-3 h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar a plataforma ZapBroker, você concorda em cumprir estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Zap className="mr-3 h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold text-foreground">2. Descrição do Serviço</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O ZapBroker é uma plataforma SaaS que permite aos corretores de imóveis:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Enviar mensagens automatizadas via WhatsApp</li>
              <li>Gerenciar listas de contatos</li>
              <li>Agendar campanhas de marketing</li>
              <li>Utilizar recursos de inteligência artificial</li>
              <li>Acessar relatórios e análises de performance</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Users className="mr-3 h-6 w-6 text-success" />
              <h2 className="text-2xl font-semibold text-foreground">3. Uso Permitido</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Você PODE:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Usar para fins comerciais legítimos no setor imobiliário</li>
                <li>Enviar mensagens para leads qualificados</li>
                <li>Personalizar mensagens de acordo com seu público</li>
                <li>Agendar envios em horários comerciais</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="mr-3 h-6 w-6 text-destructive" />
              <h2 className="text-2xl font-semibold text-foreground">4. Uso Proibido</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Você NÃO PODE:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Enviar spam ou mensagens não solicitadas</li>
                <li>Usar para fins ilegais ou antiéticos</li>
                <li>Compartilhar suas credenciais de acesso</li>
                <li>Tentar burlar limitações de envio</li>
                <li>Usar para perseguição ou assédio</li>
                <li>Revender ou redistribuir o serviço</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Política Anti-Spam</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-destructive">IMPORTANTE:</strong> O envio de mensagens não 
                solicitadas (spam) é estritamente proibido. Todos os contatos devem ter dado 
                consentimento para receber suas mensagens. Violações resultarão em suspensão imediata.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitações dos Planos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Light (R$ 19,90)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 500 mensagens/mês</li>
                  <li>• Sem IA</li>
                  <li>• Suporte básico</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Starter (R$ 39,90)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 2.000 mensagens/mês</li>
                  <li>• IA básica</li>
                  <li>• Suporte prioritário</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Suspensão e Cancelamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de suspender ou cancelar sua conta em caso de violação 
              destes termos, uso abusivo da plataforma, ou atividades que possam prejudicar 
              nossos serviços ou outros usuários.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Responsabilidades do Usuário</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Manter suas credenciais de acesso seguras</li>
              <li>Usar o serviço de acordo com as leis aplicáveis</li>
              <li>Respeitar os direitos de terceiros</li>
              <li>Manter seus dados de contato atualizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O ZapBroker não se responsabiliza por danos diretos ou indiretos decorrentes 
              do uso da plataforma. Nossa responsabilidade está limitada ao valor pago pelo serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Alterações nos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar estes termos periodicamente. As alterações serão comunicadas 
              via e-mail e terão efeito 30 dias após a notificação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre estes termos, entre em contato conosco através do e-mail 
              <a href="mailto:legal@zapbroker.com" className="text-primary hover:underline">
                legal@zapbroker.com
              </a> ou pelo nosso suporte.
            </p>
          </section>
        </GlassCard>

        <div className="text-center mt-8">
          <Link to="/login">
            <Button>
              Concordo com os Termos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}