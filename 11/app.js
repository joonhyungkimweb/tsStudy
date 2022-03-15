var person = {
    name: "Nick",
    age: 30,
    hobbies: ["Gaming", "Cooking"],
    role: [2, "author"]
};
console.log(person.role);
person.role.push("asdf");
console.log(person.role);
var favoriteActivities;
favoriteActivities = ["Gaming"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
