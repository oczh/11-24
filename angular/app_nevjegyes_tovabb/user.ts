
export class User{
    id : number;
    name : string;
    age : number;
    email: string;
    image: string;
    createdAt : Date;

    constructor(id : number, name : string, age : number, email : string, 
        image : string, createdAt : Date){

        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.image = image;
        this.createdAt = createdAt;
    }
}