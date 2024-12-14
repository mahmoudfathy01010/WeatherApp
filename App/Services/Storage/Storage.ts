import Realm from 'realm';
import {StorageSchema} from './Schema';

const getRealmInstance = async () => {
  const realm = await Realm.open({
    schema: [StorageSchema],
  });
  return realm;
};

const Storage = {
  getItem: async (key: string) => {
    let realm: Realm;
    let value: string;
    try {
      realm = await getRealmInstance();
      const result = realm
        .objects(StorageSchema.name)
        .filtered(`key = "${key}"`)[0]
        ?.entries();
      if (result) {
        value = Object.fromEntries(result).value;
      }
    } catch (error) {}
    realm!?.close();
    return value;
  },
  setItem: async (key: string, value: string) => {
    let realm: Realm;
    try {
      realm = await getRealmInstance();
      realm.write(() => {
        realm?.create(
          StorageSchema.name,
          {
            key,
            value,
          },
          'modified',
        );
      });
    } catch (error) {}
    realm!?.close();
  },

  getObject: async (key: string) => {
    const value = await Storage.getItem(key);
    return value ? JSON.parse(value) : value;
  },

  updateArray: async (key: string, newValues: any[]) => {
    let currentArray = await Storage.getObject(key);
    if (!Array.isArray(currentArray)) {
      currentArray = [];
    }
    const updatedArray = [...currentArray, ...newValues];
    await Storage.setItem(key, JSON.stringify(updatedArray));
  },
  setArray: async (key: string, newValues: any[]) => {
    await Storage.setItem(key, JSON.stringify(newValues));
  },
};

export default Storage;
