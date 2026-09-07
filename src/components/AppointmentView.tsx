import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Lock, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { whatsappUrl } from '../constants/contact';

export default function AppointmentView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Randevu süreci nasıl işler?",
      answer: "Öncelikle WhatsApp üzerinden iletişime geçerek size en uygun saati belirliyoruz. İlk görüşmemizde süreci planlıyor ve değerlendirme aşamasına geçiyoruz."
    },
    {
      question: "Seanslar ne kadar sürer?",
      answer: "Standart seanslarımız 50 dakika sürmektedir. Çocuklarla yapılan çalışmalarda bu süre çocuğun dikkat süresine göre esneklik gösterebilir."
    },
    {
      question: "Online seans seçeneği var mı?",
      answer: "Evet, ergen ve yetişkin danışanlarımız için online seans seçeneğimiz bulunmaktadır. Çocuklarla olan çalışmalarda ise yüz yüze görüşmeyi tercih ediyoruz."
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
              Sizin İçin Buradayım
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-text-main leading-[1.1] tracking-tight">
              Hemen Randevu <span className="text-primary italic">Alın</span>
            </h1>
            <p className="text-lg text-text-muted max-w-lg leading-relaxed font-body">
              İçsel huzura giden yolculuğunuzda size rehberlik etmek için sabırsızlanıyorum. Profesyonel danışmanlık hizmetlerim için bir tık uzağınızdayım.
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
                <p className="text-sm text-text-muted">Doğrudan benimle iletişime geçin ve size en uygun saati belirleyelim.</p>
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
              WhatsApp Üzerinden Randevu Al
            </a>

            <p className="relative z-10 text-center text-xs text-text-muted font-medium flex items-center justify-center gap-2">
              <Lock size={14} />
              Kişisel verileriniz KVKK kapsamında korunmaktadır
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary w-6 h-6" />
              <span className="text-sm font-medium text-text-main">Esnek Saatler</span>
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
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeJgebYfHUZ-LKWV3rZz3K007wYyR5G7HVSbONbKhB6h6W3B7wKjGE-nQ_R0DhJ4PqtYyZEY3l2BukZ-CaaFHieb3lk6rFSlwaBkb91DkU73KESCW5XnS5A2JAu4Mw5-tFm-kL-CaK2DlRb_mS5XyRe-_Ui45maVw2a_XHS7QHKvMoX7WtF6BSqYv_4liYk4JQoWdzHeLW6epNJk1v7NGqigy5IvPWC67Mr61_br_868Zzhlg4WtAHw0er80SiHn-NzoY7CEDDER8" 
              alt="Therapeutic Space" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-surface-high p-10 rounded-[2rem] shadow-editorial max-w-[280px] border border-outline-ghost">
            <div className="space-y-4">
              <div className="flex -space-x-3">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgU3_YijHa87uyH0Q58Gda4Jjv3Kx4zxuv8aTsZBX_E6T5IaNVNp8eeevS-bU4J_mDoWnN72ZjlwEl1eT4xr06FCZ9XE0xQEhP-LOTmxYub81fIMz_Rvhfjl67Qa2BESFURlsx7DMes_hiiVPtcBv-kdmpjsK-bHt5IiVBFfcuAN8vEQ0V1hadRH1TkMI-VlYx6G-RAg4_GKHeFkpb-VX4fBT6bW9MaXd12rS_9BncBIQE4rnpC5tAioJQE0-NwA4DKQZzEKSy-SU" 
                  alt="Psk. Hande Özgödek"
                  className="w-12 h-12 rounded-full border-2 border-surface object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm font-medium leading-tight text-text-main">
                100+ Danışanım için huzurlu bir yol haritası çizdik.
              </p>
            </div>
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