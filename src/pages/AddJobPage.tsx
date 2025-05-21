import { useState } from "react";
import type { Job } from "../interfaces/interfaces.ts";
import { useLocation, useNavigate } from "react-router-dom";

const AddJobPage = () => {
  const currentLocation = useLocation();
  const { mode, job } = currentLocation.state || {};

  const [type, setType] = useState(job?.type || "Remote");
  const [title, setTitle] = useState(job?.title || "React Developer");
  const [description, setDescription] = useState(
    job?.description || "Need Good React Developer",
  );
  const [salary, setSalary] = useState(job?.salary || "$100K - 125K");
  const [location, setLocation] = useState(job?.location || "USA");
  const [company, setCompany] = useState({
    name: job?.company?.name || "company name",
    description: job?.company?.description || "company description",
    contactEmail: job?.company?.contactEmail || "contact@company.com",
    contactPhone: job?.company?.contactPhone || "000-000-0000",
  });

  const navigate = useNavigate();

  const newJob: Job = {
    type,
    title,
    description,
    salary,
    location,
    company,
  };

  const handleJobSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify(newJob);

    const submitJob = async () => {
      if (mode === "edit") {
        if (!job?.id) return;
        return fetch(`/api/jobs/${job.id}`, { method: "PUT", headers, body });
      }
      return fetch("/api/jobs", { method: "POST", headers, body });
    };

    await submitJob();
    navigate("/jobs");
  };

  return (
    <div className="container m-auto py-24 bg-blue-50">
      <section className="max-w-2xl mx-auto">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleJobSubmit} className="space-y-4">
            <h2 className="text-3xl text-center font-semibold mb-6">
              {" "}
              {mode === "edit" ? "Edit Job" : "Add Job"}
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={company.name}
                onChange={(e) =>
                  setCompany({ ...company, name: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="What does your company do?"
                value={company.description}
                onChange={(e) =>
                  setCompany({ ...company, description: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                value={company.contactEmail}
                onChange={(e) =>
                  setCompany({ ...company, contactEmail: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={company.contactPhone}
                onChange={(e) =>
                  setCompany({ ...company, contactPhone: e.target.value })
                }
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {mode === "edit" ? "Update Job" : "Add Job"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default AddJobPage;
