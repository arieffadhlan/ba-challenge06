import { Route, Routes } from "react-router-dom";
import Header from "@/components/layouts/Header.jsx";
import Footer from "@/components/layouts/Footer.jsx";
import Homepage from "@/pages/Homepage.jsx";
import FindCar from "@/pages/FindCar/FindCar.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/find-car" element={<FindCar />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
