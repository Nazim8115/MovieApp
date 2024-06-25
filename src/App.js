import MovieList from "./MovieList";
import Student from "./Student";
import Car from "./Car";
function App() {
  return (
    <>
      <h1>Movie App</h1>
      <MovieList />
      {/* <Student emp={{ name: "Nazim", id: 1, city: "bareilly" }} />
      <Car brand="Ford" />
      <Car /> */}
    </>
  );
}
// default props...
Car.defaultProps = {
  brand: "maruti",
};
export default App;
