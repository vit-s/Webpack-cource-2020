export default class Post {
    constructor(title, img) {
        this.title = title;
        this.img = img;
        this.data = new Date();
    }

    toString() {
        JSON.stringify({
            title: this.title,
            date: this.data.toJSON(),
            img: this.img
        })
    }

    get upperCaseTitle() {
        return this.title.toUpperCase()
    }
}
