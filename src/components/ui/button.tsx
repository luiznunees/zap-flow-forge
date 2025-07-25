import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-glass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-neon text-primary-foreground hover:shadow-neon hover:scale-105 shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline: "border border-glass-border bg-card/30 backdrop-blur-glass hover:bg-accent/20 hover:text-accent-foreground hover:shadow-glass",
        secondary: "bg-gradient-card text-secondary-foreground hover:bg-secondary/80 hover:shadow-glass backdrop-blur-glass",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "bg-card/20 backdrop-blur-glass border border-glass-border text-foreground hover:bg-card/30 hover:shadow-glass",
        success: "bg-success text-success-foreground hover:shadow-neon hover:scale-105 shadow-lg",
        warning: "bg-warning text-warning-foreground hover:shadow-lg hover:scale-105",
        connected: "bg-success text-success-foreground hover:shadow-neon shadow-lg border-2 border-success/30",
        reconnect: "bg-warning text-warning-foreground hover:shadow-lg shadow-lg border-2 border-warning/30",
        disconnected: "bg-destructive text-destructive-foreground hover:shadow-lg shadow-lg border-2 border-destructive/30"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-xl px-4",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-12 w-12",
        xs: "h-8 rounded-lg px-3 text-xs"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
