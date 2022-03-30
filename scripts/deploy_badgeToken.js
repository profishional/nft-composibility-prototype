
const hre = require("hardhat");

async function main() {
    const BadgeToken = await hre.ethers.getContractFactory("BadgeToken");
    console.log(">>>>> Deploying badger...")
    const token = await BadgeToken.deploy('BadgeToken', 'Badge');
    await token.deployed();
    console.log(">>>>> Deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
