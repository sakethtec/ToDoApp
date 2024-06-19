export class User {
  id: string;
  name: string;
  avatar: string;

  constructor(id: string, name: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
  }

}

export class Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;

  constructor(id:string,userid:string,title:string,summary:string,dueDate:string){
    this.id=id;
    this.title=title;
    this.userId=userid;
    this.summary=summary;
    this.dueDate=dueDate;
  }
}

