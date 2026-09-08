import { motion } from 'motion/react';
import { Check, Brain, HeartHandshake, Users, Quote } from 'lucide-react';
import handeImage from "../assets/HandeImage.png";

interface HomeViewProps {
  onNavigate: (view: 'home' | 'appointment') => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="space-y-24 lg:space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-medium tracking-widest text-sm mb-4 block">
              RUHSAL DENGE VE HUZUR
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-text-main leading-tight mb-8 tracking-tighter">
              İçsel Yolculuğunuzda <br />
              <span className="text-primary italic">Güvenli Bir Liman.</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed max-w-xl mb-10">
              Çocukluk ve ergenlik dönemi; dikkat, duygu ve davranış gelişiminin en yoğun yaşandığı süreçtir. Bu dönemlerde yaşanan güçlüklerde bilimsel temelli yaklaşımlarla yanınızdayım.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate('appointment')}
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium shadow-editorial hover:opacity-90 transition-opacity"
              >
                Randevu Al
              </button>
              <a 
                href="#uzmanlik"
                className="bg-surface-high text-primary px-8 py-4 rounded-full font-medium hover:bg-surface-low transition-colors text-center"
              >
                Eğitimlerim
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={handeImage}
                alt="Hande Özgödek" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface p-8 rounded-2xl shadow-editorial max-w-[240px] hidden md:block border border-outline-ghost">
              <p className="text-primary font-bold text-4xl mb-1">10+</p>
              <p className="text-sm text-text-muted font-medium">Yıllık Klinik Deneyim ve Yüzlerce Başarı Hikayesi</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile & Experience Section */}
      <section className="bg-surface-low py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary font-medium mb-4">Uzman Psikolojik Danışman</h2>
              <h3 className="text-5xl font-bold mb-8 tracking-tight leading-tight">Hande Özgödek</h3>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p>Ben Uzman Psikolojik Danışman Hande Özgödek. Çalışmalarımı özellikle Dikkat Eksikliği ve Hiperaktivite (DEHB), davranış düzenleme ve duygu yönetimi alanında yoğunlaştırmaktayım.</p>
                <p>2014 yılında Uluslararası Kıbrıs Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden mezun oldum. Ardından Ege Üniversitesi'nde yüksek lisans eğitimimi tamamlayarak akademik ve uygulamalı bilgimi derinleştirdim.</p>
                <p>Özellikle DEHB ve dikkat sorunlarında yalnızca çocukla değil, aile sistemiyle birlikte çalışırım. Çünkü dikkat ve davranış düzenleme süreci; ebeveyn tutumları, sınırlar ve günlük yapı ile doğrudan ilişkilidir.</p>
              </div>
              
              <div className="mt-12 bg-surface p-8 rounded-3xl shadow-editorial border border-outline-ghost">
                <h4 className="text-xl font-bold mb-6 text-text-main">Seans Sürecimde Amacım;</h4>
                <ul className="space-y-2">
                  {[
                    "Çocuğun güçlü yönlerini ortaya çıkarmak",
                    "Dikkat ve öz düzenleme becerilerini geliştirmek",
                    "Aileye sürdürülebilir davranış yönetimi desteği sunmak",
                    "Okul süreci ile iş birliği kurmak"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-primary w-6 h-6 shrink-0" />
                      <span className="text-text-main">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              id="uzmanlik"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="scroll-mt-24 space-y-12"
            >
              <div className="bg-surface p-10 rounded-[2.5rem] shadow-editorial border border-outline-ghost">
                <h3 className="text-2xl font-bold mb-8">Akademik Altyapım ve Uzmanlık Eğitimlerim</h3>
                
                <div className="mb-10">
                  <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">AKADEMİK EĞİTİM</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-text-main">Yüksek Lisans – Psikolojik Danışmanlık ve Rehberlik</p>
                      <p className="text-text-muted italic">Ege Üniversitesi</p>
                    </div>
                    <div>
                      <p className="font-bold text-text-main">Lisans – Psikolojik Danışmanlık ve Rehberlik</p>
                      <p className="text-text-muted italic">Uluslararası Kıbrıs Üniversitesi</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">DEHB VE DİKKAT ALANINDA UZMANLIK</h4>
                  <p className="font-bold text-text-main mb-2">Attentioner Dikkat Geliştirme Programı – Uygulayıcı Eğitimi</p>
                  <ul className="list-disc list-inside text-text-muted space-y-1 mb-4 text-sm">
                    <li>DEHB'de yapılandırılmış müdahale programları</li>
                    <li>Dikkat ve öz düzenleme becerileri çalışmaları</li>
                    <li>Davranış düzenleme teknikleri</li>
                    <li>Aile temelli müdahale planlaması</li>
                  </ul>
                  <p className="text-sm italic text-primary">DEHB süreçlerinde yapılandırılmış ve kanıta dayalı programlar uygulamaktayım.</p>
                </div>

                <div>
                  <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">DUYGU VE DAVRANIŞ DÜZENLEME ALANINDA</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-main">
                    {[
                      "Bilişsel Davranışçı Terapi (BDT)",
                      "Oyun Terapisi",
                      "Travma ve Kriz Çalışmaları",
                      "Çocuk Değerlendirme ve Dikkat Testleri"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-dim rounded-full shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm italic text-primary">Duygu düzenleme ve davranış yönetimi süreçlerinde yapılandırılmış, gelişimsel temelli bir yaklaşım ile çalışmaktayım.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Approach Section */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Değerlerim ve Yaklaşımım</h2>
            <p className="text-text-muted text-lg">Her çocuk biriciktir. Bu nedenle çalışmaları standart kalıplar yerine bireysel ihtiyaçlara göre planlıyorum.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Bilimsel Temel",
              desc: "Bilişsel Davranışçı Terapi ve Attentioner gibi kanıta dayalı yöntemleri kişiselleştirerek uyguluyorum.",
              bg: "bg-primary-dim",
              iconColor: "text-primary"
            },
            {
              icon: HeartHandshake,
              title: "Aile İş Birliği",
              desc: "DEHB ve dikkat süreçlerinde bilimsel temelli, yapılandırılmış ve aile iş birliğine dayalı bir model uyguluyorum.",
              bg: "bg-tertiary-container",
              iconColor: "text-tertiary"
            },
            {
              icon: Users,
              title: "Bireysel Odak",
              desc: "Karşıyaka'daki ofisimde ve online olarak çocuk, ergen ve ailelerle bireysel ihtiyaçlar doğrultusunda çalışmaktayım.",
              bg: "bg-secondary-dim",
              iconColor: "text-secondary"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface p-10 rounded-[2rem] shadow-editorial border border-outline-ghost transition-transform hover:-translate-y-2 duration-500"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8`}>
                <item.icon className={item.iconColor} size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reflective Quote */}
      <section className="pt-2">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-surface-high/30 backdrop-blur-xl border border-white/40 p-16 md:p-24 rounded-[4rem] text-center relative">
            <Quote className="text-primary/20 w-24 h-24 absolute top-10 left-10" />
            <h4 className="text-3xl md:text-4xl font-headline font-medium text-text-main leading-snug italic">
              "Her çocuk biriciktir. Bu nedenle çalışmaları standart kalıplar yerine bireysel ihtiyaçlara göre planlar, o tohumun yeşermesi için gerekli suyu ve ışığı sağlarız."
            </h4>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="bg-primary text-on-primary p-12 md:p-20 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="z-10 max-w-xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Huzura giden yolda ilk adımı bugün atın.</h2>
            <p className="opacity-80 text-lg">Ücretsiz bir ön görüşme planlamak veya bilgi almak için bana ulaşabilirsiniz.</p>
          </div>
          <div className="z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('appointment')}
              className="bg-white text-primary font-bold px-10 py-5 rounded-full hover:shadow-xl transition-all whitespace-nowrap"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
