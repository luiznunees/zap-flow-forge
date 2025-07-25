import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blur" | "solid"
  glow?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", glow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-glass-border backdrop-blur-glass transition-glass",
          {
            "bg-gradient-card shadow-glass": variant === "default",
            "bg-card/30 backdrop-blur-3xl shadow-glass": variant === "blur", 
            "bg-card shadow-lg": variant === "solid",
            "shadow-neon": glow,
          },
          className
        )}
        {...props}
      />
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }