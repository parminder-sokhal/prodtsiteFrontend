import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";
import Headertop from "./pages/header/headertop.jsx";
import HeaderMain from "./pages/header/headerMain.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/about.jsx";
import Footer from "./pages/footer/footer.jsx";
import Media from "./pages/header/media.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import WelcomeDashboard from "./pages/dashboard/WelcomeDashboard.jsx";
import SignIn from "./pages/SignIn.jsx";
import AddBlogs from "./components/dashboard/blogs/AddBlogs.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import SingleBlog from "./pages/blogs/SingleBlog.jsx";
import DressDetail from "./pages/dresses/DressDetail.jsx";

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Headertop />}
      {!hideLayout && <HeaderMain />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/ncc" element={<DressDetail />} />
        <Route path="/armed-forces" element={<DressDetail />} />
        <Route path="/security-guard" element={<DressDetail />} />
        <Route path="/driver-uniform" element={<DressDetail />} />
        <Route path="/hotel-staff" element={<DressDetail />} />
        <Route path="/hospital-staff" element={<DressDetail />} />
        <Route path="/industrial-worker" element={<DressDetail />} />
        <Route path="/:slug" element={<DressDetail />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<WelcomeDashboard />} />
            <Route path="Blogs" element={<AddBlogs />} />
          </Route>
        </Route>

        {Media}
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper />
    </Router>
  );
}

export default App;
