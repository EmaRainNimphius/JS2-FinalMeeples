export default class Content {

    // id is generated in firebase
    static type = 'Content';
    category = ''
    title = ''
    content = ''
    description = ''
    img = ''

    constructor( category, title, content, description, img) {
        this.type = 'Content';
        this.category = category;
        this.title = title;
        this.content = content;
        this.description = description;
        this.img = img;
    }
}

export { Content }