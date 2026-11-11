# ARC Equitea website — starter project

Welcome! This is a first working website scaffold for the 2026–27 ARC Equitea refresh.

## What's included

- A homepage (`index.html`)
- Separate pages for About, Mission, Ground rules, Events, Resources, Committee, Join, Raise a concern, Feedback and Contact
- Shared styling in `assets/styles.css`
- Shared navigation/footer behaviour in `assets/site.js`
- A settings file for the existing teapot logo and Microsoft Forms URLs (`assets/site-config.js`)
- Mobile navigation, keyboard skip link, responsive layout and reduced-motion support

## Important before publishing

This is a starter version, not a final approved university website. Review the content with the current Equitea organisers.

- The committee page intentionally contains no old committee members.
- Meeting details must be confirmed before being advertised as upcoming.
- The concerns form must not go live until its recipient, privacy, access, retention and referral arrangements are agreed.
- Do not promise anonymity unless the Microsoft Forms configuration and institutional arrangements genuinely support it.
- Add current Queen's support/reporting links to the concerns page before launch.
- Check permission to reuse the existing teapot image. The current logo URL points to the old site; a locally stored approved copy is preferable for the final version.

## Add Microsoft Forms links

1. Create each form using an approved Queen's Microsoft account.
2. Copy the public/respondent link for each form.
3. Open `assets/site-config.js`.
4. Paste the links between the quotation marks:

```js
forms: {
  join: "PASTE_JOIN_FORM_LINK",
  concerns: "PASTE_CONCERNS_FORM_LINK",
  feedback: "PASTE_FEEDBACK_FORM_LINK",
  topics: "PASTE_TOPIC_SUGGESTION_FORM_LINK"
}
```

Leave a value blank until that form is ready. The site will show "Form link to be added".

## Publish using GitHub Pages

1. Sign in to GitHub.
2. Create a new **public** repository, for example `arc-equitea-website`.
3. Upload the contents of this folder (not the ZIP file itself) to the repository's root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then Save.
7. Wait for GitHub Pages to publish. GitHub will show the public URL in the Pages settings.

You can update the site later by editing a file and committing the change.

## Suggested first review

- Confirm the exact name and relationship to Queen's ARC.
- Approve About, Mission and Ground rules wording.
- Confirm 2026–27 events.
- Confirm committee members and obtain consent for profiles/photos.
- Approve the joining and feedback forms.
- Agree a safe, clearly explained concern-reporting route.
- Test all pages on a phone and with keyboard-only navigation.
- Check links, image rights, privacy notices and accessibility.

## Logo

The site currently references the existing teapot image at:
https://qub-arc-equitea.github.io/images/teapot.png

For a long-term rebuild, save an approved copy in `assets/` and update `logoUrl` in `assets/site-config.js` to `assets/teapot.png`.
