import DefaultTemplate from "./components/DefaultTemplate/DefaultTemplate";
import RoutesMain from "./routes/Routes";

import "./styles/app.module.css";
function App() {
  return (
    <>
      <div>
        <DefaultTemplate>
          <RoutesMain />
        </DefaultTemplate>
      </div>
    </>
  );
}

export default App;
