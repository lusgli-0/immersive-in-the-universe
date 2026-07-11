// pseudorandom circle move by setting the start-move time
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flow-bg .c1, .flow-bg .c2, .flow-bg .c3, .flow-bg .c4').forEach((c) => {
    const randomDelay = `-${Math.random() * 1500}s`;
    c.style.setProperty('--c-delay', randomDelay);
  });
});