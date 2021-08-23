import React from "react";

const TopContainer = () => {
  return (
    <div className="bodyTopOne">
      <div className="topContainer">
        <div>Overview</div>
        <div className="calenderElement">
          <i class="bi bi-calendar-event"></i>
          <select name="" id="">
            <option value="last 7 days">Last 7 days</option>
          </select>
        </div>
      </div>
      <div className="bottom_container">
        <div className="block">
          <div className="left__block">
            <div className="violet__dot"></div>
            <div className="green__dot"></div>
            <svg>
              <circle cx={70} cy={70} r="70"></circle>
              <circle cx={70} cy={70} r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                87<span>%</span>
              </h2>
            </div>
          </div>
          <div className="right__block">
            <div>
              <b>$1500</b>
            </div>
            <div>
              <p>Total Sales</p>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="left__block">
            <div className="violet__dot"></div>
            <div className="green__dot"></div>
            <svg>
              <circle className="circleTwo" cx={70} cy={70} r="70"></circle>
              <circle className="circleTwo" cx={70} cy={70} r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                35<span>%</span>
              </h2>
            </div>
          </div>
          <div className="right__block">
            <div>
              <b>$500</b>
            </div>
            <div>
              <p>Total Expense</p>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="left__block">
            <div className="violet__dot"></div>
            <div className="green__dot"></div>
            <svg>
              <circle className="circleThree" cx={70} cy={70} r="70"></circle>
              <circle className="circleThree" cx={70} cy={70} r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                35<span>%</span>
              </h2>
            </div>
          </div>
          <div className="right__block">
            <div>
              <b>$1000</b>
            </div>
            <div>
              <p>Total Profit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
