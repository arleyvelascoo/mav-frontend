export interface Pageable<S> {
  content: S[];
  totalPages: number;
  totalElements: number;
  number: number;
  numberOfElements: number;
  size: number;
  empty: boolean;
}
