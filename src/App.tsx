import React, { useEffect, useState } from "react";
import { fetchData } from './utils/fetchData';

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [number, setNumber] = useState(0);

  const fetchImage = async () => {
    const data = await fetchData();
    const url = data.photos[number].src.original;
    setNumber((prevNumber) => {
      const newNumber = prevNumber < 14 ? prevNumber + 1 : 0;
      return newNumber;
    });
    setImageUrl(url);
  };

  useEffect(() => {  
    fetchImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Get Random Images</h1>
      {imageUrl && (
        <img src={imageUrl} alt="Random Pic" className="max-h-80 mb-4" />
      )}
      <button
        onClick={fetchImage}
        className="text-3xl border-2 px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800"
      >
        Change Image
      </button>
    </div>
  );
}

export default App;
