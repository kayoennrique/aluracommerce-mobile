import { InfoProvider } from "./src/contexts/GlobalContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <InfoProvider>
      <Routes />
    </InfoProvider>
  );
}