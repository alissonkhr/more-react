function ListGroup() {
  let items = ["Las Vegas", "Narnia", "The Shire", "Hyrule"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found.</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
