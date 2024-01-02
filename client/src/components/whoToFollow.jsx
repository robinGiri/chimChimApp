const FollowSuggestion = ({ name, handle, avatar, onFollow }) => {
    return (
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">@{handle}</p>
          </div>
        </div>
        <button
          className="px-4 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
          onClick={onFollow}
        >
          Follow
        </button>
      </div>
    );
  };
  
  const WhoToFollow = ({ suggestions }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-bold text-lg mb-4">Who to Follow</h3>
        {suggestions.map((user, index) => (
          <FollowSuggestion key={index} {...user} onFollow={() => console.log(`Follow ${user.handle}`)} />
        ))}
      </div>
    );
  };

export default WhoToFollow;