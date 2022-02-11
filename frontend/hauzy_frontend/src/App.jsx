import appRoutes from "./app/routes/_routes_";
import Routes from "./app/routes";

function App() {
  return (
    <div>
      <Routes routes={appRoutes} />
    </div>
  );
}

export default App;
