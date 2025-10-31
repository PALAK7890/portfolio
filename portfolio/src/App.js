import React,{useEffect} from 'react';
import './App.css';
// import NavBar from './navBar';
function App() {
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if (entry.isIntersecting) {
  entry.target.classList.add('slide-in')

}
      })
    })

    const elements= document.querySelectorAll('.hidden-text')
    elements.forEach((e)=>{
      observer.observe(e)
    })
  },[])
  return (
    
    <div className="App">
      <section className='hero-text'>
        <div className="hello-box hidden-text">
          <h1 className="hello-heading">Hello</h1>
          <p className="intro-text"> hii, I’m Palak Dahiya  Full Stack Developer | MERN Stack Enthusiast  I love building interactive web apps that connect
             design and logic seamlessly.</p>
        </div>
      </section>
      <section ></section>
    </div>
  );
}

export default App;
