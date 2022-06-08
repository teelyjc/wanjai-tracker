<script lang="ts">
	import { isBirthday } from "../store/isBirthday";
  import moment from "moment";  
  import { onMount } from "svelte";

  const monsicha_birth = moment([2002, 5, 18]);
  const now_date = moment();

  let isPinBirthday = false;

  if (
    (monsicha_birth.date() == now_date.date()) &&
    (monsicha_birth.month() == now_date.month())
  ) {
    isBirthday.update(n => true);
  } else {
    isBirthday.update(n => false);
  }

  onMount(async () => {
    isBirthday.subscribe(value => isPinBirthday = value)
  })

  let showDetail = false;

  let monsichaAge = {
    second: moment().diff(monsicha_birth, 'second'),
    minute: moment().diff(monsicha_birth, 'minute'),
    hour: moment().diff(monsicha_birth, 'hour'),
    day: moment().diff(monsicha_birth, 'day'),
    month: moment().diff(monsicha_birth, 'month'),
    year: moment().diff(monsicha_birth, 'year'),
    age: moment().diff(monsicha_birth, 'year'),
  }

  setInterval(() => {
    monsichaAge.second = moment().diff(monsicha_birth, 'second');
    monsichaAge.minute = moment().diff(monsicha_birth, 'minute');
    monsichaAge.hour = moment().diff(monsicha_birth, 'hour');
    monsichaAge.day = moment().diff(monsicha_birth, 'day');
    monsichaAge.month = moment().diff(monsicha_birth, 'month');
    monsichaAge.year = moment().diff(monsicha_birth, 'year');
    monsichaAge.age = moment().diff(monsicha_birth, 'year');
  }, 1000)
</script>

<div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 space-x-0 lg:space-x-4 mx-4 lg:mx-0 lg:justify-center slide-up">
  <div class="rounded-lg px-12">
    <img class="h-80 mx-auto hover:animate-pulse" src="/images/monsicha_profile.jpeg" alt="monsicha_picture" />
  </div>
  <div class="border-t-2 border-r-2 border-blue-500 rounded-bl-lg shadow-xl p-8">
    {#if showDetail}
    <p class="text-xl lg:text-2xl slide-up">
      ขณะนี้อายุ { (monsichaAge.second).toLocaleString() } วินาที
    </p>
    <p class="text-xl lg:text-2xl slide-up">
      ขณะนี้อายุ { monsichaAge.minute.toLocaleString() } นาที
    </p>
    <p class="text-xl lg:text-2xl slide-up">
      ขณะนี้อายุ { monsichaAge.hour.toLocaleString() } ชั่วโมง
    </p>
    <p class="text-xl lg:text-2xl slide-up">
      ขณะนี้อายุ { monsichaAge.day.toLocaleString() } วัน
    </p>
    <p class="text-xl lg:text-2xl slide-up">
      ขณะนี้อายุ { (monsichaAge.month).toLocaleString() } เดือน
    </p>
    {/if}
    <p class="text-xl lg:text-2xl">
      ขณะนี้อายุ { monsichaAge.year.toLocaleString() } ปี
    </p>
    <hr class="my-2"/>
    <p class="text-md lg:text-lg pb-2">
      {
        !isPinBirthday
        ? monsicha_birth.format("LL")
        : "วันนี้เป็นวันเกิดของปิ่น !"
      }
    </p>
    <button
      class="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      on:click="{() => showDetail = !showDetail}"
    >
      ดูเพิ่มเติม
    </button>
  </div>
</div>

<!-- ----------------
  From 18 JUNE 2002 
  Until 18 June 2022 
--------------------->