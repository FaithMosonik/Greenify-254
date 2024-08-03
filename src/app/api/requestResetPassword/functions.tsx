import { TimeSpan, createDate } from "oslo";
import { sha256 } from "oslo/crypto";
import {encodeHex} from "oslo/encoding";
import { generateIdFromEntropySize } from "lucia";
import prisma from "@/lib/prisma";

export async function createPasswordResetToken(userId: string){

    await prisma.passwordResetToken.deleteMany({
        where: {
            userId: userId,
        },
    });

    const tokenId = generateIdFromEntropySize(16);
    const token = encodeHex(await sha256(new TextEncoder().encode(tokenId)));
  
    await prisma.passwordResetToken.create({
        data: {
            userId: userId,
            token: token,
            expiresAt: createDate(new TimeSpan(2, "h")),
        },
    });

}

export async function sendPasswordResetEmail(email: string, token: string) {
    
}