<script>
  let classes = "";
  let icon;
  let title;
  let desc = `The point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using 'Content here, content 
              here', making it look like readable English.`;

  export { classes as class, icon, title, desc };
</script>

<div class="px-6 py-5 bg-white rounded-lg shadow-md text-center {classes}">
  <header class="mb-2">
    <i class="icon text-3xl">{icon}</i>
    <h3 class="font-semibold">{title}</h3>
  </header>
  <article class="text-gray-600">{desc}</article>
</div>
