import prismaClient from "../prisma";

class ProfileUserService {
    
    async execute(usder_id: string) {

        const user = await prismaClient.user.findFirst({
            where: {
                id: usder_id,
            },
        });

        return user;
    }
}

export { ProfileUserService };