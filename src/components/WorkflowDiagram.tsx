'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Database, Users, Brain, Workflow, LineChart, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const workflow = [
  {
    icon: <Database className="w-10 h-10 text-[#FFB300]" />,
    title: "Data",
    description: "Знания клиента, открытые данные, исследования, поведенческие маркеры"
  },
  {
    icon: <Users className="w-10 h-10 text-[#FFB300]" />,
    title: "Profile Layer",
    description: "Демография, психология, ценности, мотивация, паттерны"
  },
  {
    icon: <Brain className="w-10 h-10 text-[#FFB300]" />,
    title: "Twin Models",
    description: "Тысячи уникальных комбинаций параметров"
  },
  {
    icon: <Workflow className="w-10 h-10 text-[#FFB300]" />,
    title: "AI-Simulation",
    description: "Задачи клиента: продукт, дизайн, цена, коммуникация"
  },
  {
    icon: <LineChart className="w-10 h-10 text-[#FFB300]" />,
    title: "Insights",
    description: "Прогнозы, распределения, рекомендации"
  }
];

export function WorkflowDiagram() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible) {
      workflow.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}>
          Как это <span className="text-[#FFB300]">работает</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div
                  className="flex flex-col items-center flex-1"
                  style={{
                    opacity: visibleSteps.includes(index) ? 1 : 0,
                    transform: visibleSteps.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                  }}
                >
                  <div
                    className="w-20 h-20 bg-[#1a1a1a] border-2 border-[#FFB300]/50 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      boxShadow: visibleSteps.includes(index) ? '0 0 20px rgba(255, 179, 0, 0.3)' : 'none',
                      transition: 'box-shadow 0.5s ease-out'
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#FFB300] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center max-w-xs font-light">
                    {step.description}
                  </p>
                </div>

                {index < workflow.length - 1 && (
                  <div
                    className="hidden lg:flex items-center mt-10"
                    style={{
                      opacity: visibleSteps.includes(index) ? 1 : 0,
                      transition: 'opacity 0.3s ease-out',
                      transitionDelay: `${index * 200 + 300}ms`
                    }}
                  >
                    <ArrowRight className="w-8 h-8 text-[#FFB300]/70" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
