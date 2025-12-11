"use client";
import useSWR from "swr";
import AppTable from "../components/app.table";
const fetcher = (url:string) => fetch(url).then(res => res.json())
interface IBlog{
  id: number;
  auther: string;
  title: string;
  content: string;
}
export default function Home() {
  const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher)
  
  console.log("SWR data:", data);
  console.log("SWR error:", error);
  console.log("SWR isLoading:", isLoading);

  // useEffect(() => {
  //   // Fetch data from the backend API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/blogs");
  //       const data = await response.json();
  //       console.log("Fetched data:", data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {/*  */}
      <div className="text-blue-950 text-2xl">{data?.length}</div>
 
     {/* tạo table quảng lý nhân viên gồm 4 nhân viên */}
      <div className="container mx-auto mt-10">
       <AppTable blogs={data} />
      </div>
      
    </div>
  );
}
