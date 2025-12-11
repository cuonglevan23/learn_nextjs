import Link from "next/link";



export default function Home() {
  return (
    <div>
      
     <header className="text-gray-600 body-font bg-amber-50">
       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
           <span className="ml-3 text-xl">Home</span>
         </a>
         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/admin" className="mr-5 hover:text-gray-900">Admin</Link>
            <Link href="/admin/demo" className="mr-5 hover:text-gray-900">Demo</Link>
         </nav>     
       </div>
     </header>
      
    </div>
  );
}
