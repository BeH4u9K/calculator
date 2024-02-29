import React, { useState } from 'react';

const Calculator = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [Nambers, setNambers,] = useState('');
  const [result, setResult] = useState('');

  let namb = Nambers;
  let sum1 = "";
  let sum2;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const convertToHex = (decimal) => {
    let number = parseInt(decimal, 10);
    let hex = '';
    const digits = "0123456789ABCDEF";
    while (number !== 0) {
      let remainder = number % 16;
      hex = digits[remainder] + hex;
      number = Math.floor(number / 16);
    }
    return hex;
  }


  const handleCalculateClick = () => {
    if(Nambers==""){
      setResult("Введите число");
      
    }else{switch (selectedOption) {
      case "2":
        while (namb > 0) {
          sum2 = namb % 2;
          sum1 = sum2 + sum1;
          namb = Math.floor(namb / 2);
        }
        setResult(sum1);
        setNambers('')
        break
      case "16":
        setResult(convertToHex(Nambers));
        setNambers('')
        break
    }}
  
};



return (
  <div className='wraper'>
    <div className='photo-back'>
      <div className='ped'>
        <div className='checkbox'>
          <div className='radio-btn'>
            <div className="radio">
              <input className="custom-radio" type="radio" id="ru" name="options"
                value='2'
                checked={selectedOption === '2'}
                onChange={handleOptionChange} />
              <label htmlFor="ru">2</label>
            </div>
            <div className="radio">
              <input className="custom-radio" type="radio" name="options"
                value='16'
                checked={selectedOption === '16'}
                onChange={handleOptionChange} />
              <label htmlFor="en">16</label>
            </div>
          </div>
        </div>
        <div className='conteiner-input'>
          <input className='input' type="number" autocomplete="off" value={Nambers} onChange={e => setNambers(e.target.value)}></input>
        </div>
        <div className='Btn-conteiner'>
          <button className='custom-btn btn-16' onClick={handleCalculateClick} >ок</button>
        </div>
        <div className='label-text'>
          <div className='text-result'>
            <label>
              {result}
            </label>
          </div>
        </div>
      </div>  
    </div>
  </div>
);
};

export default Calculator;