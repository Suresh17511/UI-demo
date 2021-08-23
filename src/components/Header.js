import React from "react";

const Header = () => {
  return (
    <div className="topBox">
      <div className="searchContainer">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search for anything..." />
      </div>
      <div className="profileContainer">
        <div className="alert">
          <i class="bi bi-bell-fill"></i>
          <div className="dot"></div>
        </div>
        <div className="userProfile">
          <div className="leftItem">
            <img
              src="https://freesvg.org/img/Cartoon-Man-Avatar-2.png"
              alt="profile pic"
            />
          </div>
          <div className="rightItem">
            <b>Surya </b>
            <span>Super Admin</span>
          </div>
        </div>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  );
};

export default Header;
