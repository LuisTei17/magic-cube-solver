class Cube {
    constructor({front, top, botom, left, right, back}) {
        this.front = front || '';
        this.top = top || '';
        this.botom = botom || '';
        this.left = left || '';
        this.right = right || '';
        this.back = back || '';
    }
}

module.exports = Cube;