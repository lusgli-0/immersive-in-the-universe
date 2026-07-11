document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      "site-title": "lusper glimmer",
      "nav-home": "首页",
      "nav-about": "关于我",
      "nav-works": "作品",
      "nav-contact": "联系",
      "lang-switch": "EN",
      "hero-subtitle": "沉浸在宇宙与星空中",
      "hero-title": "于幻梦中探索下一段旅程",
      "hero-description": "那本质的光芒 终将自发地涌现",
      "hero-cta-primary": "查看作品",
      "hero-cta-secondary": "了解我"
    },
    en: {
      "site-title": "lusper glimmer",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-works": "Works",
      "nav-contact": "Contact",
      "lang-switch": "中",
      "hero-subtitle": "Immersed in the universe and the galaxies",
      "hero-title": "Explore your next dreamlike journey",
      "hero-description": "The essential light is destined to naturally emerge on its own",
      "hero-cta-primary": "View Works",
      "hero-cta-secondary": "About Me"
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
