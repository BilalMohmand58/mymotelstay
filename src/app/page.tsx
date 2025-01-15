import ContactUs from '@/components/ContactUs'
import NavTopBar from '@/components/navTopbar/NavTopBar'
import Hero from './(pages)/business/components/Hero'
import Clients from './(pages)/business/components/Clients'
import Work from './(pages)/business/components/Work'
import Features from './(pages)/business/components/Features'
import Services from './(pages)/business/components/Services'
import Testimonial from './(pages)/business/components/Testimonial'
import Team from './(pages)/business/components/Team'
import ActionBox from './(pages)/business/components/ActionBox'
import Pricing from './(pages)/business/components/Pricing'
import AboutUs from './(pages)/startup/components/AboutUs'
import OurStory from './(pages)/business/components/OurStory'
import MissionVision from './(pages)/business/components/MissionVision'

const Business = () => {
  return (
    <>
      <NavTopBar />
      <Hero />
      {/* <Clients /> */}
      <AboutUs />
      <OurStory />
      <MissionVision />
      <Work />
      {/* <Features /> */}
      <Services />
      {/* <Testimonial /> */}
      {/* <Team /> */}
      <ActionBox />
      {/* <Pricing /> */}
      <ContactUs />
    </>
  )
}

export default Business
