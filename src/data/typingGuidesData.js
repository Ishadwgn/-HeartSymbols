export const TYPING_GUIDES = [
  {
    id: "windows-alt-codes",
    title: "Windows Keyboard Alt Codes",
    platform: "Windows 10 / 11",
    badge: "Most Popular",
    icon: "monitor",
    steps: [
      {
        step: 1,
        title: "Check Number Pad (NumLock)",
        instruction: "Ensure `NumLock` is turned ON on your physical keyboard's numeric keypad (the 10-key pad on the right)."
      },
      {
        step: 2,
        title: "Press and Hold Alt",
        instruction: "Press and hold down the `Alt` key on the left side of your keyboard."
      },
      {
        step: 3,
        title: "Type the Number on Numpad",
        instruction: "While holding `Alt`, press `3` on the number pad (for solid `♥`) or `9825` (for outline `♡`)."
      },
      {
        step: 4,
        title: "Release Alt Key",
        instruction: "Release the `Alt` key, and the heart symbol will appear immediately!"
      }
    ],
    shortcutTable: [
      { symbol: "♥", code: "Alt + 3", result: "Solid Black Heart Suit (CP437)" },
      { symbol: "♡", code: "Alt + 9825", result: "White Outline Heart Suit (Unicode)" },
      { symbol: "❣", code: "Alt + 10083", result: "Heart Exclamation Mark" },
      { symbol: "❦", code: "Alt + 10086", result: "Floral Hedera Heart" },
      { symbol: "❤️", code: "Win + . (Period)", result: "Opens Windows Emoji Picker" }
    ],
    laptopTip: "No Numpad? Press `Win + .` (Windows Key + Period) or `Win + ;` to open the native Windows Emoji & Symbol panel, then search 'heart'."
  },
  {
    id: "mac-keyboard",
    title: "Mac & macOS Keyboard Shortcuts",
    platform: "macOS",
    badge: "Apple Mac",
    icon: "laptop",
    steps: [
      {
        step: 1,
        title: "Press Character Viewer Shortcut",
        instruction: "Press `Control + Command + Space` (`⌃ + ⌘ + Space`) anywhere you are typing."
      },
      {
        step: 2,
        title: "Search Heart",
        instruction: "Type 'heart' in the search box at the top of the emoji palette."
      },
      {
        step: 3,
        title: "Click to Insert",
        instruction: "Double-click your favorite heart symbol (`♥`, `♡`, `❤️`, `🫰`) to insert it at your cursor."
      }
    ],
    shortcutTable: [
      { symbol: "Emoji Picker", code: "⌃ + ⌘ + Space", result: "Opens native macOS Character Viewer" },
      { symbol: "♡", code: "Text Replacement", result: "Settings > Keyboard > Text Replacements (e.g. `hh` -> `♡`)" }
    ],
    laptopTip: "You can create a permanent shortcut in Mac System Settings > Keyboard > Text Replacements: Set 'hheart' as shortcut to output '♡'."
  },
  {
    id: "iphone-ipad-ios",
    title: "iPhone & iPad (iOS Keyboard)",
    platform: "iOS",
    badge: "Mobile",
    icon: "smartphone",
    steps: [
      {
        step: 1,
        title: "Open Native Keyboard",
        instruction: "Tap on any text input field (Messages, Instagram, Notes)."
      },
      {
        step: 2,
        title: "Switch to Emoji Keyboard",
        instruction: "Tap the Globe / Smiley Face (😊) button in the bottom left corner."
      },
      {
        step: 3,
        title: "Go to Symbols Category",
        instruction: "Tap the `🔣` (Symbols category) or type 'heart' in the search bar."
      }
    ],
    shortcutTable: [
      { symbol: "❤️ 🩷 💙 🫰", code: "Search 'heart'", result: "Displays full iOS color palette" },
      { symbol: "♡ ❥ 𓆩♡𓆪", code: "Copy & Paste", result: "Use 1-Click Copy on HeartSymbols.io" }
    ],
    laptopTip: "Setup iOS Text Replacement: Go to Settings > General > Keyboard > Text Replacement > Add Phrase: `♡` | Shortcut: `hh`."
  },
  {
    id: "html-css-web",
    title: "HTML Entities, CSS Codes & UTF-8",
    platform: "Web Developers",
    badge: "Dev Reference",
    icon: "code",
    steps: [
      {
        step: 1,
        title: "HTML Named Entity",
        instruction: "Use `&hearts;` in your HTML for standard solid heart `♥`."
      },
      {
        step: 2,
        title: "HTML Numeric Hex & Decimal",
        instruction: "Use `&#9829;` or `&#x2665;` for `♥`, and `&#9825;` for `♡`."
      },
      {
        step: 3,
        title: "CSS Pseudo-Elements",
        instruction: "In CSS `content`: use `content: '\\2665';` or `content: '\\2661';`."
      }
    ],
    shortcutTable: [
      { symbol: "♥", code: "&hearts; / &#9829;", result: "HTML entity for Black Heart Suit" },
      { symbol: "♡", code: "&#9825; / &#x2661;", result: "HTML entity for White Heart Suit" },
      { symbol: "❤️", code: "&#10084;&#65039;", result: "HTML entity for Red Heart Emoji" },
      { symbol: "CSS Heart", code: "content: '\\2665';", result: "CSS content pseudo-element" }
    ],
    laptopTip: "Always ensure your HTML document has `<meta charset='UTF-8'>` in the `<head>` to prevent Unicode rendering glitches."
  }
];
