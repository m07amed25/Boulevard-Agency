import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return <div className="min-h-screen text-zinc-800 bg-blue-800">
    {/* Header */}
    <Header />
    {/* Main */}
    <main className="max-w-8xl mx-auto" id="main-content">
      <Hero />
    </main>
    {/* Footer */}
    <Footer />
  </div>;
};

export default App;
