import { WrapperHeader } from './style';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <WrapperHeader>
      <img src={logo} alt="Logo do organo" />
    </WrapperHeader>
  );
};
