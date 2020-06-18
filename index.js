document.addEventListener('DOMContentLoaded', () => {
  const animBg = new Animbg('.anim-bg');

  document.addEventListener('mousemove', (event) =>
    animBg.listenCoursorMove(event)
  );
});
