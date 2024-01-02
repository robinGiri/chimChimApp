import { useState } from "react";
import NewPost from "./components/newPost";
import SearchComponent from "./components/searchComponent";
import PremiumPromo from "./components/premiumPromo";
import ShowPost from "./components/showPost";
import TrendsForYou from "./components/trendsForYou";
import WhoToFollow from "./components/whoToFollow";
import TheNavbar from "./components/TheNavbar";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "John Doe",
      handle: "johndoe",
      avatar: "https://via.placeholder.com/150",
      time: "2h",
      content:
        "This is a sample tweet to demonstrate a Twitter-like post component in React.",
    },
    {
      username: "Jane Doe",
      handle: "janedoe",
      avatar: "https://via.placeholder.com/150",
      time: "2h",
      content:
        "This is a sample tweet to demonstrate a Twitter-like post component in React.",
    },
    {
      username: "John Smith",
      handle: "johnsmith",
      avatar: "https://via.placeholder.com/150",
      time: "2h",
      content:
        "This is a sample tweet to demonstrate a Twitter-like post component in React.",
    },
  ]);


  const handlePostSubmit = (content) => {
    const newPost = {
      username: "New User",
      handle: "newuser",
      avatar: "https://via.placeholder.com/150",
      time: "1m",
      content: content,
    };

    setPosts([newPost, ...posts]);
  };

  const trendsData = [
    {
      trendName: "#ReactJS",
      postsCount: 12000,
      description: "Latest news and updates about ReactJS",
    },
    {
      trendName: "#TailwindCSS",
      postsCount: 8000,
      description: "Discussions about Tailwind CSS",
    },
  ];

  const suggestionsData = [
    {
      name: "John Doe",
      handle: "johndoe",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      handle: "janesmith",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  const handleSearchSubmit = (query) => {
    console.log("Search Query:", query);
    // Here you can handle the search logic, like sending query to a server
  };

  const handleSubscribe = () => {
    console.log("Subscribe to Premium");
    // Here you can handle the subscription logic
  };

  return (
    <>
      <div className="flex flex-row">
        <TheNavbar />
        <div className="w-7/12">
          <NewPost onPostSubmit={handlePostSubmit} />
          {posts.map((item, index) => (
            <ShowPost
              key={index}
              username={item.username}
              handle={item.handle}
              avatar={item.avatar}
              time={item.time}
              content={item.content}
            />
          ))}
        </div>
        <div className="w-3/12 border-l p-4 space-y-4 border-gray-200">
          <div className="py-2">
            <SearchComponent onSearch={handleSearchSubmit} />
          </div>
          <div className="py-2">
            <PremiumPromo onSubscribe={handleSubscribe} />
          </div>
          <div className="py-2">
            <TrendsForYou trends={trendsData} />
          </div>
          <div className="py-2">
            <WhoToFollow suggestions={suggestionsData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
