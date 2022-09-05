import './styles.css';
import CubosLogo from '../../assets/cubos-logo.svg';
import Card from '../../components/card';
import { teachers } from '../../data';

function Main() {
  return (
    <div className='container'>
      <div className='container__main'>
        <img src={CubosLogo} className="main__logo" alt="cubos-logo" />

        <div className="card-list">
          {teachers.map((teacher) => (
            <Card
              key={teacher.id}
              id={teacher.id}
              name={teacher.name}
              avatar={teacher.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;