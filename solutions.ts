/* Problem: 1 */

function filterEvenNumbers(arryOfNum: number[]): number[] {
  return arryOfNum.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

/* Problem: 2 */

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

reverseString("typescript");

/* Problem: 3 */

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

checkType("Hello");
checkType(42);

/* Problem: 4 */

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

/* Problem: 5 */

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return {
    ...obj,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
toggleReadStatus(myBook);

/* Problem: 6 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return console.log(
      `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`,
    );
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

/* Problem: 7 */

const getIntersection = (arry1: number[], arry2: number[]): number[] => {
  const presentInBothArray: number[] = [];
  const setA = new Set(arry1);

  arry2.forEach((num) => {
    if (setA.has(num)) {
      presentInBothArray.push(num);
    }
  });
  return presentInBothArray;
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
