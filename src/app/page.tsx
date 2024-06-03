import { verify } from "crypto";

export default function Home() {
  let name = 'hello world';
  let firstName:string = 'nune';
  let age:number = 20;
  let isActive:boolean = true;
  let response: any;
  //array
  let num: number[] = [0,0,0]
  let nameList: Array<string> = ['Nune','jelly']; 
  let person: [string,number] = ['Nune',19]   //tuple

  //enum 0 -> 1 -> 2 
  enum Status{ NotVerify, Pending, Verify}
  let status: Status = Status.NotVerify;
  let person2: [string , Status] = ['Nune',Status.Verify];

  let idCard: number| undefined | null = 99;
  if(idCard != null){}

  //interface
  // model ของข้างในมีอะไรบ้าง
  interface A { name:string};
  interface B { job: string};
  let joblessNameA: A = {name: 'nune'};
  let joblessNameB: B = {job: 'dev'};

  //extent
  let joblessNameC: A & B = { name: 'nune',job: "dev"}

  //class OOP
  class Animal {
    species: string;
    name: string;
    constructor(species:string,name:string){
      //constructor เอาค่ามา assign ให้ตัวมัน
      this.species = species,
      this.name =name;
      this.welcome()
    }
    // every time when use this class will be use this function
    private welcome(){
      console.log(`welcome new animal ${this.name}`)
    }
    run(){ 
      this.welcome()
      console.log(`this ${this.species} is running`)
    
    }
    eat(){
      console.log(`this ${this.name} is eating`)
    }
  }
  //สำหรับกำหนดด type ให้ A
  interface Animal {
    species: string;
    name: string;
  }
  let A:Animal = new Animal('cat','Nune');
  let B:Animal = new Animal('cat','Jelly');
  A.name
  let C:Animal = new Animal('rabbit','Leo');

  console.log(A.name);
  console.log(B.name);
  A.run()
  B.eat()


  //generic type -> dynamic type
  function verifyEmail<T>(arg: T): T {
    return arg
  }

    //ไม่ค่อยใช้
  let verification = verifyEmail<string>('nune');
  
  //class extends with other class
  class Person{
    name: string;
    gender: string;
    idCard: string;
    constructor(name:string, gender:string,idCard:string){
      this.name = name,
      this.gender = gender,
      this.idCard =idCard
      this.born()
    }
    born(){
      console.log(`new person was boen named ${this.name}`)
    }
  }
  class Employee extends Person{
      position: string
      constructor(position:string,name:string,gender:string,idCard:string){
        super(name,gender,idCard),
        this.position = position
      }
  }
  let personA01 = new Person('Nune','F','123')
  let employee = new Employee('dev','Nune','F','123')

  //operator ( + - * / () % ++ --)
  let a: number = 5;
  let b: number = 5;
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
  console.log((a + b) + a);
  console.log(a++); //show before +
  console.log(++a); // + before show
  console.log(--a);
  console.log(a--);

  //quality  == , ===
  if(a == b){
    console.log(`I'm here`)
  }
  // console.log('' == 0) //TRUE
  // console.log(0 == '') //TRUE
  // console.log(0 == '0') //TRUE

  // console.log(0 == null) 
  // console.log('' == null)
  // console.log('' == null)

  // console.log('0' == false)
  // console.log(false == 'false')

  // console.log(false == undefined)
  // console.log(false == null)
  // console.log(null == undefined)

    let isVerify:boolean = true;
    let isAuth:boolean = true;
    let havePermission:boolean = true;
    let ageMRT20:boolean = false;

//if else
    let ageNune = 20;
    if(ageNune > 18){
      console.log(`nune ${ageNune}`);
    } else if(ageNune === 18)
{console.log(`nune ${ageNune}`)
    } else {
      console.log(`nune ${ageNune}`)
    }

    havePermission && isAuth ? console.log('yeah'): 'noooo';
    
// switch case
    let x = 'nune';
    switch (x){
      case 'nune':
        console.log('nune');
        break;
      case 'jelly':
        console.log('jelly')
        break;
      default:
        console.log('no one')
        break;
    }


    const add = (x:number, y:number) =>{
      return x+y;
    }

    const multiply = (x:number,y:number) => x*y

    console.log(add(1,8))
    console.log(multiply(1,8))

  return (
    <>
        <div>{(isVerify && isAuth && havePermission || ageMRT20)&&`nune`}</div>
        <div>{havePermission && isAuth ?`yeah`: `noooo`}</div>
    </>

  );
}
