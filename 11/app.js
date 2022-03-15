var person = {
    name: "Nick",
    age: 30,
    hobbies: ["Gaming", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["Gaming"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
