import { Title } from '../../components/title';
import { WorkBox } from './components/work-box';

export const Work = () => (
  <>
    <Title lineOne="Let's get to" lineTwo="Business" />
    <WorkBox
      title="Hacklahoma"
      href="/work/hacklahoma"
      image="hacklahoma.png"
      bg="linear-gradient(#E8FFFF, #DCF4FF)"
      stack={['React', 'Keystone', 'Heroku', 'PostgreSQL']}
    />
  </>
);
