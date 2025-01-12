import React from "react";

const SalaryTable = ({ salArr }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2 mx-5">
        <table className="min-w-full table-auto border-collapse ">
          <thead className="bg-gray-400">
            <tr>
              <th className="border px-3 py-2">ID</th>
              <th className="border px-4 py-2">Employee No</th>
              <th className="border px-4 py-2">Month</th>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Salary</th>
              <th className="border px-4 py-2">DA</th>
              <th className="border px-4 py-2">TA</th>
              <th className="border px-4 py-2">HRA</th>
              <th className="border px-4 py-2">EPT</th>
              <th className="border px-4 py-2">ESI</th>
              <th className="border px-4 py-2">SPALL</th>
              <th className="border px-4 py-2">GROSS_NET</th>
            </tr>
          </thead>
          <tbody>
            {salArr.map((data, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="border px-4 py-2">{data.id}</td>
                <td className="border px-4 py-2">{data.eno}</td>
                <td className="border px-4 py-2">{data.month}</td>
                <td className="border px-4 py-2">{data.year}</td>
                <td className="border px-4 py-2">{data.salary}</td>
                <td className="border px-4 py-2">{data.DA}</td>
                <td className="border px-4 py-2">{data.TA}</td>
                <td className="border px-4 py-2">{data.HRA}</td>
                <td className="border px-4 py-2">{data.EPT}</td>
                <td className="border px-4 py-2">{data.ESI}</td>
                <td className="border px-4 py-2">{data.SPALL}</td>
                <td className="border px-4 py-2">{data.GROSS_NET}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryTable;
