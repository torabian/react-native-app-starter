export namespace CarDto {
  export const isEqual = (item1: CarDto.DTO, item2: CarDto.DTO): boolean => {
    return CarDto.getPrimaryKey(item1) === CarDto.getPrimaryKey(item2);
  };

  export const getPrimaryKey = (item: CarDto.DTO) => {
    return `${item.name}`;
  };

  export const Empty: DTO = {
    name: null,
    miles_per_gallon: null,
    cylinders: null,
    displacement: null,
    horsepower: null,
    weight_in_lbs: null,
    acceleration: null,
    year: null,
    origin: null,
  };

  export interface DTO {
    name: string | null;
    miles_per_gallon: string | null;
    cylinders: number | null;
    displacement: string | null;
    horsepower: string | null;
    weight_in_lbs: string | null;
    acceleration: string | null;
    year: string | null;
    origin: string | null;
  }
}
