import React from "react";

const MiddleContainer = () => {
  return (
    <div className="middle__container">
      <div className="left__container">
        <div className="header">
          <span>Sales Breakdown</span>
        </div>
        <div className="contents">
          <div className="block">
            <div className="left_side">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/fox_cartoon_character_icon_stylized_baby_girl_sketch_6850954.jpg"
                alt="cartoon"
              />
            </div>
            <div className="right_side">
              <b>Ad Spent</b>
              <progress id="file" value="80" max="100">
                32%
              </progress>
              <span>$80-20%</span>
            </div>
          </div>
          <div className="block">
            <div className="left_side">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/fox_cartoon_character_icon_stylized_baby_girl_sketch_6850954.jpg"
                alt="cartoon"
              />
            </div>
            <div className="right_side">
              <b>Upsell</b>
              <progress id="file" value="50" max="100">
                50%
              </progress>
              <span>$50-50%</span>
            </div>
          </div>
          <div className="block">
            <div className="left_side">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/fox_cartoon_character_icon_stylized_baby_girl_sketch_6850954.jpg"
                alt="cartoon"
              />
            </div>
            <div className="right_side">
              <b>Employees</b>
              <progress id="file" value="40" max="100">
                45%
              </progress>
              <span>$60-40%</span>
            </div>
          </div>
          <div className="block">
            <div className="left_side">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/fox_cartoon_character_icon_stylized_baby_girl_sketch_6850954.jpg"
                alt="cartoon"
              />
            </div>
            <div className="right_side">
              <b>Bundles</b>
              <progress id="file" value="30" max="100">
                32%
              </progress>
              <span>$75-25%</span>
            </div>
          </div>
          <div className="block">
            <div className="left_side">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/fox_cartoon_character_icon_stylized_baby_girl_sketch_6850954.jpg"
                alt="cartoon"
              />
            </div>
            <div className="right_side">
              <b>Apps</b>
              <progress id="file" value="62" max="100">
                38%
              </progress>
              <span>$35-65%</span>
            </div>
          </div>
          <div className="block">
            <div className="left_side">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/fox_cartoon_character_icon_stylized_baby_girl_sketch_6850954.jpg"
                alt="cartoon"
              />
            </div>
            <div className="right_side">
              <b>Abandanct cart</b>
              <progress id="file" value="55" max="100">
                55%
              </progress>
              <span>$55-45%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right__container">
        <div className="top_header">
          <span>Customer Demograph</span>
        </div>
        <div className="body_container">
          <div className="left">
            <div className="header">
              <b>Age Group</b>
            </div>
            <div className="contents">
              <b>18:26</b>
              <progress id="file" value="20" max="100">
                20%
              </progress>
              <span>20%</span>
            </div>
            <div className="contents">
              <b>27:45</b>
              <progress id="file" value="20" max="100">
                20%
              </progress>
              <span>20%</span>
            </div>
            <div className="contents">
              <b>45:65</b>
              <progress id="file" value="20" max="100">
                20%
              </progress>
              <span>20%</span>
            </div>
          </div>
          <div className="middle">
            <img
              src="https://previews.123rf.com/images/vectorkif/vectorkif1904/vectorkif190400179/121610276-concept-of-modern-young-business-woman-cartoon-character-businesswoman-holds-folder-and-documents-ve.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="header">
              <b>Location</b>
            </div>
            <div className="contents">
              <b>Boston</b>
              <progress id="file" value="20" max="100">
                20%
              </progress>
              <span>20%</span>
            </div>
            <div className="contents">
              <b>New york</b>
              <progress id="file" value="20" max="100">
                20%
              </progress>
              <span>20%</span>
            </div>
            <div className="contents">
              <b>California</b>
              <progress id="file" value="20" max="100">
                20%
              </progress>
              <span>20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
