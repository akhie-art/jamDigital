let section = document.querySelector("section"),
  icons = document.querySelector(".icon");
icons.onclick = () => {
  section.classList.toggle("dark");
};
setInterval(() => {
  let date = new Date();
  jam = date.getHours();
  menit = date.getMinutes();
  detik = date.getSeconds();
  bulan = date.getMonth();

  let d;
  d = jam < 12 ? "AM" : "PM";
  jam = jam > 12 ? jam - 12 : jam;
  jam = jam == 0 ? (jam = 12) : jam;

  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  document.querySelector(".hour_num").innerHTML = jam;
  document.querySelector(".min_num").innerHTML = menit;
  document.querySelector(".sec_num").innerHTML = detik;
  document.querySelector(".am_pm").innerHTML = d;
}, 1000);
