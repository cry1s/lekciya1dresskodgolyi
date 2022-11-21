module.exports = class message {
    constructor(message, title) {
        this.message = message;
        this.title = title;
        this.timestamp = new Date().getTime();
    }
}
