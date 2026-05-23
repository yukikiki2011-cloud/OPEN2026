# Sakura Sands Suites Hotel — Web制作 作業メモ

最終更新：2026-05-19

---

## プロジェクト概要

| 項目 | 内容 |
|---|---|
| ホテル名 | Sakura Sands Suites Hotel |
| エリア | 大阪・心斎橋／難波周辺 |
| コンセプト | 13 Colors, One Journey. / 日本の色を旅する、都市型ファミリーステイ |
| 公開タイミング | ホテルOPENと同時 |
| 制作進捗 | Home ページ実装済み / 各サブページ設計待ち |

---

## フォルダ構成

```
カケタス/
├── website/                        ← 本番ファイル（ここで作業）
│   ├── index.html                  ← Home ページ（実装済み）
│   └── assets/
│       └── images/
│           ├── torinoko.png        2F 鳥の子色
│           ├── usubeni.png         3F 薄紅
│           ├── kurumi.png          4F 胡桃色
│           ├── wakakusa.png        5F 若草色
│           ├── wasurenagusa.png    6F 勿忘草色
│           ├── fukamidori.png      7F 深緑
│           ├── nanohana.png        8F 菜の花色
│           ├── sakura.png          9F 桜色
│           ├── ruri.png            10F 瑠璃紺
│           ├── ayame.png           11F 菖蒲色
│           ├── koji.png            12F 柑子色
│           ├── sumi.png            13F 墨色
│           ├── kogane-room.png     14F 黄金色（特別室写真）
│           ├── kogane-illust.png   13Kogane イラスト（予備）
│           └── family-stay.png     Family Stay セクション用
│
├── # Sakura Sands Suites Hotel Design Brief v1 0518.md
├── Sakura Sands 13-Color Concept0512.pdf
├── ChatGPT Image Kogane.png        → kogane-room.png のソース
├── ChatGPT Image Sakura suits.png  → family-stay.png のソース
└── 13colors illustration chatGPT/ ← 各室イラスト原本
```

---

## 13色・客室マッピング

| Floor | 和名 | English | HEX | 画像ファイル |
|---|---|---|---|---|
| 14F ✦ | 黄金色 | Kogane / Radiant Gold | #e6b422 | kogane-room.png（専用予約） |
| 13F | 墨色 | Sumi / Ink Black | #464a41 | sumi.png |
| 12F | 柑子色 | Kōji / Mandarin Orange | #f6ad49 | koji.png |
| 11F | 菖蒲色 | Ayame / Iris Purple | #cc7eb1 | ayame.png |
| 10F | 瑠璃紺 | Ruri / Lapis Navy | #4b61ba | ruri.png |
| 9F | 桜色 | Sakura / Cherry Blossom Pink | #fef4f4 | sakura.png |
| 8F | 菜の花色 | Nanohana / Canola Yellow | #ffec47 | nanohana.png |
| 7F | 深緑 | Fukamidori / Deep Green | #547443 | fukamidori.png |
| 6F | 勿忘草色 | Wasurenagusa / Forget-me-not Blue | #89c3eb | wasurenagusa.png |
| 5F | 若草色 | Wakakusa / Pale Yellow-green | #d8e698 | wakakusa.png |
| 4F | 胡桃色 | Kurumi / Walnut Brown | #967249 | kurumi.png |
| 3F | 薄紅 | Usubeni / Pale Crimson | #ee827c | usubeni.png |
| 2F | 鳥の子色 | Torinoko / Beige | #fff1cf | torinoko.png |

---

## デザイントークン（CSS変数）

```css
--bg:       #fafaf8   /* ページ背景 */
--text:     #464a41   /* メインテキスト（墨色） */
--text-sub: #8a8c87   /* サブテキスト */
--border:   #e8e8e4   /* ボーダー */
--kogane:   #e6b422   /* アクセント（黄金色） */
--sumi:     #464a41   /* ダーク背景 */
```

**フォント**
- 日本語見出し：Noto Serif JP
- 日本語本文：Noto Sans JP
- 英語見出し：Cormorant Garamond
- 英語本文：Inter

---

## Home ページ実装済みセクション

| # | セクション | 状態 |
|---|---|---|
| Nav | ナビゲーション（固定・blur） | ✅ 実装済み |
| ① | Hero（13色スウォッチ帯付き） | ✅ 実装済み（写真差し替え待ち） |
| ② | Concept（13の部屋・13の旅） | ✅ 実装済み |
| ③ | Rooms グリッド（2F〜13F） | ✅ 実装済み（水彩イラスト配置済み） |
| ④ | Kogane Exclusive バナー | ✅ 実装済み（室内写真配置済み） |
| ⑤ | Family Stay | ✅ 実装済み（複合写真配置済み） |
| ⑥ | Location / Osaka | ✅ 実装済み（地図・時間は◯分のまま） |
| ⑦ | Booking CTA | ✅ 実装済み（OTA URL未設定） |
| Footer | フッター | ✅ 実装済み |

---

## 差し替え待ち・未設定項目

| 項目 | 内容 |
|---|---|
| Hero 背景写真 | ホテル外観・ロビー写真（OPEN後） |
| アクセス所要時間 | 道頓堀・心斎橋・空港の正確な徒歩／電車分数 |
| 地図 | Google Maps 埋め込みまたは地図画像 |
| OTA URL | Booking.com / Airbnb / Expedia の実URL |
| Kogane 専用サイト URL | 専用予約サイトのURL（未開設） |
| 多言語対応 | 英語版テキスト（現状JP主体） |

---

## 次のステップ（設計待ち）

### 各ページ設計・実装
- [ ] `/concept.html` — ブランドストーリー
- [ ] `/rooms.html` — 13色一覧ページ
- [ ] `/rooms/[name].html` — 各室詳細（×13）
- [ ] `/family.html` — ファミリーステイ
- [ ] `/osaka.html` — ロケーション・アクセス
- [ ] `/faq.html` — よくある質問
- [ ] `/booking.html` — 予約ガイド
- [ ] `/portfolio.html` — Brand Story（投資家・関係者向け）

### ナビゲーションリンク詳細設計（次回作業）
- Concept / Rooms / Family Stay / Osaka / FAQ / Book Now
- 各ページの IA・構成・コンテンツ定義

### Kogane 専用サイト
- 14F 黄金色専用の独立サイト設計
- 完全招待制の予約フロー

---

## ローカルプレビュー方法

```powershell
# PowerShell で実行
cd C:\Users\USER\Downloads\sakura-sands-website
python -m http.server 8080
```

ブラウザで `http://localhost:8080` を開く。

---

## 備考

- Booking.com での現行掲載は改装前の状態
- OPENと同時にサイト公開 → OTA 説明文も同時更新が必要
- 「55〜80㎡のスイートルーム。家族みんなが、伸び伸びと過ごせる広さ。」に変更済み（景表法対応・2026-05-23）
