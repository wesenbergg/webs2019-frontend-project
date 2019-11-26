import React from 'react'
import '../styles/App.css'
import Content from './Content'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>React app</p>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
