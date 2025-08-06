import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle, Lock, Eye, EyeOff } from "lucide-react";

export default function RecuperarSenha() {
  const [step, setStep] = useState<"email" | "sent" | "reset">("email");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do e-mail
    setStep("sent");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular redefinição da senha
    // Aqui redirecionaria para login com mensagem de sucesso
  };

  if (step === "sent") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <GlassCard className="w-full max-w-md p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">E-mail Enviado!</h1>
            <p className="text-muted-foreground">
              Enviamos um link para redefinir sua senha para:
            </p>
            <p className="text-foreground font-medium mt-2">{email}</p>
          </div>

          <div className="space-y-4">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Verifique sua caixa de entrada e também a pasta de spam. 
                O link é válido por 1 hora.
              </p>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setStep("email")}
            >
              Reenviar E-mail
            </Button>

            <Link to="/login">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Login
              </Button>
            </Link>
          </div>
        </GlassCard>
      </div>
    );
  }

  if (step === "reset") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <GlassCard className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Nova Senha</h1>
            <p className="text-muted-foreground">
              Crie uma nova senha para sua conta
            </p>
          </div>

          <form onSubmit={handleResetPassword} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nova senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
              <p className="text-sm text-muted-foreground">
                <strong className="text-warning">Dica:</strong> Use pelo menos 8 caracteres 
                com letras, números e símbolos.
              </p>
            </div>

            <Button type="submit" className="w-full">
              Redefinir Senha
            </Button>
          </form>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <GlassCard className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Recuperar Senha</h1>
          <p className="text-muted-foreground">
            Digite seu e-mail e enviaremos um link para redefinir sua senha
          </p>
        </div>

        <form onSubmit={handleSendEmail} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Enviar Link de Recuperação
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Lembrou da sua senha?
          </p>
          <Link to="/login">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Login
            </Button>
          </Link>
        </div>

        {/* Simulação do botão para testar o fluxo de redefinição */}
        <div className="mt-4 text-center">
          <button 
            onClick={() => setStep("reset")}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            [Demo: Simular link do e-mail]
          </button>
        </div>
      </GlassCard>
    </div>
  );
}