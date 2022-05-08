import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/not-found.png';

// eslint-disable-next-line react/function-component-definition
const NotFound: FunctionComponent = () => {
  return (
    <div className="center">
      <img className="not-found-img" src={notFound} alt="Not Found" />
      <button className="transition ease-in-out delay-150 mt-5 p-3 rounded-md drop-shadow-xl bg-white text-blue-500 text-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300">
        <Link to="/">Go back home</Link>
      </button>
    </div>
  );
};

export default NotFound;
