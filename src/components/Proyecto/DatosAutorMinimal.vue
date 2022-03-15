<template>
  <div class="inline-flex items-center gap-x-3">
    <img
      class="w-16 h-16 flex-shrink-0 bg-amber-400 rounded-full object-cover"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="'Avatar ' + autor.nombre"
    />
    <div class="text-sm text-slate-600">
      <h3 class="font-bold text-slate-900">Campbell Smith Christine</h3>
      <h4 class="font-medium">
        Ingenieria de Sistemas e Informática <strong>(FC)</strong>
      </h4>
      <p>5 proyectos encontrados</p>
    </div>
    <div class="flex items-center space-x-1 text-slate-400">
      <RedSocialLink to="#"> <PhoneIcon class="h-5 w-5" /> </RedSocialLink>
      <RedSocialLink to="#"> <MailIcon class="h-5 w-5" /> </RedSocialLink>
      <RedSocialLink to="#">
        <svg class="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor">
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </RedSocialLink>
    </div>
  </div>
</template>

<script>
import RedSocialLink from "../Link/RedSocialLink.vue";
import { PhoneIcon, MailIcon } from "@heroicons/vue/solid";
export default {
  components: { RedSocialLink, PhoneIcon, MailIcon },
};
</script>
