import useCount from "./Store";
import Button from "./Button";
import Header from "./Header";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <Header />
      <div className="bg-gray-800 text-white min-h-[calc(100vh-60px)] flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-extrabold mb-10">Remote Application</h1>

        <Button />

        <button
          onClick={() => setCount((count) => count + 1)}
          className="mt-10 bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-600 hover:to-purple-800 border-2 border-transparent hover:border-[royalBlue] text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-purple-400 transition-all"
        >
          count: {count}
        </button>
      </div>
    </>
  );
}

export default App;
