import React from "react";

const Exercise = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Exercise;
