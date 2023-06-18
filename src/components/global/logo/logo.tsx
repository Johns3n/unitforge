import { ReactComponent as UnitForgeLogo } from '../../../assets/images/logo.svg';

interface ILogoProps {
  onClick?: () => void;
}

export const Logo = (props: ILogoProps) => {
  const { onClick } = props;

  return (
    <UnitForgeLogo
      role="img"
      aria-label="UnitForge© Logo"
      onClick={onClick ? onClick : () => false}
      className={'w-40 ml-0 m-7' + (onClick ? ' cursor-pointer' : '')}
    />
  );
};
