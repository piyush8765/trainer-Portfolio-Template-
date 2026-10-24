import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Expertise from "../components/Expertise";
import Workshops from "../components/Workshops";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PersonalAssistant from "../components/PersonalAssistant";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaComments,
  FaFileAlt,
  FaBrain,
  FaBullhorn
} from "react-icons/fa";

function Home() {
  return (
    <>
      {/*==================== Navbar =============================*/}
      <Navbar
  brandName="Vivek"
  highlightName="Trainer"
  navItems={["home", "about", "workshops", "contact"]}
  buttonText="Book Session"
/>
      {/*================== Hero ========================*/}
      <Hero
  backgroundImage="/hero-bg.jpg"
  heading="Transforming Students into"
  highlightText="Industry-Ready Professionals"
  description="College trainer specializing in soft skills, placement preparation, communication mastery and personality development."
  primaryBtnText="Book a Session"
  secondaryBtnText="View Workshops"
  statsText="500+ Students Trained | 20+ Workshops Conducted"
/>
      {/*===================== About =============================*/}
      <About
  title="About Me"
  description1="I am a professional college trainer helping students improve communication, confidence, interview skills, and overall career readiness through practical and interactive sessions."
  description2="My mission is to transform students into industry-ready professionals with strong personality, mindset, and placement preparation."
  image="/trainer.jpg"
  stats={[
    { number: "500+", label: "Students Trained" },
    { number: "20+", label: "Workshops Conducted" },
    { number: "5+", label: "Colleges Associated" },
    { number: "85%", label: "Placement Success" }
  ]}
/>
      {/* =======================Experience =============== */}
      <Experience
  title="Professional Experience"
  subtitle="A journey of empowering students through structured training, mentorship and real-world career preparation."
  experiences={[
    {
      role: "Senior College Trainer",
      place: "ABC Engineering College",
      duration: "2024 - Present",
      desc: "Conducting placement preparation, soft skills and personality development programs for final year students."
    },
    {
      role: "Placement Mentor",
      place: "XYZ Institute",
      duration: "2023 - 2024",
      desc: "Led mock interviews, resume building workshops and group discussion training sessions."
    },
    {
      role: "Communication Trainer",
      place: "Private Academy",
      duration: "2022 - 2023",
      desc: "Helped students improve public speaking, confidence and professional communication."
    }
  ]}
/>
      {/* ============Expertise ================ ==============*/}
      <Expertise
  title="My Expertise"
  subtitle="Specialized training programs designed to prepare students for placements and professional success."
  skills={[
    {
      icon: <FaChalkboardTeacher />,
      title: "Soft Skills Training",
      desc: "Interactive sessions focused on communication, confidence, and professional behavior."
    },
    {
      icon: <FaUserTie />,
      title: "Interview Preparation",
      desc: "Mock interviews, HR preparation, and body language improvement."
    },
    {
      icon: <FaComments />,
      title: "Public Speaking",
      desc: "Helping students overcome stage fear and speak confidently."
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Building",
      desc: "Professional resume formatting and LinkedIn profile optimization."
    },
    {
      icon: <FaBrain />,
      title: "Aptitude Training",
      desc: "Logical reasoning, quantitative aptitude and verbal ability."
    },
    {
      icon: <FaBullhorn />,
      title: "Group Discussion",
      desc: "Real-time GD practice with structured feedback and improvement."
    }
  ]}
/>
      {/*=============== Workshops ==============*/}
      <Workshops
  title="Workshops Conducted"
  workshops={[
    {
      title: "Placement Readiness Bootcamp",
      date: "March 2024",
      location: "ABC Engineering College",
      desc: "3-day intensive training covering resume building, mock interviews and group discussion practice."
    },
    {
      title: "Soft Skills Masterclass",
      date: "January 2024",
      location: "XYZ Institute",
      desc: "Focused on communication skills, personality development and confidence building."
    },
    {
      title: "Interview Preparation Workshop",
      date: "October 2023",
      location: "LMN College",
      desc: "Hands-on HR interview practice with real-time feedback and performance analysis."
    }
  ]}
  impactStats={[
    { number: "500+", label: "Students Trained" },
    { number: "20+", label: "Workshops Conducted" },
    { number: "5+", label: "Colleges Collaborated" }
  ]}
/>
      {/*================== Achievements  ==============*/}
      <Achievements
  title="Achievements & Milestones"
  subtitle="A snapshot of measurable impact delivered through structured training programs and workshops."
  achievements={[
    { number: "500+", label: "Students Successfully Trained" },
    { number: "20+", label: "Workshops Conducted" },
    { number: "5+", label: "Colleges Collaborated" },
    { number: "85%", label: "Placement Success Rate" },
  ]}
/>
    {/*================= Testimonials ===============*/}
    <Testimonials
  title="Testimonials"
  subtitle="What students and institutions say about the training experience."
  testimonials={[
    {
      name: "Rahul Sharma",
      role: "Final Year Student",
      feedback:
        "The placement training sessions improved my confidence and helped me clear my campus interview successfully."
    },
    {
      name: "Anjali Verma",
      role: "B.Tech Student",
      feedback:
        "Mock interviews and group discussion practice made a huge difference in my communication skills."
    },
    {
      name: "Faculty Coordinator",
      role: "ABC Engineering College",
      feedback:
        "Highly interactive and structured sessions. Students showed visible improvement in professionalism and confidence."
    }
  ]}
/>
      {/* ==============Contact *=======================================*/}
      <Contact
  title="Get In Touch"
  subtitle="Let's discuss workshops, collaborations and training sessions."
  phone="+918765419448"
  whatsapp="918975735289"
  location=" Lucknow Uttar Pradesh, India"
  availability="Mon – Sat : 9AM – 6PM"
/>
      
    {/* =====================<Footer ======================== */}
    <Footer
  brandName="Vivek"
  highlightName="Trainer"
  description="Empowering students with confidence, communication skills, and placement readiness training programs."
  quickLinks={["Home", "About", "Experience", "Workshops", "Contact"]}
  services={[
    "Soft Skills Training",
    "Interview Preparation",
    "Resume Building",
    "Aptitude Training",
  ]}
  email="Vivek@email.com"
  phone="+91 9876543210"
  facebook="#"
  instagram="#"
  linkedin="#"
/>
      {/* =================PersonalAssistant ================= */}
<PersonalAssistant
  trainerName="Vivek Yadav"
  specialization="Placement Training & Soft Skills"
  experience="8+ years"
  studentsTrained="5000+"
  colleges="30+"
  location="Lucknow, India"
/>
      
    </>
  );
}

export default Home;