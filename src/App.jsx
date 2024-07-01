import { Header, Main, Footer } from '@/components';

export const App = () => {
  return (
    <>
      <Header></Header>
      <div className='container'>
        <Main></Main>
        <Footer />
      </div>
    </>
  );
};
