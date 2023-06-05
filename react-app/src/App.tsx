import Alert from "./components/Alert";
import Exercise from "./components/Exercise";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Narnia", "Las Vegas", "Land of Ooo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="alert alert-primary">
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Exercise color="secondary">Click me!</Exercise>
      <Exercise color="primary">Click here too</Exercise>
      <ListGroup
        items={items}
        heading="Places"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
