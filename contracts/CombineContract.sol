// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
import "./CapToken.sol";
import "./CaseToken.sol";

contract CombineContract is ERC721 {
    // constructor(string memory _name, string memory _symbol)
    //     ERC721(_name, _symbol)
    // {}

    mapping(uint256 => address) keyboards;

    function assemble(uint256 _caseId, uint256 _capsId) public {
        require(msg.sender == caseToOwner[_caseId]);
    }
}
