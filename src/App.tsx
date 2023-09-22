import { Home } from "./home/home";

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export function App() {
  return (
    <Theme 
      appearance='dark'
      accentColor='ruby'
      radius='large'
      scaling='100%'
      panelBackground='translucent'
    >
      <Home/>
    </Theme>
  );
}
