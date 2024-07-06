import React from "react";
import { useNavigate } from "react-router-dom";

function Poster(params) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${encodeURIComponent(params.title)}/${params.year}`);
  };

  return (
    <div
      className="rounded rowItem col-lg-2 col-sm-6 mt-2 mb-3"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        className="rounded zoom"
        width="100%"
        height="100%"
        src={params.image}
        alt={params.title}
      />
    </div>
  );
}

export default Poster;
