// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor () {
        console.log('Heya! This is my very first smart contract. Probably nothing.');
    }

// Added functions to enable users to send waves at me and store those waves

    function wave() public {
        totalWaves += 1;
        console.log('%s has waved!', msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log('We have %d total waves!', totalWaves);
        return totalWaves;
    }
}

