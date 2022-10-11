import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Header from './Components/Header/Header'
import { Home } from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import { loaderData } from './Loader/Loader';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        {
          path: '/', element: <Header />
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
