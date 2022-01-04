import { IPerson } from '../interfaces/IPerson';
import { genericSearch } from './genericSearch';

const sampleData: Array<IPerson> = [
  {
    firstName: 'Mike',
    lastName: 'bedingfield',
    eyeColor: 'brown',
    birthday: new Date('1/17/1974'),
    isActive: true,
  },
  {
    firstName: 'mitchell',
    lastName: 'simeons',
    eyeColor: 'green',
    birthday: new Date('1/17/1974'),
    isActive: false,
  },
  {
    firstName: 'sandy',
    lastName: 'hanks',
    eyeColor: 'blue',
    birthday: new Date('1/17/1974'),
    isActive: false,
  },
];

describe.only('genericSearch', () => {
  it('should return no records for eyecolor of red', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['eyeColor'], 'red', false)
    );
    expect(result.length).toEqual(0);
  });
  it('should return 1 record for eye color of green', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['eyeColor'], 'green', false)
    );
    expect(result.length).toEqual(1);
  });
  it('should return only 2 records starting with m', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['firstName'], 'mi', false)
    );
    expect(result[0].firstName).toEqual('Mike');
    expect(result[1].firstName).toEqual('mitchell');
    expect(result.length).toEqual(2);
  });
  it('should return no results with z in the firstName', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['firstName'], 'z', false)
    );
    expect(result.length).toEqual(0);
  });
  it('should return only one record with s in the firstName', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['firstName'], 's', false)
    );
    expect(result.length).toEqual(1);
  });
  it('should return only one record with Mi in the firstName with isCaseSensitive equal to true', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['firstName'], 'Mi', true)
    );
    expect(result.length).toEqual(1);
  });
  it('should return all records if the search query is empty', () => {
    const result = sampleData.filter((person) =>
      genericSearch(person, ['firstName'], '', false)
    );

    expect(result.length).toEqual(3);
  });
  // it('should not return any results if the search query is an object', () => {
  //   const result = sampleData.filter((person) =>
  //     genericSearch(person, ['firstName'], {}, false)
  //   );

  //   expect(result.length).toEqual(0);
  // });
  // it('should not return any results if the search query is a boolean', () => {
  //   const result = sampleData.filter((person) =>
  //     genericSearch(person, ['firstName'], false, false)
  //   );

  //   expect(result.length).toEqual(0);
  // });
  // it('should return no results when the key entered is invalid', () => {
  //   const result = sampleData.filter((person) =>
  //     genericSearch(person, ['name'], 'm', false)
  //   );

  //   expect(result.length).toEqual(0);
  // });
});
