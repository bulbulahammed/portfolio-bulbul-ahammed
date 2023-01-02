import React from 'react';
import About from "../components/About/About";
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Header from "../components/Header/Header";
import Projects from '../components/Projects/Projects';
import Skills from "../components/Skills/Skills";
import "./home.css";

const Home = () => {
  return (
    <div className='full-body' id="home">
        <div className='text-center'>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Blog/>
            <Contact/>
        </div>
    </div>
  )
}

export default Home