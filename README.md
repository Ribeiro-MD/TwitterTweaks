# TwitterTweaks

Small browser console scripts to clean up your X (Twitter) account in bulk.

## Scripts

### `RemoveBookmarks`
Removes your saved bookmarks.
- **Run on:** `x.com/i/bookmarks`
- **Setting:** `LIMIT` = how many bookmarks to remove per run.

### `UndoAllReposts`
Undoes your reposts. It first scrolls down to load everything, then goes from the bottom to the top undoing them.
- **Run on:** your profile page (`x.com/your_username`)
- **Setting:** `LIMIT` = how many reposts to undo per run.
- Quote posts are not affected (they are your own posts, delete them manually).

### `UnfollowAll
Unfollows the accounts you follow.
- **Run on:** `x.com/your_username/following`
- **Setting:** `LIMIT` = how many accounts to unfollow per run.

## How to use

1. Open the correct page for the script (see above).
2. Press `F12` and open the **Console** tab.
3. Copy the full script, paste it into the console and press `Enter`.
4. Wait until the console prints `Done`.

If your browser blocks pasting, type `allow pasting` and press `Enter` first, then paste the script.

To stop a script at any time, reload the page (`F5`).

## Notes

- If your connection is poor, a script might stop early. Just run it again.
- Unfollowing too fast can get your account temporarily rate limited. If it stops working, wait a while and run it again, or lower `LIMIT` and do it in batches.
- These scripts rely on X's page structure, so they may break if X changes it.
- Use at your own risk. These actions can't be undone.
