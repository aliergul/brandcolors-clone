import React from "react";
import getContrast from "utils/colorContrast";

const CopiedSnackbar = ({ color }) => {
  return (
    <div
      className="copied"
      style={{
        "--bgColor": `#${color}`,
        "--textColor": `${getContrast(color)}`,
      }}
    >
      Copied #{color} to clipboard
    </div>
  );
};

export default CopiedSnackbar;
