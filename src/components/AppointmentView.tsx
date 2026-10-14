import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Lock, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { whatsappUrl } from '../constants/contact';
import handeImage from '../assets/HandeImage.png';

export default function AppointmentView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Randevu süreci nasıl işler?",
      answer: "WhatsApp üzerinden uygun bir zaman belirleyerek yaklaşık 10 dakikalık ücretsiz online tanışma görüşmesi yapıyoruz. Birbirimizi tanıyor, ihtiyaçlarınızı ve beklentilerinizi konuşuyoruz. Devam etme zorunluluğunuz yoktur."
    },
    {
      question: "İlk görüşme ücretli mi?",
      answer: "Yaklaşık 10 dakikalık tanışma görüşmesi ücretsizdir. Devam etmek isterseniz sonraki görüşmelerin süresini, sıklığını ve ücretini birlikte netleştiririz."
    },
    {
      question: "Görüşmeler kimler için ve nerede gerçekleşiyor?",
      answer: "Çocuklar, ergenler, yetişkinler ve ebeveynlerle çalışıyorum. Tüm görüşmeler online gerçekleşir. Deneyimim ağırlıklı olarak çocuk danışmanlığında şekillendi. Çocuklarla yapılacak çalışmalarda katılımı ve ebeveynin rolünü birlikte planlarız."
    }
  ];

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-tertiary text-sm font-medium tracking-wide">
              Online · Yaklaşık 10 dakika · Ücretsiz
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-text-main leading-[1.1] tracking-tight">
              İlk adımımız <span className="text-primary italic">tanışmak olsun.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-lg leading-relaxed font-body">
              Kendiniz veya çocuğunuz için destek arıyorsanız, önce birbirimizi tanıyalım. Yaklaşık 10 dakikalık ücretsiz online görüşmede beklentilerinizi konuşabilir, sorularınızı sorabilir ve birlikte nasıl ilerleyebileceğimizi değerlendirebiliriz.
            </p>
          </div>

          <div className="bg-surface-low p-8 rounded-[2.5rem] shadow-editorial space-y-8 relative overflow-hidden group border border-outline-ghost">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-dim/20 rounded-full blur-3xl group-hover:bg-primary-dim/40 transition-colors duration-700"></div>
            
            <div className="flex items-start gap-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-surface-high flex items-center justify-center text-primary shrink-0">
                <MessageCircle size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-xl text-text-main">WhatsApp ile Hızlı Planlama</h3>
                <p className="text-sm text-text-muted">Ücretsiz online tanışma görüşmeniz için bana ulaşın; uygun bir gün ve saat belirleyelim.</p>
              </div>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden randevu alın"
              className="relative z-10 flex items-center justify-center gap-3 w-full bg-primary text-on-primary py-5 rounded-full text-lg font-semibold hover:scale-[0.98] active:scale-95 transition-all duration-500 shadow-xl shadow-primary/10"
            >
              <MessageCircle size={20} />
              Tanışma Görüşmesi Planla
            </a>

            <p className="relative z-10 text-center text-xs text-text-muted font-medium flex items-center justify-center gap-2">
              <Lock size={14} />
              Kişisel verileriniz KVKK kapsamında korunmaktadır
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary w-6 h-6" />
              <span className="text-sm font-medium text-text-main">Tüm görüşmeler online</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary w-6 h-6" />
              <span className="text-sm font-medium text-text-main">Uzman Danışman</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={handeImage} alt="Uzman Psikolojik Danışman Hande Özgödek" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6 px-2">
            <p className="text-xl font-bold text-primary">Hande Özgödek</p>
            <p className="text-text-muted mt-2">Çocuklar, ergenler, yetişkinler ve ebeveynlerle online danışmanlık.</p>
            <p className="text-sm text-text-muted mt-2">Ağırlıklı deneyim alanım çocuk danışmanlığıdır.</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-surface-low p-12 rounded-[3rem] text-center space-y-12 border border-outline-ghost">
          <h2 className="text-3xl font-headline font-bold text-text-main">Sıkça Sorulan Sorular</h2>
          
          <div className="grid gap-4 text-left">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-surface p-6 rounded-2xl cursor-pointer hover:bg-white transition-colors border border-outline-ghost shadow-sm"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center group">
                  <span className="font-medium text-text-main">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
