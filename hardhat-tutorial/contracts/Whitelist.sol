//SPDX-License-Identifier: Unlicense 
pragma solidity ^0.8.0;


contract Whitelist {  // 合约名称

    // Max number of whitelisted addresses allowed
    uint8 public maxWhitelistedAddresses;
    // numAddressesWhitelisted would be used to keep track of how many addresses have been whitelisted
    // NOTE: Don't change this variable name, as it will be part of verification
    uint8 public numAddressesWhitelisted;
    // Create a mapping of whitelistedAddresses
    // if an address is whitelisted, we would set it to true, it is false by default for all other addresses.
    mapping(address => bool) public whitelistedAddresses;  // 默认false；时间复杂度o 1




    // Setting the Max number of whitelisted addresses
    // User will put the value at the time of deployment
    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses =  _maxWhitelistedAddresses;
    }

    function addAddressToWhiteList()  public {
        // msg.sender is the address of the user who called this function;
        require(!whitelistedAddresses[msg.sender],"sender already in th whitelist");
        require(numAddressesWhitelisted<maxWhitelistedAddresses,'max limit reached');
        whitelistedAddresses[msg.sender] = true;
        numAddressesWhitelisted +=1;
        
        
    }

}