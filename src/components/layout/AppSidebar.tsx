import { useState } from "react"
import { 
  Zap, 
  CreditCard, 
  Bell, 
  BookOpen, 
  Settings,
  Calendar,
  Send
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Disparos",
    url: "/",
    icon: Zap,
    description: "Envie mensagens em massa"
  },
  {
    title: "Meu Plano", 
    url: "/plano",
    icon: CreditCard,
    description: "Gerencie sua assinatura"
  },
  {
    title: "Atualizações",
    url: "/atualizacoes", 
    icon: Bell,
    description: "Novidades da plataforma"
  },
  {
    title: "Tutoriais",
    url: "/tutoriais",
    icon: BookOpen,
    description: "Aprenda a usar o sistema"
  }
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const isCollapsed = state === "collapsed"
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(path)
  }

  return (
    <Sidebar 
      className="border-r border-glass-border bg-sidebar/80 backdrop-blur-2xl"
      collapsible="icon"
    >
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => {
                const active = isActive(item.url)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className={`
                        group relative overflow-hidden rounded-2xl transition-all duration-300
                        ${active 
                          ? 'bg-gradient-neon text-primary-foreground shadow-neon' 
                          : 'hover:bg-sidebar-accent/50 hover:shadow-glass'
                        }
                      `}
                    >
                      <NavLink to={item.url} className="flex items-center gap-3 px-3 py-3">
                        <item.icon className={`h-5 w-5 flex-shrink-0 ${active ? 'text-primary-foreground' : 'text-sidebar-foreground'}`} />
                        {!isCollapsed && (
                          <div className="flex-1 min-w-0">
                            <div className={`font-medium ${active ? 'text-primary-foreground' : 'text-sidebar-foreground'}`}>
                              {item.title}
                            </div>
                            <div className={`text-xs truncate ${active ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {item.description}
                            </div>
                          </div>
                        )}
                        {active && !isCollapsed && (
                          <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Future Features */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
            Em Breve
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Configurações"
                  className="opacity-50 cursor-not-allowed rounded-2xl"
                  disabled
                >
                  <Settings className="h-5 w-5" />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">Configurações</div>
                      <div className="text-xs text-muted-foreground">Personalize o sistema</div>
                    </div>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}