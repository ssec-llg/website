<script>
  import { observeElement } from "../utils/actions";
  import Main from "../components/Section/Main/Main.svelte";
  import Service from "../components/Section/Service/Service.svelte";

  observeElement("section");
</script>

<svelte:head>
  <title>Silampari Sriwijaya Eye Centre Lubuklinggau</title>
</svelte:head>

<Main />

<Service />
