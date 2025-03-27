import { useParams } from "react-router-dom";
import Userheader from "../componenets/Userheader";
import { useEffect, useState } from "react";
import axios from "axios";

const UserAttendance = () => {
    const { eno } = useParams();
    const token = sessionStorage.getItem("token");
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAtd = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/attend/${eno}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAttendance(result.data.data);
            } catch (err) {
                setError("Failed to fetch attendance data.");
            } finally {
                setLoading(false);
            }
        };

        fetchAtd();
    }, [eno, token]);

    return (
        <>
            <Userheader />

            <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                    Employee Attendance Record
                </h2>

                {loading ? (
                    <p className="text-center text-gray-600">Loading attendance data...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 shadow-sm rounded-lg">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="border px-6 py-3 text-left">#</th>
                                    <th className="border px-6 py-3 text-left">Date</th>
                                    <th className="border px-6 py-3 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance.map((data, index) => (
                                    <tr key={index} className="border-b transition hover:bg-gray-100">
                                        <td className="border px-6 py-3">{index + 1}</td>
                                        <td className="border px-6 py-3">
                                            {new Date(data.Date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </td>
                                        <td className={`border px-6 py-3 font-semibold 
                                            ${data.attendance_status === "Present" ? "text-green-600" : "text-red-600"}`}>
                                            {data.attendance_status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserAttendance;
