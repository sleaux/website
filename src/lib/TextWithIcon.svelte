<script>
    export let text = "";
    export let image = "";
</script>

<div
    class="flex w-fit items-center gap-2 rounded-sm bg-gray-100 px-1 py-0.5 outline outline-1 outline-gray-300"
>
    <img src={image} alt="icon" class="size-4" />
    <p class="whitespace-nowrap">{text}</p>
</div>
