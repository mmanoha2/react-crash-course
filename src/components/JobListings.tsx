import JobListing from "./JobListing.tsx";
import { useEffect, useState } from "react";
import type { Job } from "../interfaces/interfaces.ts";

type JobListingProps = {
  isHome?: boolean;
};
const JobListings = ({ isHome = false }: JobListingProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const url = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    const fetchJobs = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs().then(() => {});
  }, []);

  return (
    <div className="container m-auto">
      <section className="bg-blue-50 px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? "Top React Jobs" : "All React Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default JobListings;
