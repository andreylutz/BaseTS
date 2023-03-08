class TypeScript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name) {
    return `[${name}]: Typescript version is ${this.version}`
  }
};

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//      this.model = theModel
//   }
// }

// Тот же код что и с верху только меньше
class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string){}
};

// =================== Модификаторы =========================
class Animal {
  protected voice: string = ''
  public color: string = 'black'

  private go() {
    console.log('Go');
    
  }
};

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
};

const cat = new Cat();
cat.setVoice('Test');
console.log(cat.color);

// ================ абстрактные классы =======================
abstract class Component {
  abstract render(): void
  abstract info(): string
};

class AppComponent extends Component {
  render(): void {
    console.log('Component on render'); 
  }
  info(): string {
    return 'This is info'
  }
};


 