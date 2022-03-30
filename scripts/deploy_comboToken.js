
const hre = require("hardhat");

async function main() {
    const CombineContract = await hre.ethers.getContractFactory("CombineContract");
    console.log(">>>>> Deploying Combo...")
    const token = await CombineContract.deploy('CombineContract', 'Combo');
    await token.deployed();
    console.log(">>>>> Deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
