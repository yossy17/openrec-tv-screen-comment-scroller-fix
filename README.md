このスクリプトは、OPENREC.tv のコメントをニコニコ風にスクロールさせます。

## 謝辞

このスクリプトは[knoa](https://greasyfork.org/ja/users/78927-knoa)さんの[OPENREC.tv Screen Comment Scroller](https://greasyfork.org/ja/scripts/36697-openrec-tv-screen-comment-scroller)を基に個人的に改善したものです。原作者に感謝いたします。

## 主な機能

1. OPENREC.tv のコメントをニコニコ風にスクロールさせることができます。
2. コメントの色、縁取り、不透明度、行数などを 設定パネルでカスタマイズできます。
3. 設定パネルにて設定した内容はローカルストレージに保存されます。
4. 設定パネルで以下の要素を設定することができます。表記内容はデフォルト値です。

- コメント色: `#ffffff`
- コメント縁取り色: `#000000`
- コメント縁取りの太さ(比率): `0.1`
- コメントの不透明度: `0.5`
- コメント最大行数: `15`
- コメント行高さ: `1.5`
- スクロール秒数: `5`
- 秒間コマ数: `60`

## 使い方

- `Ctrl + Alt + o` で設定パネルを開く事ができます。

## +α

[uBlock Origin](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=ja)を設定することで、より快適に使えます。

設定方法は以下の記事に載っています。

https://www.orelikebook.com/openrec-niconico-fulldisplay

私の設定は以下のとおりです。

```
! キャプチャー欄
www.openrec.tv##.capture-chat
! チャット欄
www.openrec.tv##.chat-cell-wrapper
! チャット書き込み欄
! www.openrec.tv##.theater-input-area
! チャットをロードしているときに表示される円
www.openrec.tv##.loader-circle-one-more
```

---

## 貢献

バグの報告や機能の提案は大歓迎です。[問題を報告](https://github.com/yossy17/OPENRECTV_Screen_Comment_Scroller_Fix/issues)または[プルリクエスト](https://github.com/yossy17/OPENRECTV_Screen_Comment_Scroller_Fix/pulls)を作成してください。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
# OPENRECTV_Screen_Comment_Scroller_Fix
