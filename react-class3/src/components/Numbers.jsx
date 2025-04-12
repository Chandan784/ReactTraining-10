import NumberCard from "./NumberCard";

function Numbers() {
  let numbers = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {numbers.map((number) => {
        return <NumberCard x={number} />;
      })}
    </>
  );
}

export default Numbers;
