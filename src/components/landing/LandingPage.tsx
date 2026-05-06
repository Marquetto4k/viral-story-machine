import { useEffect, useState } from "react";
import {
  Play,
  Sparkles,
  Check,
  ShieldCheck,
  Clock,
  TrendingUp,
  DollarSign,
  Film,
  Zap,
  Bot,
  Calendar,
  FileText,
  Library,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return { m, s };
}

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href="#oferta"
      className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-pink)] font-extrabold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto ${
        large ? "px-8 py-5 text-lg sm:text-xl animate-pulse-neon" : "px-6 py-4 text-base"
      }`}
      style={{ background: "var(--gradient-pink)" }}
    >
      <Sparkles className="h-5 w-5" />
      {children}
    </a>
  );
}

function SectionTitle({ kicker, children }: { kicker?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker && (
        <span className="mb-3 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export function LandingPage() {
  const { m, s } = useCountdown(14 * 60 + 55);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Top countdown bar */}
      <div className="sticky top-0 z-50 w-full border-b border-primary/30 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-2 text-center sm:flex-row sm:gap-3">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground sm:text-sm">
            <Clock className="h-4 w-4 text-primary" />
            Oferta acaba em
          </span>
          <span className="font-mono text-xl font-black text-gradient-pink sm:text-2xl">
            00:{m}:{s}
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative px-4 pb-12 pt-10 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center animate-float-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <Bot className="h-3.5 w-3.5" /> Inteligência Artificial • TikTok • $$$
          </span>
          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Crie <span className="text-gradient-pink">Novelinhas Virais</span> automaticamente e ganhe em{" "}
            <span className="text-gradient-gold">dólar</span> no TikTok
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            A inteligência artificial cria histórias completas com personagens e episódios prontos
            para você postar todos os dias <strong className="text-foreground">sem precisar pensar, escrever ou editar</strong>.
          </p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
            ▼ O vídeo tem apenas 1 minuto. Assista para entender como funciona ▼
          </p>

          {/* VSL */}
          <div className="mx-auto mt-4 w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 bg-card shadow-[var(--shadow-neon)]">
              <div className="relative aspect-video w-full">
                {/* Embed placeholder — replace src with VSL URL */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black via-card to-black">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gradient-pink)] shadow-[var(--shadow-neon)]">
                      <Play className="h-10 w-10 fill-primary-foreground text-primary-foreground" />
                    </div>
                    <p className="px-4 text-sm font-semibold text-muted-foreground">
                      Espaço reservado para sua VSL (16:9)
                    </p>
                  </div>
                </div>
                {/* Replace the div above with: <iframe src="..." className="absolute inset-0 h-full w-full" allow="autoplay; fullscreen" /> */}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3">
            <CTAButton large>Quero criar minhas novelinhas</CTAButton>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" /> Pagamento único • Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* PROVAS / RESULTADOS */}
      <section className="px-4 py-16">
        <SectionTitle kicker="Resultados reais">
          Novelinhas Lucrativas em ação
        </SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            {
              name: "João Gabriel",
              metric: "4.880 seguidores",
              detail: "em 4 dias postando novelinhas",
              icon: TrendingUp,
              color: "text-primary",
            },
            {
              name: "Flávio Augusto",
              metric: "98 dólares",
              detail: "em 1 semana monetizando no TikTok",
              icon: DollarSign,
              color: "text-accent",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                  <t.icon className={`h-6 w-6 ${t.color}`} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <div className="flex items-center gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-2xl font-black text-gradient-gold">{t.metric}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="px-4 py-16">
        <SectionTitle kicker="O que você recebe">Tudo isso liberado hoje</SectionTitle>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              icon: Bot,
              title: "Gerador de Novelinhas",
              text: "Sistema que cria novelinhas completas automaticamente para você com roteiro pronto, personagens e episódios organizados.",
            },
            {
              n: "02",
              icon: Film,
              title: "Referências Virais",
              text: "Acesse ideias e exemplos de novelinhas que já estão viralizando para saber exatamente o que criar.",
            },
            {
              n: "03",
              icon: Calendar,
              title: "Publicação Automática",
              text: "Publique ou programe seus episódios sem precisar postar manualmente todos os dias.",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 transition-all hover:border-primary hover:shadow-[var(--shadow-neon)]"
            >
              <div className="absolute -right-3 -top-3 select-none text-7xl font-black text-primary/10">
                {c.n}
              </div>
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-pink)] shadow-md">
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-4 py-16">
        <SectionTitle kicker="De graça hoje">Bônus exclusivos</SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            {
              icon: FileText,
              title: "+1.000 Roteiros Prontos",
              text: "Acesse roteiros prontos para gerar novelinhas ainda mais rápido.",
            },
            {
              icon: Library,
              title: "+1.500 Novelinhas Prontas",
              text: "Receba novelinhas já criadas para usar, adaptar ou postar.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-card to-black p-6 shadow-[var(--shadow-gold)]"
            >
              <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase text-accent-foreground">
                Bônus
              </span>
              <b.icon className="mb-3 h-10 w-10 text-accent" />
              <h3 className="text-xl font-black text-gradient-gold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-md justify-center">
          <CTAButton large>Quero criar minhas novelinhas</CTAButton>
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
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-pink)]">
                <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
              </div>
              <p className="text-base text-foreground sm:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="px-4 py-16">
        <SectionTitle kicker="Oferta especial">
          Chegou a sua hora de criar <span className="text-gradient-pink">novelinhas virais</span>{" "}
          e começar no TikTok
        </SectionTitle>

        <div className="mx-auto max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-gradient-to-b from-card to-black p-6 shadow-[var(--shadow-neon)] sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Tempo limitado
                </span>
              </div>
              <h3 className="text-center text-2xl font-black text-foreground sm:text-3xl">
                Sistema Novelinhas Lucrativas{" "}
                <span className="text-gradient-pink">+ Bônus</span>
              </h3>

              <ul className="mt-6 space-y-2.5 text-sm sm:text-base">
                {[
                  "Sistema de criação automática de novelinhas",
                  "Novelinhas virais de referência",
                  "Programação automática",
                  "+1.500 Novelinhas Prontas",
                  "+1.000 Roteiros Prontos",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground line-through">De R$97,45</p>
                <p className="mt-1 text-5xl font-black text-gradient-gold sm:text-6xl">R$17,90</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  pagamento único
                </p>
              </div>

              <a
                href="#"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-pink)] px-6 py-5 text-lg font-black uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:scale-[1.02] animate-pulse-neon"
              >
                <Sparkles className="h-5 w-5" /> Comprar agora
              </a>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                🔒 Compra 100% segura • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-4 py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-accent/40 bg-card/60 p-6 text-center sm:flex-row sm:text-left">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-accent bg-gradient-to-br from-accent to-[var(--gold-deep)] shadow-[var(--shadow-gold)]">
            <ShieldCheck className="h-12 w-12 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-black text-gradient-gold">Garantia de 7 dias</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Se por qualquer motivo você não estiver satisfeito, basta solicitar o reembolso
              dentro de 7 dias. Você recebe <strong className="text-foreground">100% do seu dinheiro de volta</strong>.
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
              {
                q: "Preciso aparecer para usar o sistema?",
                a: "Não. Todas as novelinhas são geradas pela IA, você não precisa mostrar o rosto nem gravar a voz.",
              },
              {
                q: "Funciona pelo celular?",
                a: "Sim. Tudo é 100% online e funciona perfeitamente pelo celular, tablet ou computador.",
              },
              {
                q: "Preciso saber editar vídeos?",
                a: "Não. O sistema entrega tudo pronto para você publicar diretamente no TikTok.",
              },
              {
                q: "Como recebo acesso?",
                a: "Logo após a confirmação do pagamento, você recebe o acesso por e-mail imediatamente.",
              },
              {
                q: "As histórias já vêm prontas?",
                a: "Sim. Você recebe +1.500 novelinhas prontas e ainda pode gerar quantas quiser pelo sistema.",
              },
              {
                q: "Posso postar direto no TikTok?",
                a: "Sim. Você pode publicar manualmente ou programar a publicação automática.",
              },
              {
                q: "Preciso ter experiência?",
                a: "Não. O método foi feito para iniciantes — em poucos minutos você publica seu primeiro episódio.",
              },
              {
                q: "Como funciona a garantia?",
                a: "Você tem 7 dias para testar. Se não gostar, basta pedir o reembolso e devolvemos 100% do valor.",
              },
            ].map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-4"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 flex justify-center">
            <CTAButton large>Quero criar minhas novelinhas</CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          Novelinhas Lucrativas · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}