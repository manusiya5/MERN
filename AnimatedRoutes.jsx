import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";
import Contact from "./Contact";
import Admin from "./Admin";
import Starters from "./Starters";
import CoolDrinks from "./CoolDrinks";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Signup from "./Signup";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut"
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
         <Route
          path="/"
          element={
            <ProtectedRoute>
              <AnimatedPage><Login /></AnimatedPage>
            </ProtectedRoute>
          }
        />
         <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <AnimatedPage><Signup /></AnimatedPage>
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <AnimatedPage><Home /></AnimatedPage>
            </ProtectedRoute>
          }
        />

        <Route
          path="/biriyani"
          element={
            <ProtectedRoute>
              <AnimatedPage><Menu /></AnimatedPage>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <AnimatedPage><Cart /></AnimatedPage>
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <AnimatedPage><Contact /></AnimatedPage>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AnimatedPage><Admin /></AnimatedPage>
            </ProtectedRoute>
          }
        />

        <Route
          path="/starters"
          element={
            <ProtectedRoute>
              <AnimatedPage><Starters /></AnimatedPage>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cooldrinks"
          element={
            <ProtectedRoute>
              <AnimatedPage><CoolDrinks /></AnimatedPage>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
