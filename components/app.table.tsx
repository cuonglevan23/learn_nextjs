
"use client";
import { useState } from "react";
import Modal from "./create.modal";
interface IPops{
 blogs?: IBlog[];   
}
const AppTable = (props: IPops) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }
    const handleOpen = () => {
        setShowModal(true);
    }
    const Blogs = props.blogs;
    return (
        <>
        <div className="text-2xl text-blue-900 font-bold mb-4">Blog Management Table</div>
     <button
        onClick={handleOpen}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Create New Blog
      </button>
         < table className="min-w-full bg-white border border-gray-900 text-blue-700">
           <Modal showModal={showModal} handleClose={handleClose} />
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-900">ID</th>
            <th className="py-2 px-4 border-b border-gray-900">Author</th>
            <th className="py-2 px-4 border-b border-gray-900">Title</th>
            <th className="py-2 px-4 border-b border-gray-900">Content</th>
            <th className="py-2 px-4 border-b border-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
            {Blogs && Blogs.map((blog) =>{
                return (
                    <tr key={blog.id}>
                        <td className="py-2 px-4 border-b border-gray-900">{blog.id}</td>
                        <td className="py-2 px-4 border-b border-gray-900">{blog.auther}</td>
                        <td className="py-2 px-4 border-b border-gray-900">{blog.title}</td>
                        <td className="py-2 px-4 border-b border-gray-900">{blog.content}</td>
                        <td className="py-2 px-4 border-b border-gray-900">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                                Edit
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Delete
                            </button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2">
                                View
                            </button>
                        </td>

                    </tr>
                )
            })}
       </tbody>
      </table>
      </>
      
    )
}

export default AppTable