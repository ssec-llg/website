<script>
  import { breakpoints } from "../stores/app";
  import { observeElement } from "../utils/actions";
  import Main from "../components/Section/Main/Main.svelte";
  import Service from "../components/Section/Service/Service.svelte";
  import Doctor from "../components/Section/Doctor/Doctor.svelte";
  import Schedule from "../components/Section/Schedule/Schedule.svelte";
  import Contact from "../components/Section/Contact/Contact.svelte";

  const threshold = $breakpoints.md ? 0.5 : 0.3;
  observeElement("section", threshold);
</script>

<svelte:head>
  <title>Silampari Sriwijaya Eye Centre Lubuklinggau</title>
</svelte:head>

<Main />

<Service />

<Doctor />

<Schedule />

<Contact />
