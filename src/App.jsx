import store from "./store";
import { Provider } from "react-redux"
import Main from "./components/main";

function App() {
  return (
    <Provider store={store}>
       <Main/>
    </Provider>
  );
}

export default App;
