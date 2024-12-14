"use strict";
function sumOfAge(user1, user2) {
    let answer = user1.age + user2.age;
    return answer;
}
const age = sumOfAge({ name: "haye", age: 19 }, { name: "akem", age: 19 });
console.log(age);
