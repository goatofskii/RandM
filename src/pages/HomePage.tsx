import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import './HomePage.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className='home-wrapper'>
        <img
          src='/main-logo.png'
          alt='Rick and Morty'
          className='main-logo'
        />
      </div>

      {isLoading ? (
        <Loader
          size='large'
          label='Loading characters...'
        />
      ) : (
        <div className='home-wrapper'>
          <h1 className='home-h1'>Character list</h1>
        </div>
      )}
    </Layout>
  );
}
