// This is a script to run the smart contract

const main = async () => {
    // Updating run.js to call the functions I created for storing data (waves)
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log('Contract deployed to:', waveContract.address);
    console.log('Contract deployed by:', owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn. wait();

    waveCount = await waveContract.getTotalWaves();
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

