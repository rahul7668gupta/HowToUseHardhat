// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract getterSetter {
    uint256 x;

    constructor() {
        x = 0;
        console.log("Contract deployed");
    }

    function set(uint256 _x) public {
        x = _x;
    }

    function get() public view returns (uint256) {
        console.log(x);
        return x;
    }
}
