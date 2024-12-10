document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
  
    errorMessage.textContent = ''; // Xóa thông báo lỗi trước đó
  
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Mật khẩu không khớp!';
      return;
    }
  
    if (password.length < 6) {
      errorMessage.textContent = 'Mật khẩu phải có ít nhất 6 ký tự!';
      return;
    }
  
    alert('Đăng ký thành công!');
    // Xử lý logic đăng ký tại đây (gửi dữ liệu tới server, v.v.)
  });
  