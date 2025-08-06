import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, Chrome } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("starter");

  const plans = [
    { id: "light", name: "Light", price: "R$ 19,90" },
    { id: "starter", name: "Starter", price: "R$ 39,90" },
    { id: "pro", name: "Pro", price: "R$ 79,90" },
    { id: "turbo", name: "Turbo", price: "R$ 149,90" }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-neon opacity-20" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">ZapBroker</h1>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          </div>
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Revolucione suas vendas no WhatsApp
          </h2>
          <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
            A plataforma completa para corretores que querem vender mais com 
            disparos inteligentes e automação avançada.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Disparos seguros</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>IA integrada</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-warning rounded-full" />
              <span>Sem bloqueios</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Relatórios completos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <GlassCard className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {isLogin ? "Entrar no ZapBroker" : "Criar sua conta"}
            </h3>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Acesse sua conta e continue vendendo mais"
                : "Comece a vender mais com WhatsApp inteligente"
              }
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name"
                    placeholder="Seu nome completo"
                    className="pl-10"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
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

            {!isLogin && (
              <div className="space-y-3">
                <Label>Escolha seu plano</Label>
                <div className="grid grid-cols-2 gap-2">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-3 rounded-lg border transition-all ${
                        selectedPlan === plan.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-sm font-medium">{plan.name}</div>
                      <div className="text-xs opacity-70">{plan.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button type="submit" className="w-full">
              {isLogin ? "Entrar" : "Criar conta"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">ou</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" type="button">
              <Chrome className="mr-2 h-4 w-4" />
              Entrar com Google
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            {isLogin ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Não tem uma conta?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-primary hover:underline"
                  >
                    Criar conta
                  </button>
                </p>
                <Link to="/recuperar-senha" className="text-sm text-primary hover:underline block">
                  Esqueci minha senha
                </Link>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-primary hover:underline"
                >
                  Fazer login
                </button>
              </p>
            )}
          </div>

          {!isLogin && (
            <p className="text-xs text-muted-foreground text-center mt-4">
              Ao criar sua conta, você concorda com os{" "}
              <Link to="/termos" className="text-primary hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link to="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
            </p>
          )}
        </GlassCard>
      </div>
    </div>
  );
}