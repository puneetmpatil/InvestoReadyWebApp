import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Navigation from './components/Navigation';
import TechStackContentBox from './components/TechStackContentBox';

function App() {
  const [mode, setMode] = useState("dark");
  const [imageURL, setImageURL] = useState("./night.png")
  let linkColor = document.querySelectorAll(".links")

  let contentText = [
    {
      title: "Introduction",
      content: "We have come with an Android app that will display various stocks and their analyzed data (percentage returns , company's performance graph, current stock price, etc). This app is mainly for beginners.The user can see the details of top 15 stocks which have been handpicked by team of experts. The app also allows you to automatically generate a portfolio and also provides an Return of Investment Calculator (ROI)."
    },
    {
      title: "Our Motivation",
      content: `In recent times, investing is as important as earning. Financial literacy can allow a person to reach different
        level of heights. Investing is considered to be a risky task (particularly in stocks) because of which many
        people avoid it. Hence to make investing easy we are proposing this idea.`
    },
    {
      'title': 'Features',
      'content': {
        1: 'AI generated Portoflio',
        2: "Return of Investment (ROI) Calculator",
        3: 'Beginner-friendly',
        4: 'User friendly interface'
      }
    },
    {
      title: "About Us",
      content: "Hola folks! We are engineering students from Goa College of Engineering who are looking forward to help the society in someway"
    }
  ]
  let faqs = [
    {
      question: "Is this app compatible on IOS or Windows?",
      answer: "No. Currently it is available only for Android",
    }, {
      question: "Does this app accurately analyze the stocks?",
      answer: "It gives an approximate solution",
    }
  ]
  let techStackContent = [
    {
      title: "Programming Languages",
      link: [
        {
          href: "https://dev.java/learn/",
          src: "https://img.icons8.com/color/48/null/java-coffee-cup-logo--v1.png",
          alt: "Java"
        },
        {
          href: "https://www.python.org/about/gettingstarted/",
          src: "https://img.icons8.com/color/48/null/python--v1.png",
          alt: "Python"
        },
        {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          src: "https://img.icons8.com/fluency/48/null/javascript.png",
          alt: "JavaScript"
        }

      ],
    },
    {
      title: "Libraries",
      link: [
        {
          href: "https://pandas.pydata.org/",
          src: "https://img.icons8.com/color/48/null/pandas.png",
          alt: "Pandas"
        },
        {
          href: "https://github.com/RomelTorres/alpha_vantage",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG_pXTMTv9SFmaDWMMh762u1ip4NoY4cwl6eMvSbOcXiHoeDzkt4wiWHggbApADxBSgo&usqp=CAU",
          alt: "Alpha Vantage"
        },
        {
          href: "https://reactjs.org/",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          alt: "React JS"
        }

      ],
    }
  ]
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      linkColor.forEach(link => {
        link.style.color = 'black';
      });
      setImageURL("./day.png")

    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      linkColor.forEach(link => {
        link.style.color = 'white';
      });
      setImageURL("./night.png")
    }
  }
  return (
    <>
      <Navigation toggleMode={toggleMode} imageURL={imageURL} />
      <div className="my-4">
        <div id="home">
          <Content title={contentText[0].title} content={contentText[0].content} isNotList={true} />
          <Content title={contentText[1].title} content={contentText[1].content} isNotList={true} />
          <div id="aboutApp">
            <Content title={contentText[2].title} content={contentText[2].content} isNotList={false} />
          </div>
        </div>
        <div className="documentation">
          <h5>Tech Stack Used</h5>
          <div className="techStack" style={{ 'marginBottom': '10vh' }}>
            <TechStackContentBox title={techStackContent[0].title} links={techStackContent[0].link} />
            <TechStackContentBox title={techStackContent[1].title} links={techStackContent[1].link} />
            <div>
              <label htmlFor="database">Database</label>
              <div style={{ display: 'inline' }}>
                <span><a href="https://firebase.google.com/"><img style={{ 'marginTop': '10px' }} src="https://img.icons8.com/color/48/null/firebase.png" alt="firebase" width="40" height="40" /></a></span>
              </div>
            </div>
          </div>
          <div id="documentation" className="downloadables" style={{ marginBottom: '10vh' }}>
            <h5>For Developers</h5>
            <div><button type="button" className="btn btn-light my-3" style={{ 'margin': 'auto' }}>{/* Put app link here */}<a href="./ERDiagram.pdf" download="ER Diagram" style={{ 'color': 'black', "textDecoration": "none" }}>Download ER Diagram</a></button></div>
            <button type="button" className="btn btn-light my-3" style={{ 'margin': 'auto' }}>{/* Put app link here */}<a href="./ProjectSynopsis.pdf" download="Synopsis" style={{ 'color': 'black', "textDecoration": "none" }}>Download Synopsis</a></button>
          </div>
          <h5>Getting Started !!!</h5>
          <div>Download the app using the link given below</div>
          <div className="buttonClass text-center my-4">
            <button type="button" className="btn btn-primary" style={{ 'margin': 'auto' }}>{/* Put app link here */}<a href="./InvestoReady.apk" download="InvestoReady" style={{ 'color': 'white', "textDecoration": "none" }}>Download App</a></button>
          </div>
        </div>
        <div id="aboutUs">
          <Content title={contentText[3].title} content={contentText[3].content} isNotList={true} />
          <div className="founders">
            <div className="container">
              <div className="row align-items-start">
                <div className="col">
                  <div className="card cards" style={{
                    'width':
                      '200px','height':'200px','color': 'black'
                  }}>
                    <img src="./photo.png" alt="raghuram" />
                    <div className="card-body">
                      <div className="card-title">
                        <div className="card-text">Raghuram (Android Developer)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card cards" style={{
                    'width':
                      '200px','height':'200px','color': 'black'
                  }}>
                    <img src="./photo.png" alt="Pratham" />
                    <div className="card-body">
                      <div className="card-title">
                        <div className="card-text">Pratham (Python Expert)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                <div className="card cards" style={{
                    'width':
                      '200px','height':'200px','color': 'black'
                  }}>
                    <img src="./photo.png" alt="Puneet" />
                    <div className="card-body">
                      <div className="card-title">
                        <div className="card-text">Puneet Patil ( Backend Engineer)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faqs">
          <h4 className="my-4" style={{ 'textAlign': 'center' }}>FAQs</h4>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item faqBox">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {faqs[0].question}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {faqs[0].answer}
                </div>
              </div>
            </div>
            <div className="accordion-item faqBox">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {faqs[1].question}
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {faqs[1].answer}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center">
          <br />
          <div id="contact" className="faqBox">
            <p>Connect with us on <span><a href="https://www.instagram.com/"><img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" alt="Instagram" /></a><a href="https://in.linkedin.com/"><img src="https://img.icons8.com/color/48/null/linkedin.png" alt="Linkedin" /></a><a href="https://www.facebook.com/"><img src="https://img.icons8.com/color/48/null/facebook-new.png" alt="Facebook" /></a><a href="https://web.telegram.org/"><img src="https://img.icons8.com/color/48/null/whatsapp--v1.png" alt="Telegram" /></a></span></p>
          </div>
          <p style={{ 'marginTop': '8vh' }}>Copyright &copy; All rights reserved</p>
        </footer>
      </div>
    </>
  );
}

export default App;
