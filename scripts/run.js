// This is a script to run the smart contract
const main = async () => {   

    // Updating run.js to call the functions I created for storing data (waves)
    // const [owner, randomPerson] = await hre.ethers.getSigners(); 

    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');  
    const waveContract = await waveContractFactory.deploy({   

        value: hre.ethers.utils.parseEther('0.1'),  

    });

    await waveContract.deployed();    
    
    console.log('Contract deployed addy:', waveContract.address);
    
    // console.log('Contract deployed by:', owner.address);
    
    /*
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());
    */

    let contractBalance = await hre.ethers.provider.getBalance(  

        waveContract.address 
        
    );  
      
    console.log(

        'Contract balance:', 

        hre.ethers.utils.formatEther(contractBalance)    
                               
    );

    // Sending two waves

    const waveTxn = await waveContract.wave('This is wave # 1');

    await waveTxn.wait();

    const waveTxn2 = await waveContract.wave('This is wave # 2');   

    await waveTxn2.wait();    
    
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    
    console.log(

        'Contract balance:',  

        hre.ethers.utils.formatEther(contractBalance)    

    );

    let allWaves = await waveContract.getAllWaves();    
     
    console.log(allWaves);

    // Sending a few waves

    // let waveTxn = await waveContract.wave('A message!');
    // await waveTxn. wait();

    // const [_, randomPerson] = await hre.ethers.getSigners();

    // waveCount = await waveContract.getTotalWaves();

    /* 
    waveTxn = await waveContract.connect(randomPerson).wave('Another message!');
    await waveTxn.wait();
    */

    /* contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves); */

    //waveCount = await waveContract.getTotalWaves();
}; 

const runMain = async () => {

    try {

        await main();

        process.exit(0);
        
    }   catch (error) {  

        console.log(error);

        process.exit(1);  
                              
    }  
      
};

runMain();

// Code that simulates other people hitting our functions
/* 

waveTxn = await waveContract.connect(randomPerson).wave();

await waveTxn.wait();

waveCount = await waveContract.getTotalWaves(); 

*/



