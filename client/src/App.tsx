import React, { useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
// import { HashRouter as Routers, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
import { RequireAuth } from "react-auth-kit";
import SearchedResultPage from "./pages/searchedResultPage/SearchedResult";
import SearchContext from "./context/SearchContext";
import { UserContextProvider } from "./context/UserContext";

const HomePage = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const PageNotFound = lazy(() => import("./pages/notFound/PageNotFound"));

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <UserContextProvider>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Routers>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* =================== Private Routes ============== */}
              <Route
                path={"/dashboard"}
                element={
                  <RequireAuth loginPath={"/login"}>
                    <Dashboard />
                  </RequireAuth>
                }
              />

              {/* ============== Non Private Routes ================ */}
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/" element={<Test />} /> */}
              <Route path="/search" element={<SearchedResultPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Routers>
      </SearchContext.Provider>
    </UserContextProvider>
  );
}

export default App;
