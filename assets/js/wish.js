window.addEventListener("load", function () {
  // init();

  const form = document.getElementById("my-form-wish");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
      // init();
      // exec(nama, wish);
    });
  });
});

const sheetID = "16trWKlpLjt4cLnvwtAWTkfayNk_YF6ByQ0O2IIpG5cQ";
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = "wishes";
let qu = "Select B, C";
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

const cardBody = document.querySelector(".rsvp .output .card-body");
const output = document.querySelector(".rsvp .output");

function init() {
  // console.log("ready");
  fetch(url)
    .then((response) => response.text())
    .then((response) => {
      // console.log(response);
      const jsData = JSON.parse(response.substring(47).slice(0, -2));
      // console.log(jsData);
      const cols = [];
      jsData.table.cols.forEach((heading) => {
        if (heading.label) {
          cols.push(heading.label.toLowerCase().replace(/\s/g, ""));
        }
      });

      jsData.table.rows.forEach((main) => {
        // console.log(main);
        const row = [];
        cols.forEach((ele, ind) => {
          // console.log(ele);
          row[ele] = main.c[ind] != null ? main.c[ind].v : "";
        });
        data.push(row);
      });

      // console.log(data);
      maker(data);
    });
}

function maker(json) {
  const datas = [];

  if (!json[0].nama) {
    console.log("yes");
    output.classList.add("d-none");
  } else {
    output.classList.remove("d-none");
    json.forEach((el) => {
      const div = document.createElement("div");
      div.classList.add("card-wish");

      const h5 = document.createElement("h5");
      h5.classList.add("card-title");

      const p = document.createElement("p");
      p.classList.add("card-text");

      h5.textContent = el.nama;
      p.textContent = el.wish;

      div.append(h5, p);

      datas.push(div);
    });

    datas.forEach((data) => {
      cardBody.append(data);
    });
  }
}

// function exec(nama, wish) {
//   const datas = [];

//   // if (!json[0].nama) {
//   //   console.log("yes");
//   //   output.classList.add("d-none");
//   // } else {
//   // output.classList.remove("d-none");
//   // json.forEach((el) => {
//   const div = document.createElement("div");
//   div.classList.add("card-wish");

//   const h5 = document.createElement("h5");
//   h5.classList.add("card-title");

//   const p = document.createElement("p");
//   p.classList.add("card-text");

//   h5.textContent = nama;
//   p.textContent = wish;

//   div.append(h5, p);

//   datas.push(div);
//   // });

//   datas.forEach((data) => {
//     cardBody.append(data);
//   });
//   // }
// }
