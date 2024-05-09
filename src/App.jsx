import { createSignal } from 'solid-js';

import banner from './assets/banner.png';

import { Router, Route } from "@solidjs/router";
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto bg">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >light_mode</span>
        <h1>Ninja Merch</h1>
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
      
      

    </div>
  );
}

export default App;
