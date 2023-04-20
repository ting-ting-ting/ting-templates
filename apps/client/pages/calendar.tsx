import Calendar from '@core/ui/Calendar';
import { mockData } from '@core/ui/Calendar/mock';

function CalendarPage() {
  return (
    <div>
      <Calendar dataSource={mockData} />
    </div>
  );
}

export default CalendarPage;