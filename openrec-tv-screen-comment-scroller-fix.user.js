// ==UserScript==
// @name                OPENREC.tv Screen Comment Scroller [Fix]
// @description         OPENREC.tv のコメントをニコニコ風にスクロールさせます。
// @version             1.2
// @author              Yos_sy
// @match               https://www.openrec.tv/*
// @namespace           http://tampermonkey.net/
// @icon                data:image/png;base64,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
// @license             MIT
// @grant               none
// ==/UserScript==

(function () {
  "use strict";

  // スクリプト名
  const SCRIPTNAME = "ScreenCommentScroller";

  // カスタマイズ設定のデフォルト
  const defaultSettings = {
    COLOR: "FFFFFF", // コメント色
    OCOLOR: "000000", // コメント縁取り色
    OWIDTH: 0.1, // コメント縁取りの太さ(比率)
    OPACITY: 0.5, // コメントの不透明度
    MAXLINES: 15, // コメント最大行数
    LINEHEIGHT: 1.5, // コメント行高さ
    DURATION: 5, // スクロール秒数
    FPS: 60, // 秒間コマ数
  };

  // 設定の保存と読み込み
  const loadSettings = () => {
    const savedSettings = JSON.parse(localStorage.getItem(SCRIPTNAME) || "{}");
    return { ...defaultSettings, ...savedSettings };
  };

  const saveSettings = (settings) => {
    localStorage.setItem(SCRIPTNAME, JSON.stringify(settings));
  };

  let settings = loadSettings();

  // 色の検証と変換
  const validateColor = (color) => {
    color = color.replace(/^#/, "");
    return /^[0-9A-Fa-f]{6}$/.test(color) ? `#${color}` : null;
  };

  // 設定パネルの作成
  const createSettingsPanel = () => {
    const panel = document.createElement("div");
    panel.id = `${SCRIPTNAME}_settingsPanel`;
    panel.style.position = "fixed";
    panel.style.top = "10px";
    panel.style.right = "10px";
    panel.style.backgroundColor = "#535069CC";
    panel.style.color = "#ffffff";
    panel.style.padding = "20px";
    panel.style.borderRadius = "10px";
    panel.style.boxShadow = "0 0 10px #00000080";
    panel.style.zIndex = "9999";
    panel.style.display = "none";
    panel.style.fontFamily = "Arial, sans-serif";
    panel.style.maxWidth = "300px";

    // ボタンスタイルの作成
    const setButtonStyle = (button) => {
      button.style.display = "block";
      button.style.width = "100%";
      button.style.padding = "8px";
      button.style.backgroundColor = "#FF4C11";
      button.style.color = "white";
      button.style.border = "none";
      button.style.borderRadius = "3px";
      button.style.cursor = "pointer";
    };

    // リセットボタンの設定
    const resetButton = document.createElement("button");
    resetButton.textContent = "デフォルト値にリセット";
    setButtonStyle(resetButton);
    resetButton.style.marginBottom = "15px";
    resetButton.onclick = () => {
      if (
        confirm(
          "設定をデフォルト値にリセットしますか？この操作は元に戻せません。"
        )
      ) {
        settings = { ...defaultSettings };
        saveSettings(settings);
        updateSettingsUI();
        core.applySettings();
      }
    };
    panel.appendChild(resetButton);

    // 入力フィールドの設定
    const createInput = (labelText, key, type = "text") => {
      const container = document.createElement("div");
      container.style.marginBottom = "10px";

      const label = document.createElement("label");
      label.textContent = labelText;
      label.style.display = "block";
      label.style.marginBottom = "5px";

      const input = document.createElement("input");
      input.id = `${SCRIPTNAME}_${key}`;
      input.type = type;
      input.value = settings[key];
      input.style.width = "100%";
      input.style.padding = "5px";
      input.style.boxSizing = "border-box";
      input.style.backgroundColor = "#FFFFFF1A";
      input.style.border = "1px solid #FFFFFF4D";
      input.style.borderRadius = "3px";
      input.style.color = "#FFFFFF";
      if (type === "number") {
        input.step = "0.1";
      }
      input.onchange = (e) => {
        let value = e.target.value;
        if (type === "color") {
          value = validateColor(value);
          if (!value) {
            alert("無効な色形式です。6桁の16進数を使用してください。");
            e.target.value = `#${settings[key]}`;
            return;
          }
        }
        settings[key] =
          type === "number" ? parseFloat(value) : value.replace(/^#/, "");
        saveSettings(settings);
        core.applySettings();
        updateSettingsUI();
      };

      if (type === "color") {
        input.value = `#${settings[key]}`;
      }

      container.appendChild(label);
      container.appendChild(input);
      panel.appendChild(container);
    };

    createInput("コメント色", "COLOR", "color");
    createInput("コメント縁取り色", "OCOLOR", "color");
    createInput("縁取りの太さ", "OWIDTH", "number");
    createInput("不透明度", "OPACITY", "number");
    createInput("最大行数", "MAXLINES", "number");
    createInput("行高さ", "LINEHEIGHT", "number");
    createInput("スクロール秒数", "DURATION", "number");
    createInput("秒間コマ数", "FPS", "number");

    // 閉じるボタンの設定
    const closeButton = document.createElement("button");
    closeButton.textContent = "閉じる";
    setButtonStyle(closeButton);
    closeButton.style.marginTop = "15px";
    closeButton.onclick = () => {
      panel.style.display = "none";
    };
    panel.appendChild(closeButton);

    document.body.appendChild(panel);
  };

  // 設定UIの更新
  const updateSettingsUI = () => {
    Object.keys(settings).forEach((key) => {
      const input = document.getElementById(`${SCRIPTNAME}_${key}`);
      if (input) {
        if (input.type === "color") {
          input.value = `#${settings[key]}`;
        } else {
          input.value = settings[key];
        }
      }
    });
  };

  // 設定パネルの表示切り替え
  const toggleSettingsPanel = () => {
    const panel = document.getElementById(`${SCRIPTNAME}_settingsPanel`);
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  };

  // キーボードショートカットの設定
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && e.key === "o") {
      toggleSettingsPanel();
    }
  });

  // キャッシュ
  const cache = {
    screen: null,
    board: null,
    play: null,
  };

  const getElement = (key, selector) => {
    if (!cache[key]) {
      cache[key] = document.querySelector(selector);
    }
    return cache[key];
  };

  // サイト定義
  const site = {
    getScreen: () => getElement("screen", ".video-player-wrapper"),
    getBoard: () => getElement("board", ".chat-list-content"),
    getComments: (node) => node.querySelectorAll(".chat-content"),
    getPlay: () =>
      getElement(
        "play",
        '[class^="MovieToolbar"] [class^="TextLabel__Wrapper"]'
      ),
    isPlaying: () => true, // 常に再生中と仮定
  };

  // 処理本体
  let screen,
    board,
    play,
    canvas,
    context,
    lines = [],
    fontsize;

  const core = {
    // 初期化
    initialize: () => {
      console.log(SCRIPTNAME, "initialize...");
      screen = site.getScreen();
      board = site.getBoard();
      play = site.getPlay();
      if (!screen || !board || !play) {
        window.setTimeout(core.initialize, 1000);
        return;
      }

      canvas = document.createElement("canvas");
      canvas.id = SCRIPTNAME;
      screen.appendChild(canvas);
      context = canvas.getContext("2d");

      core.applySettings();
      core.listenComments();
      core.scrollComments();
      createSettingsPanel();
    },

    // 設定の適用
    applySettings: () => {
      core.modify();
      core.addStyle();
    },

    // キャンバスのサイズ調整とフォント設定
    modify: () => {
      const newWidth = screen.offsetWidth;
      const newHeight = screen.offsetHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      fontsize = newHeight / settings.MAXLINES / settings.LINEHEIGHT;
      context.font = `bold ${fontsize}px sans-serif`;
      context.fillStyle = validateColor(settings.COLOR) || "#FFFFFF";
      context.strokeStyle = validateColor(settings.OCOLOR) || "#000000";
      context.lineWidth = fontsize * settings.OWIDTH;
    },

    // スタイル追加
    addStyle: () => {
      let canvas = document.querySelector(`canvas#${SCRIPTNAME}`);
      if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = SCRIPTNAME;
        document.body.appendChild(canvas);
      }

      // キャンバスのスタイル追加
      canvas.style.pointerEvents = "none";
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.opacity = `${settings.OPACITY}`;
      canvas.style.zIndex = "calc(infinity)";
    },

    // コメントの監視
    listenComments: () => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const comments = site.getComments(node);
                comments.forEach((comment) => core.attachComment(comment));
              }
            });
          }
        });
      });
      observer.observe(board, { childList: true, subtree: true });
    },

    // コメントの追加
    attachComment: (comment) => {
      const text = comment.textContent;
      const width = context.measureText(text).width;
      const life = settings.DURATION * settings.FPS;
      const left = canvas.width;
      const delta = (canvas.width + width) / life;

      for (let i = 0; i < settings.MAXLINES; i++) {
        const line = lines[i] || [];
        if (
          line.length === 0 ||
          line[line.length - 1].left < canvas.width - width
        ) {
          lines[i] = line;
          line.push({
            text,
            width,
            life,
            left,
            delta,
            top: (canvas.height / settings.MAXLINES) * i + fontsize,
          });
          break;
        }
      }
    },

    // コメントのスクロール
    scrollComments: () => {
      let lastTime = 0;
      const animate = (currentTime) => {
        if (site.isPlaying()) {
          const deltaTime = (currentTime - lastTime) / 1000;
          lastTime = currentTime;

          context.clearRect(0, 0, canvas.width, canvas.height);

          lines.forEach((line, i) => {
            lines[i] = line.filter((comment) => {
              comment.life -= deltaTime * settings.FPS;
              comment.left -= comment.delta * deltaTime * settings.FPS;
              if (comment.left + comment.width > 0) {
                context.strokeText(comment.text, comment.left, comment.top);
                context.fillText(comment.text, comment.left, comment.top);
                return true;
              }
              return false;
            });
          });
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    },
  };

  core.initialize();
})();
