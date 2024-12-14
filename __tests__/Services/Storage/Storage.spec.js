import Realm from 'realm';

import Storage from 'App/Services/Storage/Storage';

describe('Test functions of Storage', () => {
  beforeEach(() => {
    Realm.open = jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve({
          objects: jest.fn(() => ({
            filtered: jest.fn(() => [
              {
                entries: () => [
                  ['key', 'item'],
                  ['value', `${JSON.stringify({name: 'David'})}`],
                ],
              },
            ]),
          })),
          close: jest.fn(() => {}),
          write: jest.fn(callback => {
            callback();
          }),
          create: jest.fn(() => {}),
          delete: jest.fn(() => {}),
        });
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Ensure that getItem opens realm connection and returns the expected output', async () => {
    const item = await Storage.getItem('item');
    expect(Realm.open).toHaveBeenCalledTimes(1);
    expect(item).toBe(`${JSON.stringify({name: 'David'})}`);
  });

  it('Ensure that setItem opens realm connection', async () => {
    await Storage.setItem('item', 'itemValue');
    expect(Realm.open).toHaveBeenCalledTimes(1);
  });

  it('Ensure that getObject opens realm connection and returns the expected output', async () => {
    const item = await Storage.getObject('item');
    expect(Realm.open).toHaveBeenCalledTimes(1);
    expect(item).toEqual({name: 'David'});
  });

  it('Ensure that updateArray opens realm two times (get the object then setItem)', async () => {
    await Storage.updateArray('item', []);
    expect(Realm.open).toHaveBeenCalledTimes(2);
  });

  it('Ensure that setArray opens realm connection', async () => {
    await Storage.setArray('item', []);
    expect(Realm.open).toHaveBeenCalledTimes(1);
  });
});
