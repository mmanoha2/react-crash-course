import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Job } from "../interfaces/interfaces.ts";
import { FaMapLocation } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job>(undefined as any);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`/api/jobs/${id}`);
      const data = await response.json();
      setJob(data);
    };
    fetchJob().then(() => {});
  }, []);

  const deleteJob = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let confirmation = window.confirm(
      "Are you sure you want to delete this job?",
    );
    if (!confirmation) return;

    await fetch(`/api/jobs/${job?.id}`, {
      method: "DELETE",
    });

    return navigate("/jobs");
  };
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to={"/jobs"}
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="inline-block mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job?.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job?.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapLocation className="text-orange-700 inline-block mr-2 mb-2 text-xl" />
                  <p className="text-orange-700">{job?.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job?.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job?.salary}/ Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job?.company.name}</h2>

                <p className="my-2">{job?.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job?.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job?.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to="/add-job"
                  state={{ job: job, mode: "edit" }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  onClick={deleteJob}
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
export default JobPage;
