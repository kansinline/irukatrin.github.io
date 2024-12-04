// 遅延アニメーションのトリガー
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll('.feature[data-animate="slide-in"]');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.3}s`;
        feature.style.opacity = "1";
    });
});
