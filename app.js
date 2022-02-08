// const generateStars = (parentElement, starNumber = 500) => {
//     if (!(parentElement instanceof HTMLElement)) {
//       throw new Error(`Invalid parent element: ${parentElement}.`);
//     }

//     const getStarInfo = () => ({
//       x: getRandom(0, 100),
//       y: getRandom(0, 100),
//       opacity: getRandom(0.3, 1),
//       size: getRandom(0.3, 2),
//       delay: getRandom(0.3, 10)
//     })

//     let html = "";
//     for (let i = 0; i < starNumber; i++) {   
//       const { x, y, opacity, size, delay } = getStarInfo()
//       const style = `--x: ${x}%; --y: ${y}%; --opacity: ${opacity}; --size: ${size}; --delay: -${delay}s;`;
//       html += `<div class='star' style='${style}'></div>`;
//     }
//     parentElement.insertAdjacentHTML("beforeend", html);
//   };

//   const getRandom = (min = 0, max = 100, roundResult = false) => {
//     const result = Math.random() * (max - min) + min;
//     return roundResult ? Math.round(result) : result;
//   };

//   const sky = document.querySelector(".sky");
//   generateStars(sky   );



////pie chart

let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Airdrop ', 'developement'];
let colorHex = ["#44BC98", '#2E4949'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [200000000, 1000000000],
      backgroundColor: colorHex
    }],
    labels: false

  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',


    },

  }
})

//Contract Address


function copyText() {

  /* Copy text into clipboard */
  navigator.clipboard.writeText
    ("0xbf983af6ec1e9f9baf246d022b116e3598f87f64");
}


function showtext(){
  let hiddentex = document.getElementById("hiddentex");
  hiddentex.innerHTML = "0x4CbbD687d5876894cC5c4B8775D6FB542869fCca"
}
function hidetex(){
  let hiddentex = document.getElementById("hiddentex");
   hiddentex.innerHTML = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}



///Dowload pdf//




$('#GetFile').on('click', function () {
  $.ajax({
      url: './images/whitepapr.pdf',
      method: 'GET',
      xhrFields: {
          responseType: 'blob'
      },
      success: function (data) {
          var a = document.createElement('a');
          var url = window.URL.createObjectURL(data);
          a.href = url;
          a.download = 'LAB Token.pdf';
          document.body.append(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
      }
  });
});
//toggle//
let togglebtn = ()=>{

  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "0%"
}
let toggleoffbtn = ()=>{

  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "-100%"

}

let aboaboutsection = document.getElementById("aboutsection")
aboaboutsection.addEventListener('click',()=>{
  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "-100%"
  

})
let Tokenomicssection = document.getElementById("Tokenomicssection")
Tokenomicssection.addEventListener('click',()=>{
  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "-100%"
  

})
let roadsection = document.getElementById("roadsection")
roadsection.addEventListener('click',()=>{
  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "-100%"
  

})
let conatctsection = document.getElementById("conatctsection")
conatctsection.addEventListener('click',()=>{
  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "-100%"
  

})
let moresection = document.getElementById("moresection")
moresection.addEventListener('click',()=>{
  let toggle = document.getElementById("mobiletoggle")

  toggle.style.left  = "-100%"
  

})