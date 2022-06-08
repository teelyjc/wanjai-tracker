<script lang="ts">
  import { onMount } from 'svelte';
	import { isBirthday } from '../store/isBirthday';

  let isPinBirthday: boolean = false;

  const imagePath = [
    { href: "/gallery/gallery1.jpeg", class: "w-48", alt: "gallery_file_1" },
    { href: "/gallery/gallery2.jpeg", class: "w-48", alt: "gallery_file_2" },
    { href: "/gallery/gallery3.jpeg", class: "w-48", alt: "gallery_file_3" },
    { href: "/gallery/gallery4.jpeg", class: "w-48", alt: "gallery_file_4" },
  ];

  const randomImage = () => {
    return Math.floor(Math.random() * imagePath.length);
  }
  let now_image = imagePath[randomImage()];

  setInterval(() => {
    now_image = imagePath[randomImage()];
  }, 8000)

  onMount( async () =>{
    isBirthday.subscribe(value => isPinBirthday = value);
  });
</script>

<div class="flex flex-col items-center border-b-4 border-r-4 border-blue-400 py-4 rounded-br-lg shadow-lg slide-up">
  <h1 class="text-3xl">แกลเลอรี่คนสวย 🙋🏻‍♀️</h1>
  <div class="flex flex-col space-y-4">
    <div class="flex">
      <img src={now_image.href} class={now_image.class} alt={now_image.alt} />
    </div>
    <button
      class="w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
      on:click="{() => now_image = imagePath[randomImage()]}"
    >
      สุ่มรูปภาพ
    </button>
  </div>
  {#if isPinBirthday }
  <div class="px-8 lg:px-48 mt-5">
    <h1 class="text-4xl lg:text-5xl">วันนี้วันเกิดปิ่นแล้วนะ</h1>
    <p class="text-lg lg:text-2xl">
      ยังไงก็ขอให้สุขภาพร่างกายแข็งแรง สุขภาพดี มีพลัง ร่ำๆรวยๆ (เลี้ยงพี่ด้วย) 🤤 <br />
      อยู่เป็นเด็กดื้อแบบนี้ไปเรื่อยๆนะครับ 💙
    </p>
    <h1 class="text-2xl">Happy Birthday to You.</h1>
  </div>
  <img src="/images/dog_volley.gif" class="w-72 pt-2" alt="dog_volley" />
  {/if}
</div>

