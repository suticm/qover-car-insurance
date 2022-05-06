import { FunctionComponent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InquiryService from '../../services/InquiryService';
import { CarType } from '../../types/CarType';
import { InquiryType } from '../../types/InquiryType';
import { OfferType } from '../../types/OfferType';

// eslint-disable-next-line react/function-component-definition
export const Inquiry: FunctionComponent = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<InquiryType>();
  const [cars, setCars] = useState<CarType[]>([]);
  const [constraint, setConstraint] = useState<string>();

  const handleInquiry: SubmitHandler<InquiryType> = (data) => {
    const inquiryData = data;
    InquiryService.getOffer(
      +inquiryData.driverAge,
      inquiryData.carManufacturer,
      +inquiryData.purchasePrice,
    )
      .then((response: OfferType) => {
        console.log(response);
        if (!response.constraint) {
          setConstraint('');
          navigate('/offer', { state: response });
        } else {
          setConstraint(response.constraint);
        }
      })
      .catch((reason: any) => {
        if (reason.response.status === 401) {
          setConstraint(reason.response.data.message);
        } else {
          setConstraint(reason.response.data.message[0]);
        }
      });
  };

  const fetchData = () => {
    InquiryService.getCars().then((data: CarType[]) => setCars(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="inquiryBackground flex flex-grow sm:py-9 h-full">
      <div className=" mx-auto my-auto ">
        <div className="inquiry">
          <form onSubmit={handleSubmit(handleInquiry)} className="inquiryForm">
            <div className="py-3 inquiryFormField">
              <label htmlFor="driverAge" className="inquiryLabel">
                Age of the driver
              </label>
              <input
                type="number"
                id="driverAge"
                min={0}
                max={100}
                className="border inline-block inquiryInput"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Driver must be at least 18 years old."
                {...register('driverAge')}
                required
              />
            </div>
            <div className="py-3 inquiryFormField">
              <label htmlFor="car" className="inquiryLabel">
                Car
              </label>
              <select
                id="car"
                className="inquiryInput"
                required
                {...register('carManufacturer')}
              >
                <option value="" disabled selected hidden>
                  Choose Car Manufacturer...
                </option>
                {cars?.map((c: CarType) => (
                  <option key={c._id} value={c.manufacturer}>
                    {c.manufacturer}
                  </option>
                ))}
              </select>
            </div>
            <div className="py-3 inquiryFormField">
              <label htmlFor="purchasePrice" className="inquiryLabel">
                Purchase price
              </label>
              <input
                id="purchasePrice"
                type="number"
                className="border inquiryInput"
                {...register('purchasePrice')}
                required
              />
              <span className="currency">€</span>
            </div>
            <div className="constraint h-5">
              {constraint && <div>{constraint}</div>}
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
