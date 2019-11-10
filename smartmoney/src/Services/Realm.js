import Realm from 'realm';

import CategorySchema from  '../Schemas/CategorySchema';
import EntrySchema from '../Schemas/EntrySchema';

export const getReal = async () => {

    const realm = await  Realm.open({
        schema:[CategorySchema, EntrySchema],
        schemaVersion:1,
    });

    return realm;

}