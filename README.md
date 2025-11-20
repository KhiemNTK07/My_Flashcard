# Flash card - StudentCare Web App

Một ứng dụng web thẻ ghi nhớ được thiết kế để giúp người dùng ghi nhớ thuật ngữ, khái niệm, từ vựng thông qua giao diện tương tác và thân thiện với người dùng. Được xây dựng bằng HTML, CSS và JavaScript thuần, dự án này cung cấp một công cụ học tập dễ sử dụng nhưng hiệu quả.

🚀 Dự án đã được demo trực tiếp tại: [My Flashcard Web](https://khiemntk07.github.io/My_Flashcard/)
---

## Công nghệ chính
- **FrontEnd**: HTML5, CSS3, Javascript
- **Storage**: IndexedDB (Lưu trữ dữ liệu offline trực tiếp trên trình duyệt)
- **Icons**: Font Awesome
- **Fonts**: Itim

---

## Tính năng
- 🌟 Tạo, sửa, xóa các flashcard.  
- 📚 Các flashcard được tạo theo từng học phần, giúp quản lí flashcard dễ dàng hơn.  
- 💾 Lưu dữ liệu offline tự động.    
- 🎯 Giao diện đơn giản, thân thiện, dễ sử dụng.

---

## Hướng dẫn sử dụng

1. Mở trình duyệt và truy cập link demo ở README 
2. Nhấn vào nút dấu cộng ở góc phải màn hình để tạo học phần
3. Thêm tiêu đề cho học phần, thêm các ô và viết đầy đủ thuật ngữ và định nghĩa cho từng ô
4. Nút xoá màu xanh ở từng các góc phải ô là để xoá ô đó. Nút xoá màu xám ở dưới ô mô tả để xoá tất cả các ô ghi nhớ
5. Nhấn nút xanh ở dưới cùng để tạo học phần
6. Các học phần được thêm vào trang chủ, nhấn vào học phần mà bạn muốn để ôn luyện
7. Tương tác với thẻ nhớ bằng cách click để lật thẻ
8. Sử dụng các nút điều hướng để chuyển giữa các thẻ

---

## Cấu trúc thư mục

```
My_Flashcard/
├── index.html                          # Trang chủ
├── README.md                           # Tài liệu hướng dẫn, mô tả dự án
└── source/                             # Source code của dự án
    ├── assets/                         # Tài nguyên dùng chung
    │   ├── Global_CSS/                 # CSS dùng chung
    │   │   └── Menu_PlusButton.css
    │   └── Global_JS/                  # Script dùng chung
    │       ├── database.js
    │       ├── StudySection_PlusButton.js
    │       └── updateSections.js
    └── pages/                           # 4 trang chính của website
        ├── Home/                        # Trang chủ
        │   ├── home_style.css
        │   └── home_script.js
        ├── My_Library/                  # Trang thư viện
        │   ├── MyLibrary.html
        │   ├── MyLibrary_style.css
        │   └── MyLibrary_script.js
        ├── New_Study_Section/           # Trang tạo học phần
        │   ├── NewStudySection.html
        │   ├── NewStudySection_style.css
        │   └── NewStudySection_script.js
        └── Study_Section/               # Trang thẻ ghi nhớ cho các học phần
            ├── StudySection.html
            ├── StudySection_style.css
            └── StudySection_script.js
```

---

## Những điểm cần cải thiện và mở rộng
- 🛠️ Cải thiện giao diện cho người dùng, và design responsive cho mobile
- ☹️ Web còn tình trạng xử lí dữ liệu chậm khi điều hướng trang
- ⚠️ Web có những bug tiềm ẩn cho giao diện mà chưa kịp xử lí khiến người dùng khó chịu
- 🛠️ Thêm chức năng sửa học phần
- ✨ Thêm tính năng nhập dữ liệu văn bản để tạo flashcard nhanh chóng
- 🔧 Thêm backend để lưu trữ flashcard
- ⚙️ Thêm tính năng dark mode cho giao diện
- 💡 Thêm tính năng sắp xếp học phần gần đây cho trang chủ
- 💡 Thêm tính năng sắp xếp học phần theo bảng chữ cái, thời gian,... ở trang thư viện 

--- 

## Liên hệ
- Tác giả: Nguyễn Tôn Khiêm - N25DCCN122 
- GitHub: [https://github.com/KhiemNTK07](https://github.com/KhiemNTK07)  
