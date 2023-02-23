import "./App.css";
import ActivitiesContainer from "./components/ActivitiesContainer";
import Background from "./components/Background";

function App() {
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
