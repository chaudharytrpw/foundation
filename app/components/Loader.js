const Loader = ({ loading, text = "Loading..." }) => {
  if (!loading) return null;

  return (
    <div className="flex items-center justify-center py-4">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      <span className="ml-2 text-sm text-gray-600">{text}</span>
    </div>
  );
};

export default Loader;