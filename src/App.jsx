/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import Education from "./Components/Education";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";


import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Yalexis Santiago",
  title: "Web3 Enthusiast & Developer",
  email: "kikiyalexis@gmail.com",
  gitHub: "yalexis-eth",
  instagram: "yalexis_eth",
  Discord: "Yalexis",
  twitter: "Yalexis_eth",
  youTube: "Yalexis",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <section id="education">
        {/* Grid of 4 education cells */}
        <Education school="AUC" degree="Graphic Design" graduationYear="2021" />
        <Education school="MIT" degree="Computer Science" graduationYear="2022" />
        <Education school="Harvard" degree="Business Administration" graduationYear="2023" />
        <Education school="Stanford" degree="Engineering" graduationYear="2024" />
      </section>
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
