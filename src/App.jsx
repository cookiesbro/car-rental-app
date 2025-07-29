
import { Outlet } from 'react-router-dom';
// Импортируем наши новые, большие виджеты
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { MiniCart } from '@/widgets/MiniCart';
// и логику для них
import { useCart } from "@/shared/lib/context/useCart";
import { useState } from 'react';


function App() {
  // Логика, связывающая виджеты, остается здесь
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);
  const { cart } = useCart();

  const toggleMiniCart = () => {
    if (cart.items.length > 0) {
      setMiniCartOpen(!isMiniCartOpen);
    }
  };

  return (
    <div className="app-container">
      {/* Мы передаем toggleMiniCart в Header */}
      <Header onCartClick={toggleMiniCart} />

      <main className="app-main">
        <Outlet />
      </main>
      
      <MiniCart isOpen={isMiniCartOpen} onClose={() => setMiniCartOpen(false)} />

      <Footer />
    </div>
  );
}

export default App;