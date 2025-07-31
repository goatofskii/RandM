import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

export default function CharacterPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Link
        to='/'
        className='back-button'
      >
        ← Назад
      </Link>

      {isLoading ? (
        <Loader
          size='large'
          label='Loading characters card...'
        />
      ) : (
        <div>
          <h1>Информация о персонаже</h1>
        </div>
      )}
    </Layout>
  );
}
