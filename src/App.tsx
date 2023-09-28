import { Home } from "./home/home";

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <Theme 
      appearance='dark'
      accentColor='ruby'
    >
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
        theme="dark"
        />
      <Home/>
    </Theme>
  );
}
