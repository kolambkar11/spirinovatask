import DashboardComponent from "./DashboardComponent";

const runningJobs = [
  {
    title: "Running Jobs",
    renderingJobs: "14",
    waitingJobs: "14",
    completedJobs: "14",
    failedJobs: "14",
  },
];

export default function Dashboard() {
  return (
    <div className="lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl  text-blue-950">Dashboard</h2>
          <div className="w-full bg-white h-36 p-4 rounded-2xl mt-8 border border-slate-200"></div>
          <div className="flex gap-5">
            <div className="w-1/2 bg-white p-4 rounded-2xl mt-8 border border-slate-200">
              <DashboardComponent
                title="Running Jobs"
                renderingJobs={14}
                waitingJobs={2}
                completedJobs={12}
                failedJobs={2}
              />
            </div>
            <div className="w-1/2 bg-white p-4 rounded-2xl mt-8 border border-slate-200">
              <DashboardComponent
                title="Running Frames"
                renderingJobs={14}
                waitingJobs={1}
                completedJobs={7}
                failedJobs={3}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
