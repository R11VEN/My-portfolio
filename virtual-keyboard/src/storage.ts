class Storage {
  getLang() {
    const lang = localStorage.getItem('lang');
    if (lang === 'ru' || lang === 'eng') {
      return lang;
    } else {
      localStorage.setItem('lang', 'eng');
      return 'eng';
    }
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
  }
}

export const storage = new Storage();