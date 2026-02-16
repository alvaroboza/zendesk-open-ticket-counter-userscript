// ==UserScript==
// @name         Show open ticket counter in Zendesk Chrome App
// @namespace    *.zendesk.com
// @version      0.2
// @description  Show count of open tickets (assignee:me) as an app badge in the installed Zendesk Chrome App
// @author       alvaro.boza@datadoghq.com
// @match        https://*.zendesk.com/agent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zendesk.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  async function getOpenCount() {
    try {
      const q = 'type:ticket status:open assignee:me';
      const resp = await fetch('/api/v2/search/count?query=' + encodeURIComponent(q), {
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json' }
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const value = (data && data.count && typeof data.count.value === 'number')
        ? data.count.value
        : (typeof data.count === 'number' ? data.count : 0);
      return value || 0;
    } catch (e) {
      console.error('Zendesk open count fetch failed:', e);
      return 0;
    }
  }

  async function updateBadgeIcon() {
    const count = await getOpenCount();
    if (navigator.setAppBadge) {
      try {
        if (count > 0) {
          await navigator.setAppBadge(count);
        } else {
          if (navigator.clearAppBadge) await navigator.clearAppBadge();
          else await navigator.setAppBadge(0);
        }
      } catch (_) { /* ignore badge errors */ }
    }
  }

  updateBadgeIcon();
  setInterval(updateBadgeIcon, 30000); // every 30s to avoid rate limits
})();
