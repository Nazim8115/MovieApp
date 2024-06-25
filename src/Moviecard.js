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
    const { title, plot, price, rating, stars, fav, isInCard } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              src="https://rukminim2.flixcart.com/image/850/1000/l02r1jk0/poster/e/n/h/medium-avenger-poster-with-gloss-lamination-13x19-inch-001-original-imagbyc5ab7gjvbf.jpeg?q=90&crop=false"
            />
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
                  onClick={this.decreaseStar}
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
                  onClick={this.addStar}
                />
                <span className="starCount">{stars}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleAddToFavourite}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>
              <button
                className={isInCard ? "remove-from-card" : "cart-btn"}
                onClick={this.handleAddToCard}
              >
                {isInCard ? "Remove from card" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
