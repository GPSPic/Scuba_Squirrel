class Generic {
    
    getRandomValue (min = 0, max = 1) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    

}
export default new Generic