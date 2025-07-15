<template>
<NavBar />  
<div class="container mx-auto">

    <h1 class="text-4xl font-bold"> Your Cart </h1>

<div>

<div> 
<div>  
<img src="/1t.png">
 
    <h1 class="text-2xl font-bold">Product Name</h1>
     <p>Size:large</p>
     <p>Color:white</p>
     <p>Price: $100</p>
    </div>

<div>
    <h1> Trash </h1>

<div > <span>COUNT</span>  </div>
</div>

</div>

</div>
</div>


<TheFooter />
</template>
<script setup>
  
  import NavBar from '~/components/NavBar.vue';
import TheFooter from '~/components/TheFooter.vue';

</script>