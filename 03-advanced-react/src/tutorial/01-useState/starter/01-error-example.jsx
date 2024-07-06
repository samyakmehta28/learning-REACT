const ErrorExample = () => {
  let value = 0;

  const increaseValue = () => {
    value = value + 1;
    console.log(value);
  };
  return (
    <div>
      <h2>{value}</h2>
      <button className="btn" onClick={increaseValue}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
