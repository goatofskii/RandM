import type { ReactNode } from 'react';
import './Layout.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const username = 'goatofskii'.toLowerCase();

  return (
    <div className='layout'>
      <header className='header'>
        <div className='header-inner'>
          <img
            src='/logo-black.png'
            alt='logo'
            className='logo'
          />
        </div>
      </header>

      <main>{children}</main>

      <footer className='footer'>
        Made with love by frontovichok_{username}
      </footer>
    </div>
  );
}
