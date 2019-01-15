let ticking = false;
let calgarySVG = document.getElementById('calgary');
let clouds = document.querySelector('#clouds');
let left1M = document.querySelector('#left1M rect');
let left1M_H = parseFloat( left1M.getAttribute('height') );
let left1M_Y = parseFloat( left1M.getAttribute('y') );
let left2M = document.querySelector('#left2M rect');
let left2M_H = parseFloat( left2M.getAttribute('height') );
let left2M_Y = parseFloat( left2M.getAttribute('y') );
let left3M = document.querySelector('#left3M rect');
let left3M_H = parseFloat( left3M.getAttribute('height') );
let left3M_Y = parseFloat( left3M.getAttribute('y') );
let left4M = document.querySelector('#left4M rect');
let left4M_H = parseFloat( left4M.getAttribute('height') );
let left4M_Y = parseFloat( left4M.getAttribute('y') );
//
let right1M = document.querySelector('#right1M rect');
let right1M_H = parseFloat( right1M.getAttribute('height') );
let right1M_Y = parseFloat( right1M.getAttribute('y') );
let right2M = document.querySelector('#right2M rect');
let right2M_H = parseFloat( right2M.getAttribute('height') );
let right2M_Y = parseFloat( right2M.getAttribute('y') );
let right3M = document.querySelector('#right3M rect');
let right3M_H = parseFloat( right3M.getAttribute('height') );
let right3M_Y = parseFloat( right3M.getAttribute('y') );
let right4M = document.querySelector('#right4M rect');
let right4M_H = parseFloat( right4M.getAttribute('height') );
let right4M_Y = parseFloat( right4M.getAttribute('y') );

window.addEventListener('scroll', function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function onScroll() {
  let calgaryBB = calgarySVG.getBoundingClientRect();
  const calgaryRatio = (window.innerHeight - calgaryBB.top) / window.innerHeight;
  // console.log(`ratio ${calgaryRatio}`);

  let cloudsR = Math.max( 0, Math.min( 1,( calgaryRatio - 0 ) * 1 ));
  clouds.setAttribute('transform', `translate(${cloudsR*300})`);
  let left1R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.5 ) * 4 ));
  let left2R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.6 ) * 4 ));
  let left3R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.7 ) * 4 ));
  let left4R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.8 ) * 4 ));
  left1M.setAttribute('y', -left1R * left1M_H + left1M_Y);
  left2M.setAttribute('y', -left2R * left2M_H + left2M_Y);
  left3M.setAttribute('y', -left3R * left3M_H + left3M_Y);
  left4M.setAttribute('y', -left4R * left4M_H + left4M_Y);
  //
  let right1R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.7 ) * 4 ));
  let right2R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.8 ) * 4 ));
  let right3R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.8 ) * 4 ));
  let right4R = Math.max( 0, Math.min( 1,( calgaryRatio - 0.9 ) * 4 ));
  right1M.setAttribute('y', -right1R * right1M_H + right1M_Y);
  right2M.setAttribute('y', -right2R * right2M_H + right2M_Y);
  right3M.setAttribute('y', -right3R * right3M_H + right3M_Y);
  right4M.setAttribute('y', -right4R * right4M_H + right4M_Y);
//   console.log(
//       calgaryBB.top, calgaryBB.right, calgaryBB.bottom, calgaryBB.left,
//       window.innerHeight);
}