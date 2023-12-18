import useCount from "./Store";

function Button() {
  const [count, setCount] = useCount(0);
  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-orange-300 hover:to-orange-500 active:from-orange-700 active:to-orange-500 border-2 border-transparent hover:border-white text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-orange-300 transition-all"
    >
      count: {count}
    </button>
  );
}

export default Button;
