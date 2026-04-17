import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/home/HomePage';
import OurTeamPage from './pages/ourteam/OurTeamPage';
import ServicesPage from './pages/services/ServicesPage';
import BlogPage from './pages/blog/BlogPage';
import AboutUsPage from './pages/about/AboutUsPage';
import ContactUsPage from './pages/contact/ContactUsPage';
import BookingPage from './pages/booking/BookingPage';
import FAQPage from './pages/faq/FAQPage';
import TestimonialsPage from './pages/testimonials/TestimonialsPage';
import  MedicalAidPage from './pages/medicalaid/MedicalAidPage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='ourteam' element={<OurTeamPage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='about' element={<AboutUsPage/>} />
        <Route path='contact' element={<ContactUsPage/>} />
        <Route path='booking' element={<BookingPage/>} />
        <Route path='faq' element={<FAQPage/>} />
        <Route path='testimonials' element={<TestimonialsPage/>} />
        <Route path='medicalaid' element={<MedicalAidPage/>} />
      </Routes>
    </>
  )
}

export default App
