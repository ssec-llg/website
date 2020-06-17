<script>
  import { observeElement } from "../utils/actions";
  import Main from "../components/Section/Main.svelte";
  import Service from "../components/Section/Service.svelte";

  observeElement("section");
</script>

<svelte:head>
  <title>Silampari Sriwijaya Eye Centre Lubuklinggau</title>
</svelte:head>

<Main />

<Service />
