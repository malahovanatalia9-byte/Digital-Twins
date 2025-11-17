'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

const layers = [
  {
    id: 1,
    title: "Демография",
    subtitle: "Базовые параметры",
    color: "rgba(255, 179, 0, 0.05)",
    borderColor: "rgba(255, 179, 0, 0.2)",
  },
  {
    id: 2,
    title: "Социальный контекст",
    subtitle: "Окружение и связи",
    color: "rgba(255, 179, 0, 0.08)",
    borderColor: "rgba(255, 179, 0, 0.3)",
  },
  {
    id: 3,
    title: "Психология",
    subtitle: "Когнитивные модели",
    color: "rgba(255, 179, 0, 0.1)",
    borderColor: "rgba(255, 179, 0, 0.4)",
  },
  {
    id: 4,
    title: "Мотивации / Барьеры",
    subtitle: "Драйверы решений",
    color: "rgba(255, 179, 0, 0.12)",
    borderColor: "rgba(255, 179, 0, 0.5)",
  },
  {
    id: 5,
    title: "Поведенческие паттерны",
    subtitle: "Модели действий",
    color: "rgba(255, 179, 0, 0.15)",
    borderColor: "rgba(255, 179, 0, 0.6)",
  },
  {
    id: 6,
    title: "Прогноз реакции",
    subtitle: "Предсказательный слой",
    color: "rgba(255, 179, 0, 0.18)",
    borderColor: "rgba(255, 179, 0, 0.7)",
  },
];

export function DigitalTwinArchitecture() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [visibleLayers, setVisibleLayers] = useState<number[]>([]);
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Layers appear from bottom to top
      layers.forEach((layer, index) => {
        setTimeout(() => {
          setVisibleLayers(prev => [...prev, layer.id]);
        }, index * 150);
      });

      // Activate glow after all layers appear
      setTimeout(() => {
        setGlowActive(true);
      }, layers.length * 150 + 300);
    }
  }, [isVisible]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-black relative overflow-hidden" ref={ref}>
      {/* Background grid */}
      <div className="absolute inset-0 data-grid-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Архитектура <span className="text-[#FFB300]">цифровой личности</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Многослойная структура данных для точного моделирования поведения
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ height: '480px' }}>
            {/* Central visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-3xl" style={{ perspective: '1000px' }}>
                {layers.map((layer, index) => {
                  const isLayerVisible = visibleLayers.includes(layer.id);
                  const reverseIndex = layers.length - index;

                  return (
                    <div
                      key={layer.id}
                      className="absolute left-0 right-0 mx-auto transition-all duration-500 ease-out"
                      style={{
                        height: '65px',
                        bottom: `${-80 + (index * 58)}px`,
                        opacity: isLayerVisible ? 1 : 0,
                        transform: isLayerVisible
                          ? 'translateY(0) rotateX(0deg)'
                          : 'translateY(100px) rotateX(-15deg)',
                        transitionDelay: `${index * 150}ms`,
                        zIndex: reverseIndex,
                      }}
                    >
                      {/* Layer container */}
                      <div
                        className="relative h-full rounded-lg backdrop-blur-sm"
                        style={{
                          background: layer.color,
                          border: `1px solid ${layer.borderColor}`,
                          boxShadow: glowActive
                            ? `0 0 20px ${layer.borderColor}, inset 0 0 20px ${layer.borderColor}`
                            : `0 0 10px ${layer.borderColor}`,
                          transition: 'box-shadow 0.5s ease-out',
                        }}
                      >
                        {/* Glass effect overlay */}
                        <div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                          }}
                        />

                        {/* Content */}
                        <div className="relative h-full flex items-center justify-between px-8">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded border flex items-center justify-center text-sm font-bold"
                                style={{
                                  borderColor: layer.borderColor,
                                  color: '#FFB300',
                                  background: 'rgba(0,0,0,0.3)',
                                }}
                              >
                                {layer.id}
                              </div>
                              <div>
                                <h3 className="text-white font-semibold text-lg">
                                  {layer.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-light">
                                  {layer.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Corner accent */}
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full"
                                style={{
                                  background: layer.borderColor,
                                  boxShadow: glowActive ? `0 0 4px ${layer.borderColor}` : 'none',
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Connecting lines */}
                        {index < layers.length - 1 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#FFB300] to-transparent"
                            style={{
                              height: '58px',
                              top: '100%',
                              opacity: glowActive ? 0.3 : 0,
                              transition: 'opacity 0.5s ease-out',
                            }}
                          />
                        )}
                      </div>

                      {/* Side annotation lines */}
                      <div
                        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 flex items-center gap-2"
                        style={{
                          opacity: isLayerVisible ? 1 : 0,
                          transition: 'opacity 0.3s ease-out',
                          transitionDelay: `${index * 150 + 200}ms`,
                        }}
                      >
                        <div
                          className="h-px w-8"
                          style={{ background: `linear-gradient(to left, ${layer.borderColor}, transparent)` }}
                        />
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: layer.borderColor,
                            boxShadow: glowActive ? `0 0 6px ${layer.borderColor}` : 'none',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side labels */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-left">
              <div className={`scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                <div className="text-xs uppercase tracking-wider text-[#FFB300] mb-2 font-semibold">
                  Data Structure
                </div>
                <div className="text-gray-500 text-sm font-light">
                  6 уровней
                  <br />
                  моделирования
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
              <div className={`scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
                <div className="text-xs uppercase tracking-wider text-[#FFB300] mb-2 font-semibold">
                  AI-Powered
                </div>
                <div className="text-gray-500 text-sm font-light">
                  Нейросетевая
                  <br />
                  обработка
                </div>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className={`mt-8 text-center scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFB300]/30 bg-[#FFB300]/5">
              <div className="w-2 h-2 rounded-full bg-[#FFB300] animate-pulse-glow" />
              <span className="text-sm text-gray-400 font-light">
                Каждый слой обрабатывается независимо и синтезируется в единую модель
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
