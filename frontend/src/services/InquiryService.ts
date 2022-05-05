import axios from 'axios';

const InquiryService = {
  getCars: (): any => {
    return axios
      .get('http://localhost:3000/api/v1/cars', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('user')!}`,
        },
      })
      .then((res) => res.data);
  },

  getOffer: (
    driverAge: number,
    carManufacturer: string,
    purchasePrice: number,
  ): any => {
    return axios
      .post(
        'http://localhost:3000/api/v1/cars/offers',
        { driverAge, carManufacturer, purchasePrice },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('user')!}`,
          },
        },
      )
      .then((res) => res.data);
  },
};

export default InquiryService;
