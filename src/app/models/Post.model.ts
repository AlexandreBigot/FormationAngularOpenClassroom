export class Post {

    datePost: Date;
    loveItsPost: number;

    constructor(public titrePost: string, public contenuPost: string) {
        this.datePost = new Date();
        this.loveItsPost = 0;
    }

}