import LayoutContainer from '../components/LayoutContainer';
import Cover from '../components/Cover';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

import BackGroundEffect from '../components/BackGroundEffect'

export default function Home() {
  return (
    <LayoutContainer>
      <BackGroundEffect/>
      <Cover/>
      <AboutMe/>
      <Footer/>
    </LayoutContainer>
  )
}
