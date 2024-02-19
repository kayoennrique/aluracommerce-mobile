import { ProviderTheme } from "./src/contexts/ContextTheme";
import Routes from "./src/routes";

export default function App() {
  return (
    <ProviderTheme>
      <Routes />
    </ProviderTheme>
  );
}