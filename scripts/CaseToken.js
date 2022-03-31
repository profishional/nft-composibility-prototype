
const hre = require("hardhat");

async function main() {
    console.log(">>>>> Deploying Case...")
    const CaseToken = await hre.ethers.getContractFactory("CaseToken");
    const token = await CaseToken.deploy();
    await token.deployed();
    console.log(">>>>> Deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
