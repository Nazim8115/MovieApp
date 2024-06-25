import { Component } from "react";
import Moviecard from "./Moviecard";
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 700,
      rating: 8.9,
      stars: 0,
      fav: false,
      isInCard: false,
    };
  }
  render() {
    return (
      <>
        <Moviecard movies={this.state} />
      </>
    );
  }
}

export default MovieList;
