import "./App.css";
import ImageSlider from "./components/image-slider/ImageSlider";
// import Accordian from "./components/accordian/Accordian";
// import RandomColor from "./components/random-color/RandomColor";
// import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider imageLimit={5} pageNumber={3} />
    </>
  );
}

export default App;
