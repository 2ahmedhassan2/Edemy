# Edemy - LMS Website

**Edemy** is a Learning Management System (LMS) built using React JS, designed for both students and educators to create, manage, and participate in online courses. The platform supports course enrollment, progress tracking, video-based learning, and much more.

## Table of Contents

- [Brief Description](#brief-description)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Development Report](#development-report)
- [Lessons Learned & Next Steps](#lessons-learned-next-steps)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Brief Description

This project is an online Learning Management System (LMS) built using React JS. It enables users to browse, enroll in courses, and track their progress. Educators can create and manage courses, monitor student enrollments, and provide learning materials. With features like YouTube video integration, user authentication, and an educator dashboard, **Edemy** provides an interactive and efficient learning experience.

## Key Features

- **Course Enrollment & Progress Tracking**: Users can enroll in courses, track progress, and see their completion status.
- **Video-Based Learning**: Seamlessly integrates YouTube videos for course content.
- **User Authentication**: Secure user login and management using **Clerk**.
- **Responsive UI**: Developed using **Tailwind CSS** for a clean, mobile-first design.
- **Rating & Reviews**: Students can rate and leave reviews on courses.
- **Educator Dashboard**: A dedicated section for educators to manage courses, track student progress, and manage materials.

## Technologies Used

- **Frontend**: React JS, Tailwind CSS, Vite
- **State Management**: Context API
- **Authentication**: Clerk
- **Media & Content**: YouTube API, Quill Editor
- **UI Enhancements**: RC-Progress, React Simple Star Rating

## Development Report

### Successes:
- **Responsive UI**: The user interface is fully responsive and works seamlessly across devices.
- **Authentication & Video Playback**: Integrated user authentication using Clerk and smooth video playback using the YouTube API.
- **Navigation**: Easy-to-use routing using React Router.

### Challenges:
- **State Management**: Efficiently managing user progress and course tracking required attention to detail in state management.
- **Role-Based Access Control**: Handling authentication for both students and educators posed a challenge.
- **Video Optimization**: Ensuring fast video load times and smooth playback for an enhanced learning experience.

## Lessons Learned & Next Steps

### Lessons Learned:
- **Efficient State Management**: Learned the importance of efficient state management for performance, especially with user progress and content.
- **Tailwind CSS**: Enabled rapid development of UI elements and consistent styling across the platform.
- **API Integration**: API integration (e.g., YouTube API) requires careful handling of errors and fallback mechanisms.

### Next Steps:
- **Backend Implementation**: Add a backend to store course progress, user data, and more.
- **Payment Integration**: Introduce payment options for premium courses.
- **Discussion Forum**: Add a forum or Q&A section for students to interact with educators and peers.
