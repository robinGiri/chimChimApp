import { IconContext } from 'react-icons';

const NavButton = ({ label, icon }) => {
    return (
      <button className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
        <IconContext.Provider value={{ className: "h-5 w-5" }}>
          {icon}
        </IconContext.Provider>
        <span className="ml-2">{label}</span>
      </button>
    );
  };

export default NavButton;
