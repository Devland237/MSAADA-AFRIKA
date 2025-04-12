"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function BecomeProvider() {
  const { t } = useTranslation();

  const benefits = [
    t.becomeProvider.benefit1,
    t.becomeProvider.benefit2,
    t.becomeProvider.benefit3,
    t.becomeProvider.benefit4,
    t.becomeProvider.benefit5,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#BA0218] relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#54010B] via-[#54010B] to-[#54010B]" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(168deg, #BA0218 0%, #54010B 50%, transparent 100%)",
        }}
      />
      <div className="custom-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-50">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              {t.becomeProvider.title}
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t.becomeProvider.namePlaceholder}
                  className="h-12 text-lg bg-white border-gray-300 focus:border-[#BA0218] focus:ring-[#BA0218]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.becomeProvider.emailPlaceholder}
                  className="h-12 text-lg bg-white border-gray-300 focus:border-[#BA0218] focus:ring-[#BA0218]"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-lg bg-[#4C535D] hover:bg-[#4C535D]/90 text-white"
              >
                {t.becomeProvider.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}