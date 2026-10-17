// If your connection is bad, the script might stop early
(async () => {
  const LIMIT = 500; // how many bookmarks will be deleted
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let removed = 0;
  let idleRounds = 0;

  while (removed < LIMIT && idleRounds < 5) {
    const buttons = document.querySelectorAll('[data-testid="removeBookmark"]');

    if (buttons.length) {
      idleRounds = 0;
      for (const b of buttons) {
        if (removed >= LIMIT) break;
        b.click();
        removed++;
        await sleep(400); // 0.4s per deleted bookmark
      }
      console.log(`Removed: ${removed}`);
    } else {
      idleRounds++;
    }

    window.scrollTo(0, document.body.scrollHeight);
    await sleep(800);
  }

  console.log(`Done. Total removed: ${removed}`);
})();
