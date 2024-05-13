<script>
import MockProfile from "@/components/accountComponents/MockProfile.vue";
import AccountTabs from "@/components/accountComponents/AccountTabs.vue";
export default {
  name: "AccountView",
  components: { MockProfile, AccountTabs },
  // props: {
  //   authUser: {required: true},
  // }
}
</script>

<template>

  <MockProfile/>
  <AccountTabs/>

</template>
