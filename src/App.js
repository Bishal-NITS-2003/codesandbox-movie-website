import "./styles.css";
import React from "react";
import Header from "./components/header";
import RowView from "./components/rowView";
import bollywoodData from "./data/new-bollywood-movies";
import hollywoodData from "./data/new-hollywwod-movies";
import Corousal from "./components/corousel";

export default function App() {
  return (
    <div className="App">
      <Header />
      <RowView heading="New Bollywood Movies" data={bollywoodData} />
      <RowView heading="New Hollywood Movies" data={hollywoodData} />
    </div>
  );
}
