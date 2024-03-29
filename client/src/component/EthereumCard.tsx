import { FaEthereum } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/helper";

const EthereumCard = () => {
  const { connectedWalletAddress } = useContext(TransactionContext);
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#22C1C3] to-[#FDBB2D] h-40 grid grid-cols-2 p-2">
      <div className="w-10 h-10 border border-white rounded-full flex justify-center items-center">
        <FaEthereum className="text-2xl text-white" />
      </div>
      <div className="justify-self-end">
        <AiOutlineInfoCircle className="text-lg text-white" />
      </div>
      <div className="self-end text-white">
        <p>
          {connectedWalletAddress
            ? shortenAddress(connectedWalletAddress)
            : "0xabc123..."}
        </p>
      </div>
    </div>
  );
};

export default EthereumCard;
