import React from "react";
import rainImage from "../assets/rain.png";

const Homepage = () => {
  console.log(screen.width);
  return 0;
  return (
    <img
      src={rainImage}
      alt="Rain"
      width={screen.width}
      height={538 * (screen.width / 960)}
    />
  );
};

export default Homepage;
