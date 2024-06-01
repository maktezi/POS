import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

function toasts(message: string, type: any) {
  toast(message, {
    autoClose: 2000,
    theme: "auto",
    type: type,
    transition: "slide"
  });
}

export const deleteCartItem = () => { toasts("Successfully Deleted!", "error") }
export const cartClear = () => { toasts("Cart cleared!", "error") }
export const paymentSelect = () => { toasts("Successfully Paid!", "info") }
export const addProductToCart = () => { toasts("Added Item!", "success") }
export const removeProductToCart = () => { toasts("Item Removed!", "warning") }
