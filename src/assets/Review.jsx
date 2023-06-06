import React, { Component } from 'react'

class Review extends Component {
    constructor() {
        super()

        this.state = {
            reviews : []
        }

    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO")
        .then(response => response.json())
        .then((data) => {
            this.setState({reviews : data.results})
            console.log(data);
        })
        .catch((error) => console.log(error))
    }
    

  render() {
    const {reviews} = this.state

    return (
      <div className='container'>
        {
            reviews.map((movie, index) => (
                <div key={index} className='box'>
                    <h3>Title :- {movie.display_title}</h3>
                    <p>Headline :- {movie.headline}</p>
                    <p>Critics Pick :- {movie.critics_pick}</p>
                    <p>Byline :- {movie.byline}</p>
                </div>
            ))
        }
      </div>
    )
  }
}

export default Review
