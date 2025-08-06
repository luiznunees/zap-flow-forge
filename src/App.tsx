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
import Login from "./pages/Login";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import RecuperarSenha from "./pages/RecuperarSenha";
import Suporte from "./pages/Suporte";
import Sobre from "./pages/Sobre";
import Sucesso from "./pages/Sucesso";
import TesteGratuito from "./pages/TesteGratuito";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Páginas sem layout do dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/teste-gratuito" element={<TesteGratuito />} />
          <Route path="/resgate" element={<Resgate />} />
          
          {/* Páginas com layout do dashboard */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Home />} />
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
