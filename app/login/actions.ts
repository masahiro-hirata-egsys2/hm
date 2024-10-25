'use server'

import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

export const loginUser = async (name: string, password: string ) => {
    
    
    const user = await prisma.account.findUnique({
        where: {name: name},
    });

    if (user && user.password === password){
        return true;
    }
    
    return false;
    
}
