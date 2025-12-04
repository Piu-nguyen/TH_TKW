 (function ($) {
                "use strict";
                // Chọn phần tử
                var progressPath = document.querySelector('.progress-circle path');
                var pathLength = progressPath.getTotalLength();

                // Cấu hình ban đầu cho SVG Dash (ẩn vòng tròn đỏ)
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

                // Hàm cập nhật độ dài viền đỏ theo scroll
                var updateProgress = function () {
                    var scroll = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
                    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                }

                updateProgress();
                window.addEventListener('scroll', updateProgress);

                // Ẩn hiện nút khi scroll
                var offset = 50;
                var duration = 550;

                window.addEventListener('scroll', function () {
                    if (window.scrollY > offset) {
                        document.querySelector('.progress-wrap').classList.add('active-progress');
                    } else {
                        document.querySelector('.progress-wrap').classList.remove('active-progress');
                    }
                });

                // Sự kiện click để cuộn lên đầu trang
                document.querySelector('.progress-wrap').addEventListener('click', function (event) {
                    event.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                })

            })();