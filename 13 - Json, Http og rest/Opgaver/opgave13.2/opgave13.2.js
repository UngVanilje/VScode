// Hent DOM-elementer
const rumDropdown = document.querySelector("#rum-dropdown");
const beskederListe = document.querySelector("#beskeder-liste");
const beskedInput = document.querySelector("#besked-input");
const sendBeskedKnap = document.querySelector("#send-besked-knap");

// Hent en liste over chatrum fra serveren og opret en option for hvert chatrum i dropdown-menuen
fetch("https://beskedserver.azurewebsites.net/api/chatRum")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((rum) => {
      const option = document.createElement("option");
      option.value = rum;
      option.textContent = rum;
      rumDropdown.appendChild(option);
    });
    // Opdater beskedlisten med beskeder fra det valgte chatrum ved start
    opdaterBeskeder();
  })
  .catch((error) => {
    console.error(error);
  });

// Lyt efter change-begivenhed på dropdown-menuen og opdater beskedlisten med beskeder fra det valgte chatrum
rumDropdown.addEventListener("change", function () {
  opdaterBeskeder();
});

// Lyt efter click-begivenhed på send-knappen, send besked og nulstil inputfeltet
sendBeskedKnap.addEventListener("click", function () {
  const rum = rumDropdown.value;
  const tekst = beskedInput.value;
  opretBesked(rum, tekst);
  beskedInput.value = "";
});

// Opdater beskedlisten automatisk hvert 5. sekund
setInterval(opdaterBeskeder, 5000);

// Funktion til at opdatere beskedlisten
function opdaterBeskeder() {
  let url;
  if (rumDropdown.value) {
    url = `https://beskedserver.azurewebsites.net/api/soegbeskeder/${rumDropdown.value}`;
  } else {
    url = "https://beskedserver.azurewebsites.net/api/beskeder";
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      beskederListe.innerHTML = "";
      data.forEach((besked) => {
        const li = document.createElement("li");
        li.textContent = `[${besked.chatRum}] ${besked.tekst}`;

        // Opret en knap til sletning af beskeden
        const sletKnap = document.createElement("button");
        sletKnap.textContent = "Slet";
        sletKnap.addEventListener("click", function () {
          sletBesked(besked.id);
        });
        li.appendChild(sletKnap);

        beskederListe.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

// Funktion til at oprette en besked
function opretBesked(rum, tekst) {
  fetch("https://beskedserver.azurewebsites.net/api/beskeder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chatRum: rum, // rettet til små bogstaver i 'chatRum'
      tekst: tekst, // rettet til små bogstaver i 'tekst'
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fejl ved oprettelse af besked");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Besked oprettet:", data);

      alert("Besked sendt!");
      opdaterBeskeder();
    })
    .catch((error) => {
      console.error(error);
      alert("Fejl ved oprettelse af besked");
    });
}

// Funktion til at slette en besked
function sletBesked(id) {
  fetch("https//beskedserver.azurewebsites.net/api/beskeder/${id}", {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fejl ved sletning af besked");
      }
      console.log("Besked slettet:", id);
      alert("Besked slettet!");
      opdaterBeskeder();
    })
    .catch((error) => {
      console.error(error);
      alert("Fejl ved sletning af besked");
    });
}
