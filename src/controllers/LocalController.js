const LocalModel = require('../Models/LocalModel');

module.exports = {
    async create(request, response){
        try {
            const NewLocal = request.body;
            const result = await LocalModel.create(NewLocal);
            return response.status(200).json(result);
        } catch (error) {
            console.warn("Local creation failed", error);
            return response.status(500).json({notification: "Internal server error while trying to create local"});
        }
    },

    async getById(request, response){
        try {
            const {local_id} = request.params;
            const result = await LocalModel.getById(local_id);
            return response.status(200).json(result);
        } catch (error) {
            console.warn("Local get failed", error);
            return response.status(500).json({notification: "Internal server error while trying to get local"});
        }
    },

    async update(request, response){
        try {
            const {local_id} = request.params;
            const NewLocal = request.body;
            await LocalModel.updateById(local_id, NewLocal);
            return response.status(200).json({notification: "local atualizado com sucesso"});
        } catch (error) {
            console.warn("Local update failed", error);
            return response.status(500).json({notification: "Internal server error while trying to update local"});
        }
    },

    async delete(request, response){
        try {
            const {local_id} = request.params;
            result = await LocalModel.deleteById(local_id);

            if(result === 0){
                return response.status(400).json({notification: "Local não encontrado"})
            }else{
                return response.status(200).json({notification: "Local deletado com sucesso"});
            }
        } catch (error) {
            console.warn("Local delete failed", error);
            return response.status(500).json({notification: "Internal server error while trying to delete local"});
        }
    },
};
