// Components
import List from '../sub-components/List';
// ICON
import { PiStudent } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FiDownload } from "react-icons/fi";



function Dashboard() {

    const student = [
        {
            name: "Prachot",
            ns_number: 6640202674
        },
        {
            name: "Nawin",
            ns_number: 6640202621
        },
        {
            name: "Yoda",
            ns_number: 6640201231
        }
    ]

    return (
        <div className='w-full bg-base-100'>
            <div>
                {/* Navbar */}
                <div className="navbar bg-base-200">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Dashboard</a>
                    </div>
                </div>
                {/* Dashboard */}
                <div className='p-[20px]'>
                    <div className='grid grid-cols-4 gap-4'>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary text-4xl">
                                <PiStudent />
                            </div>
                            <div className="stat-title">All Students</div>
                            <div className="stat-value">200</div>
                            <div className="stat-desc"></div>
                        </div>

                        <div>

                            <div className="stat bg-base-300 rounded">
                                <div className="stat-figure text-secondary text-accent">
                                    <FaCheck />
                                </div>
                                <div className="stat-title">Checked</div>
                                <div className="stat-value">100</div>
                            </div>

                            <div className="stat bg-base-300 rounded">
                                <div className="stat-figure text-secondary text-error">
                                    <ImCross />
                                </div>
                                <div className="stat-title">Not Checked</div>
                                <div className="stat-value">100</div>
                            </div>

                        </div>

                        <div className="stat bg-base-300 rounded">

                            <div className="stat-title">Choose a time</div>
                            <div className="stat-value">
                                <div className="dropdown w-full">
                                    <div tabIndex={0} role="button" className="btn w-full">9:30 - 12:30</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                                        <li><a>9:30 - 12:30</a></li>
                                        <li><a>9:30 - 12:30</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="stat-desc"></div>
                        </div>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary text-3xl text-info">
                                <FiDownload />
                            </div>
                            <div className="stat-title mb-[10px]">Download to PDF</div>
                            <button className="btn btn-info">Download</button>
                        </div>

                    </div>
                </div>
                {/* List Student */}
                <div className='p-[20px] pt-0'>
                    <div className="overflow-x-auto">
                        <table className='table table-fixed'>
                            <thead>
                                <tr className='text-center'>
                                    <th>ID</th>
                                    <th>Nisit Number</th>
                                    <th>Name</th>
                                    <th>time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map((s, i) => (
                                    <List key={i} id={i + 1} ns_number={s.ns_number} name={s.name} time={"-"} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard