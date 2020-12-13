const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');

module.exports = {
    async create(local){
        const local_id = uuidv4();
        local.local_id = local_id;

        await connection("local").insert(local);
        return local_id;
    },

    async getById({local_id}){
        const result = await connection("local")
            .where({local_id})
            .select("*");
        return result;
    },

    async updateById(local_id, local){
        const result = await connection("local")
            .where({local_id})
            .update(local);
        return result;
    },

    async deleteById(local_id){
        const result = await connection("local").where({local_id}).delete();
        return result;
    }
};