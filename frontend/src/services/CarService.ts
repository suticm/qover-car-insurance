import axios from 'axios';
import { API_URL } from '../constants';
import { authHeader } from '../utils';

const carApiUrl = `${API_URL}/v1/cars`;
const inquiryApiUrl = `${API_URL}/v1/cars/offers`;

const CarService = {
  getCars: (): any => {
    return axios.get(carApiUrl, authHeader()).then((res) => res.data);
  },
  getOffer: (
    driverAge: number,
    carManufacturer: string,
    purchasePrice: number,
  ): any => {
    return axios
      .post(
        inquiryApiUrl,
        { driverAge, carManufacturer, purchasePrice },
        authHeader(),
      )
      .then((res) => res.data);
  },
};

export default CarService;
