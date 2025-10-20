import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const JoinForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    village: '',
    skills: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Success!",
      description: "Thank you for joining GraminTech Foundation. We'll contact you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      village: '',
      skills: '',
      phone: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="join" className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('joinFormTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('joinFormSubtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-2xl space-y-6 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  {t('name')} *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                  placeholder={t('name')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  {t('phone')} *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                  placeholder={t('phone')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                {t('email')} *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12"
                placeholder={t('email')}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="village" className="text-sm font-medium text-foreground">
                  {t('village')}
                </label>
                <Input
                  id="village"
                  name="village"
                  type="text"
                  value={formData.village}
                  onChange={handleChange}
                  className="h-12"
                  placeholder={t('village')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skills" className="text-sm font-medium text-foreground">
                  {t('skills')}
                </label>
                <Input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  className="h-12"
                  placeholder={t('skills')}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              {t('submit')}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
