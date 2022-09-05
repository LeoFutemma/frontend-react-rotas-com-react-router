import './styles.css';
import CubosLogo from '../../assets/cubos-logo.svg';
import ArrowBackIcon from '../../assets/arrow-back.svg';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { teachers } from '../../data';

export default function TeacherList() {
  const { id } = useParams();
  const [currentTeacher, setCurrentTeacher] = useState({});

  function handleSelectedTeacher() {
    const findTeacher = teachers.find((teacher) => teacher.id === Number(id));

    if (!findTeacher) {
      return;
    }
    setCurrentTeacher(findTeacher);
  }

  useEffect(() => {
    handleSelectedTeacher();
  }, [])

  return (
    <div className='container'>
      <div className='container-teacherDetail'>
        <Link to='/main'>
          <img src={ArrowBackIcon} className="teacherDetail__back-icon" alt="cubos-logo" />
        </Link>
        <img src={CubosLogo} className="teacherDetail__logo" alt="cubos-logo" />

        <div className="detailCard">
          <img
            src={currentTeacher.avatar}
            className="detailCard__photo"
            alt="professor" />
          <h1>{currentTeacher.name}</h1>
          <h3>{currentTeacher.stack}</h3>
          <h2>Bio</h2>
          <p>{currentTeacher.bio}</p>
        </div>
      </div>
    </div>
  );
}