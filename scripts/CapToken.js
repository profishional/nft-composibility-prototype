
const hre = require("hardhat");

async function main() {
    const CapToken = await hre.ethers.getContractFactory("CapToken");
    console.log(">>>>> Deploying Cap...")
    const token = await CapToken.deploy('CapToken', 'Cap');
    await token.deployed();
    console.log(">>>>> Deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
