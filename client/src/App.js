import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import Routes from './Routes';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
