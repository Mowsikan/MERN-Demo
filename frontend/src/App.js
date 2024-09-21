import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  useEffect(() => {
    // Replace with your deployed backend URL from Vercel
    axios.get('https://mern-demo-server2.vercel.app/')
      .then(response => {
        setWorkouts(response.data); // Set the workouts to the state
      })
      .catch(error => {
        console.error("There was an error fetching the workouts!", error);
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

