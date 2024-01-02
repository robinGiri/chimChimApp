const TrendItem = ({ trendName, postsCount, description }) => {
  return (
    <div className="border-b border-gray-200 p-4">
      <h4 className="font-semibold">{trendName}</h4>
      <p className="text-sm text-gray-600">{postsCount} Posts</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const TrendsForYou = ({ trends }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold text-lg mb-4">Trends for You</h3>
      {trends.map((trend, index) => (
        <TrendItem key={index} {...trend} />
      ))}
    </div>
  );
};

export default TrendsForYou;