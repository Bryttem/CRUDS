import repository from "./repository"
import { Toy } from './interface'

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {
    if (!data.name) throw Error("propiety name is missing")
    const toy = await repository.store(data);
    return toy;
}

const getOne = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Toy not found");
    return model;
}


const deleteItem = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Toy no found");

    return await repository.delete(id);
}
const update = async (id: string, data: Toy) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error('Toy not found');

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