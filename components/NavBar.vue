<template>

<nav class="mx-auto flex justify-evenly items-center p-4 mt-5 bg-white shadow-md">

 <div class="container flex space-x-12 items-center columns-3">
<h1  class="text-2xl font-bold">Shop.co</h1>

<div class="flex space-x-4 ">
<NuxtLink to="/shop">Shop</NuxtLink>
<NuxtLink to="/sale">OnSale</NuxtLink>
<NuxtLink to="/newarrivals">New Arrivals</NuxtLink>
<NuxtLink to="/brands">Brands</NuxtLink>

</div>

<input type="search" placeholder="Search products..." class="search-input rounded-sm w-120 border-2  " />

<div class="flex items-center space-x-8 ">
<i class="fa fa-home" aria-hidden="true"></i>
<i class="fa fa-user" aria-hidden="true"></i>
</div>
</div>
</nav>



</template>