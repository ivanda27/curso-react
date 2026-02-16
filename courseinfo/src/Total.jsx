export const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p>
      Número de ejercicios
      <br />
      {exercises1 + exercises2 + exercises3}
    </p>
  );
};
