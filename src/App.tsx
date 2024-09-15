import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import CourseAdvantages from "./components/CourseAdvantages/CourseAdvantages"
import CourseContent from "./components/CourseContent/CourseContent"
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase"
import GraduateCompanies from "./components/GraduateCompanies/GraduateCompanies"
import Instructor from "./components/Instructor/Instructor"
import CoursePreview from "./components/CoursePreview/CoursePreview"
import PricingPlans from "./components/PricingPlan/PricingPlan"
import InstallmentOption from "./components/InstallmentOption/InstallmentOption"
import Testimonials from "./components/Testimonial/Testimonial"
import FAQ from "./components/FAQ/FAQ"
import RelatedCourses from "./components/RelatedCourses/RelatedCourses"
import Footer from "./components/Footer/Footer"

import styles from './App.module.scss'
import CourseExpectations from "./components/CourseExpectations/CourseExpectations"
import CourseSkils from "./components/CourseSkils/CourseSkils"
import GraduateWorks from "./components/GraduateWorks/GraduateWorks"


function App() {

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main>
        <HeroSection />
        <CourseAdvantages />
        <CourseExpectations />
        <CourseSkils />
        <CourseContent />
        <GraduateWorks />
        <ProjectShowcase />
        <GraduateCompanies />
        <Instructor />
        <CoursePreview />
        <PricingPlans />
        <InstallmentOption />
        <Testimonials />
        <FAQ />
        <RelatedCourses />
      </main>
      <Footer />
    </div>
  )
}

export default App
