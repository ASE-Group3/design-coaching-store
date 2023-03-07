import {
  NavBar,
  HeroSection,
  FeaturesList,
  RecommendedItems,
  WhyUs,
  Reviews,
} from "./components";

const App = () => {
  return (
    <div className="main-background">
      <NavBar />
      <HeroSection />
      <FeaturesList />
      <RecommendedItems />
      <WhyUs />
      <Reviews />
    </div>
  );
};
export default App;
