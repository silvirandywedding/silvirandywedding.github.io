window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  // const inputNama = document.querySelector('[name="nama"]');
  // const inputJumlah = document.querySelector('[name="jumlah"]');
  const selectStatus = document.querySelector('[name="status"]');
  const rsvpAlert = document.querySelector(".rsvp-alert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      let bsAlert = document.createElement("div");
      if (selectStatus.value == "Hadir") {
        bsAlert.setAttribute("class", "alert alert-success");
        bsAlert.setAttribute("role", "alert");
        bsAlert.innerHTML =
          "Konfirmasi kehadiran berhasil terkirim. <br/> Kami tunggu kehadiran saudara di hari bahagia kami.";

        rsvpAlert.appendChild(bsAlert);
      } else if (selectStatus.value == "Tidak Hadir") {
        bsAlert.setAttribute("class", "alert alert-warning");
        bsAlert.setAttribute("role", "alert");
        bsAlert.innerHTML =
          "Konfirmasi kehadiran berhasil terkirim. <br/> Mohon do'a dan restu untuk kami, terima kasih.";

        rsvpAlert.appendChild(bsAlert);
      }

      setTimeout(() => {
        rsvpAlert.removeChild(bsAlert);
      }, 2500);

      // inputNama.value = "";
      // // inputJumlah.value = "";
      selectStatus.value = "Pilih salah satu";
    });
  });
});
