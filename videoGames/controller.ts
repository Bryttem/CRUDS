import repository from "./repository"
import { Game } from './interface'

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {
    if (!data.name) throw Error("Game name is missing")
    const game = await repository.store(data);
    return game;
}

const getOne = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Game not found");
    return model;
}


const deleteItem = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Game no found");

    return await repository.delete(id);
}
const update = async (id: string, data: Game) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error('Game not found');

    const modelUpdated = await repository.update(id, data);
    return modelUpdated;


}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}