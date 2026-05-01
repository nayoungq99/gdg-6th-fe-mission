import React from 'react';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return(
    <div style={styles.app}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

const styles = {
  app: {
    fontFamily: "sans-serif",
  },
};