import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        packages: 'Packages',
        contact: 'Contact'
      },
      hero: {
        badge: '🎬 Premium Creative Agency',
        titlePart1: 'We Tell Your Story,',
        titlePart2: 'You Grow Your Business',
        tagline: 'Capture • Create • Elevate',
        viewWork: 'View Our Work',
        getInTouch: 'Get In Touch'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive multimedia solutions tailored for your brand',
        videoProduction: {
          title: 'Video Production',
          desc: 'High-end cinema-quality video production from concept brainstorming to the final cut.'
        },
        commercials: {
          title: 'Commercial & Ad Videos',
          desc: 'Compelling promotional campaigns and commercials that capture attention and convert.'
        },
        socialMedia: {
          title: 'Social Media Content',
          desc: 'Dynamic, high-engagement short-form videos optimized for TikTok, Instagram, and YouTube Shorts.'
        },
        soundRecording: {
          title: 'Sound Recording',
          desc: 'Crystal-clear studio audio recording, editing, mixing, and sound design for projects.'
        },
        lightingSetup: {
          title: 'Lighting Setup',
          desc: 'Professional lighting design and configurations to paint the perfect visual mood.'
        },
        videoEditing: {
          title: 'Video Editing',
          desc: 'Masterful color grading, post-production, sound synchronization, and visual effects.'
        },
        digitalMarketing: {
          title: 'Digital Marketing',
          desc: 'Strategic campaign management and content distribution to amplify your brand presence.'
        },
        webDev: {
          title: 'Full-Stack Web Development',
          desc: 'End-to-end design and engineering of premium, ultra-responsive, and high-performance interactive web apps.'
        }
      },
      portfolio: {
        title: 'Featured Work',
        subtitle: 'A gallery of our latest professional productions',
        all: 'All Projects',
        advertisement: 'Advertisements',
        business: 'Corporate',
        entertainment: 'Music & Art',
        marketing: 'Promo',
        liveEvents: 'Events',
        digital: 'Social',
        viewProject: 'Play Showcase'
      },
      about: {
        title: 'About Omega Media',
        desc1: 'We are a premier video production and creative agency based in Ethiopia, dedicated to turning bold ideas into unforgettable visual masterpieces.',
        desc2: 'With state-of-the-art gear and a passion for storytelling, we collaborate with top-tier brands and creatives to craft stunning narratives that elevate and engage.',
        stats: {
          projects: 'Projects Completed',
          clients: 'Happy Clients',
          experience: 'Years Experience'
        }
      },
      contact: {
        title: "Let's Create Together",
        subtitle: 'Ready to launch your next project? Get in touch with our creative team.',
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        social: 'Social Media',
        qrTitle: 'Scan Business Card',
        qrDesc: 'Scan this code to quickly email our production desk.',
        formName: 'Your Name',
        formEmail: 'Your Email',
        formMessage: 'Project Details',
        formSubmit: 'Send Request',
        successMsg: 'Message sent successfully!'
      },
      packages: {
        title1: 'VIDEO PRODUCTION',
        title2: 'PACKAGES',
        subtitle: 'High Quality Videos. Stronger Brand Impact.',
        delivery: 'DELIVERY:',
        total: 'TOTAL:',
        includes: 'INCLUDES:',
        premium: {
          name: 'PREMIUM MONTHLY PACKAGE',
          delivery: '3 Videos per week',
          total: '12 Videos per month',
          features: [
            'Professional Video Shooting',
            'High Quality Editing',
            'Color Grading',
            'Background Music',
            'Text & Graphics',
            '1 Revision per Video'
          ]
        },
        standard: {
          name: 'STANDARD MONTHLY PACKAGE',
          delivery: '2 Videos per week',
          total: '8 Videos per month',
          features: [
            'Professional Video Shooting',
            'High Quality Editing',
            'Color Grading',
            'Background Music',
            'Text & Graphics',
            '1 Revision per Video'
          ]
        },
        single: {
          name: 'SINGLE VIDEO PACKAGE',
          delivery: '1 Professionally Edited Video',
          total: '1 Video Total',
          features: [
            'Professional Video Shooting',
            'High Quality Editing',
            'Color Grading',
            'Background Music',
            'Text & Graphics',
            '1 Revision'
          ]
        },
        reasonsTitlePart1: 'WHY CHOOSE ',
        reasonsTitleHighlight: 'OMEGA PRODUCTION?',
        reasonsTitlePart2: '',
        reasons: {
          highQuality: {
            title: 'HIGH QUALITY PRODUCTION',
            desc: 'Cinematic and professional results.'
          },
          creative: {
            title: 'CREATIVE STORYTELLING',
            desc: 'Engaging content that connects with your audience.'
          },
          onTime: {
            title: 'ON-TIME DELIVERY',
            desc: 'We respect your time and deliver on schedule.'
          },
          client: {
            title: 'CLIENT FOCUSED APPROACH',
            desc: 'We work closely with you to bring your vision to life.'
          },
          impact: {
            title: 'STRONG BRAND IMPACT',
            desc: 'Videos that build trust and grow your brand.'
          }
        },
        termsTitle: 'TERMS & CONDITIONS',
        terms: [
          'Payment should be made in advance.',
          'Revisions are limited as stated in each package.',
          'Additional revisions will be charged separately.',
          'Raw footage is not included.',
          'Prices are subject to change without prior notice.'
        ],
        paymentTitle: 'PAYMENT INFORMATION',
        bankName: 'Bank Name:',
        accountName: 'Account Name:',
        accountNumber: 'Account Number:',
        branch: 'Branch:',
        currencyNote: 'All payments are in ETB',
        slogan: '"We turn ideas into impact."'
      },
      footer: {
        rights: 'All rights reserved.'
      }
    }
  },
  am: {
    translation: {
      nav: {
        home: 'መነሻ',
        services: 'አገልግሎቶች',
        portfolio: 'ስራዎቻችን',
        about: 'ስለ እኛ',
        packages: 'ጥቅሎች',
        contact: 'እውቂያ'
      },
      hero: {
        badge: '🎬 እጅግ ዘመናዊ የፈጠራ ተቋም',
        titlePart1: 'ታሪክዎን እንተርካለን፣',
        titlePart2: 'ንግድዎን እናሳድጋለን',
        tagline: 'ቅረጽ • ፍጠር • አልቅ',
        viewWork: 'ስራዎቻችንን ይመልከቱ',
        getInTouch: 'ያግኙን'
      },
      services: {
        title: 'አገልግሎቶቻችን',
        subtitle: 'ለድርጅትዎ የተዘጋጁ አጠቃላይ የመልቲሚዲያ መፍትሄዎች',
        videoProduction: {
          title: 'የቪዲዮ ዝግጅት',
          desc: 'ከሃሳብ ማመንጨት ጀምሮ እስከ መጨረሻው ውጤት ድረስ ከፍተኛ ጥራት ያለው የቪዲዮ ቀረጻ እና ዝግጅት።'
        },
        commercials: {
          title: 'የማስታወቂያ ቪዲዮዎች',
          desc: 'ትኩረት የሚስቡ እና ውጤታማ የሆኑ የንግድ እና የማስተዋወቂያ ቪዲዮዎች ዝግጅት።'
        },
        socialMedia: {
          title: 'የማህበራዊ ሚዲያ ይዘቶች',
          desc: 'ለቲክቶክ፣ ኢንስታግራም እና ዩቱዩብ ሾርትስ ተስማሚ የሆኑ ተፅዕኖ ፈጣሪ አጫጭር ቪዲዮዎች።'
        },
        soundRecording: {
          title: 'የድምፅ ቀረጻ',
          desc: 'ፍጹም ጥራት ያለው የድምፅ ቀረጻ፣ ቅንብር እና የድምፅ ዲዛይን ስራዎች።'
        },
        lightingSetup: {
          title: 'የመብራት ዝግጅት',
          desc: 'ለቀረጻው ምቹ እና ማራኪ ድባብ ለመፍጠር የሚያስችል ዘመናዊ የመብራት አቀማመጥ።'
        },
        videoEditing: {
          title: 'የቪዲዮ ቅንብር',
          desc: 'የቀለም ቅንብር (Color Grading)፣ ድምፅ ማስተካከል እና ልዩ ተፅዕኖዎችን (VFX) ማካተት።'
        },
        digitalMarketing: {
          title: 'ዲጂታል ማርኬቲንግ',
          desc: 'የድርጅትዎን ተደራሽነት ከፍ ለማድረግ የሚያስችሉ ስልታዊ የዲጂታል ማስታወቂያ ስራዎች።'
        },
        webDev: {
          title: 'የዌብሳይት ዝግጅትና ልማት',
          desc: 'ለብራንድዎ ተስማሚ የሆኑ ፈጣን፣ ውብ፣ እና እጅግ ዘመናዊ ዌብሳይቶችን እና ሲስተሞችን የመስራት አገልግሎት።'
        }
      },
      portfolio: {
        title: 'የተሰሩ ስራዎች',
        subtitle: 'የቅርብ ጊዜ ፕሮፌሽናል ስራዎቻችን ማሳያ',
        all: 'ሁሉም ስራዎች',
        advertisement: 'ማስታወቂያዎች',
        business: 'የድርጅት',
        entertainment: 'ሙዚቃ እና ጥበብ',
        marketing: 'ማስተዋወቂያ',
        liveEvents: 'ኩነቶች',
        digital: 'ማህበራዊ',
        viewProject: 'ስራውን አጫውት'
      },
      about: {
        title: 'ስለ ኦሜጋ ሚዲያ',
        desc1: 'እኛ በኢትዮጵያ ውስጥ የምንገኝ፣ ደፋር የሆኑ የፈጠራ ሃሳቦችን ወደ አስደናቂ የቪዲዮ እውነታዎች ለመለወጥ የምንተጋ ቀዳሚ የቪዲዮ ቀረጻ እና የፈጠራ ድርጅት ነን።',
        desc2: 'በዘመናዊ መሣሪያዎች እና በትረካ ጥበባችን በመታገዝ፣ ከታዋቂ ምርቶች እና ፈጣሪዎች ጋር በመተባበር ተፅዕኖ ፈጣሪ ስራዎችን እንሰራለን።',
        stats: {
          projects: 'የተጠናቀቁ ስራዎች',
          clients: 'ደስተኛ ደንበኞች',
          experience: 'የዓመታት ልምድ'
        }
      },
      contact: {
        title: 'አብረን እንስራ',
        subtitle: 'የሚቀጥለውን ፕሮጀክትዎን ለመጀመር ተዘጋጅተዋል? የፈጠራ ቡድናችንን ያግኙ።',
        phone: 'ስልክ',
        email: 'ኢሜይል',
        location: 'አድራሻ',
        social: 'ማህበራዊ ሚዲያ',
        qrTitle: 'የንግድ ካርድ ይቃኙ',
        qrDesc: 'ይህን ኮድ በመቃኘት በቀላሉ የኢሜይል መልዕክት ይላኩልን።',
        formName: 'ስምዎ',
        formEmail: 'ኢሜይልዎ',
        formMessage: 'የፕሮጀክቱ ዝርዝር',
        formSubmit: 'መልዕክት ላክ',
        successMsg: 'መልዕክትዎ በተሳካ ሁኔታ ተልኳል!'
      },
      packages: {
        title1: 'የቪዲዮ ፕሮዳክሽን',
        title2: 'ጥቅሎች',
        subtitle: 'ከፍተኛ ጥራት ያላቸው ቪዲዮዎች። ጠንካራ የብራንድ ተፅዕኖ።',
        delivery: 'ርክክብ:',
        total: 'ድምር:',
        includes: 'የሚያካትታቸው:',
        premium: {
          name: 'ፕሪሚየም ወርሃዊ ጥቅል',
          delivery: 'በሳምንት 3 ቪዲዮዎች',
          total: 'በወር 12 ቪዲዮዎች',
          features: [
            'ሙያዊ የቪዲዮ ቀረጻ',
            'ከፍተኛ ጥራት ያለው የቪዲዮ ቅንብር (ኤዲቲንግ)',
            'የቀለም ቅንብር (Color Grading)',
            'የጀርባ ሙዚቃ',
            'ጽሑፍ እና ግራፊክስ',
            'ለእያንዳንዱ ቪዲዮ 1 ማሻሻያ'
          ]
        },
        standard: {
          name: 'መደበኛ ወርሃዊ ጥቅል',
          delivery: 'በሳምንት 2 ቪዲዮዎች',
          total: 'በወር 8 ቪዲዮዎች',
          features: [
            'ሙያዊ የቪዲዮ ቀረጻ',
            'ከፍተኛ ጥራት ያለው የቪዲዮ ቅንብር (ኤዲቲንግ)',
            'የቀለም ቅንብር (Color Grading)',
            'የጀርባ ሙዚቃ',
            'ጽሑፍ እና ግራፊክስ',
            'ለእያንዳንዱ ቪዲዮ 1 ማሻሻያ'
          ]
        },
        single: {
          name: 'የአንድ ቪዲዮ ጥቅል',
          delivery: '1 በሙያዊ የተስተካከለ ቪዲዮ',
          total: 'በድምሩ 1 ቪዲዮ',
          features: [
            'ሙያዊ የቪዲዮ ቀረጻ',
            'ከፍተኛ ጥራት ያለው የቪዲዮ ቅንብር (ኤዲቲንግ)',
            'የቀለም ቅንብር (Color Grading)',
            'የጀርባ ሙዚቃ',
            'ጽሑፍ እና ግራፊክስ',
            '1 ማሻሻያ'
          ]
        },
        reasonsTitlePart1: '',
        reasonsTitleHighlight: 'ኦሜጋ ፕሮዳክሽንን',
        reasonsTitlePart2: ' ለምን ይመርጣሉ?',
        reasons: {
          highQuality: {
            title: 'ከፍተኛ ጥራት ያለው ፕሮዳክሽን',
            desc: 'ሲኒማዊ እና ሙያዊ ውጤቶች።'
          },
          creative: {
            title: 'የፈጠራ ታሪክ አተራረክ',
            desc: 'ከታዳሚዎ ጋር የሚያገናኝ አሳታፊ ይዘት።'
          },
          onTime: {
            title: 'በሰዓቱ ማድረስ',
            desc: 'ጊዜዎን አክብረን በተያዘው የጊዜ ሰሌዳ መሰረት እናስረክባለን።'
          },
          client: {
            title: 'ደንበኛን ማዕከል ያደረገ አቀራረብ',
            desc: 'ራዕይዎን እውን ለማድረግ ከእርስዎ ጋር በቅርበት እንሰራለን።'
          },
          impact: {
            title: 'ጠንካራ የብራንድ ተፅዕኖ',
            desc: 'እምነት የሚገነቡ እና ብራንድዎን የሚያሳድጉ ቪዲዮዎች።'
          }
        },
        termsTitle: 'ደንቦች እና ሁኔታዎች',
        terms: [
          'ክፍያ በቅድሚያ መፈጸም አለበት።',
          'ማሻሻያዎች በእያንዳንዱ ጥቅል ውስጥ በተገለጸው መሰረት የተገደቡ ናቸው።',
          'ተጨማሪ ማሻሻያዎች ለብቻው ክፍያ ይጠይቃሉ።',
          'ያልተቀነባበረ (Raw) ቪዲዮ አይካተትም።',
          'ዋጋዎች ያለ ቅድመ ማስታወቂያ ሊለወጡ ይችላሉ።'
        ],
        paymentTitle: 'የክፍያ መረጃ',
        bankName: 'የባንክ ስም:',
        accountName: 'የአካውንት ስም:',
        accountNumber: 'የአካውንት ቁጥር:',
        branch: 'ቅርንጫፍ:',
        currencyNote: 'ሁሉም ክፍያዎች በኢትዮጵያ ብር (ETB) ናቸው',
        slogan: '"ሀሳቦችን ወደ ተፅዕኖ እንለውጣለን።"'
      },
      footer: {
        rights: 'መብቱ በህግ የተጠበቀ ነው።'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lng') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
