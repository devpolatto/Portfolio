import LayoutContainer from '../components/LayoutContainer';
import Cover from '../components/Cover';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <LayoutContainer>
      <Cover/>
      <AboutMe/>
      <Footer/>
    </LayoutContainer>
  )
}
