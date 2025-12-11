
"use client";

import { table } from "console";

interface IPops{
 blogs?: IBlog[];   
}
const AppTable = (props: IPops) => {
    const Blogs = props.blogs;
    return (
       < table className="min-w-full bg-white border border-gray-900 text-blue-700">
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
    )
}

export default AppTable