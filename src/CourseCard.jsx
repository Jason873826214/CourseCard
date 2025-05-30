import React, { useState } from "react";
import "./CourseCard.css";

const CourseCard = ({
  title,
  price,
  language,
  duration,
  location,
  isNew,
  imageUrl,
  difficulty,
  isCompleted,
}) => {
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [reviewText, setReviewText] = useState("");
  


  const handleEnroll = () => {
    setEnrollmentCount(enrollmentCount + 1);
  };

  const handleReviewSubmit = () => {
    setReviewSubmitted(true);
    setShowReviewInput(false);
  };
  const shouldShowReviewButton = !reviewSubmitted && !showReviewInput;
  const shouldShowReviewInput = !reviewSubmitted && showReviewInput;

  return (
    <div className="course-card">
      {isNew && <span className="badge">New</span>}
      {imageUrl && <img src={imageUrl} alt="Course" className="course-image" />}
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

      <button className="main-btn" onClick={handleEnroll}>
        {isCompleted ? "Revisit Course" : "Start Course"}
      </button>
      <p>Enrolled: {enrollmentCount} times</p>

      {shouldShowReviewButton && (
        <button
          className="secondary-btn"
          onClick={() => setShowReviewInput(true)}
        >
          Leave a Review
        </button>
      )}

      {shouldShowReviewInput && (
        <div className="review-box">
          <input
            type="text"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button className="secondary-btn" onClick={handleReviewSubmit}>
            Submit Review
          </button>
        </div>
      )}

      {reviewSubmitted && <p className="review-msg">Review Submitted ✅</p>}
    </div>
  );
};

export default CourseCard;
