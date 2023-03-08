<script setup lang="ts">
import MemberHeader from './MemberHeader.vue'
import { ref, onMounted, Ref } from 'vue'
import { MemberEntity } from './model/memberEntity';
// import { members } from './api/member';
import { fetchMembersAsync } from './api/index'
import MemberRow from './MemberRow.vue'

const membersRef:Ref<MemberEntity[]> = ref([])

onMounted(async () => {
  const data = await fetchMembersAsync()
  membersRef.value = data
    // .then(items => {
    //   membersRef.value = items
    // })
  // membersRef.value = members
})
</script>

<template>
 <div class="row">
  <h2>Members Page</h2>
  <table class="table">
    <thead>
      <MemberHeader />
    </thead>
    <tbody>
      <MemberRow 
        v-for="member in membersRef"
        :key="member.id"
        :member="member" />
      <!-- <tr v-for="member in membersRef" :key="member.id">
        <td>
          <img :src="member.avatar_url" alt="">
        </td>
        <td>
          {{ member.id }}
        </td>
        <td>
          {{ member.login }}
        </td>
      </tr> -->
    </tbody>
  </table>
 </div>
</template>

<style scoped>

</style>
