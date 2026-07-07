document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      "site-title": "immersive-universe",
      "nav-home": "首页",
      "nav-about": "关于我",
      "nav-works": "作品",
      "nav-contact": "联系",
      "lang-switch": "EN",
      "hero-subtitle": "沉浸在宇宙与星空之间",
      "hero-title": "探索你的下一段星际旅程",
      "hero-description": "这是一个以沉浸感为核心的个人展示页，聚焦于设计、创意与未来感体验。",
      "hero-cta-primary": "查看作品",
      "hero-cta-secondary": "了解我",
      "about-title": "关于我",
      "about-intro": "将极简与未来主义融合，以宇宙为灵感打造沉浸式体验。",
      "about-card-title-1": "我的定位",
      "about-card-text-1": "前端开发者 / 视觉设计爱好者 / 宇宙沉浸体验创造者",
      "about-card-title-2": "我的方法",
      "about-card-text-2": "简洁布局、精妙动效、清晰层次，强调用户的沉浸感与探索欲。",
      "works-title": "作品与经历",
      "works-intro": "精选项目展示，展示我的设计思路与实现能力。",
      "work-card-title-1": "星空交互界面",
      "work-card-text-1": "一个以星空为主题的交互页面，强调视觉层次与动效体验。",
      "work-card-title-2": "沉浸式个人主页",
      "work-card-text-2": "结合简洁布局与宇宙美学，打造沉浸式内容呈现方式。",
      "work-card-title-3": "未来感网页动画",
      "work-card-text-3": "通过细腻动画提升页面活力，增强用户探索感受。",
      "footer-text": "© 2026 immersive-universe. 由极简主义与宇宙美学驱动。",
      "footer-link-top": "回到顶部",
      "footer-link-contact": "联系我"
    },
    en: {
      "site-title": "immersive-universe",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-works": "Works",
      "nav-contact": "Contact",
      "lang-switch": "中",
      "hero-subtitle": "Immersed between the cosmos and the stars",
      "hero-title": "Explore your next interstellar journey",
      "hero-description": "This is a personal showcase page centered on immersion, focusing on design, creativity, and a futuristic experience.",
      "hero-cta-primary": "View Works",
      "hero-cta-secondary": "About Me",
      "about-title": "About Me",
      "about-intro": "Blending minimalism with futurism, crafting immersive experiences inspired by the universe.",
      "about-card-title-1": "My Position",
      "about-card-text-1": "Front-end developer / visual design enthusiast / cosmic immersion experience creator",
      "about-card-title-2": "My Approach",
      "about-card-text-2": "Clean layouts, refined motion, and clear hierarchy to emphasize immersion and curiosity.",
      "works-title": "Works & Experience",
      "works-intro": "A curated showcase of selected projects and my design thinking.",
      "work-card-title-1": "Starlit Interactive Interface",
      "work-card-text-1": "An interactive page themed around the night sky, emphasizing visual depth and motion experience.",
      "work-card-title-2": "Immersive Personal Homepage",
      "work-card-text-2": "Combining minimal layout with cosmic aesthetics to create an immersive presentation.",
      "work-card-title-3": "Futuristic Web Animation",
      "work-card-text-3": "Using delicate animation to bring energy to the page and strengthen the sense of exploration.",
      "footer-text": "© 2026 immersive-universe. Driven by minimalism and cosmic aesthetics.",
      "footer-link-top": "Back to Top",
      "footer-link-contact": "Contact Me"
    }
  };

  let currentLang = "zh";
  const langSwitchButton = document.getElementById("lang-switch");

  function applyTranslations() {
    const currentDictionary = translations[currentLang];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = currentDictionary[key];

      if (value) {
        element.textContent = value;
      }
    });

    document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";

    if (langSwitchButton) {
      langSwitchButton.textContent = currentLang === "en" ? "中" : "EN";
    }
  }

  if (langSwitchButton) {
    langSwitchButton.addEventListener("click", () => {
      currentLang = currentLang === "zh" ? "en" : "zh";
      applyTranslations();
    });
  }

  applyTranslations();
});
