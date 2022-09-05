import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Card({ id, name, avatar }) {
  const navigate = useNavigate();

  return (
    <div
      className='container-card'
      onClick={() => navigate(`/teacher/${id}`)}
    >
      <img
        src={avatar}
        className="card__photo"
        alt="foto do professor" />
      <h1>{name}</h1>
    </div>
  );
}