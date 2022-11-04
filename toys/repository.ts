import { Toy } from './models';
import { Toy as IToy} from './interface';
import { ulid } from 'ulid';


const list = async () => {
    return await Toy.find();
}

const getOne = async (id: string) => {
    return await Toy.findOne({ id });
}
const store = async (data: IToy) => {
    const id = ulid();

    const toy = new Toy({ name: data.name, description: data.description, price: data.price, id });

    await toy.save();

    return toy;
}
const deleteItem = async (id : String) => {
    return await Toy.deleteOne({  id });

}

 const update = async (id: string, data:IToy)=>{
    const model = await Toy. findOneAndUpdate({id}, data, {new: true});
    return model;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}