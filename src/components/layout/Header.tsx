import { useState } from "react"
import { Bell, ChevronDown, Wifi, WifiOff, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { QRCodeDisplay } from "@/components/whatsapp/QRCodeDisplay"
import { SidebarTrigger } from "@/components/ui/sidebar"

type ConnectionStatus = "connected" | "reconnect" | "disconnected"

export function Header() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("disconnected")
  const [showQR, setShowQR] = useState(false)
  
  const planUsage = { current: 1250, limit: 2000 }
  const usagePercentage = (planUsage.current / planUsage.limit) * 100

  const getConnectionConfig = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return {
          variant: "connected" as const,
          text: "Conectado",
          icon: Wifi,
          color: "text-success",
          description: "Você está conectado! Pode começar a enviar suas mensagens."
        }
      case "reconnect": 
        return {
          variant: "reconnect" as const,
          text: "Reconectar",
          icon: AlertTriangle,
          color: "text-warning",
          description: "Sua sessão está instável. Recomendamos reconectar."
        }
      case "disconnected":
        return {
          variant: "disconnected" as const,
          text: "Conectar",
          icon: WifiOff,
          color: "text-destructive",
          description: "Conecte-se para começar a enviar mensagens."
        }
    }
  }

  const connectionConfig = getConnectionConfig(connectionStatus)
  const ConnectionIcon = connectionConfig.icon

  return (
    <header className="sticky top-0 z-50 w-full animate-slide-in-right">
      <GlassCard variant="blur" className="rounded-none border-b border-glass-border backdrop-blur-2xl bg-background/80">
        <div className="flex h-16 items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                ZapBroker
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Plan Usage */}
            <GlassCard variant="blur" className="px-2 sm:px-4 py-2 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="text-sm">
                  <span className="font-medium text-foreground">
                    {planUsage.current.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground hidden lg:inline"> de </span>
                  <span className="font-medium text-foreground hidden lg:inline">
                    {planUsage.limit.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground hidden lg:inline"> mensagens</span>
                </div>
                <div className="w-16 sm:w-24">
                  <Progress value={usagePercentage} className="h-2" />
                </div>
              </div>
            </GlassCard>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="glass" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-primary border-0">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-4">
                  <h3 className="font-semibold mb-3">Notificações</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium">Disparo concluído</div>
                      <div className="text-muted-foreground">Campanha "Promoção Black Friday" enviada para 150 contatos</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Limite de mensagens</div>
                      <div className="text-muted-foreground">Você está próximo do limite mensal</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Nova atualização</div>
                      <div className="text-muted-foreground">Agrupamento inteligente com IA disponível</div>
                    </div>
                  </div>
                  <Button variant="link" className="mt-3 p-0 h-auto">
                    Ver todas
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* WhatsApp Connection */}
            <div className="relative">
              <Button 
                variant={connectionConfig.variant}
                onClick={() => setShowQR(!showQR)}
                className="gap-2"
              >
                <ConnectionIcon className="h-4 w-4" />
                {connectionConfig.text}
                <div className={`w-2 h-2 rounded-full ${
                  connectionStatus === "connected" ? "bg-success animate-pulse" :
                  connectionStatus === "reconnect" ? "bg-warning animate-pulse" :
                  "bg-destructive"
                }`} />
              </Button>

              {showQR && (
                <QRCodeDisplay 
                  status={connectionStatus}
                  description={connectionConfig.description}
                  onClose={() => setShowQR(false)}
                />
              )}
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="glass" className="gap-1 sm:gap-2">
                  <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm">
                      LU
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm hidden sm:inline">Olá, Luis</span>
                  <ChevronDown className="h-4 w-4 hidden sm:inline" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </GlassCard>
    </header>
  )
}