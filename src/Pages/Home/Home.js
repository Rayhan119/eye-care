import React from "react";
import Banner from "../Banner/Banner";
import LatestNews from "../LatestNews/LatestNews";
import MeetDoctor from "../MeetDoctor/MeetDoctor";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <MeetDoctor></MeetDoctor>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
