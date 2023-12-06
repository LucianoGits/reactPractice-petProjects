import ChartComponent from './components/ChartComponent';
import MessageBox from './components/MessageBox';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
     {
          path: '/',
          element: <MessageBox />,
     },
     {
          path: '/chart',
          element: <ChartComponent />,
     },
]);

const App = () => <RouterProvider router={router} />;

export default App;
