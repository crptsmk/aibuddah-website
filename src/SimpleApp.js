import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { baseInfo, projects, tools, contact, intensive, testimonials, faq } from './data.js';

function SimpleApp() {
  
  // Intersection Observer для автозапуска YouTube видео
  useEffect(() => {
    const videoBlock = document.getElementById('ai-base-video-block');
    const iframe = document.getElementById('ai-base-youtube-video');
    let hasPlayed = false;

    if (videoBlock && iframe) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            // Добавляем autoplay к src видео
            iframe.src = iframe.src.replace('mute=1', 'mute=1&autoplay=1');
            hasPlayed = true;
            
            // Опционально: убираем observer после первого запуска
            observer.unobserve(videoBlock);
          }
        });
      }, {
        threshold: 0.5, // Запускаем когда 50% блока видно
        rootMargin: '0px'
      });

      observer.observe(videoBlock);

      // Cleanup function
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, []);

  return (
    <div className="bg-cyber-dark text-white min-h-screen">
      {/* Navigation - С фирменным логотипом */}
      <nav className="fixed top-0 left-0 right-0 bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-green/30 z-50 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/om-ai-logo.png" 
              alt="AI Buddah Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xl sm:text-2xl font-brutal font-black text-cyber-green">AI BUDDAH</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a href="#about" className="text-gray-300 hover:text-cyber-green transition-colors text-sm xl:text-base">О себе</a>
            <a href="#intensive" className="text-gray-300 hover:text-cyber-orange transition-colors text-sm xl:text-base">Интенсив</a>
            <a href="#buddah-base" className="text-gray-300 hover:text-cyber-purple transition-colors text-sm xl:text-base">Base</a>
            <a href="#lead-magnet" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm xl:text-base">Бесплатно</a>
            <a href="#cases" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm xl:text-base">Кейсы</a>
            <a href="#faq" className="text-gray-300 hover:text-cyber-green transition-colors text-sm xl:text-base">FAQ</a>
            <a href="https://payform.ru/ms93cWm/" className="btn-cyber btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2">
              🔥 Интенсив
            </a>
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <a href="#lead-magnet" className="btn-cyber btn-accent text-xs px-3 py-2">
              🎁 FREE
            </a>
            <a href="#buddah-base" className="btn-cyber btn-secondary text-xs px-3 py-2">
              Base
            </a>
            <a href="https://payform.ru/ms93cWm/" className="btn-cyber btn-primary text-xs px-3 py-2">
              🔥 Курс
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Улучшенная мобильная адаптация */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen relative flex items-center justify-center pt-16 sm:pt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-brutal font-black text-cyber-green neon-text mb-6 sm:mb-8 leading-tight"
          >
            Обучение нейросетям и ChatGPT с нуля за 2 недели
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-brutal font-black text-cyber-green neon-text mb-4 sm:mb-6"
          >
            AI BUDDAH
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyber-green via-cyber-purple to-cyber-cyan mx-auto mb-6 sm:mb-8"
          ></motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 max-w-5xl mx-auto leading-tight px-2"
          >
            <span className="text-white">Интенсив по AI от эксперта </span>
            <span className="text-cyber-green">Александра</span>
            <span className="text-white"> — продюсера </span>
            <span className="text-cyber-purple">digital-продуктов</span>
            <span className="text-white"> и автоматизатора бизнеса</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Изучи <strong className="text-cyber-green">MidJourney, ChatGPT, Veo 3</strong> и создавай системы автоматизации: 
            от ботов и автоворонок до AI-контента и маркетплейсов
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto px-2">
            <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-lg p-3 sm:p-4">
              <div className="text-cyber-green text-xl sm:text-2xl mb-2">⚡</div>
              <div className="text-sm font-bold text-cyber-green">За 2 недели</div>
              <div className="text-xs text-gray-400">Интенсивный формат</div>
            </div>
            <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-lg p-3 sm:p-4">
              <div className="text-cyber-purple text-xl sm:text-2xl mb-2">🎯</div>
              <div className="text-sm font-bold text-cyber-purple">Практика</div>
              <div className="text-xs text-gray-400">Готовое портфолио</div>
            </div>
            <div className="bg-cyber-gray/30 border border-cyber-cyan/20 rounded-lg p-3 sm:p-4">
              <div className="text-cyber-cyan text-xl sm:text-2xl mb-2">💰</div>
              <div className="text-sm font-bold text-cyber-cyan">Монетизация</div>
              <div className="text-xs text-gray-400">Реальные навыки</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a 
              href="https://payform.ru/4193Ie4/" 
              className="btn-cyber btn-primary text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto hover:scale-105 transition-transform"
            >
              🔥 ВСТУПИТЬ В AI BASE ЗА 999₽
            </a>
            <a 
              href="https://t.me/buddah_ai" 
              className="btn-cyber btn-secondary text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
            >
              📱 Бесплатный Telegram-канал
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cyber-gray relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-brutal font-black text-cyber-cyan neon-text mb-8">
                ПОЧЕМУ ИИ — ПРОФЕССИЯ БУДУЩЕГО
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-cyber-green mb-6">Об Александре (AI Buddah)</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  <strong className="text-cyber-green">AI-предприниматель и digital-продюсер</strong>, создаю продукты, 
                  автоматизации и обучение в сфере искусственного интеллекта уже более 3 лет.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Помогаю бизнесу внедрять <strong className="text-cyber-purple">нейросети и автоматизировать процессы</strong> 
                  для увеличения прибыли и экономии времени. Более 1000 учеников уже применяют мои методики.
                </p>
              </div>
              
              <div className="bg-cyber-dark/50 border border-cyber-green/20 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-cyber-green mb-6 text-center">
                  🚀 Рынок ИИ растет на 40% в год
                </h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-black text-cyber-cyan mb-2">$500B</div>
                    <div className="text-gray-300">Размер рынка ИИ к 2025</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-cyber-purple mb-2">85%</div>
                    <div className="text-gray-300">Компаний внедряют ИИ</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-cyber-orange mb-2">$150k</div>
                    <div className="text-gray-300">Средняя зарплата AI-специалиста</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Creative Gallery Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyber-purple rounded-full opacity-5 blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyber-cyan rounded-full opacity-5 blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Заголовок секции */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-brutal font-black text-cyber-green neon-text mb-6"
              >
                🎨 AI-КРЕАТИВЫ БУДУЩЕГО
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              >
                Вот какие уникальные визуалы ты сможешь создавать с помощью ИИ — 
                или просто закажи их для своего бизнеса
              </motion.p>
              <div className="w-32 h-1 bg-gradient-to-r from-cyber-green via-cyber-purple to-cyber-cyan mx-auto"></div>
            </div>

            {/* Галерея изображений */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  url: "https://customer-assets.emergentagent.com/job_site-analyzer-15/artifacts/4gvay63o_u7332619193_Captured_with_a_50mm_f8_lens_ISO_100_using_hard_stu_07603a1b-5fa9-49f9-9483-1e2d64b071a3.png",
                  title: "Киберпанк портрет",
                  description: "Стильная fashion-фотография с неоновым освещением"
                },
                {
                  url: "https://customer-assets.emergentagent.com/job_site-analyzer-15/artifacts/joovvhb8_u7332619193_Captured_with_an_85mm_f2.0_lens_ISO_100_using_sligh_63483a5b-896b-4371-aa6d-665b6e735b81.png",
                  title: "Атмосферный портрет",
                  description: "Профессиональная портретная съёмка с драматичным освещением"
                },
                {
                  url: "https://customer-assets.emergentagent.com/job_site-analyzer-15/artifacts/p2xuokh6_u7332619193_Captured_with_a_35mm_f5.6_lens_ISO_200_using_bold_f_39dcac00-6433-47c2-98b1-74a4ba2cd2d0.png",
                  title: "Неоновая эстетика",
                  description: "Яркие цвета и современная обработка для соцсетей"
                },
                {
                  url: "https://customer-assets.emergentagent.com/job_site-analyzer-15/artifacts/8x2mf4d5_u7332619193_Captured_with_a_50mm_f2.2_lens_ISO_100_using_natura_149e419e-54aa-4549-a98d-a31a7f7d9f63.png",
                  title: "Тёплое освещение",
                  description: "Естественные тона с профессиональной цветокоррекцией"
                },
                {
                  url: "https://customer-assets.emergentagent.com/job_site-analyzer-15/artifacts/ef1l2ulq_u7332619193_Black_and_white_monochrome_processing_high_contrast_54b4c930-b4c3-4e8d-b452-55968ac1a9e0.png",
                  title: "Монохромная магия",
                  description: "Классическая чёрно-белая обработка с высоким контрастом"
                }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-cyber-gray border border-cyber-green/20 rounded-xl overflow-hidden hover:border-cyber-green transition-all duration-500 hover:animate-glow"
                >
                  <div className="relative overflow-hidden aspect-[2/3]">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-cyber-green mb-2 group-hover:text-cyber-cyan transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Hover эффект */}
                  <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            {/* Статистика и призыв к действию */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-cyber-purple mb-2">300%</div>
                <div className="text-gray-300">Увеличение вовлечённости</div>
                <div className="text-sm text-gray-500">с AI-контентом</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-cyber-cyan mb-2">15 мин</div>
                <div className="text-gray-300">Время создания</div>
                <div className="text-sm text-gray-500">вместо 5 часов</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-cyber-orange mb-2">$50+</div>
                <div className="text-gray-300">Стоимость креатива</div>
                <div className="text-sm text-gray-500">на фрилансе</div>
              </motion.div>
            </div>

            {/* CTA блок */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-cyber-green/10 via-cyber-purple/10 to-cyber-cyan/10 border border-cyber-green/30 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-cyber-green mb-4">
                🚀 Создавай такие же шедевры!
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                Освой MidJourney, ChatGPT и другие AI-инструменты за 2 недели. 
                Создавай уникальный контент и зарабатывай от $500 в месяц.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://payform.ru/ms93cWm/" 
                  className="btn-cyber btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  🔥 Пройти интенсив за 19,990₽
                </a>
                <a 
                  href="https://payform.ru/4193Ie4/" 
                  className="btn-cyber btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  💎 AI Base за 999₽
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intensive Section - Полностью переработанная */}
      <section id="intensive" className="py-20 bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-cyber-orange rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-pink rounded-full opacity-10 blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-brutal font-black text-cyber-orange neon-text mb-6">
                🔥 ИНТЕНСИВ ПО НЕЙРОСЕТЯМ
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                7 уроков = 7 шагов к созданию контента с ИИ и монетизации своих навыков
              </p>
              
              {/* Афиша: дата, цена, места */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
                <div className="bg-cyber-gray/50 border border-cyber-orange/30 rounded-lg px-4 py-3">
                  <span className="text-cyber-orange font-bold text-sm sm:text-base">📅 Старт: 29 сентября</span>
                </div>
                <div className="bg-cyber-gray/50 border border-cyber-pink/30 rounded-lg px-4 py-3">
                  <span className="text-cyber-pink font-bold text-sm sm:text-base">💎 Цена: 19,990₽</span>
                </div>
                <div className="bg-cyber-gray/50 border border-cyber-cyan/30 rounded-lg px-4 py-3">
                  <span className="text-cyber-cyan font-bold text-sm sm:text-base">👥 Мест: только 15</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Левая колонка - Программа */}
              <div>
                <h3 className="text-3xl font-bold text-cyber-orange mb-8 neon-text">
                  📚 Программа интенсива:
                </h3>
                
                <div className="space-y-4">
                  {intensive.program && intensive.program.map((lesson, index) => (
                    <motion.div
                      key={lesson.number}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-cyber-gray/30 border border-cyber-orange/20 rounded-lg p-4 sm:p-6 hover:border-cyber-orange transition-all duration-300 hover:animate-glow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-cyber-orange/20 rounded-full flex items-center justify-center border border-cyber-orange/30">
                            <span className="text-2xl">{lesson.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-cyber-orange font-bold text-lg mb-2">
                            Урок {lesson.number}
                          </div>
                          <div className="text-gray-300 leading-relaxed">
                            {lesson.title}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Правая колонка - Результаты и формат */}
              <div>
                {/* Результаты */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-cyber-cyan mb-6 neon-text">
                    🎯 Что получишь:
                  </h3>
                  
                  <div className="space-y-3">
                    {intensive.results && intensive.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-cyber-gray/20 border border-cyber-cyan/20 rounded-lg hover:border-cyber-cyan transition-all duration-300"
                      >
                        <span className="text-gray-300 leading-relaxed">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Формат */}
                <div className="bg-cyber-gray/30 border border-cyber-purple/30 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-cyber-purple mb-4 neon-text">
                    📋 Формат обучения:
                  </h4>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-purple">⏰</span>
                      <span>{intensive.format && intensive.format.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-purple">📝</span>
                      <span>{intensive.format && intensive.format.homework}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-purple">💬</span>
                      <span>{intensive.format && intensive.format.support}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-purple">👥</span>
                      <span>{intensive.format && intensive.format.group_size}</span>
                    </div>
                  </div>
                </div>

                {/* CTA блок */}
                <div className="text-center bg-gradient-to-r from-cyber-orange/10 via-cyber-pink/10 to-cyber-orange/10 border border-cyber-orange/30 rounded-2xl p-6 sm:p-8">
                  <h4 className="text-2xl font-bold text-cyber-orange mb-4">
                    🚀 Бронируй место прямо сейчас!
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Только 15 мест • Старт уже 29 сентября
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://payform.ru/ms93cWm/" 
                      className="btn-cyber btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform"
                    >
                      🔥 ПРОЙТИ ИНТЕНСИВ за 19,990₽
                    </a>
                    <a 
                      href="https://t.me/buddah_ai" 
                      className="btn-cyber btn-secondary text-lg px-8 py-4"
                    >
                      💬 Задать вопросы
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buddah Base Section - С автозапуском YouTube видео */}
      <section id="buddah-base" className="py-20 bg-gradient-cyber relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyber-purple rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyber-cyan rounded-full opacity-10 blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* YouTube Video Block */}
            <motion.div
              id="ai-base-video-block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-brutal font-black text-cyber-green neon-text mb-6">
                  AI BUDDAH BASE
                </h2>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Твой быстрый старт в современный контент: видео, креативы, автоматизация под ключ.
                </p>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="relative aspect-video bg-cyber-gray/30 border border-cyber-green/20 rounded-2xl overflow-hidden hover:border-cyber-green transition-all duration-300">
                  <iframe
                    id="ai-base-youtube-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/OGHdUrV6jvU?mute=1&rel=0&modestbranding=1&playsinline=1"
                    title="AI Base Demo - Как работать с нейросетями"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Декоративные элементы вокруг видео */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-green rounded-tl-lg"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-green rounded-tr-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-green rounded-bl-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-green rounded-br-lg"></div>
              </div>

              {/* Связующий блок после видео */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12 mb-16"
              >
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyber-cyan mb-4">
                    <span className="text-cyber-orange">Хочешь так же?</span> Всё, что нужно — уже внутри AI Base!
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyber-orange via-cyber-cyan to-cyber-green mx-auto"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Основной контент AI Base */}
            <motion.div
              id="ai-base-main-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
            {/* Описание экосистемы */}
            <div className="text-center mb-16">
              <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
                Закрытая цифровая экосистема для быстрого освоения нейросетей, прокачки автоматизации и превращения знаний в <span className="text-cyber-green font-bold">реальные деньги</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-cyber-green/10 border border-cyber-green text-cyber-green px-4 py-2 rounded-full text-sm">
                  🚀 Без воды и теории
                </span>
                <span className="bg-cyber-purple/10 border border-cyber-purple text-cyber-purple px-4 py-2 rounded-full text-sm">
                  ⚡ Только практика
                </span>
                <span className="bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan px-4 py-2 rounded-full text-sm">
                  💰 Фокус на монетизацию
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Левая колонка - Что внутри */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyber-purple mb-8 neon-text">
                  🧠 Что внутри AI Base:
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-lg p-4 sm:p-6 hover:border-cyber-green transition-all duration-300">
                    <div className="text-cyber-green text-2xl mb-3">🎥</div>
                    <h4 className="text-lg font-bold text-cyber-green mb-3">30+ практических видеоуроков</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      ChatGPT, Midjourney, n8n, Threads — с пошаговыми разборами и лайфхаками по монетизации
                    </p>
                  </div>
                  
                  <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-lg p-4 sm:p-6 hover:border-cyber-purple transition-all duration-300">
                    <div className="text-cyber-purple text-2xl mb-3">💬</div>
                    <h4 className="text-lg font-bold text-cyber-purple mb-3">2000+ проверенных промптов</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      По категориям: контент, маркетинг, автоматизация, продажи — для всех нейросетей
                    </p>
                  </div>
                  
                  <div className="bg-cyber-gray/30 border border-cyber-cyan/20 rounded-lg p-4 sm:p-6 hover:border-cyber-cyan transition-all duration-300">
                    <div className="text-cyber-cyan text-2xl mb-3">⚙️</div>
                    <h4 className="text-lg font-bold text-cyber-cyan mb-3">50+ шаблонов автоматизаций</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Готовые сценарии n8n, Make, Zapier — создавай автоворонки за минуты
                    </p>
                  </div>
                  
                  <div className="bg-cyber-gray/30 border border-cyber-orange/20 rounded-lg p-4 sm:p-6 hover:border-cyber-orange transition-all duration-300">
                    <div className="text-cyber-orange text-2xl mb-3">🛠️</div>
                    <h4 className="text-lg font-bold text-cyber-orange mb-3">1000+ AI-инструментов</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Кастомные GPT, подборки сервисов для любой задачи — всегда актуальные
                    </p>
                  </div>
                </div>

                {/* Дополнительные преимущества */}
                <div className="bg-cyber-dark/70 border border-cyber-green/30 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-cyber-green mb-4">💎 Эксклюзивные бонусы:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-green">✓</span>
                      <span className="text-gray-300">Закрытая Telegram-группа</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-green">✓</span>
                      <span className="text-gray-300">Еженедельные Q&A эфиры</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-green">✓</span>
                      <span className="text-gray-300">Персональная поддержка</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-green">✓</span>
                      <span className="text-gray-300">Обновления весь год</span>
                    </div>
                  </div>
                </div>

                {/* Кому подойдет */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-cyber-cyan mb-6">💼 Кому подойдет AI Base:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-cyber-gray/20 rounded-lg">
                      <span className="text-cyber-cyan">🎯</span>
                      <span className="text-gray-300 text-sm">Врагам скучной рутины</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-cyber-gray/20 rounded-lg">
                      <span className="text-cyber-purple">🚀</span>
                      <span className="text-gray-300 text-sm">Создателям нового</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-cyber-gray/20 rounded-lg">
                      <span className="text-cyber-green">📈</span>
                      <span className="text-gray-300 text-sm">Новичкам и профи</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-cyber-gray/20 rounded-lg">
                      <span className="text-cyber-orange">🤝</span>
                      <span className="text-gray-300 text-sm">Ценителям комьюнити</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Правая колонка - Прайсинг */}
              <div className="flex justify-center lg:justify-start">
                <div className="bg-cyber-gray border-2 border-cyber-green rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden max-w-sm w-full sticky top-24">
                  {/* Фоновый эффект */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-cyber-purple/5 to-cyber-cyan/5"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <span className="text-cyber-cyan text-xs border border-cyber-cyan/50 rounded-full px-3 py-1">
                        💎 ЭКСКЛЮЗИВНЫЙ ДОСТУП
                      </span>
                    </div>
                    
                    {/* Цена */}
                    <div className="mb-8">
                      <div className="text-5xl sm:text-6xl font-brutal font-black text-cyber-green neon-text mb-2">
                        999<span className="text-xl">₽</span>
                      </div>
                      <div className="text-cyber-purple text-lg font-bold mb-2">
                        на весь год
                      </div>
                      <div className="text-gray-400 text-sm mb-4">
                        меньше 3 ₽ в день
                      </div>
                      <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-3 mb-4">
                        <div className="text-cyber-green font-bold text-sm">💰 Окупаемость за 1 проект</div>
                        <div className="text-gray-400 text-xs">Средний заказ на AI-контент: 15,000₽</div>
                      </div>
                    </div>

                    {/* Гарантии */}
                    <div className="mb-6">
                      <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg p-3 mb-3">
                        <div className="text-cyber-purple font-bold text-sm">🤝 Настоящее AI-сообщество:</div>
                        <div className="text-gray-400 text-xs">Всегда есть кто подскажет, поддержит и замотивирует — растём и зарабатываем вместе!</div>
                      </div>
                      <div className="bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg p-3">
                        <div className="text-cyber-cyan font-bold text-sm">⚡ Мгновенный доступ</div>
                        <div className="text-gray-400 text-xs">Доступ открывается сразу после оплаты</div>
                      </div>
                    </div>

                    <a 
                      href="https://payform.ru/4193Ie4/" 
                      className="btn-cyber btn-primary w-full text-lg py-4 mb-4 block hover:scale-105 transition-transform"
                    >
                      🚀 ВСТУПИТЬ В AI BASE
                    </a>
                    
                    <p className="text-xs text-cyber-green mb-2">
                      Добро пожаловать в комьюнити AI-монахов 🚀
                    </p>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                      <span>🔐</span>
                      <span>Безопасная оплата</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные доказательства */}
            <div className="text-center bg-cyber-dark/50 border border-cyber-green/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-cyber-green mb-6">
                🌟 Миссия AI BUDDAH BASE
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
                Собрать лучшие рабочие инструменты и методики по ИИ, автоматизации, маркетингу и контенту в одном месте. 
                Показать тебе, как знания превращаются в результат без жёсткого "буста" и выгорания. 
                <span className="text-cyber-cyan font-bold"> Ты быстро увидишь прогресс и реальные результаты!</span>
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-green mb-2">1000+</div>
                  <div className="text-gray-400 text-sm">Активных участников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-purple mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-cyan mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Довольных пользователей</div>
                </div>
              </div>
              
              <a href="https://payform.ru/4193Ie4/" className="btn-cyber btn-primary text-lg px-8 py-4 inline-block">
                💎 Начать зарабатывать сегодня
              </a>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section - НОВЫЙ БЛОК */}
      <section id="lead-magnet" className="py-20 bg-cyber-gray relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-brutal font-black text-cyber-cyan neon-text mb-6">
                🎁 БЕСПЛАТНЫЙ СТАРТОВЫЙ НАБОР
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
                Получи 3 эксклюзивных материала и начни зарабатывать с AI уже сегодня
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Левая колонка - что получишь */}
              <div>
                <h3 className="text-2xl font-bold text-cyber-cyan mb-6">📦 Что в наборе:</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-cyber-dark/50 border border-cyber-green/20 rounded-lg p-4 hover:border-cyber-green transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyber-green text-2xl">📋</span>
                      <h4 className="font-bold text-cyber-green">Чек-лист "Первые шаги в AI"</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-10">
                      Пошаговый план освоения нейросетей за 30 дней. 10 конкретных действий для старта заработка.
                    </p>
                  </div>
                  
                  <div className="bg-cyber-dark/50 border border-cyber-purple/20 rounded-lg p-4 hover:border-cyber-purple transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyber-purple text-2xl">💬</span>
                      <h4 className="font-bold text-cyber-purple">50 готовых промптов</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-10">
                      Лучшие промпты для ChatGPT: контент, маркетинг, автоматизация. Копируй и используй!
                    </p>
                  </div>
                  
                  <div className="bg-cyber-dark/50 border border-cyber-orange/20 rounded-lg p-4 hover:border-cyber-orange transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyber-orange text-2xl">🛠️</span>
                      <h4 className="font-bold text-cyber-orange">Гайд по AI-инструментам</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-10">
                      Обзор 20+ лучших AI-сервисов с инструкциями по использованию и ссылками.
                    </p>
                  </div>
                </div>

                <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-cyber-green font-bold mb-2">🔥 Бонус для подписчиков:</div>
                    <div className="text-gray-300 text-sm">Приглашение на бесплатный мини-курс "5 способов заработка на AI"</div>
                  </div>
                </div>
              </div>

              {/* Правая колонка - форма */}
              <div className="flex justify-center">
                <div className="bg-cyber-dark border-2 border-cyber-cyan rounded-2xl p-6 sm:p-8 w-full max-w-md">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-cyber-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyber-cyan mb-2">Получить бесплатно</h3>
                    <p className="text-gray-400 text-sm">Никакого спама, только ценная информация</p>
                  </div>

                  <div className="space-y-6 mb-6">
                    <div className="text-center">
                      <div className="text-lg text-gray-300 mb-4">
                        Получи материалы прямо сейчас через нашего бота!
                      </div>
                      <div className="flex items-center justify-center gap-2 text-cyber-cyan mb-4">
                        <span className="text-2xl">🤖</span>
                        <span className="font-bold">AI Buddah Bot</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://t.me/buddah_base_bot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber btn-primary w-full text-lg py-4 mb-4 hover:scale-105 transition-transform block text-center"
                  >
                    📥 ЗАБРАТЬ МАТЕРИАЛЫ
                  </a>

                  <div className="text-center text-xs text-gray-400">
                    <p>🔒 Быстро и безопасно</p>
                    <p>Материалы придут через бот в течение минуты</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Статистика */}
            <div className="bg-cyber-dark/50 border border-cyber-green/20 rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-cyber-green mb-4">📈 Результаты тех, кто скачал материалы:</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-green mb-2">87%</div>
                  <div className="text-gray-400 text-sm">Начали использовать AI в работе</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-purple mb-2">52%</div>
                  <div className="text-gray-400 text-sm">Получили первый доход от AI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-cyan mb-2">34%</div>
                  <div className="text-gray-400 text-sm">Купили AI Base после ознакомления</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Success Cases Section - С реальными фото */}
      <section id="cases" className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-brutal font-black text-cyber-purple neon-text mb-6">
                📈 РЕАЛЬНЫЕ КЕЙСЫ УЧАСТНИКОВ
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
                Узнай, как участники AI Base уже зарабатывают с помощью нейросетей
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 border-cyber-green bg-cyber-green/10">
                    📱
                  </div>
                  <div>
                    <div className="font-bold text-cyber-green">Алексей К.</div>
                    <div className="text-sm text-gray-400">SMM-агентство</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-3 mb-3">
                    <div className="text-cyber-green font-bold text-center">ДО vs ПОСЛЕ</div>
                    <div className="text-xs text-gray-400 text-center">5 часов на пост → 30 минут</div>
                  </div>
                  <div className="text-2xl font-bold text-cyber-green mb-2">$3,200/мес</div>
                  <div className="text-sm text-gray-300">
                    Создание контента с MidJourney + ChatGPT для 8 брендов. 
                    Время на проект сократилось в 10 раз!
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded">MidJourney</span>
                  <span className="text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded">ChatGPT</span>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-xl p-6 hover:border-cyber-purple transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 border-cyber-purple bg-cyber-purple/10">
                    💼
                  </div>
                  <div>
                    <div className="font-bold text-cyber-purple">Мария Д.</div>
                    <div className="text-sm text-gray-400">Фриланс-маркетолог</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg p-3 mb-3">
                    <div className="text-cyber-purple font-bold text-center">РЕЗУЛЬТАТ</div>
                    <div className="text-xs text-gray-400 text-center">25 часов в неделю экономии</div>
                  </div>
                  <div className="text-2xl font-bold text-cyber-purple mb-2">$2,800/мес</div>
                  <div className="text-sm text-gray-300">
                    Автоматизация email-воронок через n8n. 
                    Увеличила доходы в 3 раза при меньших трудозатратах.
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-cyber-purple/10 text-cyber-purple px-2 py-1 rounded">n8n</span>
                  <span className="text-xs bg-cyber-purple/10 text-cyber-purple px-2 py-1 rounded">Автоматизация</span>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 border-cyber-cyan bg-cyber-cyan/10">
                    🎬
                  </div>
                  <div>
                    <div className="font-bold text-cyber-cyan">Дмитрий С.</div>
                    <div className="text-sm text-gray-400">Видеопродюсер</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg p-3 mb-3">
                    <div className="text-cyber-cyan font-bold text-center">ДОСТИЖЕНИЕ</div>
                    <div className="text-xs text-gray-400 text-center">Собственная AI-студия</div>
                  </div>
                  <div className="text-2xl font-bold text-cyber-cyan mb-2">$4,500/мес</div>
                  <div className="text-sm text-gray-300">
                    Создание видео с Veo 3 + CapCut. 
                    Запустил собственную студию AI-видеопродакшена за 2 месяца.
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-cyber-cyan/10 text-cyber-cyan px-2 py-1 rounded">Veo 3</span>
                  <span className="text-xs bg-cyber-cyan/10 text-cyber-cyan px-2 py-1 rounded">CapCut</span>
                </div>
              </div>
            </div>

            {/* Доказательства */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-cyber-green mb-4 text-center">
                  📸 Скриншот из чата участников
                </h4>
                <div className="bg-cyber-dark/50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-400 mb-2">Telegram • AI Buddah Base</div>
                  <div className="text-sm text-gray-300 italic">
                    "Ребят, только что получил заказ на 45к за контент-план на месяц! 
                    Все сделал по шаблонам из базы за 3 дня. Спасибо Александру за промпты! 🔥"
                  </div>
                  <div className="text-xs text-cyber-green mt-2">Алексей • Сегодня, 14:23</div>
                </div>
                <div className="text-center text-cyber-green font-bold">
                  ✅ Подтверждено модераторами
                </div>
              </div>

              <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-cyber-purple mb-4 text-center">
                  💰 Результаты за 3 месяца
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Средний доход участника:</span>
                    <span className="text-cyber-purple font-bold">+180%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Экономия времени:</span>
                    <span className="text-cyber-green font-bold">15-30 ч/нед</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Довольных участников:</span>
                    <span className="text-cyber-cyan font-bold">96%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Окупили базу за:</span>
                    <span className="text-cyber-orange font-bold">2-4 недели</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-cyber-green mb-4">
                  💡 Секрет успеха участников
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Они не тратили месяцы на изучение теории. Взяли готовые промпты и шаблоны из AI Base, 
                  адаптировали под свои задачи и начали зарабатывать уже через 2-3 недели.
                </p>
                <a href="https://payform.ru/4193Ie4/" className="btn-cyber btn-primary text-lg px-8 py-4">
                  🚀 Повторить их успех
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-cyber-gray relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-brutal font-black text-cyber-cyan neon-text mb-6">
                💬 ОТЗЫВЫ УЧАСТНИКОВ
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Более 1000 участников уже используют AI для заработка. Вот что они говорят:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              <div className="bg-cyber-dark/50 border border-cyber-green/30 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center text-2xl">
                    👨‍💼
                  </div>
                  <div>
                    <div className="font-bold text-cyber-green text-lg">Алексей К.</div>
                    <div className="text-sm text-gray-400">Предприниматель</div>
                    <div className="flex gap-1 mt-1">
                      <span className="text-cyber-green">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "Благодаря Buddah Base я запустил свой AI-проект и зарабатываю $2000+ в месяц! 
                  Особенно помогли готовые промпты и шаблоны автоматизации. 
                  Александр объясняет сложные вещи простым языком."
                </blockquote>
                <div className="text-cyber-green font-bold">
                  Результат за 3 месяца: +$6,000 дохода
                </div>
              </div>

              <div className="bg-cyber-dark/50 border border-cyber-purple/30 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyber-purple/20 rounded-full flex items-center justify-center text-2xl">
                    👩‍💻
                  </div>
                  <div>
                    <div className="font-bold text-cyber-purple text-lg">Мария Д.</div>
                    <div className="text-sm text-gray-400">Маркетолог</div>
                    <div className="flex gap-1 mt-1">
                      <span className="text-cyber-purple">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "Шаблоны автоматизации сэкономили мне 20+ часов в неделю. Теперь все на автомате! 
                  Комьюнити очень активное, всегда помогут с вопросами. 
                  База постоянно обновляется новыми материалами."
                </blockquote>
                <div className="text-cyber-purple font-bold">
                  Экономия времени: 80+ часов в месяц
                </div>
              </div>

              <div className="bg-cyber-dark/50 border border-cyber-cyan/30 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <div className="font-bold text-cyber-cyan text-lg">Дмитрий С.</div>
                    <div className="text-sm text-gray-400">SMM-специалист</div>
                    <div className="flex gap-1 mt-1">
                      <span className="text-cyber-cyan">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "VEO 3 + промпты из базы = идеальный контент для соцсетей. Клиенты в восторге! 
                  Качество материалов на высшем уровне. 
                  Окупил базу уже с первого заказа."
                </blockquote>
                <div className="text-cyber-cyan font-bold">
                  Окупаемость: за 1 неделю
                </div>
              </div>

              <div className="bg-cyber-dark/50 border border-cyber-orange/30 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyber-orange/20 rounded-full flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <div className="font-bold text-cyber-orange text-lg">Анна В.</div>
                    <div className="text-sm text-gray-400">AI-продюсер</div>
                    <div className="flex gap-1 mt-1">
                      <span className="text-cyber-orange">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "За интенсив освоил MidJourney и CapCut. Уже получил первые заказы на 50к! 
                  Телеграм-группа - это золото. Участники делятся реальными кейсами и лайфхаками. 
                  Александр всегда на связи."
                </blockquote>
                <div className="text-cyber-orange font-bold">
                  Первый заказ: 50,000₽ за неделю
                </div>
              </div>
            </div>

            {/* CTA для комьюнити */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyber-green/10 via-cyber-purple/10 to-cyber-cyan/10 border border-cyber-green/30 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-cyber-green mb-4">
                  🔥 Присоединяйся к комьюнити успешных AI-предпринимателей!
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Закрытый Telegram-чат, где мы делимся кейсами, отвечаем на вопросы и помогаем друг другу зарабатывать с ИИ. 
                  Более 1000 участников, средний доход которых вырос на 150% за первый год.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://payform.ru/4193Ie4/" className="btn-cyber btn-primary text-lg px-8 py-4">
                    💎 AI Base за 999₽
                  </a>
                  <a href="https://payform.ru/ms93cWm/" className="btn-cyber btn-secondary text-lg px-8 py-4">
                    🔥 Интенсив за 19,990₽
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faq" className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-brutal font-black text-cyber-orange neon-text mb-6">
                ❓ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Ответы на основные вопросы про интенсив и Buddah Base
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyber-green/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-cyber-green font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyber-green mb-3">
                      У меня нет опыта с нейросетями, подойдет ли AI Base?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Да! AI Base создан специально для новичков. Мы разбираем все с нуля, даём готовые промпты и пошаговые инструкции. 
                      80% участников начинали без опыта и уже через месяц создавали первые проекты.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-xl p-6 hover:border-cyber-purple transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyber-purple/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-cyber-purple font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyber-purple mb-3">
                      Сколько времени нужно уделять изучению материалов?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Для базового освоения достаточно 1-2 часа в неделю. Все материалы структурированы и доступны в любое время. 
                      Можете изучать в своем темпе. Средний участник осваивает основы за 2-3 недели.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyber-cyan/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-cyber-cyan font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyber-cyan mb-3">
                      Гарантируете ли вы результат и возможность заработка?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      При выполнении рекомендаций из базы вы получите готовое портфолио и навыки для заработка. 
                      Мы предоставляем 7-дневную гарантию возврата средств, если материалы не оправдают ожиданий. 
                      95% участников довольны результатами.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-orange/20 rounded-xl p-6 hover:border-cyber-orange transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyber-orange/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-cyber-orange font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyber-orange mb-3">
                      Какие инструменты нужны для участия в AI Base?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Компьютер с интернетом и желание учиться! Все AI-инструменты имеют бесплатные тарифы для старта. 
                      Мы покажем, как максимально использовать бесплатные возможности, а когда переходить на платные тарифы для масштабирования.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyber-green/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-cyber-green font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyber-green mb-3">
                      Будет ли поддержка после покупки AI Base?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Да! При покупке AI Base на год вы получаете полную поддержку весь период подписки. 
                      Доступ в закрытую Telegram-группу, еженедельные Q&A эфиры с разбором вопросов участников. 
                      Александр лично отвечает на сложные вопросы. База постоянно обновляется новыми материалами в течение всего года.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-xl p-6 hover:border-cyber-purple transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyber-purple/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-cyber-purple font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyber-purple mb-3">
                      Чем AI Base отличается от бесплатных материалов в интернете?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Структурированность и практичность. В интернете много разрозненной информации. 
                      В AI Base — системный подход: от изучения инструмента до монетизации навыков. 
                      Плюс эксклюзивные промпты, шаблоны и поддержка комьюнити.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA в FAQ */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-cyber-green/10 via-cyber-purple/10 to-cyber-cyan/10 border border-cyber-green/30 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-cyber-green mb-4">
                  🚀 Остались вопросы? Пиши напрямую!
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Александр лично отвечает в Telegram и поможет выбрать подходящий формат обучения. 
                  Ответ обычно приходит в течение 30 минут в рабочее время.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://t.me/smkbdh" className="btn-cyber btn-secondary text-lg px-8 py-4">
                    💬 Написать Александру
                  </a>
                  <a href="https://payform.ru/4193Ie4/" className="btn-cyber btn-primary text-lg px-8 py-4">
                    🚀 Купить AI Base сейчас
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-cyber-dark border-t border-cyber-green z-50 p-3">
        <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
          <a href="https://payform.ru/ms93cWm/" className="btn-cyber btn-primary text-xs px-3 py-1">
            🔥 Интенсив · 19,990₽
          </a>
          <a href="https://payform.ru/4193Ie4/" className="btn-cyber btn-secondary text-xs px-3 py-1">
            💎 AI Base · 999₽
          </a>
          <a href="https://t.me/buddah_ai" className="btn-cyber btn-accent text-xs px-3 py-1">
            📱 TG канал
          </a>
        </div>
      </div>
    </div>
  );
}

export default SimpleApp;