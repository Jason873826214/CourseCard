import { Component } from "react";
import "./CourseCard.css";

class CourseCardClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewInput: false,
      reviewSubmitted: false,
      enrollmentCount: 0,
      reviewText: "",
    };
  }

  handleEnroll = () => {
    this.setState((prevState) => ({
      enrollmentCount: prevState.enrollmentCount + 1,
    }));
  };

  handleReviewSubmit = () => {
    this.setState({
      reviewSubmitted: true,
      showReviewInput: false,
    });
  };

  render() {
    const {
      title,
      price,
      language,
      duration,
      location,
      isNew,
      imageUrl,
      difficulty,
      isCompleted,
    } = this.props;

    const { showReviewInput, reviewSubmitted, enrollmentCount, reviewText } =
      this.state;

    const mainButtonText = isCompleted ? "Revisit Course" : "Start Course";

    return (
      <div className="course-card">
        {isNew && <span className="badge">New</span>}
        {imageUrl && (
          <img src={imageUrl} alt="Course" className="course-image" />
        )}
        <h2 className="course-title">{title}</h2>
        <p className="course-info">
          <strong>Price:</strong> ${price}
          <br />
          <strong>Language:</strong> {language}
          <br />
          <strong>Duration:</strong> {duration}
          <br />
          <strong>Location:</strong> {location}
          <br />
          <strong>Difficulty:</strong> {difficulty}
        </p>

        <button className="main-btn" onClick={this.handleEnroll}>
          {mainButtonText}
        </button>
        <p>Enrolled: {enrollmentCount} times</p>

        {!reviewSubmitted && !showReviewInput && (
          <button
            className="secondary-btn"
            onClick={() => this.setState({ showReviewInput: true })}
          >
            Leave a Review
          </button>
        )}

        {!reviewSubmitted && showReviewInput && (
          <div className="review-box">
            <input
              type="text"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => this.setState({ reviewText: e.target.value })}
            />
            <button className="secondary-btn" onClick={this.handleReviewSubmit}>
              Submit Review
            </button>
          </div>
        )}

        {reviewSubmitted && <p className="review-msg">Review Submitted ✅</p>}
      </div>
    );
  }
}

export default CourseCardClass;
