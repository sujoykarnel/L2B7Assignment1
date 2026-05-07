/* Problem: 1 */

function filterEvenNumbers(arryOfNum: number[]): number[] {
  return arryOfNum.filter((elem: number) => elem % 2 === 0);
}

const evenNumber = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

console.log(evenNumber);

/* Problem: 2 */

function reverseString(string: string): string {
  return string.split("").reverse().join("");
}

const reverseResult = reverseString("typescript");
console.log(reverseResult);

/* Problem: 3 */

type StringOrNumber = string | number;

function checkType(data: StringOrNumber): string {
  if (typeof data === "string") {
    return "String";
  } else {
    return "Number";
  }
}

const dataType = checkType(42);

console.log(dataType);

/* Problem: 4 */

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");
console.log(userName);

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
console.log(toggleReadStatus(myBook));

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

const intersectionResult = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(intersectionResult);
