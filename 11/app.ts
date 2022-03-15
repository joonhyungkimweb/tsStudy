const person = {
  name: "Nick",
  age: 30,
  hobbies: ["Gaming", "Cooking"],
};

let favoriteActivities: string[];

favoriteActivities = ["Gaming"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
