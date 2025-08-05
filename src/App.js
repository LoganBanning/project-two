import { Navigation } from "./components/Navigation.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { PortfolioSection } from "./components/PortfolioSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <h1 className="text-4xl font-bold text-blue-600 underline">
          Tailwind is working!
        </h1>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
