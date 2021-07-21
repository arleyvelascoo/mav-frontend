import axios, { AxiosResponse } from 'axios';
import { Pageable } from '../model/Pageable';
import { Ministry } from '../model/Ministry';

export class CountryService {
  getAll(): void {
    axios
      .get<Pageable<Ministry>>(
        'http://localhost:8886/minstarleyvelasco/api/country/all'
      )
      .then((response: AxiosResponse) => {
        console.log('Response', response.data);
      });
  }
}

