import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Learning from "@/pages/Learning";
import CourseDetail from "@/pages/CourseDetail";
import LessonContent from "@/pages/LessonContent";
import CheckIn from "@/pages/CheckIn";
import Community from "@/pages/Community";
import TopicDetail from "@/pages/TopicDetail";
import Mentoring from "@/pages/Mentoring";
import MentoringSession from "@/pages/MentoringSession";
import Profile from "@/pages/Profile";
import Subscription from "@/pages/Subscription";
import Navbar from "@/components/Navbar";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonContent />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:topicId" element={<TopicDetail />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/mentoring/session/:sessionId" element={<MentoringSession />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/subscription" element={<Subscription />} />

      </Routes>
    </Router>
  );
}
