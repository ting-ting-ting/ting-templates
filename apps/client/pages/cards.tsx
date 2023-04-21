import Card from '@core/dnd/Card';

const mockData = ['丁1號', '丁2號', '丁3號', '丁4號', '丁5號', '丁6號', '丁7號', '丁8號'];

function CardsPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 80px 80px 80px', gap: '9px' }}>
      {mockData.map((data, index) => (
        <Card key={data} name={data} index={index} />
      ))}
    </div>
  );
}

export default CardsPage;