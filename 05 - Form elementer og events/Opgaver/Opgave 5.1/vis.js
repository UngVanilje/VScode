//5.1 Tilføjer labels on onClick event
let tid = document.getElementById("tid");
let tal = document.getElementById("tal");

tid.outerHTML = '<label>Tid</label>' + tid.outerHTML;
tal.outerHTML = '<label>Tal</label>' + tal.outerHTML;

tal = document.getElementById("tal");
tal.onclick = () => tal.value = Math.random() * 100;

tid = document.getElementById("tid");
tid.onclick = () => tid.value = Date.now();
