import backgroundImage from '../../assets/images/hero.png';

export const backgroundStyle = {
    backgroundImage: `
      url(${backgroundImage}),
      linear-gradient(rgba(220, 20, 60, 1), rgba(255, 220, 73, 1))`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };