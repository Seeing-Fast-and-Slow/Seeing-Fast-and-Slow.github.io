const slider = `
    <div class="slider-line" aria-hidden="true"></div>
    <div class="slider-button" aria-hidden="true">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        viewBox="0 0 256 256"
        >
        <rect width="256" height="256" fill="none"></rect>
        <line
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
        ></line>
        <line
            x1="96"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
        ></line>
        <polyline
            points="48 160 16 128 48 96"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
        ></polyline>
        <line
            x1="160"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
        ></line>
        <polyline
            points="208 96 240 128 208 160"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
        ></polyline>
        </svg>
    </div>
`


document.querySelectorAll(".video-comparison").forEach(container => {
  container.insertAdjacentHTML('beforeend', slider);

  const clipper = container.querySelector(".clipper");

  container.addEventListener("mousemove", function(e) {
    const rect = container.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width * 100;

    container.style.setProperty('--position', `${percent}%`);
  });
});


function switchVideoBaseline(method, button) {
    const container = button.closest('.container');

    // Update active button state
    container
        .querySelectorAll(".baseline-buttons-container .baseline-buttons")
        .forEach(btn => btn.classList.remove("is-active"));

    button.classList.add("is-active");

    const allVideos = Array.from(container.querySelectorAll(".beforeVideo"));
    // const currentVideos = allVideos.filter(video => video.closest(".is-current"));
    // const otherVideos = allVideos.filter(video => !video.closest(".is-current"));
    // const orderedVideos = [...currentVideos, ...otherVideos];
    
    // orderedVideos.forEach(video => {
    allVideos.forEach(video => {
        // Preserve playback state
        const afterVideo = video.closest('.video-comparison').querySelector(".afterVideo")
        // const currentTime = afterVideo.currentTime;
        // const wasPlaying = !video.paused;

        // Build new src
        const oldSrc = video.src;
        const newSrc = oldSrc.replace(
            /_[^_]+\.mp4$/,
            `_${method}.mp4`
        );

        video.src = newSrc;
        video.load();
        afterVideo.load();

        // video.onloadeddata = () => {
        //     video.currentTime = 0;
        //     if(wasPlaying) video.play();
        // };

        // afterVideo.onloadeddata = () => {
        //     afterVideo.currentTime = 0;
        //     if(wasPlaying) afterVideo.play();
        // };
    });
}


document.querySelectorAll(".video-comparison").forEach(container => {
    const v1 = container.querySelector(".beforeVideo");
    const v2 = container.querySelector(".afterVideo");

    if (!v1 || !v2) return;

    // --- drift correction ---
    let syncing = false;
    const sync = () => {
        if (!v1.paused && !syncing) {
            const diff = Math.abs(v1.currentTime - v2.currentTime);
            if (diff > 0.1) {
                syncing = true;
                v2.currentTime = v1.currentTime;
                syncing = false;
            }
        }
        requestAnimationFrame(sync);
    };
    sync();
});