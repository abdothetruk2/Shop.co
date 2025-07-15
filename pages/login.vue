<template>
  <NavBar />
  <div class="container mx-auto mt-10 max-w-md">
    <h1 class="text-3xl font-bold mb-6">Login</h1>
    <form @submit.prevent="submit" class="space-y-4">
      <input v-model="email" type="email" placeholder="Email" class="w-full border p-2 rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full border p-2 rounded" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
    </form>
  </div>
  <TheFooter />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from '#app'
import NavBar from '~/components/NavBar.vue'
import TheFooter from '~/components/TheFooter.vue'

const email = ref('')
const password = ref('')
const user = useState('user', () => null)
const router = useRouter()

function submit() {
  user.value = { email: email.value }
  router.push('/')
}
</script>
