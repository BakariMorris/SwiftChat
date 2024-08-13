import './styles.scss';
import { PngIcon } from '../../common/PngIcon';
import { SvgIcon } from '../../common/SvgIcon';

interface PurchaseBlockProps {
  title: string;
  price: number;
}

const PurchaseBlock = (props: PurchaseBlockProps) => {
  return (
    <div className="card-container">
      <div className="top-half">

        <div className="logo-container">
          <PngIcon className="logo-container__logo" src="arr-up.png" alt="arrow pointing upwards disintegrating at the bottom" />
        </div>
        <div className="description-container">
          <p className="description-container__title">{props.title}</p>
        </div>

        <div className="pricing-container">
          <p className="pricing-container__text">${props.price} <span className="pricing-container__text--subtext"> / MO</span></p>
          <p className="pricing-container__subtitle">Most popular plan</p>
        </div>
      </div>
      <div className="detail-container">
        <ul>
          <li>
            <SvgIcon className="check" src="circle-check-solid.svg" height="10px" width="10px" />
            All starter features
          </li>
          <li>
            <SvgIcon className="check" src="circle-check-solid.svg" height="10px" width="10px" />
            1TB additional storage
          </li>
          <li>
            <SvgIcon className="check" src="circle-check-solid.svg" height="10px" width="10px" />
            Unlimited projects
          </li>
          <li>
            <SvgIcon className="check" src="circle-check-solid.svg" height="10px" width="10px" />
            Analytics
          </li>
        </ul>
        <button className="">Get Started</button>
      </div>
    </div>
  );
}

export default PurchaseBlock;