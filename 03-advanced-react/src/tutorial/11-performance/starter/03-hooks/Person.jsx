const Person = ({ person, removeItem }) => {
  const { id, name } = person;
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
