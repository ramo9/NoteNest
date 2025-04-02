<template>
  <div class="flex bg-black h-screen">
    <!-- sidebar -->
     <div></div>
    <div class="bg-zinc-900 w-[516px] p-12 flex flex-col justify-center">
      <h1 class="flex"><i class="text-amber-500 ri-pencil-fill"></i>
        <p class="text-white">Note</p>
        <p class="text-amber-500">Nest</p>
      </h1>
      <h1 class="text-white font-bold text-lg mt-8">Sign up for a free account</h1>
      <p class="text-white text-sm mt-0.5">Already registered? <span class="text-amber-500 underline">log in</span> to
        your account</p>
      <form class="mt-5">
        <div class="flex flex-col">
          <label class="text-sm text-white block mb-0.5" for="">Email Address</label>
          <input class="block w-full bg-[#27272A] border border-[#3f3f46] rounded text-white font-sm px-4 py-1"
            type="text" placeholder="Enter email address">
        </div>
        <div class="flex flex-col mt-5">
          <label class="text-sm text-white block mb-0.5" for="">Password</label>
          <input class="block w-full bg-[#27272A] border border-[#3f3f46] rounded text-white font-sm px-4 py-1"
            type="password" placeholder="Enter password">
        </div>
        <button type="button" class="mt-5 w-full rounded-full bg-amber-500 py-2 font-bold text-sm ">Sign Up  <i
            class="ri-arrow-right-long-line"></i></button>
      </form>
    </div>
    <!-- /sidebar -->
    <!-- note intruduction -->
    <div></div>
    <!-- note intruduction -->

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>