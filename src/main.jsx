import ReactDOM from "react-dom/client"
import App from "./components/App.jsx"
import "./css/index.css"
import { Provider } from "react-redux"
import store from "./store/index.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>,
)
