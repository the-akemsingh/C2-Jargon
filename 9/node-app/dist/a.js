"use strict";
function isLegal(user) {
    if (user.age > 18) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isLegal({
    firstname: "raman",
    lastname: "singh",
    age: 20
});
