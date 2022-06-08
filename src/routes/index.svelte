<script lang="ts">
  import BannerComponent from "../components/banner/BannerComponent.svelte";
  import CountdownComponent from "../components/countdown/CountdownComponent.svelte"
  import GalleryComponent from "../components/gallery/GalleryComponent.svelte";
  import Meta from "../components/meta/Meta.svelte";

  import dotenv from "dotenv";
  dotenv.config();

  import type { MetaProps } from "../components/meta/MetaProps";

  const { npm_package_name, npm_package_version } = process.env;

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
<p class="text-right slide-up">{npm_package_name} {npm_package_version}</p>