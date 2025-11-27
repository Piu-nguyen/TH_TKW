
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