import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HandlingFormsMultipleFields from './components/HandlingFormsMultipleFields';
import HandlingFormsWithDebouncing from './components/HandlingFormsWithDebouncing';

const router = createBrowserRouter([
     {
          path: '/',
          element: <HandlingFormsMultipleFields />,
     },
     { path: '/debouncing', element: <HandlingFormsWithDebouncing /> },
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
