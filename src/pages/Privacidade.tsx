import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Database, Lock, Eye, Trash2, Cookie } from "lucide-react";

export default function Privacidade() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">
              Em conformidade com a LGPD • Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        <GlassCard className="p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Shield className="mr-3 h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">1. Compromisso com sua Privacidade</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              No ZapBroker, levamos sua privacidade a sério. Esta política explica como coletamos, 
              usamos, armazenamos e protegemos seus dados pessoais, em total conformidade com a 
              Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Database className="mr-3 h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold text-foreground">2. Dados que Coletamos</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dados de Cadastro:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Nome completo</li>
                  <li>E-mail</li>
                  <li>Senha (criptografada)</li>
                  <li>Plano escolhido</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dados de Uso:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Listas de contatos importadas</li>
                  <li>Mensagens enviadas (para relatórios)</li>
                  <li>Números de telefone dos destinatários</li>
                  <li>Estatísticas de campanhas</li>
                  <li>Logs de atividade da plataforma</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Dados Técnicos:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador</li>
                  <li>Sistema operacional</li>
                  <li>Horário de acesso</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Eye className="mr-3 h-6 w-6 text-success" />
              <h2 className="text-2xl font-semibold text-foreground">3. Como Usamos seus Dados</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Finalidades Principais:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Fornecer os serviços da plataforma</li>
                  <li>Processar envios de mensagens</li>
                  <li>Gerar relatórios de performance</li>
                  <li>Oferecer suporte técnico</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Finalidades Secundárias:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Melhorar nossos serviços</li>
                  <li>Enviar atualizações importantes</li>
                  <li>Personalizar sua experiência</li>
                  <li>Prevenir fraudes e abusos</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Cookie className="mr-3 h-6 w-6 text-warning" />
              <h2 className="text-2xl font-semibold text-foreground">4. Cookies e Tecnologias</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Manter você logado na plataforma</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o uso da plataforma</li>
              <li>Melhorar a segurança</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="mr-3 h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">5. Integração com WhatsApp</h2>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-accent">Importante:</strong> Nossa integração com o WhatsApp 
                utiliza a API oficial do WhatsApp Business. Não armazenamos o conteúdo das suas 
                conversas pessoais. Apenas processamos as mensagens que você escolhe enviar através 
                da nossa plataforma.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Uso de Inteligência Artificial</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa IA processa suas mensagens para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Sugerir melhorias no texto</li>
              <li>Otimizar horários de envio</li>
              <li>Personalizar mensagens automaticamente</li>
              <li>Detectar padrões de engajamento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground">Nota:</strong> Os dados processados pela IA não 
              são compartilhados com terceiros e são usados exclusivamente para melhorar sua experiência.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Compartilhamento de Dados</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-success pl-4">
                <h3 className="font-semibold text-success mb-2">✅ Não Compartilhamos:</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Suas listas de contatos</li>
                  <li>• Conteúdo das mensagens</li>
                  <li>• Dados pessoais para marketing</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-warning pl-4">
                <h3 className="font-semibold text-warning mb-2">⚠️ Compartilhamos Apenas:</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Com prestadores de serviço (ex: hospedagem)</li>
                  <li>• Quando exigido por lei</li>
                  <li>• Com seu consentimento explícito</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Segurança dos Dados</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-border rounded-lg">
                <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Criptografia</h3>
                <p className="text-sm text-muted-foreground">Dados criptografados em trânsito e repouso</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <Shield className="h-8 w-8 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Backup</h3>
                <p className="text-sm text-muted-foreground">Backups automáticos e seguros</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <Eye className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Monitoramento</h3>
                <p className="text-sm text-muted-foreground">Monitoramento 24/7 de segurança</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Trash2 className="mr-3 h-6 w-6 text-destructive" />
              <h2 className="text-2xl font-semibold text-foreground">9. Seus Direitos (LGPD)</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você tem os seguintes direitos sobre seus dados:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Acesso:</strong> Saber quais dados temos</li>
                <li><strong className="text-foreground">Correção:</strong> Corrigir dados incorretos</li>
                <li><strong className="text-foreground">Exclusão:</strong> Deletar seus dados</li>
                <li><strong className="text-foreground">Portabilidade:</strong> Exportar seus dados</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Oposição:</strong> Recusar processamento</li>
                <li><strong className="text-foreground">Limitação:</strong> Restringir uso</li>
                <li><strong className="text-foreground">Revogação:</strong> Retirar consentimento</li>
                <li><strong className="text-foreground">Informação:</strong> Saber como usamos</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos seus dados apenas pelo tempo necessário para fornecer nossos serviços. 
              Dados de conta são mantidos enquanto sua conta estiver ativa. Dados de campanhas 
              são mantidos por até 2 anos para fins de relatórios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contato e Solicitações</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para exercer seus direitos ou tirar dúvidas sobre privacidade:
              </p>
              <div className="space-y-2">
                <p className="text-foreground">
                  <strong>E-mail:</strong> 
                  <a href="mailto:privacidade@zapbroker.com" className="text-primary hover:underline ml-2">
                    privacidade@zapbroker.com
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>DPO (Encarregado):</strong> 
                  <a href="mailto:dpo@zapbroker.com" className="text-primary hover:underline ml-2">
                    dpo@zapbroker.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta política periodicamente. Alterações significativas serão 
              comunicadas via e-mail com pelo menos 30 dias de antecedência.
            </p>
          </section>
        </GlassCard>

        <div className="text-center mt-8">
          <Link to="/login">
            <Button>
              Entendi a Política de Privacidade
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}