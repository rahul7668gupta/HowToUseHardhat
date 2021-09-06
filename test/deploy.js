const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('deploying contract', () => {
    before(async () => {
        // runs before all tests in this block, deploying contract
        const getterSetter = await ethers.getContractFactory("getterSetter");
        this.contractInstance = await getterSetter.deploy();
    });

    it('getting newly set value', async () => {

        const b = await this.contractInstance.set(3)
        await b.wait()

        const a = await this.contractInstance.get()
        expect(a.toString()).to.equal("3")
    })

    it('transacting from a different account', async () => {
        const [owner, addr1] = await ethers.getSigners();
        const b = await this.contractInstance.connect(addr1).set(5);
        await b.wait();
        const a = await this.contractInstance.get();
        expect(a.toString()).to.equal("5");
    })
})