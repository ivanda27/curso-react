// extrar una propiedad de un objeto
// const course  = props.course
// es lo mismo que hacer esto
// const { course } = props

//esta funcion de vuelve lo primero que esta evaluando
const Header = ({ course }) => <h1>{course}</h1>;

export default Header;
