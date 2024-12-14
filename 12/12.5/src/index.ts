import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function getTodosAndUserDetails(userId:number) {
    // await prisma.todo.create({
    //     data:{
    //         title:"Learn Prisma",
    //         description:"Prisma is a modern DB toolkit",
    //         userId:1
    //     }
    // });
    const response=await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    });
    console.log(response);
}
getTodosAndUserDetails(1);