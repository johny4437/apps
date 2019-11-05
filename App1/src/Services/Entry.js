import{getRealm} from './Realm';


export const saveEntrie = async () =>{
    const realm = await getRealm();
    let data = {};
    realm.write(() =>{
         data = {
            id: 'ABC',
            amount: 12.4,
            entryAt: new Date(),
            isInit: false,
           
        };
        realm.create('Entry', data, true);
    })

    console.log(data);
    return data;
};