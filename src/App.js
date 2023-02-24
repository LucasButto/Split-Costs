import "./App.css";
import ActivitiesContainer from "./components/ActivitiesContainer";
import Background from "./components/Background";
import AOS from "aos";

function App() {
  AOS.init();
  return (
    <>
      <Background />
      <div className="app-container">
        <h1>Split/costs</h1>
        <ActivitiesContainer />
      </div>
    </>
  );
}

export default App;
