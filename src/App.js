
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Product/Products';
import Main from './layout/Main';
import Friends from './component/Friend/Friends';


function App() {
  const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
      { path:'/',element:<Home></Home>},
      { path:'home',element:<Home></Home>},
      {path:'/products',element:<Products></Products>},
      { path:'about',element:<About></About>},
      {path:'friends',
      loader:async()=>{
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
      element:<Friends></Friends>},
      {path:'*', element:<div>This Route not Found:404</div>}
    ]},


      
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
