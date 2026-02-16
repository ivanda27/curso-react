import Parrafo from "./Parrafo";

export const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Parrafo part={part1} exercises={exercises1} />
      <Parrafo part={part2} exercises={exercises2} />
      <Parrafo part={part3} exercises={exercises3} />
    </div>
  );
};
