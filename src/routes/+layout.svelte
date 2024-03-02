<script>
    import "../app.css";
</script>

<div
    class="fixed flex h-screen w-screen justify-center bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover bg-no-repeat"
>
    <div class="fixed h-full w-full max-w-5xl text-slate-50">
        <nav class="flex h-12 flex-row items-center justify-end space-x-4 ">
            <a href="/">home</a>
            <a href="/uses">uses</a>
        </nav>
        <main><slot /></main>
    </div>
</div>
