<script>
  let classes = "";
  let color;
  let icon;
  let title;
  let desc = `The point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using 'Content here, content 
              here', making it look like readable English.`;

  export { classes as class, color, icon, title, desc };
</script>

<div
  class="{classes} px-6 py-5 bg-white rounded-lg shadow-md text-center
  transition duration-300 ease-in-out transform hover:-translate-y-1
  hover:shadow-lg">
  <header class="mb-2">
    <i class="icon text-3xl {color}">{icon}</i>
    <h3 class="font-semibold">{title}</h3>
  </header>
  <article class="text-gray-600">{desc}</article>
</div>
