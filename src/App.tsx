import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "./pages/Home";
import Disparos from "./pages/Disparos";
import Plano from "./pages/Plano";
import Atualizacoes from "./pages/Atualizacoes";
import Tutoriais from "./pages/Tutoriais";
import Resgate from "./pages/Resgate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página de resgate sem layout do dashboard */}
          <Route path="/resgate" element={<Resgate />} />
          
          {/* Páginas com layout do dashboard */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/disparos" element={<Disparos />} />
                <Route path="/plano" element={<Plano />} />
                <Route path="/atualizacoes" element={<Atualizacoes />} />
                <Route path="/tutoriais" element={<Tutoriais />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
