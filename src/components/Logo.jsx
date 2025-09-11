import React from "react";
import icons from "../public/icons.png";

function Logo({ width = "100px" }) {
  return (
    <>
      <div>
        <img
          src={icons}
          alt=" LOGO"
          srcset=""
          height={50}
          width={70}
          className="mt-0 pt-0"
        />
      </div>
    </>
  );
}

export default Logo;
