import { FunctionComponent, useState } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/function-component-definition
export const Offer: FunctionComponent = () => {
  const location = useLocation();
  const [offers, setOffer] = useState<any>(location.state);

  const [plan, setPlan] = useState<string>('global');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  return (
    <section
      className="
     offer
     "
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2
                className="
                    font-semibold
                    text-3xl
                    sm:text-4xl
                    md:text-[40px]
                    text-white
                    mb-4
                    "
              >
                Select a plan
              </h2>
              <div className="flex items-center justify-center w-full mb-12">
                <label
                  htmlFor="toggle"
                  className="flex items-center cursor-pointer"
                >
                  <div className="mr-3 text-white font-normal">PAY MONTHLY</div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="sr-only"
                      onClick={() => {
                        setIsMonthly(!isMonthly);
                      }}
                    />
                    <div className="block bg-blue-400 w-14 h-8 rounded-full" />
                    <div
                      className={
                        isMonthly
                          ? 'translate-x-0 dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'
                          : 'translate-x-full dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'
                      }
                    />
                  </div>
                  <div className="ml-3 text-white font-normal">PAY YEARLY</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
              card
                 text-white
                 rounded-xl
                 relative
                 z-10
                 overflow-hidden
                 shadow-pricing
                 py-10
                 px-8
                 sm:p-12
                 lg:py-10 lg:px-6
                 xl:p-12
                 mb-10
                 "
            >
              <span className="text-primary text-center font-semibold text-2xl block mb-4">
                Global
              </span>
              <h2 className="font-bold bg-cyan-300 text-center p-4 rounded-tl-full rounded-br-full text-dark mb-5 text-[42px]">
                {isMonthly
                  ? offers.globalOffer.priceMonthly
                  : offers.globalOffer.priceYearly}
                €<p className="font-thin text-base">YEARLY INCL. TAXES</p>
              </h2>
              <div className="mb-7 space-y-3 text-center rounded-lg divide-y">
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">Maximum duration travel</span>{' '}
                  of
                  <span className="font-bold">
                    {' '}
                    {offers.globalOffer.maximumDurationTravel} days
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Medical expenses reimbursement
                  </span>{' '}
                  up to
                  <span className="font-bold">
                    {' '}
                    {offers.globalOffer.medicalexpensesReimbursement} €
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Personal assistance abroad
                  </span>{' '}
                  up to
                  <span className="font-bold">
                    {' '}
                    {offers.globalOffer.personalAssistanceAbroad} €
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Travel assistance abroad{' '}
                  </span>{' '}
                  up to
                  <span className="font-bold">
                    {' '}
                    {offers.globalOffer.travelAssistanceAbroad} €
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Coverage duration:{' '}
                  <span className="font-bold">
                    {offers.globalOffer.coverageDuration} year
                  </span>
                </p>
              </div>
              <button
                className="
                    w-full
                    block
                    text-base
                    font-semibold
                    bg-white
                    text-black
                    rounded-md
                    text-center
                    hover:bg-blue-400
                    p-4
                    hover:text-white hover:bg-primary hover:border-primary
                    transition
                    "
                onClick={() => setPlan('global')}
              >
                {plan === 'global' ? 'Plan selected ✓' : 'Choose Global'}
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
                 bg-white
                 rounded-xl
                 relative
                 z-10
                 overflow-hidden
                 border border-primary border-opacity-20
                 shadow-pricing
                 py-10
                 px-8
                 sm:p-12
                 lg:py-10 lg:px-6
                 xl:p-12
                 mb-10
                 "
            >
              <span className="text-primary text-center font-semibold text-2xl block mb-4">
                Universal
              </span>
              <h2 className="font-bold text-cyan-600 bg-cyan-100 text-center p-4 rounded-tr-full rounded-bl-full text-dark mb-5 text-[42px]">
                {isMonthly
                  ? offers.universalOffer.priceMonthly
                  : offers.universalOffer.priceYearly}{' '}
                €<p className="font-thin text-base">YEARLY INCL. TAXES</p>
              </h2>
              <div className="mb-7 text-center divide-y">
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Maximum duration travel of{' '}
                  </span>
                  <span className="font-bold">
                    {offers.universalOffer.maximumDurationTravel} days
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Medical expenses reimbursement
                  </span>{' '}
                  up to
                  <span className="font-bold">
                    {' '}
                    {offers.universalOffer.medicalexpensesReimbursement} €
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Personal assistance abroad{' '}
                  </span>{' '}
                  up to
                  <span className="font-bold">
                    {' '}
                    {offers.universalOffer.personalAssistanceAbroad} €
                  </span>
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">
                    Travel assistance aboad{' '}
                  </span>
                  up to
                  <span className="font-bold">
                    {' '}
                    {offers.universalOffer.travelAssistanceAbroad} €
                  </span>{' '}
                  per insured per travel
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  <span className="font-semibold">Coverage duration</span>:{' '}
                  <span className="font-bold">
                    {offers.universalOffer.coverageDuration} year
                  </span>
                </p>
              </div>
              <button
                className="
                    w-full
                    block
                    text-base
                    font-semibold
                    text-primary
                    rounded-md
                    hover:bg-blue-400
                    text-center
                    p-4
                    hover:text-white hover:bg-cyan-500 hover:border-primary
                    transition
                    "
                onClick={() => setPlan('universal')}
              >
                {plan === 'universal' ? 'Plan selected ✓' : 'Choose Universal'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center  underline hover:text-cyan-700 cursor-pointer text-lg">
        Show me the full comparison table
      </p>
    </section>
    // <div>
    //   <pre>{JSON.stringify(offer, null, 2)}</pre>
    // </div>
  );
};
