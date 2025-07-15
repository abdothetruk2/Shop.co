<template>
  <NavBar />
  <div class="container mx-auto py-10">
    <h1 class="text-4xl font-bold mb-6">Your Cart</h1>
    <div v-if="cartItems.length" class="space-y-6">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex items-center justify-between border rounded p-4"
      >
        <div class="flex items-center space-x-4">
          <img :src="item.image" class="w-20 h-20 object-cover" />
          <div>
            <h2 class="text-lg font-semibold">{{ item.name }}</h2>
            <p class="text-sm text-gray-600">Size: {{ item.size }}</p>
            <p class="text-sm text-gray-600">Color: {{ item.color }}</p>
            <p class="text-sm font-semibold">Price: ${{ item.price }}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button @click="decrease(item)" class="px-2 border rounded">-</button>
          <span>{{ item.qty }}</span>
          <button @click="increase(item)" class="px-2 border rounded">+</button>
        </div>
        <button @click="remove(item)" class="text-red-600">Remove</button>
      </div>
      <div class="text-right font-bold text-xl">
        Total: ${{ total }}
      </div>
    </div>
    <div v-else class="text-center py-20">Your cart is empty.</div>
  </div>
  <TheFooter />
</template>

<script setup>
import { computed } from 'vue'
import NavBar from '~/components/NavBar.vue'
import TheFooter from '~/components/TheFooter.vue'

const cartItems = useState('cart-items', () => [
  { id: 1, name: 'T-shirt', size: 'Large', color: 'White', price: 100, qty: 1, image: '/1t.png' }
])

function increase(item) {
  item.qty++
}

function decrease(item) {
  if (item.qty > 1) item.qty--
}

function remove(item) {
  const idx = cartItems.value.indexOf(item)
  if (idx !== -1) cartItems.value.splice(idx, 1)
}

const total = computed(() =>
  cartItems.value.reduce((sum, it) => sum + it.price * it.qty, 0)
)
</script>
