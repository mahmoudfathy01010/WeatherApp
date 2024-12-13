import Realm from 'realm';
import {StorageSchema} from './Schema';

const getRealmInstance = async () => {
  const realm = await Realm.open({
    schema: [StorageSchema],
  });
  return realm;
};

function isJsonString(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

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
  removeItem: async (key: string) => {
    let realm: Realm;
    try {
      realm = await getRealmInstance();
      const results = realm
        .objects(StorageSchema.name)
        .filtered(`key = "${key}"`);
      realm.write(() => {
        realm.delete(results);
      });
    } catch (error) {}
    realm!?.close();
  },
  getAllKeys: async () => {
    let realm: Realm;
    const keys: string[] = [];
    try {
      realm = await getRealmInstance();
      const results = realm.objects(StorageSchema.name);
      if (results.length) {
        results.forEach(result => {
          keys.push(Object.fromEntries(result.entries()).key);
        });
      }
    } catch (error) {}
    realm!?.close();
    return keys;
  },
  getAllItems: async () => {
    let realm: Realm;
    const temp = {};
    try {
      realm = await getRealmInstance();
      const result = realm.objects(StorageSchema.name);
      if (result) {
        const resultArray = Array.from(result);

        resultArray.forEach(item => {
          const entries = item.entries();

          const itemObj = Object.fromEntries(entries);
          temp[itemObj.key] = isJsonString(itemObj.value);
        });
      }
    } catch (error) {}
    realm!?.close();
    return temp;
  },
  multiRemove: async (keys: string[]) => {
    let realm: Realm;
    try {
      realm = await getRealmInstance();
      realm.write(() => {
        keys.forEach(key => {
          const results = realm
            .objects(StorageSchema.name)
            .filtered(`key = "${key}"`);
          realm.delete(results);
        });
      });
    } catch (error) {}
    realm!?.close();
  },
  clear: async () => {
    let realm: Realm;
    try {
      realm = await getRealmInstance();
      realm.write(() => {
        const allStorage = realm.objects(StorageSchema.name);
        realm.delete(allStorage);
      });
    } catch (error) {}
    realm!?.close();
  },
  getObject: async (key: string) => {
    const value = await Storage.getItem(key);
    return value ? JSON.parse(value) : value;
  },
  getBoolean: async (key: string) => (await Storage.getItem(key)) === 'true',
  setBoolean: async (key: string, value: boolean) => {
    await Storage.setObject(key, value);
  },
  getBooleanWithDefault: async (obj: {[key: string]: any}) => {
    const keys = Object.keys(obj);
    const values = await Promise.all(
      keys.map(async key => {
        const val = await Storage.getObject(key);
        return val ?? obj[key];
      }),
    );
    const result: {[key: string]: any} = {};
    keys.forEach((key: string, i) => (result[key] = values[i]));
    return result;
  },
  setObject: async (key: string, value: Object) => {
    await Storage.setItem(key, JSON.stringify(value));
  },
  updateObject: async (key: string, value: Object) => {
    const oldObject = (await Storage.getObject(key)) || {};
    await Storage.setItem(key, JSON.stringify({...oldObject, ...value}));
  },
  updateArray: async (key: string, newValues: any[]) => {
    let currentArray = await Storage.getObject(key);
    if (!Array.isArray(currentArray)) {
      currentArray = [];
    }
    const updatedArray = [...currentArray, ...newValues];
    await Storage.setItem(key, JSON.stringify(updatedArray));
  },
};

export default Storage;
