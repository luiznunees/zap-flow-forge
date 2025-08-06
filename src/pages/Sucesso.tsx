import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Sucesso() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <GlassCard className="w-full max-w-lg p-8 text-center">
        {/* Animated Success Icon */}
        <div className={`mb-6 transition-all duration-1000 ${isAnimated ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="relative">
            <CheckCircle className="h-24 w-24 text-success mx-auto" />
            <div className="absolute inset-0 h-24 w-24 text-success mx-auto animate-ping opacity-20">
              <CheckCircle className="h-24 w-24" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            🎉 Compra Concluída com Sucesso!
          </h1>
          <p className="text-lg text-muted-foreground">
            Bem-vindo ao ZapBroker! Sua jornada para vender mais no WhatsApp começa agora.
          </p>
        </div>

        {/* Plan Details */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="bg-gradient-neon/10 border border-primary/20 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-semibold text-foreground">Plano Ativado</h2>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary mb-2">Starter</p>
              <p className="text-muted-foreground mb-3">2.000 mensagens/mês • IA integrada</p>
              <div className="text-sm text-muted-foreground">
                Válido até: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className={`mb-8 transition-all duration-1000 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Próximos Passos:</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-background mr-3 mt-0.5">
                1
              </div>
              <div>
                <p className="text-foreground font-medium">Conecte seu WhatsApp</p>
                <p className="text-sm text-muted-foreground">Escaneie o QR Code no dashboard</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-background mr-3 mt-0.5">
                2
              </div>
              <div>
                <p className="text-foreground font-medium">Importe seus contatos</p>
                <p className="text-sm text-muted-foreground">CSV ou inserção manual</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center text-sm font-bold text-background mr-3 mt-0.5">
                3
              </div>
              <div>
                <p className="text-foreground font-medium">Envie sua primeira campanha</p>
                <p className="text-sm text-muted-foreground">Use a IA para otimizar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`space-y-4 transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Link to="/dashboard" className="block">
            <Button size="lg" className="w-full">
              <Zap className="mr-2 h-5 w-5" />
              Acessar Meu Painel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 mr-2" />
            <span>Você receberá um e-mail com os detalhes do seu plano</span>
          </div>
        </div>

        {/* Support Info */}
        <div className={`mt-8 pt-6 border-t border-border transition-all duration-1000 delay-1200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-sm text-muted-foreground mb-3">
            Precisa de ajuda para começar?
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/suporte">
              <Button variant="outline" size="sm">
                Central de Ajuda
              </Button>
            </Link>
            <a 
              href="https://wa.me/5551999999999?text=Acabei%20de%20assinar%20o%20ZapBroker%20e%20preciso%20de%20ajuda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Confetti Effect (CSS Animation) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary rounded-full animate-bounce opacity-70 transition-all duration-2000 ${
                isAnimated ? 'opacity-70' : 'opacity-0'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </GlassCard>
    </div>
  );
}