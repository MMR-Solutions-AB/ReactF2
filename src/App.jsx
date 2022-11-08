import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
function App() {
  /* Ta för vana att skicka obj som props */
  const cardData = {
    title: "Iphone0",
    img: "https://images.ctfassets.net/nproz1mx87a8/2hh5dK5BuxtekOXgse6dcW/9185cbf9d391f18e3833a31be30281e9/Sony-Xperia-1-IV-Black-front.png?&w=350&h=450&fm=webp",
    content: "Good phone",
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <section className="products-section">
          <ProductCard data={cardData} handleClick={handleClick} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
