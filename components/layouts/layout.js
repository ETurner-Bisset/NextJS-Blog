import MainNavigation from './main-navigation';
import Logo from './logo';

const RootLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
export default RootLayout;
