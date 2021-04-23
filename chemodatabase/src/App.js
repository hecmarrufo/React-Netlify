import logo from './logo.svg'; 
import './App.css';
import Select from 'react-select';

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  const industria_list = [
    { value: 'alimentaria', label: 'Alimentaria' },
    { value: 'otros', label: 'Otros' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola soy un menú
        </p>
      </header>
      <body>
        <Select 
          placeholder={'Industria'}
          options={industria_list} 
        />
        <Select 
          placeholder={'Solución'}
          options={options} 
        />
        <Select 
          placeholder={'Propiedad Termodinámica'}
          options={options} 
        />
      </body>
    </div>
  );
}

export default App;
