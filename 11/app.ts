const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Nick",
  age: 30,
  hobbies: ["Gaming", "Cooking"],
  role: [2, "author"],
};

console.log(person.role);

person.role.push("asdf");

console.log(person.role);
let favoriteActivities: string[];

favoriteActivities = ["Gaming"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
