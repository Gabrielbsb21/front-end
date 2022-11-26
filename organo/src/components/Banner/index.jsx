import { WrapperBanner } from './style';
import image from '../../assets/images/banner.svg';

export const Banner = () => {
  return (
    <WrapperBanner>
      <div className="wrapper">
        <article>
          <h2>Pessoas e times</h2>
          <h3>organizados em um só lugar!</h3>
        </article>
        <div className="image">
          <img src={image} alt="pessoas reunidas para uma reuniao" />
        </div>
      </div>
    </WrapperBanner>
  );
};
