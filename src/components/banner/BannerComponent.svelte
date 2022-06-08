<script lang="ts">
	import { onMount } from 'svelte';
	import { isBirthday } from '../store/isBirthday';

  let isPinBirthday: boolean;

  onMount( async () =>{
    isBirthday.subscribe(value => isPinBirthday = value);
  });
</script>

<div class="flex flex-col items-center border-t-4 border-l-4 border-blue-400 py-4 rounded-br-lg shadow-lg slide-up">
  <h1 class="text-3xl md:text-4xl lg:text-5xl hover:skew-y-2 hover:translate-y-6">Monsicha Sutham (ปิ่น) { isPinBirthday ? "🎉" : "💁🏻‍♀️"}</h1>
</div>