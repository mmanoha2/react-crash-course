import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import HomeCards from "./components/HomeCards.tsx";
import JobListing from "./components/JobListing.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListing />
    </>
  );
};

export default App;
