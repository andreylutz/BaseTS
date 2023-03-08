const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const massage: string = "Hello";

const numberArrey: number[] = [1, 1, 2, 3, 5, 8 ,13];
const numberArrey2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['Andrey', 890011122233];

// Any
let variable: any = 42;
// ...
variable = 'New String'; 
variable = [];

// ====
function sayMyName(name: string): void {
  console.log(name);
};

sayMyName('Andrey');

// Never
function throwError(message: string): never {
      throw new Error(message)
};

function infinite(): never {
  while (true) {
  }
};

// Type
type Login = string;

const login: Login = 'admin';   

type ID = string | number;

const id1 = 12345;
const id2 = 'number12345';

// null и undrfined
type SomeType = string | null | undefined;