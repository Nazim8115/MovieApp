import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 700,
      rating: 8.9,
    };
  }

  render() {
    const { title, plot, price, rating } = this.state;
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
                />
                <span className="starCount">0</span>
              </div>

              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
