import { ReactNode } from 'react';

export const Heading = (props: {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}) => {
  const { type, children } = props;

  // Component to display the correct H element
  const HeadingFactory = `${type}` as keyof JSX.IntrinsicElements;

  // Set heading size
  const headingSize = () => {
    switch (type) {
      case 'h1':
        return 'text-8xl';
      case 'h2':
        return 'text-2xl';
      case 'h3':
        return 'text-2xl';
      case 'h4':
        return 'text-lg';
      case 'h5':
        return 'text-base';
      case 'h6':
        return 'text-sm';
      default:
    }
  };

  return (
    <HeadingFactory className={'uppercase font-Brand ' + headingSize()}>
      {children}
    </HeadingFactory>
  );
};
