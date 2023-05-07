<template>
  <NuxtLayout name="form">
    <template #headerForm>
      <h2 class="font-bold text-2xl text-[#002D74]">Sign UP</h2>
      <p
        className="mt-4 font-sans text-xs font-normal  leading-relaxed text-gray-700 antialiased"
      >
        Enter your details to register.
      </p>
    </template>
    <template #default>
      <FormTextInput
        label-name="First Name"
        type="text"
        v-model="register.firstName"
      />
      <FormTextInput
        label-name="Last Name"
        type="text"
        v-model="register.lastName"
      />
      <FormTextInput label-name="Email" type="email" v-model="register.email" />
      <FormTextInput
        label-name="Password"
        type="password"
        v-model="register.password"
      />
      <FormTextInput
        label-name="Confirm Password"
        type="password"
        v-model="register.confirm_pass"
      />
    </template>
    <template #image>
      <div class="md:block hidden w-1/2">
        <NuxtImg
          src="img/signUpimg.jpeg"
          format="webp"
          class="rounded-2xl"
          width="364"
          height="664"
        />
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
const register = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_pass: "",
});
</script>
