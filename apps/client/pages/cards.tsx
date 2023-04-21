import { useState, useCallback } from 'react';
import Card from '@core/dnd/Card';

const mockData: { [key: string]: {
  id: string;
  name: string;
} } = {
  '111': {
    id: '111',
    name: '丁1號',
  },
  '222': {
    id: '222',
    name: '丁2號',
  },
  '333': {
    id: '333',
    name: '丁3號',
  },
  '444': {
    id: '444',
    name: '丁4號',
  },
  '555': {
    id: '555',
    name: '丁5號',
  },
  '666': {
    id: '666',
    name: '丁6號',
  },
  '777': {
    id: '777',
    name: '丁7號',
  },
  '888': {
    id: '888',
    name: '丁8號',
  },
}

const mockDataIdArray = ['111', '222', '333', '444', '555', '666', '777', '888'];

function CardsPage() {
  const [array, setArray] = useState<string[]>(mockDataIdArray);

  const changeByIndex = useCallback((from: number, to: number) => {
    setArray((preArray) => {
      if (to < 0 || to > preArray.length - 1) {
        return preArray;
      }

      const newArray = Array.from(preArray);
      const [removed] = newArray.splice(from, 1);
      newArray.splice(to, 0, removed);

      return newArray;
    })
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
      {array.map((id, index) => (
        <Card key={`${id}-${index}`} name={mockData[id].name} index={index} changeByIndex={changeByIndex} />
      ))}
    </div>
  );
}

export default CardsPage;