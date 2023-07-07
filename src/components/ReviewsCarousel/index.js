// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  rightClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const lengthOfArray = reviewsList.length

    if (index >= 0 && index < lengthOfArray - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  leftClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    // console.log(index)
    const {index} = this.state
    // console.log(index)
    const obj = reviewsList[index]

    let imageUrl
    let name
    let companyNaming
    let descriptionPara

    if (obj !== undefined) {
      const {imgUrl, username, companyName, description} = obj
      imageUrl = imgUrl
      name = username
      companyNaming = companyName
      descriptionPara = description
    }
    return (
      <div className="app-container">
        <div className="container">
          <button
            className="button"
            data-testid="leftArrow"
            s
            type="button"
            onClick={this.leftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="mini-container">
            <h1 className="heading">Reviews</h1>
            <img src={imageUrl} alt={name} className="username-picture" />
            <p className="username-paragraph">{name}</p>
            <p className="company-name-paragraph">{companyNaming}</p>
            <p className="description-paragraph">{descriptionPara}</p>
          </div>
          <button
            className="button"
            data-testid="rightArrow"
            type="button"
            onClick={this.rightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
