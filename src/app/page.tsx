import Header from "@/components/Header";
import Hero from "@/app/containers/hero";
import Popular from "@/app/containers/popular_crypt"
import TrendingCrypt from "@/app/containers/trending_news"
import Portfolio from '@/app/containers/build_portfolio'
import Trusted from '@/app/containers/trusted'
import Help from '@/app/containers/help'
import Cta from '@/app/containers/cta'
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <TrendingCrypt />
      <Portfolio />
      <Trusted />
      <Help />
      <Cta />
      <Footer />

    </>
  )
}
