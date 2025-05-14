import "./App.css";
import CourseCard from "./CourseCard";
import CourseCardClass from "./CourseCardClass";

const App = () => {
  return (
    <div className="card-container">
      <CourseCard
        title="26th Full Stack"
        price={5160}
        language="English"
        duration="26 weeks"
        location="Sydney"
        isNew={true}
        imageUrl="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
        difficulty="Medium"
        isCompleted={true}
      />

      <CourseCardClass
        title="2nd AI Engineer"
        price={3120}
        language="English"
        duration="16 weeks"
        location="Melbourne"
        isNew={true}
        imageUrl="https://bigblue.academy/images/image/blog/ai-engineer/group-157.jpg"
        difficulty="Extremely hard"
        isCompleted={false}
      />
    </div>
  );
};

export default App;
