import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import Alert from "./components/Alert";

// import { makeStyles } from "@mui/styles";

function App() {
  // const useStyles = makeStyles({
  //   App: {
  //     backgroundColor: "#14161a",
  //     color: "white",
  //     minHeight: "100vh",
  //   },
  // });

  // const classes = useStyles();
  return (
    <BrowserRouter>
    <div style={{
                    backgroundColor:"#14161a",
                    color:"white",
                    minHeight:"100vh"
                }}>
      <Header/>
      <Routes>
      <Route path="/" exact Component={Homepage}/>
      <Route path="/coins/:id" Component={CoinPage}/>
      </Routes>
      <Alert />
    </div>
    </BrowserRouter>
  );
}

export default App;
