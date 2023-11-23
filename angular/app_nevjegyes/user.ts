export class User{
    Id : number;
    Name : string;
    BirthYear : number;
    Email : string;
    AvatarUrl : string;

    constructor(id : number, name : string, birthYear : number, 
        email : string, avatarUrl : string){
            this.Id = id;
            this.Name = name;
            this.BirthYear = birthYear;
            this.Email = email;
            this.AvatarUrl = avatarUrl;
    }
}