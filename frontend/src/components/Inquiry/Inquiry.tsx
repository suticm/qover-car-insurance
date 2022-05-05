import { FunctionComponent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InquiryService from '../../services/InquiryService';
import { Car } from '../../types/Car';

type InquiryInput = {
  driverAge: number;
  carManufacturer: string;
  purchasePrice: string;
};

// eslint-disable-next-line react/function-component-definition
export const Inquiry: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<InquiryInput>();
  const [cars, setCars] = useState<Car[]>([]);

  const handleInquiry: SubmitHandler<InquiryInput> = (data) => {
    const inquryData = data;
    console.log(inquryData);
  };

  const fetchData = () => {
    InquiryService.getCars().then((data: Car[]) => setCars(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="inquiryBackground flex flex-grow sm:py-9">
      <div className=" mx-auto my-auto ">
        <div className="inquiry">
          <form onSubmit={handleSubmit(handleInquiry)} className="inquiryForm">
            <div className="py-3">
              <label htmlFor="driverAge" className="inquiryLabel">
                Age of the driver
              </label>
              <input
                type="number"
                id="driverAge"
                min={18}
                step={1}
                className="border inline-block inquiryInput"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Driver must be at least 18 years old."
                {...register('driverAge')}
                required
              />
            </div>
            <div className="py-3">
              <label htmlFor="car" className="inquiryLabel">
                Car
              </label>
              <select
                id="car"
                className="inquiryInput"
                {...register('carManufacturer')}
              >
                {cars?.map((c: Car) => (
                  <option key={c._id} value={c.manufacturer}>
                    {c.manufacturer}
                  </option>
                ))}
              </select>
            </div>
            <div className="py-3">
              <label htmlFor="purchasePrice" className="inquiryLabel">
                Purchase price
              </label>
              <input
                id="purchasePrice"
                type="number"
                min={5000}
                className="border inquiryInput"
                {...register('purchasePrice')}
                required
              />
            </div>
            <div className="pt-6">
              <button type="submit" className="getPriceButton">
                <span className="text-center">Get a price</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
