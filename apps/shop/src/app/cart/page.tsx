'use client';

import Link from 'next/link';
import { useCart } from '@coolcars/data';
import { getCarIllustration } from '@coolcars/ui-components';
import styles from './page.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Your Cart</h1>
          <div className={styles.emptyCart}>
            <p>Your cart is empty</p>
            <Link href="/" className={styles.continueShoppingBtn}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your Cart</h1>
        
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cart.items.map((item) => (
              <div key={item.product.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  {getCarIllustration(item.product.category)}
                </div>
                
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.product.name}</h3>
                  <p className={styles.itemCategory}>{item.product.category.toUpperCase()}</p>
                  <p className={styles.itemPrice}>${item.product.price.toLocaleString()}</p>
                </div>
                
                <div className={styles.quantityControls}>
                  <button 
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className={styles.quantityBtn}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className={styles.quantityBtn}
                  >
                    +
                  </button>
                </div>
                
                <div className={styles.itemTotal}>
                  ${(item.product.price * item.quantity).toLocaleString()}
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.product.id)}
                  className={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${cart.total.toLocaleString()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>${(cart.total * 0.08).toLocaleString()}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>${(cart.total * 1.08).toLocaleString()}</span>
            </div>
            
            <button className={styles.checkoutBtn}>
              Proceed to Checkout
            </button>
            
            <Link href="/" className={styles.continueShoppingLink}>
              Continue Shopping
            </Link>
            
            <button onClick={clearCart} className={styles.clearCartBtn}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}