'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { DigitalTwinArchitecture } from "@/components/DigitalTwinArchitecture";
import {
  Brain,
  Target,
  Shield,
  TrendingUp,
  Package,
  MessageSquare,
  Users,
  DollarSign,
  ShoppingCart,
  AlertCircle,
  MousePointer,
  Workflow
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
              <span className="text-white">Digital Twins</span>
              <span className="text-[#FFB300] ml-2">AI</span>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-[#FFB300] transition-colors"
              >
                Возможности
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-[#FFB300] transition-colors"
              >
                Кейсы
              </Button>
              <Button
                className="bg-[#FFB300] hover:bg-[#FFB300]/90 text-black font-medium glow-amber"
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden data-grid-bg pt-20">
        <div className="absolute inset-0 gradient-radial opacity-50 animate-float-subtle" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFB300] rounded-full animate-pulse-glow" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#FFB300] rounded-full animate-pulse-glow" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#FFB300] rounded-full animate-pulse-glow" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FFB300] rounded-full animate-pulse-glow" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <AnimatedSection animation="fade" className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Digital Twins</span>
                <br />
                <span className="text-[#FFB300] text-glow-amber">Research & Prediction Service</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={1}>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                AI-решение, которое моделирует целевые сегменты, прогнозирует реакции на продукты, коммуникации и ценовые сценарии — до запуска.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide" delay={2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button
                  size="lg"
                  className="bg-[#FFB300] hover:bg-[#FFB300]/90 text-black font-medium px-8 py-6 text-lg glow-amber"
                >
                  Получить демонстрацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FFB300]/50 text-[#FFB300] hover:bg-[#FFB300]/10 font-medium px-8 py-6 text-lg border-glow"
                >
                  Узнать стоимость
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24 bg-gradient-to-b from-[#121212] to-black">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Что дает решение <span className="text-[#FFB300]">вашему бизнесу</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="scale" delay={index + 1}>
                <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#FFB300]/50 transition-all duration-300 p-6 group hover:glow-amber h-full">
                  <div className="mb-4 text-[#FFB300] group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Diagram */}
      <WorkflowDiagram />

      {/* Digital Twin Architecture */}
      <DigitalTwinArchitecture />

      {/* Detailed Process */}
      <section className="py-24 bg-gradient-to-b from-black to-[#121212]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Как мы <span className="text-[#FFB300]">работаем</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {detailedProcess.map((step, index) => (
              <AnimatedSection key={index} animation="slide" delay={index + 1}>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1a1a1a] border border-[#FFB300]/30 rounded-full flex items-center justify-center text-2xl font-bold text-[#FFB300] group-hover:glow-amber transition-all duration-300">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-[#2a2a2a] last:border-0">
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#FFB300] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#121212]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Примеры задач, которые мы <span className="text-[#FFB300]">решаем</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} animation="scale" delay={index + 1}>
                <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#FFB300]/50 transition-all duration-300 p-6 group hover:glow-amber h-full">
                  <div className="mb-3 text-[#FFB300] group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white leading-tight">
                    {useCase.title}
                  </h3>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-b from-[#121212] to-black">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-[#FFB300]">Кейсы</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy, index) => (
              <AnimatedSection key={index} animation="scale" delay={index + 1}>
                <Card className="bg-[#1a1a1a] border-[#FFB300]/30 p-8 hover:glow-amber transition-all duration-300 h-full">
                  <div className="text-sm font-semibold text-[#FFB300] mb-4 uppercase tracking-wide">
                    {caseStudy.industry}
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {caseStudy.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <AnimatedSection animation="fade">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-[#2a2a2a] rounded flex items-center justify-center">
                    <div className="text-gray-600 font-semibold">CLIENT LOGO</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide" delay={1}>
              <blockquote className="text-xl text-gray-400 italic border-l-2 border-[#FFB300] pl-6 font-light">
                "Решение позволило нам протестировать концепцию продукта на виртуальной аудитории и скорректировать стратегию до запуска. Это сэкономило бюджет и время."
              </blockquote>
              <div className="text-gray-500 font-light mt-4">
                — Директор по маркетингу, FMCG компания
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 glow-amber-lg opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedSection animation="slide">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Готовы спрогнозировать реакцию вашей аудитории{" "}
                <span className="text-[#FFB300]">ещё до запуска?</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button
                  size="lg"
                  className="bg-[#FFB300] hover:bg-[#FFB300]/90 text-black font-medium px-8 py-6 text-lg glow-amber hover:scale-105 transition-transform"
                >
                  Запросить проект
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FFB300]/50 text-[#FFB300] hover:bg-[#FFB300]/10 font-medium px-8 py-6 text-lg border-glow hover:scale-105 transition-transform"
                >
                  Получить консультацию
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#2a2a2a]">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-600 font-light">
            © 2025 Digital Twins Research & Prediction Service
          </div>
        </div>
      </footer>
    </main>
  );
}

const benefits = [
  {
    icon: <Target className="w-10 h-10" />,
    title: "Прогноз реакции аудитории",
    description: "Как аудитория воспримет продукт, сообщение, дизайн, MVP, рекламный креатив или цену — ещё до запуска."
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "Глубокое понимание сегментов",
    description: "Мотивации, барьеры, ценности, стиль принятия решений, эмоциональные триггеры."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Тестирование идей и продуктов",
    description: "Проверка концепций, упаковки, позиционирования, SKU, прототипов с количественной оценкой."
  },
  {
    icon: <Workflow className="w-10 h-10" />,
    title: "Создание сценариев поведения",
    description: "Анализ вероятных действий: покупка, переход, отказ, реакция на оффер или креатив."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Моделирование сложных сегментов",
    description: "Нишевая аудитория, закрытые группы, высокочувствительные сегменты, поведенческие кластеры."
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Оптимизация маркетинга и продаж",
    description: "Улучшение сообщений, UX-паттернов, карточек товаров, ценообразования."
  }
];

const detailedProcess = [
  {
    title: "Сбор информации о сегментах и рынке",
    description: "Интервью, инсайты клиента, открытые источники, анализ поведения аудитории."
  },
  {
    title: "Многослойное профилирование аудитории",
    description: "Демография, психология, мотивация, привычки, эмоциональные реакции, паттерны выбора."
  },
  {
    title: "Создание цифровых моделей аудитории (Digital Twins)",
    description: "Формируем тысячи моделей с уникальными комбинациями поведенческих и психографических параметров."
  },
  {
    title: "Построение AI-сценариев под вашу задачу",
    description: "Прогнозируем реакцию на продукт, дизайн, цену, офферы, сообщения, коммуникации."
  }
];

const useCases = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Прогноз реакции на рекламные кампании"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Оценка спроса до запуска продукта"
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Оптимизация упаковки и коммуникаций"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Сегментация и микротаргетинг"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Тестирование офферов и ценовых сценариев"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Моделирование поведения покупателей"
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "Оценка барьеров покупки"
  },
  {
    icon: <MousePointer className="w-8 h-8" />,
    title: "Имитация поведения под органический трафик"
  }
];

const caseStudies = [
  {
    industry: "Кейс 1. Ритейл",
    description: "Предсказали реакцию на новый продукт → клиент сократил риск неуспеха и оптимизировал линейку."
  },
  {
    industry: "Кейс 2. FMCG",
    description: "Смоделировали поведение 20 тыс. цифровых профилей → улучшили упаковку и вырос CTR на тесте."
  },
  {
    industry: "Кейс 3. E-commerce",
    description: "Построили сценарии выбора → увеличение конверсии карточек товаров на 18%."
  }
];
