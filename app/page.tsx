import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import News from "./components/News"
import CTAButton from "./components/CTAButton"
import ConfirmationSection from "./components/ConfirmationSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <News />
      <Services />
      <ConfirmationSection />
      <Footer />
      <CTAButton />
    </main>
  )
}
