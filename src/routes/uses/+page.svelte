<script>
    import TextWithIcon from "$lib/TextWithIcon.svelte";
</script>

<div class="flex flex-col">
    <div class="flex justify-center"><h1>uses</h1></div>
    <img src="/uses computer.webp" alt="" />
    <div class="flex flex-col gap-4">
        <div class="flex">
            <div class="w-1/2"><h1>category 1</h1></div>
            <div class="flex flex-wrap gap-4">
                <TextWithIcon text="tmux" image="/icons/tmux.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2"><h1>category 2</h1></div>
            <div class="flex flex-wrap gap-4">
                <TextWithIcon text="tmux" image="/icons/tmux.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
                <TextWithIcon text="Visual Studio Code" image="/icons/vscode.ico" />
            </div>
        </div>
    </div>
</div>
