import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from '../../components/student/CourseCard';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the Best
      </h2>

      {/* Section Description */}
      <p className="text-sm md:text-base text-gray-500 mt-3 max-w-2xl mx-auto">
        Discover our top-rated courses across various categories. 
        From coding and design to business and wellness, our courses 
        are crafted to deliver results.
      </p>

      {/* Course List */}
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses?.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Button to View All Courses */}
      <Link 
        to="/course-list" 
        onClick={() => window.scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded mt-5 inline-block hover:bg-gray-100 transition"
      >
        Show All Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
