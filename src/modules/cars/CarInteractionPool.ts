/**
 * This file is a storing the books into the async storage,
 * when user edits, or deletes them. it works as a pool as well as the
 * database in memeory. Real examples are not complictated as this.
 * only you need to implement AdvancedListInteractionPool<T> and it would be enough to pass
 * it into the AdvancedList
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {delay, inlineFiltering} from '~/src/helpers/filtering';
import {AdvancedListInteractionPool} from '~/src/interfaces/Lists';
import {CarDto} from './CarDto';

let dataSet: CarDto.DTO[] = [];
class InMemoryInteractionPool {
  protected async save() {
    await AsyncStorage.setItem(this.key, JSON.stringify(dataSet));
  }

  protected async load() {
    // await AsyncStorage.removeItem(this.key);
    try {
      const data = JSON.parse((await AsyncStorage.getItem(this.key)) || '');

      if (data && Array.isArray(data)) {
        dataSet = data;
      } else {
        dataSet = this.defaultContent;
        await this.save();
      }
    } catch (err) {
      // Intentionally left blank
      dataSet = this.defaultContent;
      await this.save();
    }
  }

  constructor(protected key: string, protected defaultContent: any) {
    this.load();
  }
}

class CarsInteractionPoolClass
  extends InMemoryInteractionPool
  implements AdvancedListInteractionPool<CarDto.DTO, string>
{
  constructor() {
    super('Cars', require('../../assets/mock-data/cars.json'));
  }

  async getOne(id: string): Promise<CarDto.DTO | undefined> {
    await delay(5000);
    return dataSet.find(item => CarDto.getPrimaryKey(item) === id);
  }

  async query(params: CarDto.DTO): Promise<CarDto.DTO[]> {
    await delay(200, 600);
    const result: CarDto.DTO[] = [];

    for (let item of dataSet) {
      if (inlineFiltering.STRING(params, item, 'name')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'miles_per_gallon')) {
        continue;
      }
      if (inlineFiltering.NUMBER(params, item, 'cylinders')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'displacement')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'horsepower')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'weight_in_lbs')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'acceleration')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'year')) {
        continue;
      }
      if (inlineFiltering.STRING(params, item, 'origin')) {
        continue;
      }

      result.push(item);
    }

    return result;
  }

  async update(dto: CarDto.DTO): Promise<CarDto.DTO> {
    dataSet = dataSet.map(item => (CarDto.isEqual(item, dto) ? dto : item));
    this.save();
    return dto;
  }

  async create(dto: CarDto.DTO): Promise<CarDto.DTO> {
    dataSet = [dto, ...dataSet];
    this.save();
    return dto;
  }

  async remove(dto: CarDto.DTO): Promise<{affectedRows: number}> {
    dataSet = dataSet.filter(item => !CarDto.isEqual(dto, item));
    return {affectedRows: 1};
  }
}

export const CarsInteractionPool = new CarsInteractionPoolClass();
