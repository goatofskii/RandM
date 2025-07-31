import './Loader.css';

type LoaderProps = {
  size?: 'small' | 'large';
  label?: string;
};

export default function Loader({ size = 'small', label }: LoaderProps) {
  return (
    <div className={`loader-container ${size}`}>
      <img
        src='/portal.png'
        alt='Loading portal'
        className='portal-image'
      />
      {label && <p className='loader-label'>{label}</p>}
    </div>
  );
}
