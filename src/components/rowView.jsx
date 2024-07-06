import React, { useState, useEffect } from "react";
import Poster from "./poster";
import axios from "axios";

async function fetchImage(title, year) {
  try {
    const response = await axios.get(" https://www.omdbapi.com/", {
      params: {
        apikey: process.env.API_KEY,
        t: title,
        y: year,
      },
    });
    console.log(response.data);
    return response.data.Poster;
  } catch (error) {
    console.log("Failed to make request:", error.message);
  }
}

function Card(card) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function getImage() {
      const url = await fetchImage(card.title, card.year);
      console.log(url);
      setImageUrl(url);
    }
    getImage();
  }, [card.title, card.year]);

  return (
    <Poster
      key={card.id}
      title={card.title}
      year={card.year}
      image={imageUrl}
    />
  );
}

function RowView(params) {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">
          <h3 className="text-white me-2">
            {params.heading}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </h3>
        </div>
        {params.data.map(Card)}
      </div>
    </div>
  );
}

export default RowView;
