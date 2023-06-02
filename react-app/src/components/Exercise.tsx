import React from "react";

interface Props {
  children: string;
}

const Exercise = ({ children }: Props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Exercise;
