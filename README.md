# Zendesk Open Ticket Counter (Tampermonkey Script)

Userscript that shows your open Zendesk tickets (`status:open assignee:me`) as an app badge in Chrome.

<img width="93" height="99" alt="image" src="https://github.com/user-attachments/assets/e0a91207-e3c1-4aef-a56f-d9ab37ea9bfc" />

## Repository Contents

- `show-open-ticket-counter-zendesk.user.js`

## Requirements

- Google Chrome Zendesk Desktop App
     - Using "Install Page as App..." button
       <img width="768" height="51" alt="image" src="https://github.com/user-attachments/assets/65402be5-ca2e-4b22-8508-a92a96d49f7e" />
- [Tampermonkey](https://www.tampermonkey.net/)
- Update your Tampermonkey security settings:
<img width="801" height="464" alt="image" src="https://github.com/user-attachments/assets/b03a1019-5d71-4ade-8935-192f7be08a4d" />

## Install in Tampermonkey (from local repo)

1. Open Chrome and install Tampermonkey if you do not have it yet.
2. Open the Tampermonkey dashboard.
3. Go to `Utilities`.
4. In `Import from file`, choose:
   - `show-open-ticket-counter-zendesk.user.js`
5. Review the script and click `Install`.

## Verify It Works

1. Open your Zendesk Agent view.
2. Wait up to 30 seconds (script refresh interval) or switch tab focus.
3. Confirm:
   - Chrome app badge shows your open assigned ticket count

## Disclaimer

The logic was completely vibecoded, do your own research if you plan to use it.
