import Realm from 'realm';

import CategorySchema from  '../Schemas/CategorySchema';
import EntrySchema from '../Schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

export const getRealm = async () => {

    const realm = await  Realm.open({
        schema:[CategorySchema, EntrySchema],
        schemaVersion:2,
    });
   // dropDB(realm);
    initDB(realm);
    return realm;

}


export const initDB = realm => {
    //consultar a quantidade de categorias existentes no Banco de Dados.
    //Se = 0
    //Preencher Categorias
    //De outro modo não faça nada.
    
    const categoriesLength = realm.objects('Category').length;
    
    console.log(`initDB ::==> Quantidade de Categorias no DB:${categoriesLength}`);
    
    if(categoriesLength == 0){

        const categories = getDefaultCategories();
        
        console.log("initDB :: initing DB...");

        try {

            realm.write(()=>{
                 categories.forEach( category => {
                    console.log(`initDB :: Creating Category:${JSON.stringify(category)}`);
                    realm.create('Category', category, true);
                 });
            
              });
        } catch (error) {}
       
       
     }else{
        console.log('initDB :: Categories already exist..');
    }
    
};

export const dropDB = realm =>{
    console.log('DROP :: Dropping all data..');
    
    realm.write(()=>{
        realm.deleteAll();
    });

};