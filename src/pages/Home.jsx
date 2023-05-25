import BannerTopHeros from "../UI/organisms/BannerTopHeros/BannerTopHeros";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import { useState } from "react";

const Home = () => {
  const [showContact, setShowContact] = useState(false)

  const changeHomeState = (opc) => {
    setShowContact(opc)
  }

  return (
    <>
      <Header callback={changeHomeState} />
      <main>
        <BannerTopHeros stateHome={showContact} />
      </main>
      <Footer />
    </>
  )
}

export default Home;