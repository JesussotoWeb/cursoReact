import Features from "../UI/organisms/Features/Features";
import IgniteYourFire from "../UI/organisms/IgniteYourFire/IgniteYourFire";
import ProximoEvento from "../UI/organisms/ProximoEvento/ProximoEvento";
import WorldStarOpen from "../UI/organisms/WorldStarOpen/WorldStarOpen";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <IgniteYourFire />
        <Features />
        <WorldStarOpen />
        <ProximoEvento />
      </main>
      <Footer />
    </>
  )
}

export default Home;