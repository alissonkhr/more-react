import React from "react";

interface Props {
  children: string;
  color: string;
}

const Exercise = ({ children, color }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={'btn btn-' + color}
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
