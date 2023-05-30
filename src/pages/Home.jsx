import Features from "../UI/organisms/Features/Features";
import IgniteYourFire from "../UI/organisms/IgniteYourFire/IgniteYourFire";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <IgniteYourFire />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default Home;