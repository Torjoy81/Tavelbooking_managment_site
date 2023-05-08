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
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4 mt-4">
        <FormTextInput
          label-name="First Name"
          type="text"
          v-model="register.firstName"
          :erorr-msg="
            v$.firstName.$error === true ? v$.firstName.$errors[0].$message : ''
          "
        />
        <FormTextInput
          label-name="Last Name"
          type="text"
          v-model="register.lastName"
          :erorr-msg="
            v$.lastName.$error === true ? v$.lastName.$errors[0].$message : ''
          "
        />
        <FormTextInput
          label-name="Email"
          type="email"
          v-model="register.email"
          :erorr-msg="
            v$.email.$error === true ? v$.email.$errors[0].$message : ''
          "
        />
        <FormTextInput
          label-name="Phone Number"
          type="text"
          v-model="register.phone"
          :erorr-msg="
            v$.phone.$error === true ? v$.phone.$errors[0].$message : ''
          "
        />
        <FormTextInput
          label-name="Password"
          type="password"
          v-model="register.password"
          :erorr-msg="
            v$.password.$error === true ? v$.password.$errors[0].$message : ''
          "
        />
        <FormTextInput
          label-name="Confirm Password"
          type="password"
          v-model="register.confirm_pass"
          :erorr-msg="
            v$.confirm_pass.$error === true
              ? v$.confirm_pass.$errors[0].$message
              : ''
          "
        />
        <BaseButton button-name="submit" variant="solid" type="submit" />
      </form>
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
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

const register = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirm_pass: "",
});

const rules = computed(() => {
  return {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    phone: { required },
    password: { required, minLength: minLength(8) },
    confirm_pass: {
      required,
      sameAs: helpers.withMessage(
        "value must be equal with password field",
        sameAs(register.value.password)
      ),
    },
  };
});

const v$ = useVuelidate(rules, register);

function onSubmit() {
  v$.value.$validate();
  if (!v$.value.$error) {
    const { data } = useFetch("/api/user", {
      method: "POST",
      body: register.value,
    });
  }
}
</script>
