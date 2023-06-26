import React from 'react';
import { Web3 } from 'web3';
// const abi = require("../abi.json");
const contarctAddress = "0x665c93DB2DeBca476797F1ad44483067b75707f9";
let webProvider = "";
// import abi from"./abi.json";
// const contarctAddress = "0x665c93DB2DeBca476797F1ad44483067b75707f9";
// if(window.ethereum) {
//     webProvider = window.ethereum;
// }
// else if (window.web3) {
//     webProvider = window.web3.currentProvider;
// }
// else if (typeof window.web3 !== 'undefiend'){
//     webProvider = "https://goerli.infura.io/v3/7bcccb589f144d16a1b7871c29fdc6a4";
// }
// else {
//       // 4
//       console.log("No web3 instance injected, using local web3.")
//     }

// const web3 = new Web3(
//     webProvider
// );

// console.log(web3.eth.requestAccounts())

// const contract = new web3.eth.Contract(abi, contarctAddress);
// console.log(contract.methods);
// contract.defaultChain = "goerli";

// contract.methods
//   .getCollections()
//   .call({
//     from: "0x19156285852552BF0c1655c7D78627113f79CCD2",
//     // blockNumberOrTag: "latest",
//   })
//   .then((receipt) => {
//     console.log(receipt);
//   });

// const collectionName = "bread";
// const ownerName = "owner";
// const chain = "ethereum";
// const description = "description";
// const category = "art";



// console.log(contract.methods);

const Test = () => {
//     const handleCreateCollection = () => {
//         contract.methods
//         .createCollection(collectionName, ownerName, chain, description, category)
//         .send({ from: "0x19156285852552BF0c1655c7D78627113f79CCD2" })
//         .on("receipt", (receipt) => {
//             console.log(receipt);
//         })
//         .on("error", (error) => {
//             console.log(error);
//   });
//     }
//     const handleGetAccounts = async() => {
//         const accounts = await web3.eth.getAccounts();
//         console.log(accounts);
//     }

  return (
    <div>
        {/* Test
        <button onClick={handleCreateCollection}>click</button>
        <button onClick={handleGetAccounts}>getAccount</button> */}
    </div>
  )
}



export default Test