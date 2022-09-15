class Hero {
    image;
    top;
    left;
    size;

    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    setImage(image) {
        this.image = image
    }
    getImage() {
        return this.image
    }
    setTop(top) {
        this.top = top
    }
    getTop() {
        return this.top
    }
    setLeft(left) {
        this.left = left
    }
    getLeft() {
        return this.left
    }
    setSize(size) {
        this.size = size
    }
    getSize() {
        return this.size
    }
    getHeroElement() {
        return `<img width="${this.size}" height="${this.size}" 
        src= "${this.image}" style="top:${this.top}px; left:${this.left}px;position:absolute" />`
    }
    getmoveRight() {

        this.left += 20;
    }
}

