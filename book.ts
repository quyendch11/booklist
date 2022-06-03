export class Book {
    titles: string;
    author: string;
    alreadyRead: boolean;
    constructor (titles:string, author:string,alreadyRead:boolean){
        this.titles = titles;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}