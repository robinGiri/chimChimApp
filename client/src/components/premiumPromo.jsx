const PremiumPromo = ({ onSubscribe }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      <h2 className="text-lg font-semibold">Subscribe to Premium</h2>
      <p className="mt-2 text-sm text-gray-600">
        Subscribe to unlock new features and, if eligible, receive a share of
        ads revenue.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        onClick={onSubscribe}
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default PremiumPromo;
