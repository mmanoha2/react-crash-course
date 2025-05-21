import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import JobsPage from "./pages/JobsPage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import JobPage from "./pages/JobPage.tsx";
import AddJobPage from "./pages/AddJobPage.tsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
