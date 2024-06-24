const Item = ({ name, id, removeId }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removeId(id)}>Remove</button>
    </div>
  );
};
export default Item;
