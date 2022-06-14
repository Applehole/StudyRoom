const delay = () => {
    const randomDelay = Math.floor(Math.random() * 4) * 100
    return new Promise(resolve => setTimeout(resolve, randomDelay))
}
  
const list = [1, 2, 3, 4, 5]
list.forEach(async data => {
  await delay()
    .then(() => console.log(data))
})