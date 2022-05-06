import { ReactComponent as Checkmark } from '../../assets/checkmark.svg';

interface CardProps {
  offer: any;
  title: string;
  selected?: boolean;
  isMonthly: boolean;
  handleSelectPlanClick: Function;
}

function Card({
  offer,
  title,
  selected,
  isMonthly,
  handleSelectPlanClick,
}: CardProps) {
  return (
    <div
      className={`${
        selected ? 'selectedCard text-white' : 'card'
      } max-w-sm py-2.5 rounded w-64 sm:w-full`}
      style={{ boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.4)' }}
    >
      <h2 className="mb-4 mt-2 text-lg font-bold">{title}</h2>
      <div
        className={`h-24 flex flex-col align-center justify-center px-16 ${
          selected ? 'text-white' : 'text-primary'
        }`}
        style={{
          backgroundColor: selected ? 'rgba(255, 255, 255, 0.15)' : '#f5fdfe',
          borderTop: '2px solid #5b72891A',
          borderBottom: '2px solid #5b72891A',
        }}
      >
        <div className="flex items-start justify-center gap-1">
          <h1 className="text-3xl font-bold">
            {isMonthly
              ? offer.priceMonthly.toLocaleString('de-DE')
              : offer.priceYearly.toLocaleString('de-DE')}
          </h1>
          <span className="text-sm mt-1"> €</span>
        </div>

        <p className="text-xs">
          {`${isMonthly ? 'monthly' : 'YEARLY'} INCL. taxes`.toUpperCase()}
        </p>
      </div>
      <div
        className="py-4 px-5 text-xs"
        style={{ borderBottom: '2px solid #5b72891A' }}
      >
        <b>Maximum duration travel</b> of{' '}
        <b>{offer.maximumDurationTravel.toLocaleString('nl-BE')} days</b>
      </div>
      <div
        className="py-4 px-5 text-xs"
        style={{ borderBottom: '2px solid #5b72891A' }}
      >
        <b>Medical expenses reimbursement</b> up to{' '}
        <b>{offer.medicalexpensesReimbursement.toLocaleString('nl-BE')} €</b>
      </div>
      <div
        className="py-4 px-5 text-xs"
        style={{ borderBottom: '2px solid #5b72891A' }}
      >
        <b>Personal assistance abroad</b> up to{' '}
        <b>{offer.personalAssistanceAbroad.toLocaleString('nl-BE')} €</b>
      </div>
      <div
        className="py-4 px-5 text-xs"
        style={{ borderBottom: '2px solid #5b72891A' }}
      >
        <b>Travel assistance abroad</b> up to{' '}
        <b>{offer.travelAssistanceAbroad.toLocaleString('nl-BE')} €</b> per
        insured per travel
      </div>
      <div
        className="py-4 px-5 text-xs"
        style={{ borderBottom: '2px solid #5b72891A' }}
      >
        <b>
          Coverage duration: {offer.coverageDuration.toLocaleString('nl-BE')}{' '}
          year
        </b>
      </div>
      <div className="pt-2 px-3">
        <button
          className={`
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-2
                  text-base
                  font-bold
                  rounded-md
                  text-center
                  py-3
                  ${
                    selected ? 'text-primary bg-white' : 'text-white bg-primary'
                  }
                  `}
          onClick={(event) => {
            event.preventDefault();
            handleSelectPlanClick();
          }}
        >
          {selected && <Checkmark />}
          {selected ? 'Plan selected' : 'Choose this plan'}
        </button>
      </div>
    </div>
  );
}

export default Card;
