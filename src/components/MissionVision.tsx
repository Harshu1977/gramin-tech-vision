import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Lightbulb, Users, Network, GraduationCap } from 'lucide-react';

const MissionVision = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Lightbulb, label: 'Technology', color: 'text-accent' },
    { icon: Target, label: 'Government Schemes', color: 'text-secondary' },
    { icon: Network, label: 'Networking', color: 'text-primary' },
    { icon: GraduationCap, label: 'Education', color: 'text-accent' },
    { icon: Users, label: 'Employment', color: 'text-secondary' },
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary rounded-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{t('missionTitle')}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('missionText')}
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-secondary rounded-xl">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{t('visionTitle')}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('visionText')}
            </p>
          </div>
        </div>

        {/* Features Icons */}
        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-4 rounded-full bg-muted ${feature.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <span className="text-sm font-semibold text-foreground">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
