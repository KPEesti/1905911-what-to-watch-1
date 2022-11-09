import './spinner.css';

export default function Spinner() {
  return (
    <div className='loading-pos'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

