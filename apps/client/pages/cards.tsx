import { useState, useCallback } from 'react';
import Card from '@core/dnd/Card';

const mockData = ['丁1號', '丁2號', '丁3號', '丁4號', '丁5號', '丁6號', '丁7號', '丁8號'];

function CardsPage() {
  const [array, setArray] = useState<string[]>(mockData);

  const changeByIndex = useCallback((from: number, to: number) => {
    setArray((preArray) => {
      if (to < 0 || to > preArray.length - 1) {
        return preArray;
      }

      console.log('first', from, to)

      const newArray = Array.from(preArray);
      const [removed] = newArray.splice(from, 1);
      newArray.splice(to, 0, removed);

      return newArray;
    })
  }, []);

  console.log('array', array)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
      {array.map((data, index) => (
        <Card key={`${data}-${index}`} name={data} index={index} changeByIndex={changeByIndex} />
      ))}
    </div>
  );
}

export default CardsPage;