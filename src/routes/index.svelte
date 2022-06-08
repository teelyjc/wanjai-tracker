<script lang="ts">
  import BannerComponent from "../components/banner/BannerComponent.svelte";
  import CountdownComponent from "../components/countdown/CountdownComponent.svelte"
  import GalleryComponent from "../components/gallery/GalleryComponent.svelte";
  import Meta from "../components/meta/Meta.svelte";

  import type { MetaProps } from "../components/meta/MetaProps";

  const metadata: MetaProps = {
    title: "เค้าดาวน์",
    description: "นับถอยหลังอายุหวานใจ",
  }
</script>

<Meta { metadata } />

<div class="space-y-8">
  <BannerComponent />
  <CountdownComponent />
  <GalleryComponent />
</div>