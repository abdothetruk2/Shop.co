<template>


  <NavBar />

  <div class="container grid grid-cols-2">

    <div class="mt-10">
      <pre class="text-[60px] font-bolder font-serif ">FIND CLOTHES 
THAT MATCHES 
YOUR STYLE</pre>

      <p class="mt-5 word-wrap">Browse through our diverse range of meticulously crafted garments, designed to bring out
        your individuality and cater to your sense of style.</p>

      <button
        class="mt-5 border-2 border-white  bg-black text-white  p-5 rounded-full hover:bg-gray-700 hover:text-black">
        Shop Now</button>

      <div class="mt-5 flex justify-evenly items-center   ">




        <span class="text-2xl font-bold">200</span>
        <span class="text-2xl font-bold">2,000</span>
        <span class="text-2xl font-bold">30,000</span>


      </div>

      <div class="mt-5 flex justify-evenly items-center">


        <span class="text-2xl font-bold">Products</span>
        <span class="text-2xl font-bold">Happy Customers</span>
        <span class="text-2xl font-bold">Reviews</span>

      </div>


    </div>


    <div style="background-image: url('/rec.png');" class="w-full h-auto bg-cover bg-right  mt-10">


    </div>




  </div>

  <div class="container h-[122px]  mt-20 bg-black">

    <div class=" flex  justify-evenly items-center h-full text-white">
      <img src="/1.png" alt="Hero Image" class=" " />

      <img src="/2.png" alt="Hero Image" class=" " />
      <img src="/3.png" alt="Hero Image" class=" " />
      <img src="/4.png" alt="Hero Image" class=" " />
      <img src="/5.png" alt="Hero Image" class=" " />

    </div>
  </div>

  <div class="container mt-10 text-center">

    <h1 class="text-3xl font-bold mb-5">New Arrivals</h1>

    <div class="columns-4 flex">

      <div class="text-center m-auto" v-for="items in newarrivals" :key="items.id">
        <img :src="items.image" alt="Product Image" class="w-[200px] h-[200px] object-cover" />
        <p class="bold">{{ items.name }}</p>
        <div>Rating: <span class="text-yellow-500">{{ items.rating }} ★</span></div>
        <p class="text-gray-500">{{ items.price }}</p>
        <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
      </div>

    </div>
  </div>

  <hr class="my-10 border-gray-300 w-200 m-auto" />
  <div class="container mt-10 text-center">

    <h1 class="text-3xl font-bold mb-5">TOP SELLING</h1>

    <div class="columns-4 text-center flex">

      <div class="text-center m-auto" v-for="items in newarrivals" :key="items.id">
        <img :src="items.image" alt="Product Image" class="w-[200px] h-[200px] object-cover" />
        <p class="bold">{{ items.name }}</p>
        <div>Rating: <span class="text-yellow-500">{{ items.rating }} ★</span></div>
        <p class="text-gray-500 m-auto">{{ items.price }}</p>
        <button class="mt-2 bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600">Add to Cart</button>
      </div>

    </div>
  </div>

  <hr class="my-10 border-gray-300 w-200 m-auto" />

  <div class="container mt-10 text-center bg-gray-50 p-5">
    <h1 class="text-3xl font-bold mb-5 p-5 bg-gray-300">BROWSE BY dress STYLE</h1>
    <div class="columns-2 ">
      <img src="/61.png" alt="Dress Style" class="w-[400px] h-[300px] object-cover" />
      <img src="/62.png" alt="Dress Style" class="w-[400px] h-[300px] object-cover object-center" />
      <img src="/63.png" alt="Dress Style" class="w-[400px] h-[300px] object-cover object-right" />
      <img src="/64.png" alt="Dress Style" class="w-[400px] h-[300px] object-cover object-right" />


    </div>




  </div>


  <div class="container mt-10 text-center  ">

    <hr class="my-10 border-gray-300 w-200 m-auto" />
    <h1 class="text-3xl font-bold mb-5">OUR HAPPY CUSTOMERS</h1>

    <div class="flex  columns-4  items-center    justify-center space-y-4">
      <div class="flex justify-center items-center space-x-4" v-for="review in happy" :key="review.id">
        <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
          <span class="text-white font-bold">{{ review.name.charAt(0) }}</span>
        </div>
        <div>
          <p class="font-semibold">{{ review.name }}</p>
          <p class="text-gray-600">{{ review.review }}</p>
          <div class="text-yellow-500">
            <span v-for="n in review.rating" :key="n" class="fa fa-star"></span>
          </div>
        </div>
      </div>




    </div>

  </div>





 <TheFooter />
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import  TheFooter  from '../components/TheFooter.vue';
var newarrivals = [
  { id: 1, name: 'T-shirt', price: '$29.99', rating: 4, image: '/1t.png' },
  { id: 2, name: 'skinny', price: '$39.99', rating: 5, image: '/2t.png' },
  { id: 3, name: 'checkered', price: '$49.99', rating: 3, image: '/3t.png' },
  { id: 4, name: 'stever-tshirt', price: '$59.99', rating: 4, image: '/4t.png' },

];

var happy = [{ id: 1, name: 'James', review: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”', rating: 5 },
{ id: 2, name: 'Abdo', review: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”', rating: 4 },
{ id: 3, name: 'Sherif', review: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.”', rating: 5 },
{ id: 4, name: 'Shams', review: '"Highly recommend this store"', rating: 5 }];


</script>