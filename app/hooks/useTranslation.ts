import { useState, useEffect } from 'react'
import en from '@/app/translations/en'
import fr from '@/app/translations/fr'

const translations = {
  en,
  fr
}

export type Language = 'en' | 'fr'

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('en')
  
  const t = translations[language]
  
  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    window.location.reload()
  }
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])
  
  return { t, language, changeLanguage }
}

export default useTranslation 