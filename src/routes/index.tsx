import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Novelinhas Lucrativas — Crie novelinhas virais com IA e ganhe em dólar no TikTok" },
      { name: "description", content: "A IA cria histórias completas com personagens e episódios prontos para você postar todos os dias no TikTok e ganhar em dólar. Sem aparecer, sem editar." },
      { property: "og:title", content: "Novelinhas Lucrativas — Crie novelinhas virais com IA" },
      { property: "og:description", content: "Histórias prontas, episódios automáticos e publicação programada. Comece hoje por R$17,90." },
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
