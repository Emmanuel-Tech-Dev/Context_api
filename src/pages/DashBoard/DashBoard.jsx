
import { useContext, useEffect } from 'react';
import StudentList from '../../components/StudentList';
import { AuthContext } from '../../AuthContext';
import { redirect, useNavigate } from 'react-router-dom';

const DashBoard = () => {
 
 
  const {isLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
     if(!isLoggedIn) {
 return  navigate('/login');
 }

  } , [isLoggedIn , navigate])


  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <StudentList />
        </div>
      </div>
    </div>
  );
  
}

export default DashBoard
