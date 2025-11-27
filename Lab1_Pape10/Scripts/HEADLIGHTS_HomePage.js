function toggleHeart(btn) {
            const icon = btn.querySelector('i');
            const originalClass = icon.className;

            // Thay bằng loading bars
            icon.outerHTML = `
              <span class="flex space-x-1 text-gray-500">
                <span class="bounce-bar"></span>
                <span class="bounce-bar"></span>
                <span class="bounce-bar"></span>
              </span>
            `;

            // Giả lập xử lý 1.5s rồi trả về trái tim
            setTimeout(() => {
                btn.querySelector('span').outerHTML = `<i class="${originalClass}"></i>`;
                btn.querySelector('i').classList.toggle("text-red-600");
            }, 1500);
        }

        function showToast(message) {
            const container = document.getElementById('toast-container');

            // Tạo toast
            const toast = document.createElement('div');
            toast.className = "bg-white text-black px-4 py-2 rounded shadow-lg flex items-center space-x-2 animate-slide-in";
            toast.innerHTML = `
            <img src="https://automize.risingbamboo.com/wp-content/uploads/2021/08/1-35-200x200.jpg" 
                 style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
            <span style="margin-left: 10px;">${message}</span>
        `;

            container.appendChild(toast);

            // Tự động ẩn sau 3 giây
            setTimeout(() => {
                toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
                setTimeout(() => toast.remove(), 500);
            }, 3000);
        }
// Phần countdown
function startCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secsEl = document.getElementById('secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Giá trị ban đầu (có thể thay đổi thành ngày mục tiêu cụ thể, ví dụ: new Date('2027-02-10T00:00:00'))
    const initialDays = 440;
    const initialHours = 7;
    const initialMins = 58;
    const initialSecs = 5;

    // Tính tổng giây ban đầu
    const totalSeconds = initialDays * 86400 + initialHours * 3600 + initialMins * 60 + initialSecs;

    // Thời gian mục tiêu = hiện tại + tổng giây
    const targetTime = Date.now() + totalSeconds * 1000;

    const updateCountdown = () => {
        const now = Date.now();
        const remainingTime = Math.max((targetTime - now) / 1000, 0);

        const days = Math.floor(remainingTime / 86400);
        const hours = Math.floor((remainingTime % 86400) / 3600);
        const mins = Math.floor((remainingTime % 3600) / 60);
        const secs = Math.floor(remainingTime % 60);

        daysEl.textContent = days;  // Không pad cho days vì có thể > 99
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minsEl.textContent = mins.toString().padStart(2, '0');
        secsEl.textContent = secs.toString().padStart(2, '0');

        if (remainingTime <= 0) {
            clearInterval(timer);
            // Có thể thêm hành động khi hết thời gian, ví dụ: hiển thị "Expired"
        }
    };

    updateCountdown();  // Cập nhật ngay lập tức
    const timer = setInterval(updateCountdown, 1000);  // Cập nhật mỗi giây
}

// Gọi hàm countdown khi trang load
document.addEventListener('DOMContentLoaded', startCountdown);