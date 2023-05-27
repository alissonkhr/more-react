import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Las Vegas", "Narnia", "The Shire", "Hyrule"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
