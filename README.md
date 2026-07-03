# CAP — Create and Post

Sheet ý tưởng → video AI → Telegram duyệt → đăng YouTube.

## Luồng chính

1. Viết **ý tưởng / mô tả / mong muốn / ảnh-link** lên Google Sheet
2. **8h sáng** (giờ VN) bot quét dòng «Chưa có video» — không có gì thì im lặng
3. Tạo video AI (Replicate nếu có token, không thì free mode) + TTS
4. Gửi **preview Telegram** — không upload YouTube, không nút bấm
5. Gõ **duyệt** / **ok** → bot báo *"sẽ đăng sau ít phút"* → upload **YouTube công khai** + AI viết title/mô tả SEO
6. Gõ **bỏ** / **hủy** → sheet «Không được duyệt», không đăng

## Sheet

[CAP Google Sheet](https://docs.google.com/spreadsheets/d/1O2rCC-ldE9ySAYFkPN9fz2Y2icuo9FkUIpRjGHaLTUs/edit)

| Cột | Nội dung |
|-----|----------|
| A ID | Tự sinh khi tạo video |
| B Ý tưởng | Bắt buộc |
| C Mô tả | |
| D Mong muốn | `ngang`/`16:9` hoặc `dọc`/`9:16` |
| E Ảnh/link | URL ảnh tham chiếu (optional) |
| F Trạng thái | Chưa có video / Đang tạo video / Đang đợi duyệt / Đã đăng / Không được duyệt / Lỗi tạo video |

## Clone & chạy (người mới)

```bash
git clone https://github.com/YOUR_USER/cap.git
cd cap
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
```

1. Điền `.env.local` (Telegram token, Google credentials, …) — **không commit file này**
2. Tạo Google Service Account → tải JSON → đặt `credentials/google.json`
3. Share Google Sheet (Editor) cho email service account
4. `npm run dev` — mở http://localhost:3002
5. Telegram: **/start** → Dashboard: đăng nhập **YouTube**
6. Test: `/run` hoặc chat «thêm cho tao …» → «tạo đi»

## Setup chi tiết

1. `npm install`
2. Copy `.env.example` → `.env.local`
3. Share sheet với **service account email** (Editor)
4. `npm run dev` — port **3002**
5. Telegram: nhắn **/start** cho bot CAP
6. Dashboard: đăng nhập **YouTube**
7. Test: `/run` trên Telegram hoặc `npm run job:run`

## Đẩy lên GitHub (maintainer)

```bash
git init
git add .
git commit -m "Initial commit: CAP Create and Post"
git branch -M main
git remote add origin https://github.com/YOUR_USER/cap.git
git push -u origin main
```

Tạo repo trống trên GitHub trước (không tick README). **Không** push `.env.local` / `credentials/` — đã có trong `.gitignore`.

## Cron 8h

`GET /api/cron/daily` với header `Authorization: Bearer CRON_SECRET`

Hoặc chạy nền: `npm run dev` / PM2 / Docker — scheduler tick mỗi phút lúc 8h VN.
