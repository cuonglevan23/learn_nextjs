"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/blogs");
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      
 
     {/* tạo table quảng lý nhân viên gồm 4 nhân viên */}
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5 text-blue-950">Employee Management</h1>
        <table className="table-auto w-full border-collapse border border-gray-900 text-blue-950">
          <thead>
            <tr>
              <th className="border border-gray-900 px-4 py-2">ID</th>
              <th className="border border-gray-900 px-4 py-2">Name</th>
              <th className="border border-gray-900 px-4 py-2">Position</th>
              <th className="border border-gray-900 px-4 py-2">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-900 px-4 py-2">1</td>
              <td className="border border-gray-900 px-4 py-2">Alice Johnson</td>
              <td className="border border-gray-900 px-4 py-2">Software Engineer</td>
              <td className="border border-gray-900 px-4 py-2">Development</td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2">2</td>
              <td className="border border-gray-900 px-4 py-2">Bob Smith</td>
              <td className="border border-gray-900 px-4 py-2">Product Manager</td>
              <td className="border border-gray-900 px-4 py-2">Product</td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2">3</td>
              <td className="border border-gray-900 px-4 py-2">Carol White</td>
              <td className="border border-gray-900 px-4 py-2">UX Designer</td>
              <td className="border border-gray-900 px-4 py-2">Design</td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2">4</td>
              <td className="border border-gray-900 px-4 py-2">David Brown</td>
              <td className="border border-gray-900 px-4 py-2">Data Analyst</td>
              <td className="border border-gray-900 px-4 py-2">Analytics</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
