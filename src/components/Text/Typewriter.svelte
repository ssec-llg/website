<script>
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let visible = false;
  let classes = "";
  let speed = 80;
  let auto = false;

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

  function onFinish() {
    dispatch("finish");
  }

  if (auto) {
    onMount(() => {
      visible = true;
    });
  }

  export { classes as class, speed, visible, auto };
</script>

{#if visible}
  <div class={classes} in:typewriter on:introend={onFinish}>
    <slot />
  </div>
{/if}
