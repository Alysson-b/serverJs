import { prisma } from "../../lib/prisma.js"

export async function resgisterController(req, reply) {
        const {username, email} = req.body
        
        const userWithSameEmail = await prisma.user.findUnique({where: {email}})

        if(userWithSameEmail){
            return reply.status(409).send('Email já cadastrado')
        }

        const users = await prisma.user.create({
            data: {
                name:username,
                email
            }
        })

        return reply.status(201).send({users})
}