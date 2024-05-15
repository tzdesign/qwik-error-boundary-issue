import { Slot, component$, useErrorBoundary, useTask$ } from "@builder.io/qwik";

export default component$(() => {
  const boundary = useErrorBoundary();

  useTask$(({ track }) => {
    const error = track(() => boundary.error);
    if (error === undefined) return;
    console.error(`Boom ${error.message}`);
  });

  return (
    <>
      {boundary.error && (
        <span class="errorBoundary" style={{ display: "none" }}>
          {boundary.error.message}
        </span>
      )}
      <Slot />
    </>
  );
});
