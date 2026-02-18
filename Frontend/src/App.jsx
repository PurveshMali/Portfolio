import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Page1 from "./pages/Page1";
import CursorTrail from "./animations/CursorTrail";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import LoadingAnimation from "./animations/LoadingAnimation";
import Page4 from "./pages/Page4";
import Footer from "./components/Footer";
import Page5 from "./pages/Page5";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import FadeInSection from "./animations/FadeInSection";
import GitHubContributions from "./components/GitHubContributions";
import HackathonsSection from "./components/HackathonsSection";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 1.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#333",
              color: "#fff",
              border: "1px solid #22c55e",
            },
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              background: "#1f1f1f",
              color: "#ff4d4d",
              border: "1px solid #ff4d4d",
            },
            iconTheme: {
              primary: "#ff4d4d",
              secondary: "#fff",
            },
          },
          loading: {
            style: {
              background: "#1f1f1f",
              color: "#FFCD29",
              border: "1px solid #FFCD29",
            },
            iconTheme: {
              primary: "#FFCD29",
              secondary: "#fff",
            },
          },
        }}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="your-main-website-content">
          <div className="bg-black h-auto w-full text-white border-1 border-gray-400">
            <CursorTrail />
            <div id="home">
              <Navbar />
              <Page1 />
            </div>
            <div id="about">
                <FadeInSection>
                <Page2 />
                </FadeInSection>
            </div>
            <div id="projects">
                <FadeInSection>
                <Page3 />
                </FadeInSection>
            </div>
            <FadeInSection>
              <GitHubContributions />
            </FadeInSection>
            <div id="hackathons">
                <FadeInSection>
                <HackathonsSection />
                </FadeInSection>
            </div>
            <div id="skills">
                <FadeInSection>
                <Page4 />
                </FadeInSection>  
            </div>
            <div id="contact">
                <FadeInSection>
                <Page5 />
                </FadeInSection>
            </div>
            <FadeInSection>
              <Footer />
            </FadeInSection>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
