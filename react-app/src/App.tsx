import Alert from "./components/Alert";
import Exercise from "./components/Exercise";
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";

function App() {
  let items = ["Narnia", "Las Vegas", "Land of Ooo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Header />
      <div className="alert alert-primary">
        <Alert>
          Hello <span>World</span>
        </Alert>
        <Exercise
          color="danger"
          onClick={() => {
            console.log("first button");
          }}
        >
          Click me!
        </Exercise>
        <Exercise
          color="secondary"
          onClick={() => {
            console.log("second button");
          }}
        >
          Click here too
        </Exercise>
        <ListGroup
          items={items}
          heading="Places"
          onSelectItem={handleSelectItem}
        />
      </div>
    </div>
  );
}

export default App;
