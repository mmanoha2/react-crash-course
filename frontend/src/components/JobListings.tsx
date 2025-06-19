import JobListing from "./JobListing.tsx";
import { useEffect, useState } from "react";
import type { Job } from "../interfaces/interfaces.ts";
import Spinner from "./Spinner.tsx";

type JobListingProps = {
  isHome?: boolean;
};
const JobListings = ({ isHome = false }: JobListingProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const url = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      const fetchJobs = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data);
      };
      fetchJobs().then(() => {});
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="container m-auto">
      <section className="bg-blue-50 px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? "Top React Jobs" : "All React Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
export default JobListings;
