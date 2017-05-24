export class User {
  constructor(
      public gender:string, 
      public name: Name, 
      public email:string,
      public dob:string,
      public phone:string, 
      public picture: Picture
    ) { }
}


export class Name {
    constructor(
        public title:string,
        public first:string,
        public last:string
    ){}
}

export class Picture {
    constructor(
        public large:string,
        public medium:string,
        public thumbnail:string
    ){}
}