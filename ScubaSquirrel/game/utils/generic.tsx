class Generic {
    
    getRandomValue (min = 0, max = 1) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    getRandomDirection() {
        return Math.random() < 0.5 ? -1 : 1;
      }
}
export default new Generic