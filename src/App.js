import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts/index";
import Bar from "./scenes/bar/index";
import Form from "./scenes/form/index";
import Line from "./scenes/line/index";
import Pie from "./scenes/pie/index";
import FAQ from "./scenes/faq/index";
import Geo from "./scenes/geo/index";
import Calendar from "./scenes/calendar/index";
import "./index.css";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className='app'>
            <SideBar />
            <main className='content'>
              <TopBar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/form' element={<Form />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/line' element={<Line />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/geography' element={<Geo />} />
                <Route path='/calendar' element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
