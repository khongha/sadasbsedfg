// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử cần thiết
    const submitBtn = document.getElementById("submit-btn");
    const clearBtn = document.getElementById("clear-btn");
    const messageTextArea = document.getElementById("message-input");
    const resultMessage = document.getElementById("result-message");
    const resultImage = document.getElementById("result-image");
    const resetBtn = document.getElementById("reset-btn");
    const contactForm = document.getElementById("contact-form");

    // Đặt thông điệp mặc định cho kết quả
    const defaultResponseMessage = "Lời tỏ tình của bạn sẽ được gửi đi và bạn sẽ nhận được phản hồi từ Dung. Hãy kiên nhẫn chờ đợi!";

    // Sự kiện khi người dùng nhấn nút "Gửi Lời Tỏ Tình"
    submitBtn.addEventListener("click", function () {
        const message = messageTextArea.value.trim();
        
        // Kiểm tra nếu không có lời tỏ tình
        if (message.length === 0) {
            alert("Bạn chưa nhập lời tỏ tình.");
            return;
        }

        // Hiển thị thông điệp đã gửi
        resultMessage.innerHTML = `<strong>Thông điệp của bạn:</strong> <br/>${message}`;
        resultImage.innerHTML = "<img src='heart-image.jpg' alt='Love Image' />";
        
        // Ẩn textarea và nút gửi
        messageTextArea.style.display = "none";
        submitBtn.style.display = "none";

        // Hiển thị phần kết quả
        setTimeout(function () {
            const successMessage = document.createElement("p");
            successMessage.innerText = "Lời tỏ tình của bạn đã được gửi đi thành công!";
            successMessage.style.color = "#28a745";
            resultMessage.appendChild(successMessage);
        }, 2000);
    });

    // Xử lý nút "Xóa"
    clearBtn.addEventListener("click", function () {
        messageTextArea.value = "";
    });

    // Xử lý việc làm mới trang để gửi lại tỏ tình
    resetBtn.addEventListener("click", function () {
        // Hiển thị lại các phần đã ẩn
        messageTextArea.style.display = "block";
        submitBtn.style.display = "inline-block";
        resultMessage.innerHTML = defaultResponseMessage;
        resultImage.innerHTML = "";
    });

    // Tạo hiệu ứng gõ chữ cho tiêu đề
    function typeWriter(element, message, i, callback) {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(function () {
                typeWriter(element, message, i, callback);
            }, 100);
        } else {
            callback();
        }
    }

    // Thêm hiệu ứng gõ chữ cho tiêu đề trong phần hero
    const headerText = "Dung, Anh Yêu Em!";
    typeWriter(document.querySelector(".hero h2"), headerText, 0,
