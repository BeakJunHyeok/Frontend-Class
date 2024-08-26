// geolocation => 사용자의 위치를 파악하기 위한 목적 API
// getCurrentPosition(succesCB, errorCB, options)

const geoLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const erroPostion = (err) => {
  alert(err.message);
};

geoLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPostion);

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geoLocation.watchPosition(
      showPosition,
      erroPostion,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다!");
  }
});
