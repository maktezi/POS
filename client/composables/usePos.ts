import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

function showToast(message: string, type: any) {
  toast(message, {
    autoClose: 2000,
    theme: "auto",
    type: type,
    transition: "slide"
  });
}

export function deleteCartItem() {
  showToast("Successfully Deleted!", "error");
}

export function cartClear() {
  showToast("Cart cleared!", "error");
}

export function paymentSelect() {
  showToast("Successfully Paid!", "info");
}

export function addProductToCart() {
  showToast("Added Item!", "success");
}

export function removeProductToCart() {
  showToast("Item Removed!", "warning");
}
