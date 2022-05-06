import { FunctionComponent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../UI/Card';
import { ReactComponent as ComparisonIcon } from '../../assets/icon-comparison.svg';

const TITLE_KEYS: { [key: string]: any } = {
  globalOffer: 'Global',
  universalOffer: 'Universal',
};

// eslint-disable-next-line react/function-component-definition
export const Offer: FunctionComponent = () => {
  const location = useLocation();
  const [offers, setOffer] = useState<any>(location.state);

  const [plan, setPlan] = useState<string>('globalOffer');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  return (
    <section
      className="
     bg-offer
     bg-no-repeat
     bg-contain
     offer
     h-full
     "
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="text-center mx-auto  max-w-[510px]">
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
        <div className="flex gap-3.5 justify-center items-center flex-col md:flex-row">
          {Object.entries(offers).map(([key, offer]) => (
            <Card
              selected={plan === key}
              key={key}
              offer={offer}
              title={TITLE_KEYS[key] || 'NO TITLE'}
              isMonthly={isMonthly}
              handleSelectPlanClick={() => setPlan(key)}
            />
          ))}
        </div>
      </div>
      <div className="comparisonSection ">
        Show me the full comparison table
        <ComparisonIcon />
      </div>
    </section>
  );
};
