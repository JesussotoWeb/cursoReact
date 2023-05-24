import BannerTopHeros from "../UI/organisms/BannerTopHeros/BannerTopHeros";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <BannerTopHeros />
      </main>
      <Footer />
    </>
  )
}

export default Home;