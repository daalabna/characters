import { makeAutoObservable } from 'mobx';
import { IQueryParams } from '../queryParams';
import CharactersInfo from './charactersInfo';

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

interface IResponse {
    info: CharactersInfo,
    results: ICharacter[],
}

class Characters {
    public characters: ICharacter[] = [];

    public info = new CharactersInfo();

    public favoriteCharacters: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    constructor() {
      makeAutoObservable(this);
      window.addEventListener('storage', () => {
        this.favoriteCharacters = JSON.parse(localStorage.getItem('favorites') || '[]');
      });
    }

    public async fetch(queryParams: IQueryParams) {
      const newURLSearchParams = new URLSearchParams(queryParams).toString();
      const response = await fetch(`https://rickandmortyapi.com/api/character?${newURLSearchParams}`);
      if (response.status === 404) {
        this.characters = [];
        this.info = {
          count: null,
          next: null,
          pages: null,
          prev: null,
        };
      } else {
        const { results, info }: IResponse = await response.json();
        this.characters = results;
        this.info = info;
      }
    }

    addFavorite(id: number) {
      this.favoriteCharacters = [...this.favoriteCharacters, id];
      localStorage.setItem('favorites', JSON.stringify(this.favoriteCharacters));
    }

    deleteFavorite(id: number) {
      this.favoriteCharacters = this.favoriteCharacters.filter((currentId) => id !== currentId);
      localStorage.setItem('favorites', JSON.stringify(this.favoriteCharacters));
    }
}

export default new Characters();
