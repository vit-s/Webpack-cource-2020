export default class Post {
    constructor(title) {
        this.title = title;
        this.data = new Date();
    }

    toString() {
        JSON.stringify({
            title: this.title,
            date: this.data.toJSON(),
        })
    }

    get upperCaseTitle() {
        return this.title.toUpperCase()
    }
}
