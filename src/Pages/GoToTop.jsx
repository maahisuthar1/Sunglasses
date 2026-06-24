import { useEffect, useState } from "react";
import "./GoToTop.css";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
       let heightToHidden = 450;
       const winscroll =
        document.body.scrollTop || document.documentElement.scrollTop;

        if(winscroll > heightToHidden){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="totop">
        {isVisible &&(
      <div className="top-btn" onClick={goToBtn}>
        <h1>⇑</h1>
      </div>
        )}
    </div>
  );
};

export default GoToTop;
