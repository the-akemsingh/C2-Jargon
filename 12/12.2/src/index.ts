interface User {
    name: string,
    age: number
}

function sumOfAge(user1: User, user2: User): number {
    let answer: number = user1.age + user2.age;
    return answer;
}

const age = sumOfAge({ name: "haye", age: 19 }, { name: "akem", age: 19 });
console.log(age);