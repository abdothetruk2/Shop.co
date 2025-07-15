<template>
  <nav class="mx-auto flex justify-evenly items-center p-4 mt-5 bg-white shadow-md">
    <div class="container flex space-x-12 items-center columns-3">
      <h1 class="text-2xl font-bold">Shop.co</h1>
      <div class="flex space-x-4">
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/sale">OnSale</NuxtLink>
        <NuxtLink to="/newarrivals">New Arrivals</NuxtLink>
        <NuxtLink to="/brands">Brands</NuxtLink>
      </div>
      <input
        type="search"
        placeholder="Search products..."
        class="search-input rounded-sm w-120 border-2"
      />
      <div class="flex items-center space-x-8">
        <NuxtLink to="/" aria-label="Home"><i class="fa fa-home" /></NuxtLink>
        <NuxtLink to="/cart" class="relative" aria-label="Cart">
          <i class="fa fa-shopping-cart" />
          <span
            v-if="cartCount"
            class="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1"
          >{{ cartCount }}</span>
        </NuxtLink>
        <NuxtLink to="/login" aria-label="Login"><i class="fa fa-user" /></NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const cartItems = useState('cart-items', () => [])
const cartCount = computed(() =>
  cartItems.value.reduce((sum, it) => sum + (it.qty || 0), 0)
)
</script>
