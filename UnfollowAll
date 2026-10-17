// If your connection is bad, the script might stop early
(async () => {
  const LIMIT = 1000; // how many accounts will be unfollowed
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let removed = 0;
  let idleRounds = 0;

  while (removed < LIMIT && idleRounds < 5) {
    const buttons = document.querySelectorAll('[data-testid$="-unfollow"]');

    if (buttons.length) {
      idleRounds = 0;
      for (const b of buttons) {
        if (removed >= LIMIT) break;
        b.click();
        await sleep(150); // wait for the confirm popup to open
        const confirm = document.querySelector('[data-testid="confirmationSheetConfirm"]');
        if (confirm) {
          confirm.click();
          removed++;
        }
        await sleep(400); // 0.4s per unfollow
      }
      console.log(`Unfollowed: ${removed}`);
    } else {
      idleRounds++;
    }

    window.scrollTo(0, document.body.scrollHeight);
    await sleep(700);
  }

  console.log(`Done. Total unfollowed: ${removed}`);
})();
