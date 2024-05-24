import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { create } from "ipfs-http-client";
import { setGlobalState, useGlobalState } from "../store";

const HeroImage =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const UpdateNFT = () => {
  const [modal] = useGlobalState("updateModal");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!price) return;

    console.log("Updated...");

    closeModal();
  };



  const closeModal = () => {
    setGlobalState("updateModal", "scale-0");
    resetForm();
  };

  const resetForm = () => {
    setPrice("");
   
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#0c1520] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Update NFT</p>
            <button
              onClick={closeModal}
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={ HeroImage}
                alt="NFT"
              />
            </div>
          </div>

        

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="number"
              min={0.01}
              step={0.01}
              placeholder="Price (ETH)"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="block w-full text-sm text-slate-500  cursor-pointer focus:ring-0 focus:outline-none bg-transparent border-0"
              required
            />
          </div>


          <button
            className="flex justify-center items-center shadow-lg shadow-black text-white  mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2"
            type="submit"
          >
            Update Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateNFT;
