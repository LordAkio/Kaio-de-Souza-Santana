/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Wand2, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Users, 
  FlaskConical, 
  Home, 
  ArrowRight, 
  Download, 
  Printer, 
  Gift, 
  ShieldCheck, 
  ChevronDown, 
  X,
  Star,
  Clock,
  AlertTriangle,
  ShoppingCart,
  Mail,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => (
  <nav className="bg-accent py-2 px-4 text-center text-sm font-bold sticky top-0 z-50 shadow-sm">
    <div className="flex items-center justify-center gap-2">
      <Zap className="w-4 h-4 text-primary fill-primary" />
      <span>OFERTA VÁLIDA SOMENTE HOJE</span>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-accent/20 to-white">
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          +150 atividades que fazem a criança esquecer o celular
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Você não precisa mais inventar nada: escolha uma atividade e veja seu filho se envolver na hora
        </p>

        <div className="w-full max-w-[517px] mx-auto mb-8 md:mb-12">
          <div className="relative aspect-[517/920] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/10 bg-black">
            <iframe
              src="https://player.vimeo.com/video/1174834434?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="absolute inset-0 w-full h-full"
              title="Video"
            ></iframe>
          </div>
        </div>
      </motion.div>

      <a 
        href="#ofertas" 
        className="inline-block bg-primary hover:bg-red-500 text-white text-xl font-bold py-5 px-10 rounded-full shadow-lg transform transition hover:scale-105 pulse"
      >
        QUERO O KIT COMPLETO! 🚀
      </a>
      
    </div>
  </section>
);

const Showcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 border-t-2 border-dashed border-accent/30">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona? É Super Simples! 📲</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="bg-accent/10 p-8 rounded-3xl text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-gray-800 rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
              <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-accent fill-accent/20" />
              <h3 className="text-xl font-bold mb-2">Compre</h3>
              <p className="text-gray-600">Escolha seu kit e finalize o pagamento seguro em segundos.</p>
            </div>
            <div className="hidden md:block text-center text-accent text-4xl">→</div>
            <div className="bg-secondary/10 p-8 rounded-3xl text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
              <Download className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Baixe</h3>
              <p className="text-gray-600">Receba acesso imediato por E-mail. Download instantâneo dos PDFs.</p>
            </div>
            <div className="hidden md:block text-center text-secondary text-4xl">→</div>
            <div className="bg-primary/10 p-8 rounded-3xl text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div>
              <Printer className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Imprima e Brinque!</h3>
              <p className="text-gray-600">Imprima as atividades, chame as crianças e comece a magia!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => (
  <section className="py-20 bg-[#fff5e6]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Por Que os Pais Amam Este Kit? 💛</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Smartphone className="text-primary" />, title: "Menos Telas, Sem Briga", desc: "As crianças largam o celular por conta própria quando descobrem que podem fazer mágica de verdade.", color: "border-primary" },
          { icon: <Users className="text-secondary" />, title: "Conexão Real em Família", desc: "Momentos de \"uau!\" juntos que viram memórias para a vida toda.", color: "border-secondary" },
          { icon: <FlaskConical className="text-magic" />, title: "Curiosidade Científica", desc: "Cada mágica ensina um conceito de ciência de forma leve e divertida.", color: "border-magic" },
          { icon: <CheckCircle2 className="text-success" />, title: "Fácil de Fazer", desc: "Materiais que você já tem em casa. Sem complicação, sem bagunça.", color: "border-success" }
        ].map((b, i) => (
          <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${b.color}`}>
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">{b.icon}</div>
            <h3 className="text-xl font-bold mb-3">{b.title}</h3>
            <p className="text-gray-600 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Como fica a vida com o DESLIGA TELA na mão</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Não é sobre “demonizar tela”. É sobre você ter uma alternativa simples, pronta e gostosa o suficiente para virar o novo “bora fazer?” da família.</p>
      
      <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-6 text-xl font-bold border-b border-gray-200">Antes</th>
              <th className="p-6 text-xl font-bold border-b border-gray-200 text-primary">Depois</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ["Horas grudado nas telas", "Pedindo para brincar mais"],
              ["\"Tô entediado, não tem nada pra fazer\"", "\"Mãe, olha o que eu descobri!\""],
              ["Distância entre pais e filhos", "Momentos de risada e conexão"],
              ["Briga para tirar da tela", "Eles mesmos largam o celular"],
              ["\"Não sei o que fazer com as crianças\"", "+150 atividades prontas na mão"],
              ["Sentimento de culpa", "Orgulho de ser um pai/mãe presente"]
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition">
                <td className="p-6 text-gray-500 italic">{row[0]}</td>
                <td className="p-6 font-semibold text-gray-800 flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Bonus = () => (
  <section className="py-20 bg-orange-50/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Garantindo seu acesso hoje você leva<br/><span className="text-orange-600">8 SUPER BÔNUS</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { id: "01", title: "Manhã, Tarde e Noite para Crianças", value: "27", img: "https://i.imgur.com/r2MGHED.png" },
          { id: "02", title: "História para dormir", value: "17", img: "https://i.imgur.com/BWi23Fq.png" },
          { id: "03", title: "15 Atividades para colorir", value: "15", img: "https://i.imgur.com/okCWlZl.png" },
          { id: "04", title: "20 Atividades lúdicas", value: "22", img: "https://i.imgur.com/FxbRm9M.png" },
          { id: "05", title: "Como Tirar Seu Filho do Celular Sem Briga", value: "37", img: "https://i.imgur.com/utMKtqG.png" },
          { id: "06", title: "Painel de Progresso Infantil", value: "19", img: "https://i.imgur.com/95D3cAj.png" },
          { id: "07", title: "Desafio 14 Dias Sem Tela", value: "29", img: "https://i.imgur.com/crMY7wM.png" },
          { id: "08", title: "Como Fazer Seu Filho Pedir para Brincar", value: "33", img: "https://i.imgur.com/ADZYPb4.png" }
        ].map((b, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-orange-200 flex flex-col group hover:shadow-xl hover:shadow-orange-200/20 transition-all duration-300">
            <div className="overflow-hidden rounded-xl mb-6">
              <img 
                src={b.img} 
                alt={b.title} 
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight min-h-[3.5rem] text-gray-900">{b.title}</h3>
            <div className="mt-auto">
              <p className="text-gray-500 text-sm mb-4">
                Valor separado: <span className="line-through">R${b.value}</span>
              </p>
              <div className="w-full bg-orange-500 text-white font-black py-3 rounded-xl text-center uppercase tracking-tighter text-lg shadow-[0_4px_0_0_#c2410c] active:translate-y-1 active:shadow-none transition-all">
                HOJE GRÁTIS
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Offers = ({ onOpenUpsell }: { onOpenUpsell: () => void }) => (
  <section id="ofertas" className="py-20 bg-accent/10">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Escolha Seu Kit e Comece Agora!</h2>
      <p className="text-center text-gray-600 mb-16">Investimento menor que um lanche — e diversão para meses!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-gray-200 transition">
          <div className="bg-gray-100 py-4 px-8 text-center font-bold text-gray-600 uppercase tracking-widest text-sm">Kit Básico</div>
          <div className="p-10 text-center">
            <div className="mb-8">
              <span className="text-gray-400 line-through text-lg">R$ 49,90</span>
              <div className="text-5xl font-bold text-gray-800">R$ 10</div>
            </div>
            <ul className="text-left space-y-4 mb-10">
              <li className="flex gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" /> +150 atividades que fazem a criança esquecer o celular</li>
              <li className="flex gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" /> Receba pelo E-mail + download</li>
              <li className="flex gap-3 text-sm opacity-30"><X className="w-5 h-5 text-gray-400 flex-shrink-0" /> 8 Bônus Exclusivos</li>
              <li className="flex gap-3 text-sm opacity-30"><X className="w-5 h-5 text-gray-400 flex-shrink-0" /> Atualizações Grátis</li>
            </ul>
            <button 
              onClick={onOpenUpsell}
              className="w-full bg-gray-800 hover:bg-black text-white font-bold py-4 rounded-2xl transition"
            >
              QUERO O KIT BÁSICO
            </button>
            <div className="mt-6 flex justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Pagamento Seguro</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Garantia 7 Dias</span>
            </div>
          </div>
        </div>

        {/* Complete Plan */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#f27d52] relative transform md:scale-105">
          <div className="bg-[#f0c060] py-2 px-8 text-center font-bold text-gray-800 flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
            <Star className="w-3 h-3 fill-gray-800" /> MAIS VENDIDO
          </div>
          <div className="bg-[#f27d52] py-6 px-8 text-center">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">KIT COMPLETO UAU</h3>
          </div>
          <div className="p-8 text-center">
            <div className="mb-6">
              <span className="text-gray-400 line-through text-sm">R$ 97,00</span>
              <div className="text-6xl font-black text-[#22c55e] flex items-center justify-center gap-1">
                <span className="text-2xl">R$</span> 27<span className="text-2xl">,90</span>
              </div>
            </div>

            <div className="text-left mb-6">
              <p className="font-bold text-[#f27d52] mb-4">Você recebe:</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm font-bold text-[#16a34a]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Todas as versões de impressão (A4 / corte fácil / colorida / econômica P&B)
                </li>
                <li className="flex gap-3 text-sm font-bold text-[#16a34a]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Todos os 8 bônus:
                </li>
              </ul>
              
              <div className="mt-4 space-y-1 pl-4">
                {[
                  "Manhã, Tarde e Noite para Crianças",
                  "História para dormir",
                  "15 Atividades para colorir",
                  "20 Atividades lúdicas",
                  "Como Tirar Seu Filho do Celular Sem Briga",
                  "Painel de Progresso Infantil",
                  "Desafio 14 Dias Sem Tela",
                  "Como Fazer Seu Filho Pedir para Brincar"
                ].map((bonus, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg border border-dashed border-orange-200 text-[11px] font-bold text-orange-700">
                    <Gift className="w-3 h-3" />
                    {bonus}
                  </div>
                ))}
              </div>

              <li className="flex gap-3 text-sm font-bold text-[#16a34a] mt-4 list-none">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                Receba pelo E-mail + download
              </li>
            </div>

            <a 
              href="https://www.ggcheckout.com/checkout/v5/xvoVWsuYKVDJthoMiLXY" 
              className="block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xl py-6 rounded-[40px] shadow-[0_10px_0_0_#15803d] transition-all transform active:translate-y-1 active:shadow-none mb-8"
            >
              QUERO O KIT COMPLETO! 🚀
            </a>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#f0f9f4] text-[#16a34a] text-[10px] font-bold px-4 py-2 rounded-full border border-[#dcfce7] flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Pagamento Seguro
              </div>
              <div className="bg-[#f0f9f4] text-[#16a34a] text-[10px] font-bold px-4 py-2 rounded-full border border-[#dcfce7] flex items-center gap-2">
                <Zap className="w-3 h-3" /> Garantia 7 Dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const questions = [
    { q: "Como eu recebo o DESLIGA TELA?", a: "Você recebe acesso imediato pelo E-mail + opção de download dos PDFs. Assim que o pagamento aprovar, você recebe as instruções de acesso." },
    { q: "Eu preciso esperar envio? Chega pelos Correios?", a: "Não. É 100% digital. Você acessa e baixa na hora." },
    { q: "Preciso ter impressora em casa?", a: "Não necessariamente. Você pode imprimir em uma gráfica rápida/papelaria, ou quando quiser (por exemplo, no trabalho/casa de um parente)." },
    { q: "Precisa de material diferente ou caro?", a: "Não. As atividades foram pensadas com itens simples de casa. No plano completo você ainda recebe o Pacote \"Só Coisa de Casa\"." },
    { q: "Serve mesmo para 4 a 12 anos?", a: "Sim — porque cada atividade traz linguagem simples, e você consegue adaptar a \"fala\" e a explicação conforme a idade." },
    { q: "É seguro para crianças?", a: "Sim, com supervisão adulta. Sempre que existir algum cuidado extra, a atividade vem sinalizada com ⚠️ e instruções claras." },
    { q: "Qual a diferença do plano de R$10 pro de R$27,90?", a: "R$10: +150 atividades que fazem a criança esquecer o celular. R$27,90: Kit Completo UAU (+150 atividades) + 8 bônus exclusivos (Manhã, Tarde e Noite, Histórias, Colorir, Lúdicas, Guia Sem Briga, etc.)" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-800 hover:bg-gray-50 transition"
              >
                {item.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 bg-gray-900 text-white text-center">
    <div className="container mx-auto px-4">
      <p className="font-bold text-xl mb-4 text-accent">+150 atividades que fazem a criança esquecer o celular</p>
      <p className="text-xs text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
      </p>
      <p className="text-sm text-gray-400">© 2026 DESLIGA TELA. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const Testimonials = () => {
  const reviews = [
    {
      text: "Eu estava tendo muita dificuldade com meu filho no celular. Comecei a usar as atividades e foi impressionante… ele simplesmente começou a pedir pra brincar. Mudou completamente a rotina aqui em casa.",
      author: "Juliana R.",
      stars: 5
    },
    {
      text: "O que mais gostei foi a praticidade. Não preciso mais ficar procurando ideia na internet. Abro o material, escolho uma atividade e pronto. Funciona de verdade.",
      author: "Marcos A.",
      stars: 5
    },
    {
      text: "Meu filho ficava irritado quando eu tirava o celular. Agora ele nem sente falta, porque sempre tem algo divertido pra fazer. Valeu muito a pena.",
      author: "Fernanda S.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Que Dizem os Pais ⭐</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-accent/10 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">"{review.text}"</p>
              <p className="font-bold text-gray-900">— {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UpsellModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden relative z-10 shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-8 text-center">
            <div className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-[10px] mb-3">OPORTUNIDADE ÚNICA 🚀</div>
            <h2 className="text-2xl font-bold mb-1">ESPERE!</h2>
            <p className="text-gray-500 mb-6 text-sm">Não vá embora com apenas o básico...</p>

            <div className="bg-accent/10 p-5 rounded-2xl mb-6">
              <p className="text-xs text-gray-600 mb-1">Leve o <strong>KIT COMPLETO</strong></p>
              <div className="flex flex-col items-center">
                <span className="text-gray-400 line-through text-base">De R$ 27,90</span>
                <span className="text-3xl font-bold text-primary">Por apenas R$ 17,90</span>
              </div>
            </div>

            <ul className="text-left space-y-1 mb-8 text-[11px]">
              <li className="flex items-center gap-2 font-bold text-sm mb-1"><CheckCircle2 className="w-3.5 h-3.5 text-success" /> +150 Atividades (Kit Completo)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> Manhã, Tarde e Noite para Crianças</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> História para dormir</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> 15 Atividades para colorir</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> 20 Atividades lúdicas</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> Como Tirar Seu Filho do Celular Sem Briga</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> Painel de Progresso Infantil</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> Desafio 14 Dias Sem Tela</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-success" /> Como Fazer Seu Filho Pedir para Brincar</li>
            </ul>

            <div className="space-y-3">
              <a 
                href="https://www.ggcheckout.com/checkout/v5/k7Vlm5HLu2GN6W4g64ho" 
                className="block w-full bg-primary hover:bg-red-500 text-white font-bold py-4 rounded-2xl shadow-lg transition pulse text-base"
              >
                QUERO O COMPLETO POR R$ 17,90
              </a>
              <button 
                onClick={() => window.location.href = "https://www.ggcheckout.com/checkout/v5/XjzsBV4gq8udiRPBFhwh"}
                className="text-[10px] text-gray-400 hover:text-gray-600 underline"
              >
                Não, obrigado. Quero apenas o kit básico de R$ 10.
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Main App ---

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Showcase />
      <Benefits />
      <Comparison />
      <Bonus />
      <Offers onOpenUpsell={() => setIsUpsellOpen(true)} />
      <FAQ />
      <Testimonials />
      <Footer />
      
      <UpsellModal 
        isOpen={isUpsellOpen} 
        onClose={() => setIsUpsellOpen(false)} 
      />
    </div>
  );
}
