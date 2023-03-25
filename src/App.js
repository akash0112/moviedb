import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailsPage from "./pages/DetailsPage";
import ListPage from "./pages/ListPage";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import GuestRoutes from "./routes/GuestRoutes";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomeRoutes />}>
            <Route path="/" exact element={<Login />} />
          </Route>
          <Route element={<GuestRoutes />}>
            <Route path="/list" element={<ListPage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
