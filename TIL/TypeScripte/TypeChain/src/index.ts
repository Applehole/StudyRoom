//1 ts-node 설치
//2 nodemon 설치
//3 nodemon --exec ts-node src/index.ts 적용시켜주기

import * as crypto from "crypto";

interface BlockShape{
    hash: string;
    PrevHash: string;
    height:number;
    data: string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public PrevHash: string,
        public height : number,
        public data : string,
    ){
        this.hash = Block.calculateData(PrevHash, height, data);
    }
    static calculateData(PrevHash:string, height:number, data:string){
        const toHash = `${PrevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex")
    }
}

class BlockChain {
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length -1 ].hash
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length+1, data);
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        return [...this.blocks];
    }
}