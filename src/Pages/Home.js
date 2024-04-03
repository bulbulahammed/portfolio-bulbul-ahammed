import React from 'react';
import About from "../components/About/About";
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Header from "../components/Header/Header";
import Projects from '../components/Projects/Projects';
import Skills from "../components/Skills/Skills";
import Footer from '../components/shared/Footer/Footer';

const Home = () => {
  return (
    <div id="home" style={{background:"#0d135b"}}>
        <div className='text-center'>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home