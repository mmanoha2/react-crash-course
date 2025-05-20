import jobListings from "../jobs.json";
import JobListing from "./JobListing.tsx";

type JobListingProps = {
  isHome?: boolean;
};
const JobListings = ({ isHome = false }: JobListingProps) => {
  const jobsToBeDisplayed = isHome
    ? jobListings.jobs.slice(0, 3)
    : jobListings.jobs;
  return (
    <div className="container m-auto">
      <section className="bg-blue-50 px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? "Top React Jobs" : "All React Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobsToBeDisplayed.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default JobListings;
