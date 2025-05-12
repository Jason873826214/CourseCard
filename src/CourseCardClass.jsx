import { Component } from "react";
import "./CourseCard.css";

class CourseCardClass extends Component {
  render() {
    const { title, price, language, duration, location, isNew, imageUrl } =
      this.props;

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
        </p>
      </div>
    );
  }
}

export default CourseCardClass;
