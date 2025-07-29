import { useContext } from "react";
import { AuthContext} from "./AuthContext";

// 9. Создаем кастомный хук для удобного доступа к контексту
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}