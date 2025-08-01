import './global.css';
import { CartProvider } from '@coolcars/data';
import { Header } from '../components/Header';

export const metadata = {
  title: 'CoolCars Shop - Premium Vehicles',
  description: 'Find your perfect vehicle at CoolCars Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
