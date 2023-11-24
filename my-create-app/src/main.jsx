import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from "./routes/Erro404.jsx"
import Login from "./routes/Login.jsx"
import Home from "./routes/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Erro404/>,
    children:[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/conteudo",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>

)