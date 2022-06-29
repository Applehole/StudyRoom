type Words = {
    [whatever : string] : string
}

class Dict{
    private words: Words
    constructor(){
        this.words = {}
    }
    add(Word : Word){
        if(this.words[Word.term]=== undefined){
            this.words[Word.term] = Word.deff
        }
    }
    def(term: string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term : string,
        public deff : string,
    ) {}
}

let Kimchi = new Word("김치","한국의 음식")

let dict = new Dict()

dict.add(Kimchi)
dict.def("kimchi")