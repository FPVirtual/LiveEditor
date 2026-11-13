# LiaEdit — fork FPVirtual

Fork of [LiaScript/LiveEditor](https://github.com/LiaScript/LiveEditor) used
as the editing front-end of the FPVirtual "Course as Code" platform
(LiaScript + Moodle). Upstream README below; this section documents the
fork's own changes.

## What is different in this fork

1. **Full Spanish translation**: `es.json` polished, welcome tutorial
   (`tutorialEs` in `src/ts/Tutorial.ts`) and all snippet help translated
   (`src/ts/Snippets.es.ts`), including the `lia-template-es` sample course.
   Snippet help follows the UI language and reloads live on language change.
2. **`liascript-lms` integration** (platform-agnostic): when a document
   declares an LMS block in its LiaScript header, the editor can save back
   to the learning platform:
   - `?/open/file/:fileUrl` (`src/views/OpenFile.vue`): opens a remote
     document as an editable project.
   - `src/ts/lms/config.ts`: `extractLmsConfig()` reads and strips the
     `liascript-lms` block (endpoints, file, branch, SHA, single-use
     token, readonly flag, return URL).
   - `src/ts/lms/LmsBridge.ts`: save/publish/token-refresh client with
     optimistic locking (409 → resolution branch).
   - `src/components/lms/LmsSaveBar.vue`: Save button (also Ctrl+S) and
     Publish dropdown in the editor toolbar.
   - `src/components/lms/LmsConflictModal.vue`: conflict resolution
     (reload server version / keep my version / inspect diff).
3. **Build-time flags** (see `.env.example`): `LIAEDIT_HIDE_GIT` hides the
   GitHub/GitLab/Gist share options (teachers save via the LMS, no GitHub
   OAuth needed), `LIAEDIT_HELP_URL` repoints the help link.

## Build & deploy

```bash
npm install
cp .env.example .env   # adjust to the deployment
npm run build          # static site in dist/
```

Serve `dist/` over HTTPS (Nginx/Caddy). The PWA and the cross-origin
`fetch` to the LMS both require a secure origin.

## Maintenance

`main` = upstream + fork patches. Rebase periodically against
`LiaScript/LiveEditor:master`; fork code lives in `src/ts/lms/`,
`src/components/lms/`, `src/views/OpenFile.vue`, `src/ts/Snippets.es.ts`
and small, marked touchpoints (`src/index.ts`, `src/views/LiaScript.vue`,
`src/views/File.vue`, `src/ts/importSources.ts`,
`src/components/Editor.vue`, `src/ts/Tutorial.ts`, `src/ts/createProject.ts`,
`src/i18n/`).

---

# LiaEdit

Welcome to the official LiaScript collaborative editor, LiaEdit! This advanced editor runs entirely in your browser, offering unique capabilities beyond typical markdown editors.

https://github.com/user-attachments/assets/20e40c28-88b9-4aa8-b50d-cb776ad8707a

Try it out: [LiaEdit](https://liascript.github.io/LiveEditor/)

For more information about LiaScript, visit the LiaScript website:

https://liascript.github.io

or checkout our YouTube-Channel:

https://www.youtube.com/@liascript4180

## Why Choose LiaEdit?

Unlike conventional markdown editors like [HedgeDoc](https://hedgedoc.org), [HackMD](https://hackmd.io), or [Typora](https://typora.io/), LiaEdit operates fully in-browser and can also be installed and used offline, since it is a Progressive Web App too. Thus, when you upload images, videos, or audio files, they remain stored within your browser. If you switch to online editing mode, you can synchronize your work with peers using [WebRTC].

LiaEdit is specifically designed for creating LiaScript content, enabling you to make your content interactive and engaging.

## LiaScript Features

LiaScript is a markdown language that extends the capabilities of traditional markdown. It allows you to create interactive content with features like:

- Quizzes
- Surveys
- Animations
- Text-to-speech output
- Live coding
- Offline support
- Extensive plugin support and customizability

  See therefore: https://github.com/topics/liascript-template

## LiaEdit Features

https://github.com/user-attachments/assets/63494d0f-4885-4fd1-8a07-926797c41b42

LiaEdit offers a range of features to enhance your content creation experience:

- **Collaborative Editing**: Work together with peers in real-time.
- **WebRTC Synchronization**: Sync your work seamlessly with others.
- **Instant Preview**: Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to see your changes immediately.
- **Media Uploads**: Easily upload images, videos, and audio files.
- **In-Browser Recording**: Record audio and video directly in the browser.
- **Export Options**: Export your courses to GitHub gists or data URIs.
- **Download Options**: Download your course as a ZIP file or Markdown only.
- **External Document Preview**: Preview documents from external sources.
- **Sharing**: Share your editor via snapshot URLs, external resources, or embed codes.
  in this case the entire code of your document will be embedded in the URL.
- **Editor enhances**: The editor is enhanced with a lot of features

  - Automated table formatting by pressing <kbd>Tab</kbd>
  - Short-cuts by starting typing `lia`
  - MathJS included, which allows you to perform calculations within the browser or translate between different units
  - Emoji support start typing `:`

Experience a new level of interactive content creation with LiaEdit!

## Building the project locally

If you want to run this editor by your own, you need to have installed node with npm.
For more information, check out the following link:

https://nodejs.org/en

Then simply clone this repository and run the following commands:

```bash
git clone https://github.com/liaScript/liveeditor

cd liveeditor

npm install

# start the development server
npm run watch

# build the project into the dist folder
npm run build
```

In for enabling all features, you will need to have a `.env` file in the root directory of this project, with the following content:

```ini
# If you host also the LiaScript website by your own, otherwise ignore this
LIASCRIPT="https://liascript.github.io/course/"
# A text-to-speech javascript engine, if tts is not supported by the browser
RESPONSIVEVOICE_KEY="YOUR RESPONSIVEVOICE_KEY"
# Add a proxy if external resource-links of external documents are blocked by CORS
PROXY="https://api.allorigins.win/get?url="
# Add your own GitHub client id and secret, if you want to enable the GitHub export
GITHUB_CLIENT_ID="xxxxxxx"
GITHUB_CLIENT_SECRET="xxxxxx"
# Add an WebRTC signaling server, if you want to enable the WebRTC synchronization
SIGNALING_SERVER="wss://..."
# Add an TURN/STUN server for WebRTC as a fallback, if direct connections are not possible
ICE_SERVERS='[{"urls":"stun:...."},{"urls":"turn:...","username":"...","credential":"...}, ...]'
# Add an Websocket-server for synchronization
WEBSOCKET_SERVER="wss://..."
```
