import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Header from './Components/Header/Header'
import { Home } from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Chart from './Components/Chart/Chart';
import Error from './Components/Err/Error';
import Blog from './Components/Blog/Blog';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/home',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz />
        },
        {
          path: '/quizchart',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Chart />
        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    }, {
      path: '*', element: <Error />
    }
  ])
  return (
    <div className="dark:bg-gray-800">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
