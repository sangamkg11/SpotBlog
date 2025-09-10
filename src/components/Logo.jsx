import React from "react";

function Logo({ width = "100px" }) {
  return (
    <>
      <div>
        <img
          src="../public/icons.png"
          alt=" LOGO"
          srcset=""
          height={50}
          width={70}
          className="mt- pt-0"
        />
      </div>
    </>
  );
}

export default Logo;
