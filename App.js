import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './App.css';

const API_BASE = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

function App() {
  const [baseInfo, setBaseInfo] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const [contact, setContact] = useState(null);
  const [intensive, setIntensive] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    // Загружаем данные с бэкенда
    const fetchData = async () => {
      try {
        const [baseRes, projectsRes, toolsRes, contactRes, intensiveRes, testimonialsRes, faqRes] = await Promise.all([
          axios.get(`${API_BASE}/api/base-info`),
          axios.get(`${API_BASE}/api/projects`),
          axios.get(`${API_BASE}/api/tools`),
          axios.get(`${API_BASE}/api/contact`),
          axios.get(`${API_BASE}/api/intensive`),
          axios.get(`${API_BASE}/api/testimonials`),
          axios.get(`${API_BASE}/api/faq`)
        ]);
        
        setBaseInfo(baseRes.data);
        setProjects(projectsRes.data);
        setTools(toolsRes.data);
        setContact(contactRes.data);
        setIntensive(intensiveRes.data);
        setTestimonials(testimonialsRes.data);
        setFaq(faqRes.data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchData();
  }, []);

  // Навигационное меню
  const Navigation = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-green/30 z-50 py-4"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <span className="text-2xl font-brutal font-black text-cyber-green">AI BUDDAH</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-300 hover:text-cyber-green transition-colors" title="О преподавателе AI курсов">О себе</a>
          <a href="#projects" className="text-gray-300 hover:text-cyber-green transition-colors" title="Проекты в сфере искусственного интеллекта">Проекты</a>
          <a href="#intensive" className="text-gray-300 hover:text-cyber-orange transition-colors" title="Интенсив по нейросетям и ChatGPT">Интенсив</a>
          <a href="#buddah-base" className="text-gray-300 hover:text-cyber-purple transition-colors" title="AI база знаний за 999 рублей">Buddah Base</a>
          <a href="#testimonials" className="text-gray-300 hover:text-cyber-cyan transition-colors" title="Отзывы о курсах по ИИ">Отзывы</a>
          <a href="#faq" className="text-gray-300 hover:text-cyber-green transition-colors" title="Часто задаваемые вопросы о курсах">FAQ</a>
          <a 
            href={contact?.payment_links?.intensive || "https://payform.ru/ms93cWm/"} 
            className="btn-cyber btn-primary text-sm px-4 py-2"
            title="Записаться на интенсив по нейросетям за 19990 рублей"
          >
            🔥 Пройти интенсив
          </a>
        </div>
        
        <div className="md:hidden">
          <a href={contact?.payment_links?.ai_base || "https://payform.ru/4193Ie4/"} className="btn-cyber btn-primary text-sm px-4 py-2">
            AI Base
          </a>
        </div>
      </div>
    </motion.nav>
  );

  // Компонент фиксированного CTA бара
  const FixedCTABar = () => (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-cyber-dark border-t border-cyber-green z-50 p-3"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
        <a href={contact?.payment_links?.intensive || "https://payform.ru/ms93cWm/"} className="btn-cyber btn-primary text-xs px-3 py-1">
          🔥 Интенсив · 19,990₽
        </a>
        <a href={contact?.payment_links?.ai_base || "https://payform.ru/4193Ie4/"} className="btn-cyber btn-secondary text-xs px-3 py-1">
          💎 AI Base · 999₽
        </a>
        <a href="#lead-magnet" className="btn-cyber btn-accent text-xs px-3 py-1">
          📁 PDF бесплатно
        </a>
        <a href="https://t.me/buddah_ai" className="btn-cyber btn-accent text-xs px-3 py-1">
          📱 TG канал
        </a>
      </div>
    </motion.div>
  );

  // Hero секция
  const HeroSection = () => (
    <section className="min-h-screen relative flex items-center justify-center cyber-grid overflow-hidden pt-20">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyber-purple rounded-full opacity-10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyber-cyan rounded-full opacity-10 blur-3xl animate-float"></div>
        <img 
          src="https://images.unsplash.com/photo-1684864411311-b2a65c30b698?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBBSXxlbnwwfHx8fDE3NTY0MDIxNzJ8MA&ixlib=rb-4.1.0&q=85"
          alt="AI Buddah - обучение нейросетям и ChatGPT"
          className="absolute top-1/4 right-0 w-72 h-72 object-cover opacity-20 rounded-lg"
          width="288"
          height="288"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* SEO H1 заголовок */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-brutal font-black text-cyber-green neon-text mb-8"
        >
          Обучение нейросетям и ChatGPT с нуля за 2 недели
        </motion.h1>
        
        {/* Визуальный логотип */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-brutal font-black text-cyber-green neon-text mb-6"
        >
          AI BUDDAH
        </motion.div>
        
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-green via-cyber-purple to-cyber-cyan mx-auto mb-8"></div>

        {/* H2 подзаголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
        >
          <span className="text-white">Интенсив по AI от эксперта </span>
          <span className="text-cyber-green">Александра</span>
          <span className="text-white"> — продюсера </span>
          <span className="text-cyber-purple">digital-продуктов</span>
          <span className="text-white"> и автоматизатора бизнеса</span>
        </motion.h2>

        {/* Подзаголовок с ключевыми словами */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Изучи <strong className="text-cyber-green">MidJourney, ChatGPT, Veo 3</strong> и создавай системы автоматизации: 
          от ботов и автоворонок до AI-контента и маркетплейсов
        </motion.p>

        {/* Преимущества курса */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-lg p-4">
            <div className="text-cyber-green text-2xl mb-2">⚡</div>
            <div className="text-sm font-bold text-cyber-green">За 2 недели</div>
            <div className="text-xs text-gray-400">Интенсивный формат</div>
          </div>
          <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-lg p-4">
            <div className="text-cyber-purple text-2xl mb-2">🎯</div>
            <div className="text-sm font-bold text-cyber-purple">Практика</div>
            <div className="text-xs text-gray-400">Готовое портфолио</div>
          </div>
          <div className="bg-cyber-gray/30 border border-cyber-cyan/20 rounded-lg p-4">
            <div className="text-cyber-cyan text-2xl mb-2">💰</div>
            <div className="text-sm font-bold text-cyber-cyan">Монетизация</div>
            <div className="text-xs text-gray-400">Реальные навыки</div>
          </div>
        </motion.div>

        {/* CTA кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="https://payform.ru/4193Ie4/" 
            className="btn-cyber btn-primary text-xl px-8 py-4"
            title="Вступить в AI Base - база знаний по искусственному интеллекту за 999 рублей в год"
          >
            <span className="flex items-center gap-3">
              🔥 ВСТУПИТЬ В AI BASE ЗА 999₽
            </span>
          </a>
          <a 
            href="https://t.me/buddah_ai" 
            className="btn-cyber btn-secondary text-lg px-6 py-3"
            title="Бесплатный Telegram канал с полезными материалами по AI"
          >
            📱 Бесплатный Telegram-канал
          </a>
        </motion.div>
      </div>
    </section>
  );

  // О себе секция (расширенная с SEO)
  const AboutSection = () => (
    <section id="about" className="py-20 bg-cyber-gray relative">
      <img 
        src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxjeWJlcnB1bmslMjBBSXxlbnwwfHx8fDE3NTY0MDIxNzJ8MA&ixlib=rb-4.1.0&q=85"
        alt="Нейронные сети и искусственный интеллект - паттерны"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
        width="1920"
        height="800"
        loading="lazy"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-brutal font-black text-cyber-cyan neon-text mb-8">
              ПОЧЕМУ ИИ — ПРОФЕССИЯ БУДУЩЕГО
            </h2>
            <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-cyber-green mb-6">Об Александре (AI Buddah)</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <strong className="text-cyber-green">AI-предприниматель и digital-продюсер</strong>, создаю продукты, 
                автоматизации и обучение в сфере искусственного интеллекта уже более 3 лет.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Помогаю бизнесу внедрять <strong className="text-cyber-purple">нейросети и автоматизировать процессы</strong> 
                для увеличения прибыли и экономии времени. Более 1000 учеников уже применяют мои методики. 
                Узнайте больше о моих <a href="#intensive" className="text-cyber-green hover:text-cyber-cyan transition-colors underline" title="Интенсив по нейросетям">курсах по нейросетям</a>.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Специализация: <strong className="text-cyber-cyan">ChatGPT, MidJourney, автоматизация контента, 
                создание AI-ботов</strong> и внедрение нейросетевых решений в бизнес-процессы. 
                Присоединяйтесь к <a href="#buddah-base" className="text-cyber-purple hover:text-cyber-cyan transition-colors underline" title="Buddah Base - база знаний по ИИ">Buddah Base</a> для доступа к эксклюзивным материалам.
              </p>
              
              <h4 className="text-xl font-bold text-cyber-orange mb-4">Мой стек инструментов ИИ:</h4>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-cyber-light border border-cyber-green/30 rounded-lg p-3 text-center hover:border-cyber-green transition-all duration-300 hover:animate-glow"
                  >
                    <span className="text-cyber-green font-bold">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1689443111070-2c1a1110fe82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxjeWJlcnB1bmslMjBBSXxlbnwwfHx8fDE3NTY0MDIxNzJ8MA&ixlib=rb-4.1.0&q=85"
                alt="AI визуализация и машинное обучение"
                className="rounded-lg border-2 border-cyber-purple hover:border-cyber-cyan transition-all duration-300"
                width="600"
                height="400"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Новый раздел: Почему ИИ важен */}
          <div className="bg-cyber-dark/50 border border-cyber-green/20 rounded-2xl p-8 mb-12">
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

          {/* Раздел: Кому подходит обучение */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-cyber-purple mb-8">
              💼 Кому подходит обучение ИИ?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "👔", title: "Предпринимателям", desc: "Автоматизировать бизнес и снизить затраты" },
                { icon: "📱", title: "SMM-специалистам", desc: "Создавать контент в 10 раз быстрее" },
                { icon: "🎨", title: "Дизайнерам", desc: "Генерировать идеи и визуалы с ИИ" },
                { icon: "🚀", title: "Новичкам", desc: "Освоить перспективную профессию" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-lg p-6 hover:border-cyber-purple transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-cyber-purple mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Проекты секция
  const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-brutal font-black text-cyber-purple neon-text mb-4">
            МОИ ПРОЕКТЫ
          </h2>
          <div className="w-24 h-1 bg-cyber-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cyber-gray border border-cyber-green/20 rounded-lg p-6 hover:border-cyber-green transition-all duration-300 hover:animate-glow group"
            >
              <div className="mb-4">
                <span className="text-xs text-cyber-cyan border border-cyber-cyan/50 rounded-full px-3 py-1">
                  {project.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-cyber-green mb-3 group-hover:text-cyber-cyan transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Buddah Base секция (основная)
  const BuddahBaseSection = () => (
    <section id="buddah-base" className="py-20 bg-gradient-cyber relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxjeWJlcnB1bmslMjBBSXxlbnwwfHx8fDE3NTY0MDIxNzJ8MA&ixlib=rb-4.1.0&q=85"
        alt="Digital Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-brutal font-black text-cyber-green neon-text mb-6 glitch" data-text="BUDDAH BASE">
              BUDDAH BASE
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Цифровая база знаний по ИИ, автоматизации и контенту
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-green via-cyber-purple to-cyber-cyan mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка - контент */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-cyber-purple mb-8 neon-text"
              >
                Что внутри:
              </motion.h3>
              
              {baseInfo && (
                <div className="space-y-4">
                  {baseInfo.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-cyber-gray/50 border border-cyber-green/20 rounded-lg hover:border-cyber-green transition-all duration-300 hover:animate-glow"
                    >
                      <div className="flex-shrink-0">
                        <span className="text-cyber-green text-xl">✅</span>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Правая колонка - прайсинг */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cyber-gray border-2 border-cyber-green rounded-2xl p-8 text-center relative overflow-hidden max-w-md w-full"
              >
                {/* Фоновый эффект */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-cyber-purple/5 to-cyber-cyan/5"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <span className="text-cyber-cyan text-sm border border-cyber-cyan/50 rounded-full px-4 py-1">
                      💎 ЭКСКЛЮЗИВНЫЙ ДОСТУП
                    </span>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-6xl font-brutal font-black text-cyber-green neon-text mb-2">
                      {baseInfo?.price || '999'}<span className="text-2xl">₽</span>
                    </div>
                    <div className="text-cyber-purple text-lg font-bold">
                      на {baseInfo?.period || 'год'}
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                      меньше 3 ₽ в день
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-gray-400 mb-2">📈 Потенциал выгоды:</div>
                    <div className="text-2xl font-bold text-cyber-cyan">$30,000+</div>
                    <div className="text-xs text-gray-500">в год при минимальной цене $20 за креатив</div>
                  </div>

                  <a 
                    href={baseInfo?.payment_link || "https://payform.ru/4193Ie4/"} 
                    className="btn-cyber btn-primary w-full text-lg py-4 mb-4 block"
                  >
                    🚀 ВСТУПИТЬ В AI BASE
                  </a>
                  
                  <p className="text-xs text-cyber-green mb-2">
                    {baseInfo?.welcome_text || "Добро пожаловать в комьюнити AI-монахов 🚀"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Лид-магнит секция
  const LeadMagnetSection = () => (
    <section id="lead-magnet" className="py-20 bg-cyber-gray relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-brutal font-black text-cyber-cyan neon-text mb-8">
            🎁 БЕСПЛАТНЫЕ МАТЕРИАЛЫ
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Получи 3 эксклюзивных PDF и начни зарабатывать с AI уже сегодня
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI Гайд",
                description: "Полное руководство по работе с нейросетями",
                icon: "🤖"
              },
              {
                title: "2000+ Промптов", 
                description: "Готовые промпты для всех задач",
                icon: "💬"
              },
              {
                title: "Notion Шаблон",
                description: "Система управления AI-проектами",
                icon: "📋"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-dark border border-cyber-purple/30 rounded-lg p-6 hover:border-cyber-purple transition-all duration-300 hover:animate-pulse-glow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-cyber-purple mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://t.me/buddah_ai" className="btn-cyber btn-secondary text-lg px-8 py-4">
              📥 Скачать бесплатно
            </a>
            <span className="text-gray-400">или</span>
            <a href="https://t.me/smkbdh" className="btn-cyber btn-accent text-lg px-8 py-4">
              💬 Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Интенсив секция (расширенная с SEO)
  const IntensiveSection = () => (
    <section id="intensive" className="py-20 bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyber-orange rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyber-pink rounded-full opacity-5 blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-brutal font-black text-cyber-orange neon-text mb-6 glitch" data-text="ИНТЕНСИВ">
            🔥 ИНТЕНСИВ ПО НЕЙРОСЕТЯМ И CHATGPT
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            {intensive?.title || "Интенсив по нейросетям от OM AI Digital Studio"}
          </p>
          
          {/* Важные детали */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-cyber-gray/50 border border-cyber-orange/30 rounded-lg px-4 py-2">
              <span className="text-cyber-orange font-bold">📅 Старт: {intensive?.start_date || "29 сентября"}</span>
            </div>
            <div className="bg-cyber-gray/50 border border-cyber-pink/30 rounded-lg px-4 py-2">
              <span className="text-cyber-pink font-bold">💎 Цена: {intensive?.price?.toLocaleString() || "19,990"}₽</span>
            </div>
            <div className="bg-cyber-gray/50 border border-cyber-cyan/30 rounded-lg px-4 py-2">
              <span className="text-cyber-cyan font-bold">👥 Мест: только {intensive?.max_participants || 15}</span>
            </div>
          </div>
        </motion.div>

        {/* Раздел: Сколько можно заработать */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cyber-dark/70 border border-cyber-green/30 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-cyber-green mb-8 text-center">
            💰 СКОЛЬКО МОЖНО ЗАРАБОТАТЬ НА НЕЙРОСЕТЯХ?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div className="bg-cyber-gray/30 border border-cyber-green/20 rounded-lg p-6">
              <div className="text-4xl font-black text-cyber-green mb-2">$500-2000</div>
              <div className="text-gray-300 mb-2">в месяц</div>
              <div className="text-sm text-gray-400">Контент для соцсетей (посты, видео, дизайн)</div>
            </div>
            <div className="bg-cyber-gray/30 border border-cyber-purple/20 rounded-lg p-6">
              <div className="text-4xl font-black text-cyber-purple mb-2">$2000-5000</div>
              <div className="text-gray-300 mb-2">в месяц</div>
              <div className="text-sm text-gray-400">AI-автоматизация для бизнеса</div>
            </div>
            <div className="bg-cyber-gray/30 border border-cyber-cyan/20 rounded-lg p-6">
              <div className="text-4xl font-black text-cyber-cyan mb-2">$5000+</div>
              <div className="text-gray-300 mb-2">в месяц</div>
              <div className="text-sm text-gray-400">Собственные AI-продукты и курсы</div>
            </div>
          </div>
          <p className="text-center text-gray-300 mb-4">
            <strong className="text-cyber-orange">Реальные примеры заработка наших выпускников:</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyber-gray/20 rounded-lg p-4 border-l-4 border-cyber-green">
              <div className="font-bold text-cyber-green mb-1">Анна В. - AI-контент мейкер</div>
              <div className="text-sm text-gray-400">$3200/месяц создание видео с Veo + MidJourney для брендов</div>
            </div>
            <div className="bg-cyber-gray/20 rounded-lg p-4 border-l-4 border-cyber-purple">
              <div className="font-bold text-cyber-purple mb-1">Максим К. - Автоматизатор</div>
              <div className="text-sm text-gray-400">$4500/месяц внедрение ChatGPT-ботов в e-commerce</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Левая колонка - что изучим */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyber-orange mb-6 neon-text">🛠 Программа интенсива:</h3>
            <div className="space-y-3">
              {intensive && intensive.tools_to_learn.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 bg-cyber-gray/30 border border-cyber-orange/20 rounded-lg hover:border-cyber-orange transition-all duration-300"
                >
                  <span className="text-cyber-orange text-lg">⚡</span>
                  <span className="text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Уникальность интенсива */}
            <div className="mt-8 bg-cyber-orange/10 border border-cyber-orange/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-cyber-orange mb-4">🌟 Уникальность подхода:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyber-green">✓</span> 
                  Только практика — никаких лекций по теории
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyber-green">✓</span> 
                  Авторские методики монетизации ИИ
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyber-green">✓</span> 
                  Личное сопровождение в Telegram
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyber-green">✓</span> 
                  Доступ к закрытой базе промптов
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Правая колонка - что получишь */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyber-green mb-6 neon-text">📦 Результат обучения:</h3>
            <div className="space-y-3">
              {intensive && intensive.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 bg-cyber-gray/30 border border-cyber-green/20 rounded-lg hover:border-cyber-green transition-all duration-300"
                >
                  <span className="text-cyber-green text-lg">✅</span>
                  <span className="text-gray-300">{outcome}</span>
                </motion.div>
              ))}
            </div>

            {/* Бонусы */}
            <div className="mt-8 bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-cyber-green mb-4">🎁 Бонусы участникам:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyber-purple">🎯</span> 
                  Google AI Pro на 12 месяцев (стоимость $240)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyber-purple">📱</span> 
                  Доступ в закрытую Telegram-группу навсегда
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyber-purple">💼</span> 
                  Шаблоны договоров с клиентами
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyber-purple">📈</span> 
                  Гайд по поиску первых клиентов
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA блок интенсива */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyber-orange/10 via-cyber-pink/10 to-cyber-orange/10 border border-cyber-orange/30 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-cyber-orange mb-4">
            🚀 Бронируй место прямо сейчас!
          </h3>
          <p className="text-gray-300 mb-6">
            Только 15 мест • Старт уже 29 сентября • Бонус: Google AI Pro на 12 месяцев (стоимость $240)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={intensive?.payment_link || "https://payform.ru/ms93cWm/"} 
              className="btn-cyber btn-primary text-lg px-8 py-4"
              title="Записаться на интенсив по нейросетям и ChatGPT за 19990 рублей"
            >
              🔥 ПРОЙТИ ИНТЕНСИВ за 19,990₽
            </a>
            <a 
              href="https://t.me/buddah_ai" 
              className="btn-cyber btn-secondary text-lg px-8 py-4"
              title="Задать вопросы о курсе в Telegram"
            >
              💬 Задать вопросы
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Отзывы секция (улучшенная)
  const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 bg-cyber-dark relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc1NjMxMjc1OHww&ixlib=rb-4.1.0&q=85"
        alt="Network"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-brutal font-black text-cyber-green neon-text mb-4">
            💬 ОТЗЫВЫ УЧАСТНИКОВ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Более 1000 участников уже используют AI для заработка
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-cyber-gray border border-cyber-cyan/30 rounded-lg p-6 hover:border-cyber-cyan transition-all duration-300 hover:animate-glow"
            >
              {/* Аватар */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyber-cyan/20 rounded-full flex items-center justify-center text-2xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-cyber-green text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Отзыв */}
              <div className="relative">
                <div className="text-cyber-cyan text-3xl absolute -top-2 -left-1">"</div>
                <p className="text-gray-300 text-sm italic leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA для сообщества */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-cyber-gray border border-cyber-green/30 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-cyber-green mb-4">
              🔥 Присоединяйся к комьюнити успешных AI-предпринимателей!
            </h3>
            <p className="text-gray-300 mb-6">
              Закрытый Telegram-чат, где мы делимся кейсами, отвечаем на вопросы и помогаем друг другу зарабатывать с ИИ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contact?.payment_links?.ai_base || "https://payform.ru/4193Ie4/"} className="btn-cyber btn-primary text-lg px-8 py-4">
                💎 AI Base за 999₽
              </a>
              <a href={contact?.payment_links?.intensive || "https://payform.ru/ms93cWm/"} className="btn-cyber btn-accent text-lg px-8 py-4">
                🔥 Интенсив за 19,990₽
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // FAQ секция
  const FAQSection = () => (
    <section id="faq" className="py-20 bg-cyber-gray relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-brutal font-black text-cyber-purple neon-text mb-4">
            ❓ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ответы на основные вопросы про интенсив и Buddah Base
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cyber-dark border border-cyber-purple/30 rounded-lg p-6 hover:border-cyber-purple transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-cyber-purple mb-3 flex items-center gap-3">
                <span className="text-xl">💡</span>
                {item.question}
              </h3>
              <p className="text-gray-300 leading-relaxed pl-8">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Финальный CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyber-green/10 via-cyber-purple/10 to-cyber-cyan/10 border border-cyber-green/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-green mb-4">
              🚀 Остались вопросы? Пиши напрямую!
            </h3>
            <p className="text-gray-300 mb-6">
              Александр лично отвечает в Telegram и поможет выбрать подходящий формат обучения
            </p>
            <a href="https://t.me/smkbdh" className="btn-cyber btn-primary text-lg px-8 py-4">
              💬 Написать Александру
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Футер
  const Footer = () => (
    <footer className="py-16 bg-cyber-dark border-t border-cyber-green/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Лого */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-4xl font-brutal font-black text-cyber-green neon-text mb-4">
              AI BUDDAH
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-green via-cyber-purple to-cyber-cyan mx-auto"></div>
          </motion.div>

          {/* Соцсети */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h4 className="text-xl font-bold text-cyber-purple mb-6">Соцсети и контакты:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {contact && Object.entries(contact.social_links).map(([platform, link], index) => {
                const icons = {
                  telegram: "📱",
                  instagram: "📷", 
                  youtube: "🎥",
                  tiktok: "🎵"
                };
                
                return (
                  <motion.a
                    key={platform}
                    href={link}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-cyber-gray border border-cyber-green/30 rounded-lg px-6 py-3 hover:border-cyber-green transition-all duration-300 hover:animate-glow flex items-center gap-3"
                  >
                    <span className="text-xl">{icons[platform]}</span>
                    <span className="text-cyber-green capitalize font-bold">
                      {platform === 'telegram' ? 'Telegram' : 
                       platform === 'instagram' ? 'Instagram' :
                       platform === 'youtube' ? 'YouTube' : 'TikTok'}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Основные CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={contact?.payment_links?.ai_base || "https://payform.ru/4193Ie4/"} className="btn-cyber btn-primary text-lg px-8 py-4">
                🔥 AI Base за 999₽
              </a>
              <a href="https://t.me/buddah_ai" className="btn-cyber btn-secondary text-lg px-8 py-4">
                📱 Бесплатный канал
              </a>
            </div>
          </motion.div>

          {/* Копирайт */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 text-sm"
          >
            <p>© 2024 AI Buddah. Все права защищены.</p>
            <p className="mt-2">Создаем будущее с искусственным интеллектом 🤖</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="App bg-cyber-dark text-white min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <IntensiveSection />
      <BuddahBaseSection />
      <LeadMagnetSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FixedCTABar />
    </div>
  );
}

export default App;