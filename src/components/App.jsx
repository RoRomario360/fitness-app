import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ExercisesDetail from 'pages/ExercisesDetail';
import Home from 'pages/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExercisesDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};
