import { Component } from "react";

class MovieCard extends Component {
  addStar = () => {
    // formal
    //   this.setState({
    //     stars: this.state.stars + 0.5,
    //   });

    if (this.state.stars >= 5) {
      return;
    }

    // 2nd form
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };

  decreaseStar = () => {
    this.setState((prevState) => {
      if (prevState.stars <= 0) {
        console.log("Can't decrease!");
        return;
      }
      return { stars: prevState.stars - 0.5 };
    });
  };
  handleAddToFavourite = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleAddToCard = () => {
    this.setState({ isInCard: !this.state.isInCard });
  };

  render() {
    const { onIncStars, movies, onDecStars, onClickFav, onClickCard } =
      this.props;
    const { title, plot, poster, price, rating, star, fav, isInCart } =
      this.props.movies;
    console.log(movies);
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={poster} />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                alt="decrease"
                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                onClick={() => onDecStars(movies)}
              />
              <img
                alt="start"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                className="stars"
              />
              <img
                className="str-btn"
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                onClick={() => onIncStars(movies)}
              />
              <span className="starCount">{star}</span>
            </div>

            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => onClickFav(movies)}
            >
              {fav ? "Unfavourite" : "Favourite"}
            </button>
            <button
              className={isInCart ? "remove-from-card" : "cart-btn"}
              onClick={() => onClickCard(movies)}
            >
              {isInCart ? "Remove from card" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
