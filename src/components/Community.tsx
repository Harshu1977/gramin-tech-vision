import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import communityIllustration from '@/assets/community-illustration.jpg';

const Community = () => {
  const { t } = useLanguage();

  const initiatives = [
    'Digital workshops',
    'CSR partnerships',
    'Government Scheme awareness',
    'Rural Entrepreneurship Programs',
    'Skill Development Training',
  ];

  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('communityTitle')}
            </h2>
            <p className="text-xl text-secondary font-semibold">
              {t('communitySubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-slide-in-left">
              <img
                src={communityIllustration}
                alt="Community Learning"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('communityText')}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Coming Soon:</h3>
                <ul className="space-y-3">
                  {initiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href="#join"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  {t('joinNow')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
