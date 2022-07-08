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
        return toHash
    }
}