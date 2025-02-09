export interface CardsResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface CardsSearchParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  q?: string;
}

export interface TCGService {
  searchCards<T>(params?: CardsSearchParams): Promise<CardsResponse<T>>;
}
