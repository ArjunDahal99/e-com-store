import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage, devtools } from "zustand/middleware";


// Define placeholder types



const useCart = create(
    persist((set, get) => ({
        items: [],
        addItem: (data) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);
            if (existingItem) {
                return toast('Item already in cart.');
            }

            set({ items: [...get().items, data] });
            toast.success('Item added to cart.');
        },
        removeItem: (id) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success('Item removed from cart.');
        },
        removeAll: () => set({ items: [] }),
    }),
        {
            name: 'cart-storage',
            getStorage: () => createJSONStorage(() => localStorage)
        })
);

export default useCart;