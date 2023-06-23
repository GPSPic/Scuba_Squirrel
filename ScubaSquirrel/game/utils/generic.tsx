class Generic {
    
    getRandomValue (min = 0, max = 1) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    getRandomDirection() {
        return Math.random() < 0.5 ? -0.5 : 0.5;
      }
}
export default new Generic