enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
const person = {
  name: "Nick",
  age: 30,
  hobbies: ["Gaming", "Cooking"],
  role: Role.ADMIN,
};

// console.log(person.role);

// person.role.push("asdf");

// console.log(person.role);
let favoriteActivities: string[];

favoriteActivities = ["Gaming"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("ADMIN");
}
