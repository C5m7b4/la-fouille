import { genericFilter } from './genericFilter';
import { IPerson } from '../interfaces/IPerson';
import { IFilterProperty } from '../interfaces/IFilterProperty';

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

describe('genericFilter', () => {
  it('should return one record for isActive', () => {
    const filterProperties: IFilterProperty<IPerson>[] = [
      { property: 'isActive', isTruthySelected: true },
    ];
    const result = sampleData.filter((person) =>
      genericFilter(person, filterProperties)
    );
    expect(result[0].firstName).toEqual('Mike');
    expect(result.length).toEqual(1);
  });
  it('should return two records for isActive = false', () => {
    const filterProperties: IFilterProperty<IPerson>[] = [
      { property: 'isActive', isTruthySelected: false },
    ];
    const result = sampleData.filter((person) =>
      genericFilter(person, filterProperties)
    );
    expect(result.length).toEqual(2);
  });
});
