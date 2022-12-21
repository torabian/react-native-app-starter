export namespace BookDto {
  export const isEqual = (item1: BookDto.DTO, item2: BookDto.DTO): boolean => {
    return BookDto.getPrimaryKey(item1) === BookDto.getPrimaryKey(item2);
  };

  export const getPrimaryKey = (item: BookDto.DTO) => {
    // @meta(primaryKey)
    return `${item.pages}_${item.year}`;
  };

  export const Empty: DTO = {
    author: null,
    country: null,
    imageLink: null,
    language: null,
    underAgeAccess: null,
    link: null,
    firstReleaseDate: null,
    pages: null,
    coverColor: null,
    title: null,
    year: null,
  };

  export interface DTO {
    author: string | null;
    country: string | null;
    imageLink: string | null;
    firstReleaseDate: string | null;
    language: string | null;
    link: string | null;
    coverColor: string | null;
    pages: number | null;
    title: string | null;
    underAgeAccess: boolean | null;
    year: number | null;
  }
}
