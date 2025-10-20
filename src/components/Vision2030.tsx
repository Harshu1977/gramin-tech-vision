import { useLanguage } from '@/contexts/LanguageContext';
import { Wifi, Briefcase, School, ShoppingCart, Leaf } from 'lucide-react';

const Vision2030 = () => {
  const { t } = useLanguage();

  const visionPoints = [
    {
      icon: Wifi,
      title: t('digitalVillages'),
      description: t('digitalVillagesDesc'),
      year: '2025',
    },
    {
      icon: Briefcase,
      title: t('employmentCenters'),
      description: t('employmentCentersDesc'),
      year: '2026',
    },
    {
      icon: School,
      title: t('smartSchools'),
      description: t('smartSchoolsDesc'),
      year: '2027',
    },
    {
      icon: ShoppingCart,
      title: t('connectedFarming'),
      description: t('connectedFarmingDesc'),
      year: '2028',
    },
    {
      icon: Leaf,
      title: t('infrastructure'),
      description: t('infrastructureDesc'),
      year: '2030',
    },
  ];

  return (
    <section id="vision2030" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('vision2030Title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('vision2030Subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                      <span className="text-white font-bold text-sm">{point.year}</span>
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision2030;
