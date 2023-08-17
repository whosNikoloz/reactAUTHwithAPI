import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import AuthPage from './pages/AuthPage';
import { Jwt } from 'jsonwebtoken';

function App() {
  
  const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        const decodedToken = Jwt.decode(token);

        if (decodedToken) {
            setUser({
                userName: decodedToken.name,
                email: decodedToken.email,
                role: decodedToken.role,
                picture: decodedToken.Picture,
            });
        }
    }, []);

  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;
