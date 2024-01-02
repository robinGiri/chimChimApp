import NavButton from "./navButton";
import {
  MdHome,
  MdSearch,
  MdNotifications,
  MdMailOutline,
  MdBookmarkBorder,
  MdList,
  MdPersonOutline,
  MdMoreHoriz,
} from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";


export default function TheSidebar() {
  const navBarList = [
    {
      label: "Home",
      path: "/",
      icon: <MdHome />,
    },
    {
      label: "Explore",
      path: "/explore",
      icon: <MdSearch />,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: <MdNotifications />,
    },
    {
      label: "Messages",
      path: "/messages",
      icon: <MdMailOutline />,
    },
    {
      label: "Bookmarks",
      path: "/bookmarks",
      icon: <MdBookmarkBorder />,
    },
    {
      label: "Lists",
      path: "/lists",
      icon: <MdList />,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <MdPersonOutline />,
    },
    {
      label: "More",
      path: "/more",
      icon: <MdMoreHoriz />,
    },
  ];
  const navigate = useNavigate();


  const handleTabClick = () => {
    // setActiveTab(title);
    const routes = {
      Profile: "/username",
      Home: "/",
      Explore: "/explore",
      Request: "/request-products",
      Men: "/men",
      Women: "/women",
      Kids: "/kids",
      Sale: "/sale",
    };
    if (routes[title]) {
      navigate(routes[title]);
    }
  };

    const handleGoToMyProfile = () => {
    navigate("/username");
    }


  return (
    <>
      <div className="flex flex-col space-y-4 p-4 w-2/12 border-r border-gray-200">
        <div>
          <img
            src="/logo.png"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        {navBarList.map((item, index) => (
          <NavButton
          onClick={() => handleTabClick(item.label)}

            key={index}
            label={item.label}
            path={item.path}
            icon={item.icon}
          />
        ))}
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleGoToMyProfile}
        >
          Post
        </button>
      </div>
    </>
  );
}
