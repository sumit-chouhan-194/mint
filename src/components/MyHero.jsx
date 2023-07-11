import React , {Nav} from "react";
import nav_logo from "../assets/images/png/nav_logo.png";
import icon_1 from "../assets/images/png/nav_icon1.png";
import icon_2 from "../assets/images/png/nav_icon2.png";
import icon_3 from "../assets/images/png/nav_icon3.png";

const MyHero = () => {
  return (
    <>
      <header className="bg-black vh_xl_100 d-flex flex-column">
        <Nav>
          <div className="d-flex justify-content-between w-100 pt-4 pb-4 pb-lg-2  px-lg-5 px-3 align-items-center ">
            <div className="pe-md-5 pe-3 c_pointer">
              <img src={nav_logo} alt="logo" className="w-100" />
            </div>
            <div className="d-flex gap-lg-5 gap-lg-4 gap-sm-2 gap-1">
              <div>
                <img
                  src={icon_1}
                  alt="icon"
                  className="w-100 c_pointer nav_icon"
                />
              </div>
              <div>
                <img
                  src={icon_2}
                  alt="icon"
                  className="w-100 c_pointer nav_icon"
                />
              </div>
              <div>
                <img
                  src={icon_3}
                  alt="icon"
                  className="w-100 c_pointer nav_icon"
                />
              </div>
            </div>
          </div>
        </Nav>
        
      </header>
    </>
  );
};

export default MyHero;
