import Container from '@/components/container';
import Divider from '@/components/divider';
import EventsHeader from '@/containers/events-header';
import MainEvent from '@/containers/main-event';
import Support from '@/containers/support';
import UpcomingEvents from '@/containers/upcoming-events';

const Events = () => {
  return (
    <Container>
      <EventsHeader />
      <MainEvent />
      <Divider />
      <UpcomingEvents />
      <Support />
    </Container>
  );
};

export default Events;
