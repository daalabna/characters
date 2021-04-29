import { makeAutoObservable } from 'mobx';

type Gender = 'Male' | 'Female' | 'unknown';
type Status = 'Alive' | 'Dead' | 'unknown';

export type { Gender, Status };

export interface ICharacter {
    id: number,
    name: string,
    status: Status,
    gender: Gender,
    image: string,
}

interface ICharactersInfo {
    count: number | null,
    next: string | null,
    pages: number | null,
    prev: string | null,
}

interface IResponse {
    info: ICharactersInfo,
    results: ICharacter[],
}

class Characters {
  public characters: ICharacter[] = [];

  public info: ICharactersInfo = {
    count: null,
    next: null,
    pages: null,
    prev: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  public async fetch() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results, info }: IResponse = await response.json();
    this.characters = results;
    this.info = info;
  }
}

export default new Characters();
