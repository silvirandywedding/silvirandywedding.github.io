window.addEventListener("load", function () {
  init();

  const form = document.getElementById("my-form-wish");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      // alert("Success!");
      init();
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

// const sheetID = "1asPWG32ztF2ldje8u8DH2NdVHpciUJoWgV-BnIXjkZc";
// const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
// const sheetName = "users";
// let qu = "Select A, B, C";
// const query = encodeURIComponent(qu);
// const url = `${base}&sheet=${sheetName}&tq=${query}`;
// const data = [];

// const output = document.querySelector(".output");

// document.addEventListener("DOMContentLoaded", init);

// function init() {
//   // console.log("ready");
//   fetch(url)
//     .then((response) => response.text())
//     .then((response) => {
//       // console.log(response);
//       const jsData = JSON.parse(response.substring(47).slice(0, -2));
//       // console.log(jsData);
//       const cols = [];
//       jsData.table.cols.forEach((heading) => {
//         if (heading.label) {
//           cols.push(heading.label.toLowerCase().replace(/\s/g, ""));
//         }
//       });

//       jsData.table.rows.forEach((main) => {
//         // console.log(main);
//         const row = {};
//         cols.forEach((ele, ind) => {
//           // console.log(ele);
//           row[ele] = main.c[ind] != null ? main.c[ind].v : "";
//         });
//         data.push(row);
//       });

//       maker(data);
//     });
// }

// function maker(json) {
//   const table = document.createElement("table");
//   table.classList.add("table", "table-striped");
//   const tHead = document.createElement("thead");
//   const tBody = document.createElement("tbody");
//   output.append(table);

//   let first = true;

//   json.forEach((el) => {
//     const keys = Object.keys(el);

//     if (first) {
//       first = false;
//       const tr = document.createElement("tr");

//       keys.forEach((heading) => {
//         const th = document.createElement("th");
//         th.setAttribute("scope", "col");
//         th.textContent = heading.toUpperCase();

//         tr.append(th);
//       });

//       tHead.append(tr);
//     }

//     const tr = document.createElement("tr");

//     keys.forEach((key) => {
//       const td = document.createElement("td");
//       td.textContent = el[key];
//       tr.append(td);
//     });

//     tBody.append(tr);
//     table.append(tHead, tBody);
//   });
// }

// function maker(json) {
//   const div = document.createElement("div");
//   div.style.display = "grid";
//   div.style.gridTemplateColumns = "100px 100px 100px 100px";
//   output.append(div);
//   let first = true;

//   json.forEach((el) => {
//     // console.log(ele);
//     const keys = Object.keys(el);
//     if (first) {
//       first = false;
//       keys.forEach((heading) => {
//         const ele = document.createElement("div");
//         ele.textContent = heading;
//         ele.style.backgroundColor = "black";
//         ele.style.color = "white";
//         div.append(ele);
//       });
//     }

//     keys.forEach((key) => {
//       const ele = document.createElement("div");
//       ele.style.border = "1px solid #ddd";
//       ele.textContent = el[key];
//       div.append(ele);
//     });
//   });
// }
