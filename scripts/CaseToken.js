
const hre = require("hardhat");

async function main() {
    const CaseToken = await hre.ethers.getContractFactory("CaseToken");
    console.log(">>>>> Deploying Case...")
    const token = await CaseToken.deploy('CaseToken', 'Case');
    await token.deployed();
    console.log(">>>>> Deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
