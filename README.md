# 🧠 TỪ VỰNG DÀNH CHO DEV

Một bộ sưu tập từ ngữ, cụm từ, text mẫu dành cho dev (đặc biệt là frontend)  
để dùng trong UI, form, toast message, nút bấm…

> Viết text đúng – UI sạch, sếp vui, user hiểu.

---

## 🎯 Mục đích

Repo này được tạo ra để giúp dev Việt:

- Không phải ngồi dịch thủ công từng câu UI
- Không viết `"Submit"` cho tất cả mọi thứ
- Không phải mỗi project mỗi kiểu `"Add new"`, `"Create new"`, `"Save data"`...

Và quan trọng nhất:  
**Tạo một bộ từ vựng chuẩn – dùng đi dùng lại – không cần nghĩ lại.**

---

## 😫 Vấn đề thường gặp

Bạn đã từng:

- Gõ `"Create"`, `"Save"`, `"Submit"` lung tung không phân biệt?
- Dán text lên Google Translate rồi sửa lại?
- Dịch tiếng Việt tay từng dòng trong `vi.json`?
- Có team 3 dev, mỗi đứa viết một kiểu?

---

## 💡 Giải pháp

Repo này cung cấp sẵn bộ từ vựng phổ biến cho UI,  
viết **chuẩn**, **ngắn gọn**, **song ngữ** (Anh - Việt), chia theo từng nhóm cụ thể.

- Không còn cảnh `"Success!"` hiện giữa màn hình mà không ai hiểu
- Không phải nghĩ `"Add new"` hay `"Create"` mỗi lần code form
- Dùng được cho mọi project: từ cá nhân, nội bộ, đến SaaS

> Làm một lần – dùng mọi nơi.

---

## 📦 Repo gồm những gì?

| File                       | Mô tả                                        |
| -------------------------- | -------------------------------------------- |
| `action-labels.json`       | Các nút bấm: Create, Save, Update, Delete... |
| `toast-messages.json`      | Thông báo hệ thống: Thành công, Thất bại...  |
| `validation-messages.json` | Báo lỗi form: Bắt buộc, Không hợp lệ...      |
| `tooltip-samples.json`     | Text gợi ý, hướng dẫn ngắn trong UI          |
| `en-vi-map.json`           | Bộ từ vựng đối chiếu Anh – Việt theo context |

> Tất cả đều có thể convert sang `en.json`, `vi.json` tùy framework.

---

## 🤝 Góp ý & đóng góp

Thấy thiếu? Dịch chưa ổn? Có từ nào dùng sai ngữ cảnh?
Cứ:

- Mở issue

- Gửi pull request

- Comment góp muối

> Repo càng đông vui, từ vựng càng gọn đẹp cho dev Việt 😎

## ☕ Về tác giả

Tạo ra bởi một dev từng để "Submit" cho cả nút thêm, nút lưu và nút gửi.
Sau khi bị sếp hỏi “nút này là lưu hay gửi?”, quyết định không để ai dính nghiệp như mình nữa.

## 🚀 Cách sử dụng

Toàn bộ nội dung từ vựng được quản lý trong thư mục `core/`, bao gồm các nhóm như action, toast, validation, v.v...  
Bạn có thể tự động tách chúng ra thành hai bộ file tiếng Anh (`en/`) và tiếng Việt (`vi/`) để sử dụng trong hệ thống i18n của mình.

---

### ✅ Bước 1: Clone về máy

```bash
git clone https://github.com/your-username/ui-vocabulary-json.git i18n-json
cd i18n-json
```

### ✅ Bước 2: Chạy script để tách dữ liệu song ngữ

```bash
node build-i18n.js
```

Lệnh này sẽ tự động tạo ra 2 thư mục song ngữ:
en/ → chứa các file JSON tiếng Anh
vi/ → chứa các file JSON tiếng Việt

### ✅ Bước 3: Copy vào project của bạn để sử dụng

Nếu đang dùng thư viện i18n như next-i18next, vue-i18n, react-i18next, bạn chỉ cần copy:

```bash
cp -r en/ vi/ ./public/locales/
```

Hoặc thay đổi đường dẫn phù hợp nếu project bạn đặt file i18n ở vị trí khác như src/locales/, resources/lang/, v.v...

## 💡 Gợi ý: Bạn có thể chỉnh sửa hoặc thêm mới file trong thư mục core/, sau đó chạy lại lệnh node build-i18n.js để cập nhật bản dịch.
