import { useState } from "react";
import {ethers, BigNumber} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';



const roboPunksNFTAddress = '0x6faadb27b704cbc2bb543c1e632e56d9d688a7b4'

const MainMint = ({
    accounts, setAccounts
}) => {
    const [mintnAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,roboPunksNFT.abi,signer
            )

            try{
                const response = await contract.mint( BigNumber.from(mintnAmount));
                console.log( 'response : ', response );
            }catch(err){
                console.log("error ", err  );
            }
        }
    }


    const handleDecrement = () =>{
        if(mintnAmount <= 1) return ;
        setMintAmount(mintnAmount - 1);
    }

    const handleIncrement = ()=>{
        if(mintnAmount >= 3) return;
        setMintAmount(mintnAmount +1 )
    }

    return(
        <div>
            <h1>RoboNFTS</h1>
            <p>It's 2079 In august Japan’s foreign minister, Hayashi Yoshimasa, gave a performance at a café in Tokyo. Sitting on stage at a keyboard, the Ukrainian flag emblazoned on the wall behind him, he played and sang “Imagine”, John Lennon’s peace anthem. Mr Hayashi’s appearance at an event called “Flowers of Peace” was one small sign of how deeply the war in Ukraine, 8,000km away, has rattled Japan.</p>

            {isConnected ? ( <div> 
                <div>
                    <button onClick={handleDecrement} >-</button>
                    <input type="number" value = {mintnAmount} />
                    <button onClick={handleIncrement} >+</button>
                </div>
                <button  onClick={handleMint} >Mint Now </button>
                
                  </div> ):(<p>You must connect to Mint</p>
                  
                  ) }
        
        </div>
    )

};


export default MainMint;