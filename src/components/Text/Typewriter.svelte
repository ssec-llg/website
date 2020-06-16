<script>
  let visible = false;
  let classes = "";
  let speed = 80;

  function typewriter(node) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }

  export { classes as class, speed, visible };
</script>

{#if visible}
  <span class={classes} in:typewriter>
    <slot />
  </span>
{/if}
