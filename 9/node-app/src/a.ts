interface User{
    firstname:string;
    lastname:string;
    age:number;
    email?:string; // this is an optional argument
}

function isLegal(user:User):void{
    if (user.age >18) {
        console.log(true) ;
    }
    else{
        console.log(false) ;

    }
}

isLegal({
    firstname:"raman",
    lastname:"singh",
    age:20
})