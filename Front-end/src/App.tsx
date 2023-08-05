import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes/index"
import GlobalStyle from "./styles/GlobalStyle"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {


  return (
    <>
      <GlobalStyle />
      <AuthProvider>  
        <RoutesMain />
      </AuthProvider>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}