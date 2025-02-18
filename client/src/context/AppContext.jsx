import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY || "USD"; // Default currency
    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const fetchAllCourses = async ()=> {
        setAllCourses(dummyCourses)
    }

    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRatig = 0
        course.courseRatings.forEach(rating => {
            totalRatig += rating.rating
        })
        return totalRatig / course.courseRatings.length
    }

    const calculateChapterTime = (chapter)=>{
        let time = 0
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
    }

    const calculateCourseDuration = (course) => {
        if (!course || !course.courseContent) {
            return "0h 0m"; // Return default value if course is undefined or missing content
        }
    
        let time = 0;
    
        course.courseContent.forEach((chapter) => {
            if (chapter.chapterContent) {
                chapter.chapterContent.forEach((lecture) => {
                    time += lecture.lectureDuration || 0; // Handle undefined lectureDuration
                });
            }
        });
    
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };


    const calculateNoOfLectures = (course)=>{
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures +=chapter.chapterContent.length;
            }
        });
        return totalLectures
    }

    const fetchUserEnrolledCourses = async ()=>{
        setEnrolledCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses()
        fetchUserEnrolledCourses()
    },[])

    const value = { currency, allCourses, navigate, calculateRating, isEducator, setIsEducator, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime, enrolledCourses, fetchUserEnrolledCourses};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
