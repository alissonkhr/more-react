import Alert from "./components/Alert";
import Exercise from "./components/Exercise";

function App() {
  return (
    <div className="alert alert-primary">
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Exercise>Click me!</Exercise>
      <Exercise>Click here too</Exercise>
    </div>
  );
}

export default App;
