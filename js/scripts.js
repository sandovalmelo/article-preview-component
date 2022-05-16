const profileInfo = document.getElementById("profile-info");
const profileShare = document.getElementById("profile-share");
const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", (event) => {
	profileShare.classList.toggle("open");
	shareBtn.classList.toggle("active");
});
