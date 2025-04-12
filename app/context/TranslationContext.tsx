'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '@/app/translations/en'
import fr from '@/app/translations/fr'

const translations = {
  en,
  fr
}

export type Language = 'en' | 'fr'

type TranslationContextType = {
  language: Language
  changeLanguage: (lang: Language) => void
  t: typeof en
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  
  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])
  
  const value = {
    language,
    changeLanguage,
    t: translations[language]
  }
  
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
} 