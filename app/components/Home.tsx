"use client";

const Home = () => {
  console.log("Home");
  return (
    <div className="mx-auto max-w-lg px-4 text-center">
      <h1 className="text-2xl font-semibold text-red-400">Home</h1>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        This app registers a{" "}
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          service worker
        </span>{" "}
        that caches an offline page. Load this site once while online, then in
        DevTools turn on{" "}
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          Offline
        </span>{" "}
        and reload — you should see the custom “no connection” page instead of
        the browser’s default error.
      </p>
    </div>
  );
};

export default Home;
