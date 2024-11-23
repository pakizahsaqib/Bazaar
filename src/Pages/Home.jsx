import React from "react";
import "../App.css";
import Categories from "./Categories";
import heroImg from "../assets/main.png";
import OnSale from "../components/OnSale";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <div>
      <main>
        <img
          className="w-full max-h-[calc(100vh-110px)] object-cover"
          src={heroImg}
          alt="Hero"
        />
      </main>
      <Categories />
      <OnSale />
      <NewArrival />
    </div>
  );
};

export default Home;
