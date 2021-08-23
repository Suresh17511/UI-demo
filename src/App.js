import BottomContainer from "./components/BodyContainer/BottomContainer";
import MiddleContainer from "./components/BodyContainer/MiddleContainer";
import TopContainer from "./components/BodyContainer/TopContainer";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";

function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <LeftContainer />
      </div>
      <div className="rightContainer">
        <div className="topBar">
          <Header />
        </div>
        <div className="bodyContainer">
          <div className="topBoxContainer">
            <TopContainer />
          </div>
          <div className="middleBoxContainer">
            <MiddleContainer />
          </div>
          <div className="bottomBoxContainer">
            <BottomContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
