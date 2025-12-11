
"use client";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const handle_btn_click = () => {
    router.push("/");
    }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin dashboard.</p>
      <button onClick={() => handle_btn_click()}
      >Back </button>
    </div>
  );
};
export default Admin;
