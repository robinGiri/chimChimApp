import React, { useState } from 'react';

const NewPost = ({ onPostSubmit }) => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = () => {
    if (postContent.trim()) {
      onPostSubmit(postContent);
      setPostContent(''); // Reset the text area after submitting
    }
  };

  return (
    <div className="border-b border-gray-200 p-4">
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="What's happening?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Chim-Chim
      </button>
    </div>
  );
};

export default NewPost;