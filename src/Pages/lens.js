import "./lens.css";
import Hero from "./Try Our Collection (1).png";
import Main from "../assets/HA1.png";
import pic1 from "../assets/Screenshot 2026-05-19 153448.png";
import img1 from "../assets/Screenshot_2026-05-18_163150-removebg-preview.png";
import img3 from "../assets/Screenshot_2026-05-18_163212-removebg-preview.png";
import end from "../assets/Untitled design (10).png";

function Lens() {
        function handleClick() {
        console.log("Button Clicked!");
      }
  return (
    <>
      <div className="Hero">
        <img src={Hero} alt="Hero" />
      </div>
      <div className="text">
        <div className="question">Did You Know?</div>
        <div className="answer">
          <div className="answer1">
            Hearing loss is more common than vision loss
          </div>
          <div className="answer2">
            It effects 1 out of 3 people over the age of 65
          </div>
          <div className="answer3">Hearing loss can occur at any age</div>
        </div>
      </div>
      <div className="main1">
        <img src={Main} alt="Main" />
      </div>


        
         <div className="consaltant">
          <div className="consaltpic">
            <img src={pic1} alt="pic1" />
          </div>
          <div className="consaltbtn">
          <button className="button" onClick={handleClick}>
            Book your consaltation
          </button>
          </div>
        </div>   
      <div className="main2">
        <div className="part1">
          <div className="part1text">
            Motion Charge & Go SP X is the ultimate BTE combining sleek design
            with rechargeability, Bluetooth, and the Signia Assistant. The
            device is the complete package for those who want to Be Brilliant
            despite severe to profound hearing loss.
          </div>
          <img src={img1} alt="img1" />
        </div>

        <div className="part3">
          <img src={img3} alt="img3" />
          <div className="part3text">
            The only ready-to-wear CIC available on the Signia Xperience
            platform delivers clear speech understanding in an ultra-discreet
            size with instant fit. Thanks to its flexible silicone Click
            Sleeves, Silk X sits securely in the ear for a brilliant fit on the
            spot.
          </div>
        </div>
      </div>
      <div className="end">
        <img src={end} alt="end" />
      </div>
    </>
  );
}

export default Lens;
