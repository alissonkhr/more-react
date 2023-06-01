import Alert from "./components/Alert";
import Exercise from "./components/Exercise";

function App() {
  return (
    <div className="alert alert-primary">
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Exercise />
    </div>
  );
}

export default App;
