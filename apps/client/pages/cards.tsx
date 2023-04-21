import { useState, useCallback } from 'react';
import Card from '@core/dnd/Card';

const mockData = ['丁1號', '丁2號', '丁3號', '丁4號', '丁5號', '丁6號', '丁7號', '丁8號'];

function CardsPage() {
  const [array, setArray] = useState<string[]>(mockData);

  const changeByIndex = useCallback((from: number, to: number) => {
    setArray((preArray) => {
      const fromElement = preArray[from];
      const middleArray = [
        ...preArray.slice(0, to),
        fromElement,
        ...preArray.slice(to),
      ];

      if (to > from) {
        const targetArray = [
          ...middleArray.slice(0, from),
          ...middleArray.slice(from + 1),
        ];

        return targetArray;
      }

      const targetArray = [
        ...middleArray.slice(0, from + 1),
        ...middleArray.slice(from + 2),
      ];

      return targetArray;
    })
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 80px 80px 80px', gap: '9px' }}>
      {array.map((data, index) => (
        <Card key={index} name={data} index={index} changeByIndex={changeByIndex} />
      ))}
    </div>
  );
}

export default CardsPage;