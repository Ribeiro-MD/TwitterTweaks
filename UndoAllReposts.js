// If your connection is bad, the script might stop early
(async () => {
  const LIMIT = 500; // how many reposts will be undone
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let removed = 0;

  // Phase 1: scroll down until the page stops growing (loads everything)
  let lastHeight = 0;
  let sameRounds = 0;
  while (sameRounds < 4) {
    window.scrollTo(0, document.body.scrollHeight);
    await sleep(1500);
    const h = document.body.scrollHeight;
    sameRounds = h === lastHeight ? sameRounds + 1 : 0;
    lastHeight = h;
  }
  console.log("Page fully loaded, starting to undo reposts...");

  // Phase 2: go from the bottom to the top, undoing what is visible
  while (removed < LIMIT) {
    const buttons = document.querySelectorAll('[data-testid="unretweet"]');

    for (const b of buttons) {
      if (removed >= LIMIT) break;
      b.click();
      await sleep(300); // wait for the confirm menu to open
      const confirm = document.querySelector('[data-testid="unretweetConfirm"]');
      if (confirm) {
        confirm.click();
        removed++;
      }
      await sleep(500); // 0.5s per undone repost
    }

    if (window.scrollY === 0) break; // reached the top
    window.scrollBy(0, -window.innerHeight * 0.7); // scroll up
    await sleep(800);
  }

  console.log(`Done. Total removed: ${removed}`);
})();
