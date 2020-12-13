const UserModel = require('../Models/UserModel');

module.exports = {
    async create(request, response){
        try {
            const NewUser = request.body;
            const result = await UserModel.create(NewUser);
            return response.status(200).json(result);
        } catch (error) {
            console.warn("User creation failed", error);
            return response.status(500).json({notification: "Internal server error while trying to create user"});
        }
    },

    async getById(request, response){
        try {
            const {user_id} = request.params;
            await UserModel.getById(user_id);
            return response.status(200).json(result);
        } catch (error) {
            console.warn("User get failed", error);
            return response.status(500).json({notification: "Internal server error while trying to get user"});
        }
    },

    async update(request, response){
        try {
            const {user_id} = request.params;
            const NewUser = request.body;
            await UserModel.updateById(user_id, NewUser);
            return response.status(200).json({notification: "usuário atualizado com sucesso"});
        } catch (error) {
            console.warn("User update failed", error);
            return response.status(500).json({notification: "Internal server error while trying to update user"});
        }
    },

    async delete(request, response){
        try {
            const {user_id} = request.params;
            result = await UserModel.deleteById(user_id);

            if(result === 0){
                return response.status(400).json({notification: "usuário não encontrado"})
            }else{
                return response.status(200).json({notification: "Usuário deletado com sucesso"});
            }
        } catch (error) {
            console.warn("User delete failed", error);
            return response.status(500).json({notification: "Internal server error while trying to delete user"});
        }
    },
};
