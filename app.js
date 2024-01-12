let select = document.querySelector("[data-select]");
let adult = document.querySelector("[data-select-adult]")

select.addEventListener("change", (evt) => {
  console.log(select.value);
  if (select.value == "Malazia") {
    alert("Malayziaga reys 3 kundan keyin");
  }
  if (select.value == "India") {
    alert("India ga reys bugun soat 14:30 da");
  }
  if (select.value == "Dubai") {
    alert("Dubaiga reys 7 kundan keyin");
  }
  if (select.value == "Paris") {
    alert("Paris ga reys 5 kundan keyin");
  }
  if (select.value == "shvetsiya") {
    alert("shvetsiya ga reys 14 kundan keyin");
  }
  if (select.value == "shvetsarya") {
    alert("reys bo'lishi bilan sizga bo'g'laniladi☜(⌒▽⌒)☞");
  }
  if (select.value == "London") {
    alert("London reys 2 kundan keyin");
  }
  if (select.value == "Gruziya") {
    alert("shu oyda reys yo'q(╯▽╰ )");
  }
  if (select.value == "Turciya") {
    alert("Turciya ga reys 10 kundan keyin");
  }
  if (select.value == "Russia") {
    alert("Russia ga reys ertaga ");
  }
});

adult.addEventListener("change", (evt) => {
  if 
  (+adult.value< 5) {
    alert ("sizga yegil mashina ajratdik")
  }
  if (+adult.value< 14 && 4<+adult.value) {
    alert ("sizga gazel ajratildi")
  }
  if (+adult.value< 22 && 13<+adult.value)  {
    alert ("sizga mini avtobus ajratildi")
  } if (+adult.value<= 44 && 22<=+adult.value) {
    alert ("sizga avtobus ajratildi")
  }
 
})

// adult.addEventListener("change", (evt) =>{
//   if (+adult.value< 14) {
//     alert ("sizga gazel ajratildi")
//   }
// })

// adult.addEventListener("change", (evt) =>{
//   if (+adult.value< 22) {
//     alert ("sizga mini avtobus ajratildi")
//   }
// })

// adult.addEventListener("change", (evt) =>{
//   if (+adult.value<= 44) {
//     alert ("sizga avtobus ajratildi")
//   }
// })