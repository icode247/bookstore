import { Route, Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-details" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
