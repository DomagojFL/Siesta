<template>
  <div id="events" class="w-full h-full text-center px-5 py-4 mt-10 sm:-mt-10">
    <div data-aos="fade-up" class="text-3xl font-bold py-8">Događaji</div>
    <div class="w-full h-full sm:px-10 flex flex-col sm:flex-row gap-4">
      <div data-aos="fade-up" class="h-1/2 sm:h-full">
        <nuxt-img
          class="w-full h-full object-cover"
          src="/event.jpg"
          alt="Događaji"
        />
      </div>
      <div class="h-1/2 sm:h-full py-4 flex flex-col items-center">
        <div data-aos="fade-up" class="py-4 sm:py-6 text-xl font-bold">
          Organiziraj svoj događaj
        </div>
        <div data-aos="fade-up" data-aos-delay="50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia
          earum eius cumque. Excepturi commodi voluptates, quibusdam quia
          repellat laudantium quasi temporibus, molestiae, officiis autem
          provident tempore illum odit blanditiis.
        </div>
        <button
          data-aos="fade-up"
          data-aos-delay="50"
          class="
            mt-4
            bg-yellow-400
            text-black
            transform
            scale-100
            hover:scale-110
            transition-all
            duration-200
            ease-in-out
            py-4
            px-4
            rounded-xl
            focus:outline-none
            font-bold
          "
        >
          Organiziraj
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>