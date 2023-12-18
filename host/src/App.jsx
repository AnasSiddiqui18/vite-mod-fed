import Button from "remote_app/Button";
import useCount from "remote_app/Store";
import Header from "remote_app/Header";

function App() {
  const [count, setCount] = useCount(0);

  return (
    <>
      <Header />
      <div className="bg-gray-800 text-white min-h-[calc(100vh-60px)] flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-extrabold mb-10">Host Application</h1>

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
