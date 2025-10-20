import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    mission: 'Mission & Vision',
    community: 'Community',
    vision2030: '2030 Vision',
    joinUs: 'Join Us',
    contact: 'Contact',
    
    // Hero Section
    heroTagline: 'Join the Community Where Technology + Government Schemes + Network Build Knowledge, Character & Employment',
    joinNow: 'Join Now',
    learnMore: 'Learn More',
    
    // Mission Section
    missionTitle: 'Our Mission',
    missionText: 'To empower Murud and surrounding villages by creating a digitally literate, self-sufficient, and skilled youth community, leveraging technology, government schemes, and networking for holistic growth.',
    visionTitle: 'Our Vision',
    visionText: 'To make Murud a model smart rural hub of Maharashtra by 2030 — where technology, knowledge, and employment opportunities thrive for every citizen.',
    
    // 2030 Vision
    vision2030Title: 'Murud 2030 - Model Smart Rural Hub',
    vision2030Subtitle: 'How We Think Murud Will Be',
    digitalVillages: 'Fully Digital Villages',
    digitalVillagesDesc: 'Internet access in every home',
    employmentCenters: 'Youth Employment Centers',
    employmentCentersDesc: 'Training hubs for skill development',
    smartSchools: 'Smart Schools',
    smartSchoolsDesc: 'Technology-enabled education',
    connectedFarming: 'Connected Farming',
    connectedFarmingDesc: 'Digital marketplaces for farmers',
    infrastructure: 'Sustainable Infrastructure',
    infrastructureDesc: 'Clean & green villages',
    
    // Community Section
    communityTitle: 'Murud Youth Employment Hub',
    communitySubtitle: 'Our First Initiative',
    communityText: 'Join the community to learn, grow, and shape your career while contributing to Murud\'s growth.',
    
    // Join Form
    joinFormTitle: 'Join Now for Personal & Murud Growth',
    joinFormSubtitle: 'Be part of Murud\'s transformation story. Learn, connect, and contribute to a smarter future.',
    name: 'Name',
    email: 'Email',
    village: 'Village',
    skills: 'Skills',
    phone: 'Phone',
    submit: 'Submit',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: '© 2025 GraminTech Foundation | All Rights Reserved',
    poweredBy: 'Empowering Villages Through Innovation',
  },
  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    mission: 'ध्येय आणि दृष्टी',
    community: 'समुदाय',
    vision2030: '२०३० दृष्टी',
    joinUs: 'सामील व्हा',
    contact: 'संपर्क',
    
    // Hero Section
    heroTagline: 'तंत्रज्ञान + शासकीय योजना + नेटवर्क यांच्यामुळे ज्ञान, चारित्र्य आणि रोजगार निर्माण करणाऱ्या समुदायात सामील व्हा',
    joinNow: 'आता सामील व्हा',
    learnMore: 'अधिक जाणून घ्या',
    
    // Mission Section
    missionTitle: 'आमचे ध्येय',
    missionText: 'तंत्रज्ञान, शासकीय योजना आणि नेटवर्किंगचा वापर करून डिजिटल साक्षर, स्वयंपूर्ण आणि कुशल युवा समुदाय तयार करून मुरूड आणि आसपासच्या गावांना सशक्त बनवणे.',
    visionTitle: 'आमची दृष्टी',
    visionText: 'मुरूडला २०३० पर्यंत महाराष्ट्राचे आदर्श स्मार्ट ग्रामीण केंद्र बनवणे — जिथे प्रत्येक नागरिकासाठी तंत्रज्ञान, ज्ञान आणि रोजगाराच्या संधी वाढतील.',
    
    // 2030 Vision
    vision2030Title: 'मुरूड २०३० - आदर्श स्मार्ट ग्रामीण केंद्र',
    vision2030Subtitle: 'मुरूड कसे असेल हे आम्ही कसे विचार करतो',
    digitalVillages: 'पूर्णपणे डिजिटल गाव',
    digitalVillagesDesc: 'प्रत्येक घरात इंटरनेट सुविधा',
    employmentCenters: 'युवा रोजगार केंद्रे',
    employmentCentersDesc: 'कौशल्य विकासासाठी प्रशिक्षण केंद्रे',
    smartSchools: 'स्मार्ट शाळा',
    smartSchoolsDesc: 'तंत्रज्ञान-सक्षम शिक्षण',
    connectedFarming: 'जोडलेले शेती',
    connectedFarmingDesc: 'शेतकऱ्यांसाठी डिजिटल बाजारपेठ',
    infrastructure: 'टिकाऊ पायाभूत सुविधा',
    infrastructureDesc: 'स्वच्छ आणि हरित गावे',
    
    // Community Section
    communityTitle: 'मुरूड युवा रोजगार केंद्र',
    communitySubtitle: 'आमचा पहिला उपक्रम',
    communityText: 'मुरूडच्या विकासात योगदान देताना शिकण्यासाठी, वाढण्यासाठी आणि आपले करिअर घडवण्यासाठी समुदायात सामील व्हा.',
    
    // Join Form
    joinFormTitle: 'वैयक्तिक आणि मुरूडच्या विकासासाठी आता सामील व्हा',
    joinFormSubtitle: 'मुरूडच्या परिवर्तन कथेचा भाग व्हा. शिका, जोडा आणि स्मार्ट भविष्यात योगदान द्या.',
    name: 'नाव',
    email: 'ईमेल',
    village: 'गाव',
    skills: 'कौशल्य',
    phone: 'फोन',
    submit: 'सबमिट करा',
    
    // Footer
    quickLinks: 'द्रुत दुवे',
    followUs: 'आम्हाला फॉलो करा',
    copyright: '© २०२५ ग्रामीणटेक फाउंडेशन | सर्व हक्क राखीव',
    poweredBy: 'नवनिर्मितीद्वारे गावांना सशक्त बनवणे',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
