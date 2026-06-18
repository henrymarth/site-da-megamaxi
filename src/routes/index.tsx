import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import logoAsset from "@/assets/megamaxi-logo.asset.json";
import {
  Megaphone, TrendingUp, Settings2, Rocket, Sparkles, Bot, Workflow, LineChart,
  CheckCircle2, ArrowRight, MessageSquare, FileText, Database, Users, Clock,
  ShieldCheck, Layers, Zap, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MegaMaxi Tech — Automação, agentes de IA e sistemas sob medida" },
      { name: "description", content: "Criamos sistemas, agentes de IA e automações que conectam marketing, vendas e operação. Reduza tarefas manuais e aumente a capacidade da sua empresa." },
      { property: "og:title", content: "MegaMaxi Tech — Automação inteligente para empresas" },
      { property: "og:description", content: "Sistemas, agentes de IA e automações sob medida para vender mais, atender melhor e operar com mais controle." },
    ],
  }),
  component: LandingPage,
});

const nav = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#contato", label: "Contato" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <img src={logoAsset.url} alt="MegaMaxi Tech" className="h-10 w-auto md:h-11" />
    </a>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contato" className="hidden md:inline-flex btn-gold items-center rounded-full px-5 py-2.5 text-sm">
              Solicitar diagnóstico
            </a>
            <button className="lg:hidden text-foreground p-2" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
            <div className="px-5 py-4 flex flex-col gap-4">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-gold">
                  {n.label}
                </a>
              ))}
              <a href="#contato" onClick={() => setMenuOpen(false)} className="btn-gold inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm">
                Solicitar diagnóstico
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        {/* decorative grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
             style={{ backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, oklch(0.82 0.13 83 / 0.15) 0%, transparent 60%)" }} />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 backdrop-blur px-4 py-1.5 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs text-muted-foreground">Automação inteligente para empresas</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Automatize vendas, atendimento e processos com{" "}
              <span className="gradient-gold-text">inteligência artificial sob medida</span>
            </h1>
            <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A MegaMaxi Tech cria sistemas, agentes de IA e automações que conectam marketing, vendas e operação para reduzir tarefas manuais, melhorar o atendimento e aumentar a capacidade de entrega da sua empresa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contato" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
                Solicitar diagnóstico gratuito <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#solucoes" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
                Ver soluções
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              {[
                { icon: Bot, label: "Agentes de IA" },
                { icon: TrendingUp, label: "Automações comerciais" },
                { icon: Layers, label: "Sistemas sob medida" },
                { icon: Workflow, label: "Integração entre ferramentas" },
              ].map((item, i) => (
                <div key={i} className="card-premium rounded-xl px-4 py-3 flex items-center gap-2.5">
                  <item.icon className="h-4 w-4 text-gold flex-shrink-0" />
                  <span className="text-xs md:text-sm text-foreground/85">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GARGALOS */}
      <Section id="gargalos"
        title="Onde sua empresa pode estar perdendo tempo, dinheiro e oportunidades"
        subtitle="Automatizamos pontos críticos da operação para que sua equipe venda mais, atenda melhor e execute com mais controle.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Megaphone, title: "Marketing", desc: "Atraia mais clientes com campanhas automatizadas, segmentação inteligente e decisões guiadas por dados." },
            { icon: TrendingUp, title: "Vendas", desc: "Transforme leads em oportunidades reais com fluxos que conectam atendimento, CRM, follow-up e propostas comerciais." },
            { icon: Settings2, title: "Operação", desc: "Reduza tarefas repetitivas, organize prazos e acompanhe entregas com processos automatizados." },
            { icon: Rocket, title: "Escala", desc: "Atenda mais clientes sem aumentar proporcionalmente sua equipe, usando IA para absorver tarefas operacionais." },
          ].map((c, i) => (
            <div key={i} className="card-premium card-premium-hover rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5"
                   style={{ background: "linear-gradient(135deg, oklch(0.82 0.13 83 / 0.15), oklch(0.68 0.12 78 / 0.15))", border: "1px solid oklch(0.82 0.13 83 / 0.25)" }}>
                <c.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUÇÕES */}
      <Section id="solucoes"
        eyebrow="Soluções"
        title="Soluções criadas para automatizar áreas críticas do seu negócio"
        subtitle="Unimos sistemas, inteligência artificial e automações para criar soluções práticas, integradas e adaptadas à realidade de cada empresa.">
        <div id="portfolio" className="grid md:grid-cols-2 gap-6">
          {[
            { icon: TrendingUp, name: "VendaMaxi", desc: "Sistema para gestão comercial, acompanhamento de leads e organização do processo de vendas.", items: ["Organização de contatos", "Acompanhamento de oportunidades", "Follow-up comercial", "Visão do funil de vendas"] },
            { icon: FileText, name: "Sistema Educacional com IA", desc: "Plataforma para apoiar gestão escolar, planejamento pedagógico, documentos e comunicação com responsáveis.", items: ["Gestão de dados escolares", "Apoio ao planejamento pedagógico", "Automação de documentos", "Comunicação mais eficiente"] },
            { icon: Workflow, name: "Consultoria e Automação de Processos", desc: "Mapeamos processos internos e criamos automações sob medida usando integrações, IA e sistemas personalizados.", items: ["Redução de trabalho manual", "Integração entre ferramentas", "Relatórios automáticos", "Bots internos e externos"] },
            { icon: Bot, name: "Agentes de IA para Atendimento", desc: "Agentes inteligentes para WhatsApp, sites e canais digitais, capazes de qualificar leads, responder dúvidas e encaminhar atendimentos.", items: ["Atendimento automatizado", "Qualificação de leads", "Respostas rápidas", "Encaminhamento para equipe humana"] },
          ].map((s, i) => (
            <div key={i} className="card-premium card-premium-hover rounded-2xl p-7">
              <div className="flex items-start gap-4 mb-5">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: "var(--gradient-gold)" }}>
                  <s.icon className="h-5 w-5" style={{ color: "oklch(0.14 0.006 60)" }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-border/40">
                {s.items.map((it, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESSO */}
      <Section id="processo"
        eyebrow="Processo"
        title="Um processo claro para transformar gargalos em automações funcionais"
        subtitle="Antes de desenvolver qualquer solução, entendemos o funcionamento da empresa para criar automações que realmente gerem retorno.">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {[
            { n: "01", title: "Diagnóstico", desc: "Entendemos sua operação, seus gargalos e onde a automação pode gerar mais impacto." },
            { n: "02", title: "Mapeamento dos fluxos", desc: "Organizamos o caminho ideal entre marketing, vendas, atendimento, operação e entrega." },
            { n: "03", title: "Prototipação", desc: "Criamos uma primeira versão da solução para validar a lógica antes da implementação completa." },
            { n: "04", title: "Implementação", desc: "Desenvolvemos agentes, integrações, sistemas e automações conectados às ferramentas da empresa." },
            { n: "05", title: "Acompanhamento", desc: "Medimos resultados, ajustamos fluxos e adicionamos melhorias conforme o negócio evolui." },
          ].map((s, i) => (
            <div key={i} className="card-premium card-premium-hover rounded-2xl p-6 relative">
              <div className="text-3xl font-bold gradient-gold-text mb-3 font-display">{s.n}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section id="beneficios"
        eyebrow="Benefícios"
        title="O que sua empresa ganha com automação inteligente"
        subtitle="A automação certa reduz esforço manual, melhora o controle da operação e aumenta a capacidade de crescimento da empresa.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Zap, title: "Menos tarefas manuais", desc: "Reduza atividades repetitivas que consomem tempo da equipe." },
            { icon: Clock, title: "Atendimento mais rápido", desc: "Responda leads e clientes com mais agilidade, mesmo fora do horário comercial." },
            { icon: ShieldCheck, title: "Mais controle da operação", desc: "Tenha dados, etapas e responsabilidades mais claras em cada processo." },
            { icon: TrendingUp, title: "Mais capacidade de venda", desc: "Acompanhe oportunidades com menos perda de leads e mais consistência no follow-up." },
            { icon: Workflow, title: "Integração entre ferramentas", desc: "Conecte sistemas, planilhas, CRMs, formulários, WhatsApp e bancos de dados." },
            { icon: LineChart, title: "Decisões guiadas por dados", desc: "Gere relatórios e indicadores para acompanhar o que está funcionando." },
          ].map((b, i) => (
            <div key={i} className="card-premium card-premium-hover rounded-2xl p-6">
              <b.icon className="h-6 w-6 text-gold mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EXEMPLOS */}
      <Section
        eyebrow="Exemplos"
        title="Exemplos de automações que podemos criar"
        subtitle="Cada empresa tem processos diferentes. Por isso, criamos soluções adaptadas ao fluxo real do seu negócio.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MessageSquare, t: "Bot que qualifica leads no WhatsApp" },
            { icon: FileText, t: "Sistema que gera relatórios automáticos" },
            { icon: ArrowRight, t: "Fluxo que envia propostas e acompanha respostas" },
            { icon: Database, t: "Automação que registra contatos em CRM" },
            { icon: Bot, t: "Agente que responde dúvidas frequentes" },
            { icon: LineChart, t: "Painel para acompanhar vendas e tarefas" },
            { icon: Layers, t: "Sistema interno sob medida" },
            { icon: Workflow, t: "Integração entre formulários, planilhas e CRMs" },
          ].map((e, i) => (
            <div key={i} className="card-premium card-premium-hover rounded-xl p-5 flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0"
                   style={{ background: "oklch(0.82 0.13 83 / 0.12)", border: "1px solid oklch(0.82 0.13 83 / 0.25)" }}>
                <e.icon className="h-4 w-4 text-gold" />
              </div>
              <span className="text-sm text-foreground/85 leading-relaxed">{e.t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* PARA QUEM É */}
      <Section
        eyebrow="Para quem é"
        title="Para empresas que precisam crescer sem aumentar o caos operacional"
        subtitle="A MegaMaxi Tech atende negócios que possuem processos manuais, atendimento recorrente, geração de leads, tarefas repetitivas ou necessidade de organizar melhor vendas, dados e entregas.">
        <div className="flex flex-wrap gap-3">
          {[
            "Prestadores de serviço", "Clínicas", "Escritórios", "Escolas",
            "Comércios", "Empresas com atendimento via WhatsApp", "Equipes comerciais", "Negócios que usam muitas planilhas",
          ].map((s, i) => (
            <div key={i} className="card-premium rounded-full px-5 py-2.5 flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-gold" />
              <span className="text-sm text-foreground/85">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl p-10 md:p-16 relative overflow-hidden"
             style={{ background: "var(--gradient-cta)", border: "1px solid oklch(0.82 0.13 83 / 0.3)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
               style={{ background: "radial-gradient(circle, oklch(0.82 0.13 83 / 0.25) 0%, transparent 70%)" }} />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Sua empresa ainda depende de tarefas manuais para vender, atender ou entregar?
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground">
              Podemos mapear seus processos e mostrar onde a automação pode gerar mais impacto.
            </p>
            <a href="#contato" className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
              Quero mapear oportunidades de automação <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-12 px-5 md:px-8">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
              Sistemas, agentes de IA e automações para empresas que querem crescer com mais controle e menos tarefas manuais.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Links rápidos</h4>
            <ul className="space-y-2.5">
              {nav.map(n => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Comece agora</h4>
            <p className="text-sm text-muted-foreground mb-4">Solicite um diagnóstico gratuito para sua empresa.</p>
            <a href="#contato" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
              Falar com a MegaMaxi <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MegaMaxi Tech. Todos os direitos reservados.</p>
          <p>Automação · IA · Sistemas sob medida</p>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: {
  id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] text-foreground">{title}</h2>
          {subtitle && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "", empresa: "", whatsapp: "", email: "", area: "", mensagem: "",
  });
  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls = "w-full bg-input/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors";

  return (
    <section id="contato" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold">Contato</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Solicite um diagnóstico para sua empresa</h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e entraremos em contato para entender melhor seus processos, desafios e oportunidades de automação.
          </p>
        </div>

        <div className="card-premium rounded-3xl p-8 md:p-10">
          {sent ? (
            <div className="text-center py-10">
              <div className="mx-auto h-14 w-14 rounded-full flex items-center justify-center mb-5"
                   style={{ background: "var(--gradient-gold)" }}>
                <CheckCircle2 className="h-7 w-7" style={{ color: "oklch(0.14 0.006 60)" }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Solicitação recebida</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Recebemos sua solicitação. Em breve entraremos em contato para entender melhor seu processo.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
              <Field label="Nome">
                <input required value={form.nome} onChange={onChange("nome")} className={inputCls} placeholder="Seu nome completo" />
              </Field>
              <Field label="Empresa">
                <input required value={form.empresa} onChange={onChange("empresa")} className={inputCls} placeholder="Nome da empresa" />
              </Field>
              <Field label="WhatsApp">
                <input required value={form.whatsapp} onChange={onChange("whatsapp")} className={inputCls} placeholder="(00) 00000-0000" />
              </Field>
              <Field label="E-mail">
                <input required type="email" value={form.email} onChange={onChange("email")} className={inputCls} placeholder="voce@empresa.com" />
              </Field>
              <Field label="Área que deseja automatizar" className="md:col-span-2">
                <select required value={form.area} onChange={onChange("area")} className={inputCls}>
                  <option value="">Selecione uma área</option>
                  <option value="atendimento">Atendimento</option>
                  <option value="vendas">Vendas</option>
                  <option value="marketing">Marketing</option>
                  <option value="processos">Processos internos</option>
                  <option value="sistema">Sistema sob medida</option>
                  <option value="indefinido">Ainda não sei</option>
                </select>
              </Field>
              <Field label="Mensagem" className="md:col-span-2">
                <textarea value={form.mensagem} onChange={onChange("mensagem")} rows={4} className={inputCls} placeholder="Conte um pouco sobre seu processo atual" />
              </Field>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm">
                  Enviar solicitação <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium text-foreground/80 mb-2 block uppercase tracking-wider">{label}</span>
      {children}
    </label>
  );
}
