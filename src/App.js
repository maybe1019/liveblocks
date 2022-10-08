import Layout from "./layouts/Layout";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import RoomPage from "./pages/RoomPage";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#e21e26",
    },
    secondary: {
      main: "#1976d2"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <Layout>
          <RoomPage />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
