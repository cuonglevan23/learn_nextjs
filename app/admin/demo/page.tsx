'use client';
import { useRouter } from "next/navigation";
const Demo1 = () => {
    const router = useRouter();
    const handle_btn_click = () => {
      router.push("/");
      }
  return (
    <div>
        <h1>Demo Page</h1>
        <p>This is a demo page under admin section.</p>
       
    </div>
  );
};
export default Demo1;