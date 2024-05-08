import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [name, setName] = createSignal('Luigi');

  return (
    <div>
    <p>The name is {name()}</p>
    </div>
  );
}

render(() => <Counter />, document.getElementById("app")!);
