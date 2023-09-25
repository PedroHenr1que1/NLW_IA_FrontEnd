import { Home } from "./home/home";

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export function App() {
  return (
    <Theme 
      appearance='dark'
      accentColor='ruby'
    >
      <Home/>
    </Theme>
  );
}
