// Koala variables
const nameIn = document.getElementById("name-in");
const ageIn = document.getElementById("age-in");
const colorIn = document.getElementById("color-in");
const readyTransferIn = document.getElementById("ready-transfer-in");
const notesIn = document.getElementById("notes-in");
// Submit button
const addButton = document.getElementById("add-button");
// Koala Display
const viewKoalas = document.getElementById("view-koalas");

/**
 * GET koalas from server
 */
function getKoalas() {
  console.log("in getKoalas");
  // axios call to server to get koalas
  axios
    .get("/koalas")
    .then((response) => {
      console.log(response.data);
      viewKoalas.innerHTML = '';
      let koalas = response.data;
      
      koalas.forEach(koala => {
        let ready = koala.readyToTransfer;
        if(ready === true) {
          ready = 'yes';
        } else{
          ready = 'no';
        }

        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favoriteColor}</td>
        <td>${koala.notes}</td>
        <td>${ready}</td>
        <td class="data-button" ><button class="ready-button" onclick="readyToggleKoala(${koala.id})">Toggle</button></td>
        <td class="data-button"><button class="delete-button" onclick="transferKoala(${koala.id})">Transfer</button></td>
        `
        viewKoalas.appendChild(row);
        // console.log('koala added!');
      });
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
} // end getKoalas

/**
 * POST koala to server
 */
function saveKoala() {
  console.log('in Save Koala');

  let readyToTransfer = readyTransferIn.value.toLowerCase() === 'yes';

  let koalaToSave = {
    name: nameIn.value,
    color: colorIn.value,
    age: parseInt(ageIn.value, 10),
    ready: readyToTransfer,
    notes: notesIn.value,
  };

  // axios call to server to get koalas
  axios
    .post("/koalas", koalaToSave)
    .then((response) => {
      console.log(response);
      getKoalas();
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}

function transferKoala(id) {
  axios
    .delete(`/koalas/${id}`)
    .then((response) => {
      console.log(response);
      getKoalas();
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

function readyToggleKoala(id) {
  axios
    .put(`/koalas/${id}`)
    .then((response) => {
      console.log(response);
      getKoalas();
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

getKoalas();

addButton.addEventListener('click', saveKoala);