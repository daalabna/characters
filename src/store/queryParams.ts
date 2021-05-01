import { makeAutoObservable } from 'mobx';

export interface IQueryParams {
    [key: string]: string
}

type ISearchParamsEntry = [key: string, value: string];

class QueryParams {
    public queryParams:IQueryParams

    private url: URL = new URL(window.location.href)

    constructor() {
      makeAutoObservable(this);
      this.queryParams = this.getQueryParams();
    }

    private getQueryParams() {
      const entries: ISearchParamsEntry[] = Array.from(this.url.searchParams.entries());
      return entries.reduce((queryParams: IQueryParams, [key, value]) => ({
        ...queryParams,
        [key]: value,
      }), {});
    }

    private setQueryParams(queryParams: IQueryParams = this.queryParams) {
      const newURLSearchParams = new URLSearchParams(queryParams);
      this.url = new URL(`?${newURLSearchParams.toString()}`, window.location.origin);
      window.history.pushState({}, '', String(this.url));
    }

    update(queryParams: IQueryParams) {
      this.queryParams = {
        ...this.queryParams,
        ...queryParams,
      };
      this.setQueryParams();
    }

    set(queryParams: IQueryParams) {
      this.queryParams = { ...queryParams };
      this.setQueryParams();
    }
}

export default new QueryParams();
