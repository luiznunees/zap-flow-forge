import { useState, useEffect } from "react"
import { Eye, RefreshCw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Progress } from "@/components/ui/progress"

interface QRCodeDisplayProps {
  status: "connected" | "reconnect" | "disconnected"
  description: string
  onClose: () => void
}

export function QRCodeDisplay({ status, description, onClose }: QRCodeDisplayProps) {
  const [isBlurred, setIsBlurred] = useState(true)
  const [timeLeft, setTimeLeft] = useState(30)
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    if (!isBlurred && timeLeft > 0) {
      setShowTimer(true)
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsBlurred(true)
            setShowTimer(false)
            return 30
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isBlurred, timeLeft])

  const handleShowQR = () => {
    setIsBlurred(false)
    setTimeLeft(30)
  }

  const handleRefresh = () => {
    setTimeLeft(30)
    // Here you would refresh the QR code
  }

  return (
    <div className="absolute top-full right-0 mt-2 z-50">
      <GlassCard variant="blur" className="w-80 p-6 shadow-glass">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">WhatsApp Connection</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          {/* QR Code Area */}
          <div className="relative">
            <div className={`aspect-square bg-white rounded-xl p-4 ${isBlurred ? 'blur-sm' : ''} transition-all duration-300`}>
              {/* Simulated QR Code */}
              <div className="w-full h-full bg-black/10 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-8 gap-1 w-3/4 h-3/4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`aspect-square ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'} rounded-sm`} />
                  ))}
                </div>
              </div>
            </div>
            
            {isBlurred && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button onClick={handleShowQR} variant="default" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Mostrar QR Code
                </Button>
              </div>
            )}
          </div>

          {/* Timer */}
          {showTimer && !isBlurred && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Código expira em:</span>
                <span className="font-medium text-warning">{timeLeft}s</span>
              </div>
              <Progress value={(timeLeft / 30) * 100} className="h-2" />
            </div>
          )}

          {/* Actions */}
          {!isBlurred && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="w-full gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Atualizar QR Code
            </Button>
          )}

          {/* Description */}
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              status === "connected" ? "bg-success animate-pulse" :
              status === "reconnect" ? "bg-warning animate-pulse" :
              "bg-destructive"
            }`} />
            <span className="text-sm font-medium">
              {status === "connected" ? "Conectado" :
               status === "reconnect" ? "Instável" :
               "Desconectado"}
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}