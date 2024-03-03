<script>
    import "../app.css";
</script>

<div class="fixed flex h-screen w-screen justify-center bg-white bg-cover bg-no-repeat">
    <div class="fixed h-full w-full max-w-5xl">
        <nav class="flex h-12 flex-row items-center justify-end space-x-4">
            <a href="/">home</a>
            <a href="/uses">uses</a>
        </nav>
        <main><slot /></main>
    </div>
</div>
