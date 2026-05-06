import { useEffect, useState } from "react";
import {
  Play, Sparkles, Check, ShieldCheck, Clock, TrendingUp, DollarSign,
  Film, Zap, Bot, Calendar, FileText, Library, Star,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { goToCheckout } from "@/lib/checkout";
import f1 from "@/assets/feature-1-gerador.jpg";
import f2 from "@/assets/feature-2-referencias.jpg";
import f3 from "@/assets/feature-3-publicacao.jpg";
import f4 from "@/assets/feature-4-roteiros.jpg";
import f5 from "@/assets/feature-5-novelinhas.jpg";

function useCountdown(initial: number) {
  const [s, setS] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  return {
    m: String(Math.floor(s / 60)).padStart(2, "0"),
    s: String(s % 60).padStart(2, "0"),
  };
}

function CTA({ children, large = false, label }: { children: React.ReactNode; large?: boolean; label?: string }) {
  return (
    <button
      onClick={goToCheckout}
      aria-label={label}
      className={`group inline-flex w-full items-center justify-center gap-2 rounded-2xl font-extrabold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto ${
        large ? "px-8 py-5 text-base sm:text-lg animate-pulse-pink" : "px-6 py-4 text-sm sm:text-base"
      }`}
      style={{ background: "var(--gradient-pink)", boxShadow: "var(--shadow-pink)" }}
    >
      <Sparkles className="h-5 w-5" />
      {children}
    </button>
  );
}

function SectionTitle({ kicker, children }: { kicker?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker && (
        <span className="mb-3 inline-block rounded-full bg-yellow px-4 py-1 text-xs font-black uppercase tracking-widest text-ink">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-black leading-tight text-ink sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export function LandingPage() {
  const { m, s } = useCountdown(14 * 60 + 55);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* YELLOW COUNTDOWN BAR */}
      <div className="sticky top-0 z-50 w-full bg-yellow shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center sm:gap-3">
          <Clock className="h-4 w-4 text-ink" />
          <span className="text-xs font-black uppercase tracking-wider text-ink sm:text-sm">
            Oferta acaba em
          </span>
          <span className="font-mono text-base font-black text-ink sm:text-xl">
            00:{m}:{s}
          </span>
        </div>
      </div>

      {/* HERO + VSL */}
      <section className="relative px-4 pb-12 pt-10 sm:pt-14">
        <div className="mx-auto max-w-4xl text-center animate-float-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink/30 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink shadow-sm">
            <Bot className="h-3.5 w-3.5" /> IA • TikTok • Dólar
          </span>
          <h1 className="text-balance text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Crie <span className="text-gradient-pink">Novelinhas Virais</span> automaticamente
            <br className="hidden sm:block" /> e ganhe em <span className="text-gradient-pink">dólar</span>{" "}
            no <span className="relative inline-block bg-yellow px-2 text-ink">TikTok</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A inteligência artificial cria histórias completas com personagens e episódios prontos
            para você postar todos os dias <strong className="text-ink">sem precisar pensar, escrever ou editar</strong>.
          </p>

          <p className="mt-8 text-xs font-bold uppercase tracking-wider text-pink sm:text-sm">
            ▼ O vídeo tem apenas 1 minuto. Assista para entender como funciona ▼
          </p>

          <div className="mx-auto mt-4 w-full max-w-3xl">
            <div
              className="relative overflow-hidden rounded-2xl border-4 border-white bg-card"
              style={{ boxShadow: "var(--shadow-pink)" }}
            >
              <div className="relative aspect-video w-full bg-gradient-to-br from-[oklch(0.96_0.02_320)] to-[oklch(0.92_0.05_305)]">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full text-white"
                    style={{ background: "var(--gradient-pink)", boxShadow: "var(--shadow-pink)" }}
                  >
                    <Play className="h-10 w-10 fill-white" />
                  </div>
                  <p className="px-4 text-sm font-semibold text-muted-foreground">
                    Espaço reservado para sua VSL (16:9)
                  </p>
                </div>
                {/* Replace with: <iframe className="absolute inset-0 h-full w-full" src="..." allow="autoplay; fullscreen" /> */}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3">
            <CTA large>Quero criar minhas novelinhas</CTA>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-pink" /> Pagamento único • Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* TUDO ISSO LIBERADO HOJE — vertical stack */}
      <section className="px-4 py-16">
        <SectionTitle kicker="O que você recebe">
          Tudo isso liberado <span className="bg-yellow px-2 text-ink">hoje</span>
        </SectionTitle>

        <div className="mx-auto flex max-w-[520px] flex-col gap-8">
          {[
            { n: "01", src: f1, title: "Gerador de Novelinhas", text: "Crie novelinhas completas com personagens, episódios e roteiro pronto em poucos minutos." },
            { n: "02", src: f2, title: "Referências Virais", text: "Veja ideias e exemplos de conteúdos que já estão em alta para criar com mais segurança." },
            { n: "03", src: f3, title: "Publicação Automática", text: "Organize e programe suas publicações para manter frequência sem precisar postar manualmente." },
            { n: "04", src: f4, title: "+1.000 Roteiros", text: "Acesse roteiros prontos para transformar ideias em vídeos curtos com mais rapidez." },
            { n: "05", src: f5, title: "+1.500 Novelas Prontas", text: "Receba novelinhas prontas para usar, adaptar e começar a postar imediatamente." },
          ].map((c) => (
            <article
              key={c.n}
              className="overflow-hidden rounded-[18px] border-2 border-pink/60 bg-white p-5 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-black text-white"
                  style={{ background: "var(--gradient-pink)" }}
                >
                  {c.n}
                </span>
                <h3 className="text-xl font-black leading-tight text-ink sm:text-2xl">
                  <span className="text-gradient-pink">{c.title}</span>
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {c.text}
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl">
                <img
                  src={c.src}
                  alt={c.title}
                  loading="lazy"
                  width={1080}
                  height={1080}
                  className="block h-auto w-full"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-md justify-center">
          <CTA large>Quero acessar agora</CTA>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-4 py-16">
        <SectionTitle kicker="De graça hoje">Bônus exclusivos</SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            { icon: FileText, title: "+1.000 Roteiros Prontos", text: "Acesse roteiros prontos para gerar novelinhas ainda mais rápido." },
            { icon: Library, title: "+1.500 Novelinhas Prontas", text: "Receba novelinhas já criadas para usar, adaptar ou postar." },
          ].map((b) => (
            <div
              key={b.title}
              className="relative overflow-hidden rounded-2xl border-2 border-yellow bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="absolute right-4 top-4 rounded-full bg-yellow px-3 py-1 text-[10px] font-black uppercase tracking-wider text-ink">
                Bônus
              </span>
              <b.icon className="mb-3 h-10 w-10 text-pink" />
              <h3 className="text-xl font-black text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-md justify-center">
          <CTA large>Quero criar minhas novelinhas</CTA>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-4 py-16">
        <SectionTitle kicker="Resultados reais">Novelinhas Lucrativas em ação</SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            { name: "João Gabriel", metric: "4.880 seguidores", detail: "em 4 dias postando novelinhas", icon: TrendingUp },
            { name: "Flávio Augusto", metric: "98 dólares", detail: "em 1 semana monetizando no TikTok", icon: DollarSign },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink/10">
                  <t.icon className="h-6 w-6 text-pink" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-ink">{t.name}</p>
                  <div className="flex items-center gap-0.5 text-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-2xl font-black text-pink">{t.metric}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-4 py-16">
        <SectionTitle kicker="É para você?">Esse sistema foi criado para quem:</SectionTitle>
        <div className="mx-auto max-w-2xl space-y-3">
          {[
            "Quer ganhar dinheiro com conteúdo no TikTok",
            "Quer aproveitar a onda das novelinhas",
            "Não quer depender de IAs caras",
            "Quer postar todos os dias sem esforço",
            "Quer começar mesmo sem experiência",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
              <div
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: "var(--gradient-pink)" }}
              >
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <p className="text-base text-ink sm:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="px-4 py-16">
        <SectionTitle kicker="Oferta especial">
          Chegou a sua hora de criar <span className="text-gradient-pink">novelinhas virais</span> e começar no TikTok
        </SectionTitle>

        <div className="mx-auto max-w-xl">
          <div
            className="relative overflow-hidden rounded-3xl border-2 border-pink bg-white p-6 sm:p-8"
            style={{ boxShadow: "var(--shadow-pink)" }}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow/30 blur-3xl" />

            <div className="relative">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-pink" />
                <span className="text-xs font-black uppercase tracking-widest text-pink">
                  Tempo limitado
                </span>
              </div>
              <h3 className="text-center text-2xl font-black text-ink sm:text-3xl">
                Sistema Novelinhas Lucrativas <span className="text-gradient-pink">+ Bônus</span>
              </h3>

              <ul className="mt-6 space-y-2.5 text-sm sm:text-base">
                {[
                  "Sistema de criação automática de novelinhas",
                  "Novelinhas virais de referência",
                  "Programação automática",
                  "+1.500 Novelinhas Prontas",
                  "+1.000 Roteiros Prontos",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-ink">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-pink" strokeWidth={3} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground line-through">De R$97,45</p>
                <p className="mt-1 inline-block bg-yellow px-4 py-1 text-5xl font-black text-ink sm:text-6xl">
                  R$24,90
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  pagamento único
                </p>
              </div>

              <button
                onClick={goToCheckout}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-5 text-base font-black uppercase tracking-wide text-white sm:text-lg animate-pulse-pink"
                style={{ background: "var(--gradient-pink)", boxShadow: "var(--shadow-pink)" }}
              >
                <Sparkles className="h-5 w-5" /> Comprar agora
              </button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                🔒 Compra 100% segura • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-4 py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-yellow bg-white p-6 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:text-left">
          <div
            className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-yellow"
            style={{ background: "var(--gradient-yellow)" }}
          >
            <ShieldCheck className="h-12 w-12 text-ink" />
          </div>
          <div>
            <h3 className="text-xl font-black text-ink">Garantia de 7 dias</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Se por qualquer motivo você não estiver satisfeito, basta solicitar o reembolso
              dentro de 7 dias. Você recebe <strong className="text-ink">100% do seu dinheiro de volta</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <SectionTitle kicker="Perguntas Frequentes">Tire suas dúvidas</SectionTitle>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Preciso aparecer para usar o sistema?", a: "Não. Todas as novelinhas são geradas pela IA, você não precisa mostrar o rosto nem gravar a voz." },
              { q: "Funciona pelo celular?", a: "Sim. Tudo é 100% online e funciona perfeitamente pelo celular, tablet ou computador." },
              { q: "Preciso saber editar vídeos?", a: "Não. O sistema entrega tudo pronto para você publicar diretamente no TikTok." },
              { q: "Como recebo acesso?", a: "Logo após a confirmação do pagamento, você recebe o acesso por e-mail imediatamente." },
              { q: "As histórias já vêm prontas?", a: "Sim. Você recebe +1.500 novelinhas prontas e ainda pode gerar quantas quiser pelo sistema." },
              { q: "Posso postar direto no TikTok?", a: "Sim. Você pode publicar manualmente ou programar a publicação automática." },
              { q: "Preciso ter experiência?", a: "Não. O método foi feito para iniciantes — em poucos minutos você publica seu primeiro episódio." },
              { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar. Se não gostar, basta pedir o reembolso e devolvemos 100% do valor." },
            ].map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="overflow-hidden rounded-xl border border-border bg-white px-4 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-ink hover:text-pink">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 flex justify-center">
            <CTA large>Quero acessar agora</CTA>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-white px-4 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          Novelinhas Lucrativas · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
