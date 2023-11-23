export class Post{
    postId : number;
    postTitle : string;
    postContent: string;
    createdBy : number;

    constructor(postId:number, postTitle:string, postContent:string, createdBy:number){
        this.postId = postId;
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.createdBy = createdBy;
    }
}