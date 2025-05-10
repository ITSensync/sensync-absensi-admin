<script setup>
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="pinkRed">
      <CardBox :class="cardClass">
        <div class="space-y-3 flex flex-col justify-center items-center">
          <h1 class="mb-4 font-bold text-zinc-800 font-poppins text-2xl">ERROR</h1>
          <h1
            class="mb-4 font-bold font-poppins text-zinc-900 text-8xl dark:text-brand-500/90 xl:text-9xl"
          >
            401
          </h1>

          <p class="mt-5 mb-6 text-xl text-zinc-800 font-poppins">
            You dont have permission to access this page!
          </p>
          <a href="/login" class="underline text-blue-400">Go to Login Page</a>
        </div>

        <!-- <template #footer>
          <BaseButtons>
            <BaseButton label="Done" to="/dashboard" color="danger" />
          </BaseButtons>
        </template> -->
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
