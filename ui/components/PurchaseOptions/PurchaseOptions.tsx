import PurchaseBlock from '../PurchaseBlock/PurchaseBlock';
import { CardsContainer } from './styles';

const PurchaseOptions = () => {

  return (
    <div>
      <CardsContainer>
        <PurchaseBlock title="Basic" price={9} />
        <PurchaseBlock title="Pro" price={29} />
        <PurchaseBlock title="Expert" price={79} />
      </CardsContainer>
    </div>
  );
};

export default PurchaseOptions;