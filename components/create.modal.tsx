"use client";
import { title } from "process";
import { useState } from "react";
import { toast } from 'react-toastify';
interface IModalProps {
    showModal: boolean;
    handleClose: (value: boolean) => void;
}

const Modal = ({ showModal, handleClose }: IModalProps) => {
  
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");


    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 🛑 NGĂN form reload trang
        // XỬ LÝ DỮ LIỆU Ở ĐÂY
        const newBlog = {
            auther: author,
            title: title,
            content: content
        };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBlog),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            toast.success("Blog created successfully!");
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error("Failed to create blog.");
        });

        setTitle("");
        setAuthor("");
        setContent("");

        handleClose(false);
    };

    const cancelModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        handleClose(false);
    }

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">

                    <div className="bg-white p-6 rounded shadow-lg w-[400px]">
                        <h3 className="text-xl mb-4 font-semibold">New Blog</h3>

                        <form onSubmit={handleSubmit}>
                            
                            <div className="mb-4">
                                <label className="block mb-1">Author</label>
                                <input
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    type="text"
                                    className="border rounded w-full px-3 py-2"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    className="border rounded w-full px-3 py-2"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">Content</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="border rounded w-full px-3 py-2"
                                />
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                    onClick={cancelModal}
                                >
                                    Cancel
                                </button>

                                <button
                                   
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
