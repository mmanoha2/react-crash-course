import { NavLink } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container m-auto">
        <div className="grid grid-cols-2 gap-10 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <NavLink
              to={"/jobs"}
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </NavLink>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <NavLink
              to={"/add-job"}
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-900"
            >
              Add Job
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
