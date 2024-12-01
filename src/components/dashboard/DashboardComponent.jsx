import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiHandThumbUp } from "react-icons/hi2";
import { HiMiniCog } from "react-icons/hi2";

export default function DashboardComponent(props) {
  //   console.log(JSON.stringify(props));

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700"> {props.title}</h2>
        <select className="text-xs text-gray-500 bg-transparent focus:outline-none">
          <option>This week</option>
          <option>Last week</option>
          <option>This month</option>
        </select>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row justify-center border-r border-b p-4">
          <div className="bg-blue-100 text-blue-950 rounded-full p-4">
            <HiOutlineComputerDesktop className="text-xl" />
          </div>
          <div className="flex flex-col ps-4">
            <p className="text-xs text-gray-400">RENDERING JOBS</p>
            <p className="text-xl font-bold text-gray-800">
              {props.renderingJobs}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center border-b p-4">
          <div className="bg-blue-100 text-blue-950 rounded-full p-4">
            <HiHandThumbUp className="text-xl" />
          </div>
          <div className="flex flex-col ps-4">
            <p className="text-xs  text-gray-400">WAITING JOBS</p>
            <p className="text-xl font-bold text-gray-800">
              {props.waitingJobs}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center border-r p-4">
          <div className="bg-blue-100 text-blue-950 rounded-full p-4">
            <HiHandThumbUp className="text-xl" />
          </div>
          <div className="flex flex-col ps-4">
            <p className="text-xs  text-gray-400">COMPLETED JOBS</p>
            <p className="text-xl font-bold text-gray-800">
              {props.completedJobs}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center p-4">
          <div className="bg-blue-100 text-blue-950 rounded-full p-4">
            <HiMiniCog className="text-xl" />
          </div>
          <div className="flex flex-col ps-4">
            <p className="text-xs  text-gray-400">FAILED JOBS</p>
            <p className="text-xl font-bold text-gray-800">
              {props.failedJobs}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
