import {
  MdRepeat,
  MdFavoriteBorder,
  MdShare,
  MdChatBubbleOutline,
} from "react-icons/md";

const ShowPost = ({ username, handle, avatar, time, content }) => {
  return (
    <div className="border-b border-gray-200 p-4 flex space-x-3">
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h3 className="font-bold">{username}</h3>
          <span className="text-gray-500 ml-2">@{handle}</span>
          <span className="text-gray-500 mx-2">·</span>
          <span className="text-gray-500">{time}</span>
        </div>
        <p className="mt-1 text-left">{content}</p>
        <div className="flex items-center mt-2 text-gray-500 text-sm space-x-4">
          <MdChatBubbleOutline className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
          <MdRepeat className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
          <MdFavoriteBorder className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
          <MdShare className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
