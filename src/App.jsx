import { useState } from "react";
import ImageSlider from "./Image_Slider/Image-slider";
import Apifetch from "./Image_Slider/apifetch";

import "./App.css";

function App() {
  return (
    <>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* <Apifetch url={"https://picum.photos/v2/list"} page={"1"} limit={"10"} /> */}
    </>
  );
}

export default App;
