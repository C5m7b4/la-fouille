import { ISorterProperty } from '../interfaces/ISorterProperty';
import { genericSort } from './genericSort';

interface FakeProps {
  id: number;
  name: string;
}

const fakeData: Array<FakeProps> = [
  {
    id: 1,
    name: 'mike',
  },
  {
    id: 2,
    name: 'tommy',
  },
];

describe('Generic sort', () => {
  it('should return 1,2', () => {
    const sortProperty: ISorterProperty<FakeProps> = {
      property: 'id',
      isDescending: false,
    };
    const result = fakeData.sort((a, b) => genericSort(a, b, sortProperty));
    expect(result).toStrictEqual([
      { id: 1, name: 'mike' },
      { id: 2, name: 'tommy' },
    ]);
  });
  it('should return 2,1', () => {
    const sortProperty: ISorterProperty<FakeProps> = {
      property: 'id',
      isDescending: true,
    };
    const result = fakeData.sort((a, b) => genericSort(a, b, sortProperty));
    expect(result).toStrictEqual([
      { id: 2, name: 'tommy' },
      { id: 1, name: 'mike' },
    ]);
  });
  it('should return 2,1 when using name as the property', () => {
    const sortProperty: ISorterProperty<FakeProps> = {
      property: 'name',
      isDescending: true,
    };
    const result = fakeData.sort((a, b) => genericSort(a, b, sortProperty));
    expect(result).toStrictEqual([
      { id: 2, name: 'tommy' },
      { id: 1, name: 'mike' },
    ]);
  });
  it('should return 3,2,1 when using name as the property and two of the names are the same', () => {
    const fakeData1: Array<FakeProps> = [
      {
        id: 1,
        name: 'mike',
      },
      {
        id: 2,
        name: 'mike',
      },
      {
        id: 3,
        name: 'tommy',
      },
    ];
    const sortProperty: ISorterProperty<FakeProps> = {
      property: 'name',
      isDescending: true,
    };
    const result = fakeData1.sort((a, b) => genericSort(a, b, sortProperty));
    expect(result).toStrictEqual([
      { id: 3, name: 'tommy' },
      { id: 1, name: 'mike' },
      { id: 2, name: 'mike' },
    ]);
  });
});
