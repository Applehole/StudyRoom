interface SStorage<T> {
    [key: string] : T
}

class LocalStorage<T> {
    private storage : SStorage<T> ={}
    set(key : string, value : T){
        this.storage[key] = value
    }
    remove(key : string){
        delete this.storage[key]
    }
    get(key : string){
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()

stringsStorage.get("ket")
// 아직 잘 이해가 되지 않는다.