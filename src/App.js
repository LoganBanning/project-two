import { Navigation } from "./components/Navigation.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { PortfolioSection } from "./components/PortfolioSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <main>
        <div className="min-h-screen bg-background text-foreground p-10">
          <p className="text-2xl font-semibold">Tailwind is working with custom colors!</p>
        </div>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}