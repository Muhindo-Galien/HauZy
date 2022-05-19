import appRoutes from "./app/routes/_routes_";
import Routes from "./app/routes";
import HomeProvider from "./app/modules/context/HomeContext";

function App() {
  return (
    <HomeProvider>
      <Routes routes={appRoutes} />
    </HomeProvider>
  );
}

export default App;
