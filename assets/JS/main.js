// const modal = document.querySelector('.modal');
// const modalBasket = document.querySelector('.modalBasket');
// const overlay = document.querySelector('.overlay');
// const body = document.querySelector('body');
// let goToCart = document.querySelector('.goToCart');
// const btnBasket = document.getElementById('basket');
// const CartEmptyWarn = document.querySelector('.CartIsEmpty');
// // // нужно чтоб перенести данные из json в js

// // const fs = require('fs');
// // const data = fs.readFileSync('E:/html/coffeeWebApp/assets/js/product.json', { encoding: 'utf-8' }); // чтение файла json
// // console.log(typeof data);

// // let dataObj = JSON.parse(data); // перезапись его в объект

// function render() {
//   let htmlCatalogPopular = '';
//   CATALOG_GOODS.forEach(
//     ({
//       id,
//       title,
//       png,
//       price,
//       price_large,
//       volumeStandart,
//       volumeLarge,
//       categoryId,
//       description
//     }) => {
//       htmlCatalogPopular = `
//       <div id = "${id}">
//         <p class="cardTitile">${title}</p>
//         <div class="cardImg"><img src="${png}" alt="Photo" /></div>

//         <div class="cardPriceVolume">
//             <p class="price">${price} руб</p>
//             <p class="volume"><span>${volumeStandart}</span> мл</p>
//         </div>
//         <button class="goToCart ${goToCart}">Добавить</button>
//       </div>
//         `;

//       const newCard = document.createElement('div');
//       newCard.className = 'card';
//       newCard.innerHTML = htmlCatalogPopular;
//       const catalogParent = document.getElementById(`catalog${categoryId}`);
//       let card = catalogParent.appendChild(newCard);
      
//       // ПРИ НАЖАТИИ НА ПОЗИЦИЮ(ОТКРЫТЬ МОДАЛКУ С ПОЗИЦИЕЙ)
//       card.addEventListener('click', () => {
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//         body.classList.add('modalOpen');
//         document.querySelector(".mainInformation").innerHTML = `
//             <div class="modalImgTitle">
//               <div class="modalImg">
//                 <img class = "Selfie" src="${png}" alt="Photo" />
//               </div>
//               <div class="modalText">
//                 <p class="cardTitile">${title}</p>
//                 <p class="modalDescription">${description}</p>
//               </div>
//             </div>
//             <div class = "price_for_backend">${price}</div>
//             <div class="volumeQuantity">
//               <div class="twoVolume">
//                 <div class="modalVolume modalActive" id="VolumeSmall">
//                   <p class="basicPrice">Маленький</p>
//                   <p class="basicVolume"><span>${volumeStandart}</span> мл</p>
//                  </div>
//                 <div class="modalVolume" id="VolumeLarge">
//                 <p class="basicPrice">Большой</p>
//                   <p class="basicVolume"><span>${volumeLarge}</span> мл</p>
//                 </div>
//               </div>
//             </div>
//             `
//         document.getElementById('CartAddButton').innerHTML = `
//               <p>Добавить</p>
//               <p class="PriceDayn">${price} руб</p>
//           `

        
//         const addToCartCart = document.getElementById(`CartAddButton`);
//         addToCartCart.addEventListener('click', AddToCartFunc);



//         // 2 КНОПКИ С РАЗМЕРОМ В МОДАЛ
//         document.querySelectorAll('.modalVolume').forEach(button =>{ 
//           button.addEventListener('click', () =>{
//             if (button.className.includes('modalActive')){
//               null
//             }
//             else{
//               document.querySelectorAll('.modalVolume ').forEach(button =>{
//                 button.className = `modalVolume`
//               }
//             )
//               if(button.textContent.includes('Маленький')){

//               }else{
                
//               }
             
//               button.className = `modalVolume modalActive`
//             }
            
//           })
//         })
        
//         // ЗАКРЫТИЕ ЧЕРЕЗ ОВЕРЛЕЙ
//         overlay.addEventListener('click', () =>{
//           modal.classList.add('hidden');
//           modalBasket.classList.add('hidden');
//           overlay.classList.add('hidden');
//           body.classList.remove('modalOpen');
//         });




//       });
//     },
//   );


// }

// const quantityToMult = document.querySelector('.quantity')
// const quantityPlus = document.querySelector('.quantityPlus')
// const quantityMinus = document.querySelector('.quantityMinus')

// // СЧЕТЧИК В МОДАЛКЕ
// quantityPlus.addEventListener('click', () => {
//   const GoodPrice = document.querySelector('.PriceDayn')
//   const currentCount = ++quantityToMult.textContent;
//   GoodPrice.textContent = `${document.querySelector('.price_for_backend').textContent * currentCount} руб`;
// })

// quantityMinus.addEventListener('click', () => {
//   const GoodPrice = document.querySelector('.PriceDayn')
//   if(quantityToMult.textContent > 1){
//     const currentCount = --quantityToMult.textContent;
  
//     GoodPrice.textContent = `${document.querySelector('.price_for_backend').textContent * currentCount} руб`;
//   }

// })


// // ПОДГРУЗКА ДОБАВОК
// CATALOG_ADDITITVES.forEach(
//   ({
//     title,
//     price
//   }) =>{
//     let addivtive = document.createElement('div')
//     addivtive.className = 'additives'
//     addivtive.innerHTML = `
//     <div class="additivesTitle">${title}</div>
//     <div class="addToCoffee">
//       <span class="additivesPlus">+</span>
//       <span class="additivesPrice">${price} руб</span>
//     </div>
//   `
//     document.querySelector('.allAdditives').appendChild(addivtive)
//   }
// )

// // ДОБАВИТЬ ПОЗИЦИЮ В КОРЗИНУ
// function AddToCartFunc(event){
//   document.querySelectorAll('.addToCoffee').forEach(button =>{
//     button.className = 'addToCoffee'
//   })


//     htmlBasket = `
//   <div class="cartImgText">
//     <div class="goodImg">
//       <img src="${document.querySelector('.mainInformation').querySelector('.Selfie').src}" alt="Photo" />
//     </div>
//     <div class="goodText">
//       <p class="goodTitle">${document.querySelector('.mainInformation').querySelector('.cardTitile').textContent}</p>
//       <p class="goodAdditives">${AddedAdditives + ''}</p>
//       <p class="basicVolume basketVolume">300 мл</p>
//     </div>
//   </div>
//   <div class = "price_for_backend">${document.querySelector('.price_for_backend').textContent}</div>
//   <div class="cartQuantityPrice">
//     <div class="basketPrice">${document.querySelector('.PriceDayn').textContent}</div>
//     <div>
//       <div class="quantitySelection">
//         <span class="quantity">${document.querySelector('.quantity').textContent}</span>
//       </div>
//     </div>
//   </div>
//         `;
//   const newBasketGood = document.createElement('div');
//   newBasketGood.classList.add('basketGood');
//   newBasketGood.innerHTML = htmlBasket;
//   const basketParent = document.getElementById('innerbasketGoods');

//   AddedAdditives = []


//   const NewBasketCard = basketParent.appendChild(newBasketGood);
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   body.classList.remove('modalOpen');
//   ChangeCartSumma();



//   document.querySelector('.quantity').textContent = 1;

//   let quantityPlusButton = document.createElement('span');
//   quantityPlusButton.innerHTML = '<span class="quantityPlus" id="PlusInCart">+</span>'
//   let quantityMinusButton = document.createElement('span');
//   quantityMinusButton.innerHTML = '<span class="quantityMinus" id="MinusInCart">−</span>'
//   let Xyeta = document.createElement('span')
//   Xyeta.className = 'quantity'
//   Xyeta.innerHTML = `${document.querySelector('.quantity').textContent}`

//   let quantityMinusButtonJS = NewBasketCard.querySelector('.quantitySelection').appendChild(quantityMinusButton)
//   // NewBasketCard.querySelector('.quantitySelection').appendChild(quantityMinusButton).appendChild(Xyeta)
//   let quantityPlusButtonJS = NewBasketCard.querySelector('.quantitySelection').appendChild(quantityPlusButton)


//   quantityPlusButtonJS.addEventListener('click', () => {
//     const PriceGoodInCart = quantityMinusButtonJS.parentElement.parentElement.parentElement.querySelector('.basketPrice')
//     let zombie = ++(quantityMinusButtonJS.parentElement.querySelector('.quantity').textContent)
//     PriceGoodInCart.textContent = `${(NewBasketCard.querySelector('.price_for_backend').textContent) * zombie} руб`
//     ChangeCartSumma()
//   })

//   quantityMinusButtonJS.addEventListener('click', () => {
//     const PriceGoodInCart = quantityMinusButtonJS.parentElement.parentElement.parentElement.querySelector('.basketPrice')

//     if (quantityMinusButtonJS.parentElement.querySelector('.quantity').textContent > 0){
//       let zombie = --(quantityMinusButtonJS.parentElement.querySelector('.quantity').textContent)
//       PriceGoodInCart.textContent = `${(NewBasketCard.querySelector('.price_for_backend').textContent) * zombie} руб`
//     }
//     ChangeCartSumma()
//   })
// }


// // ЗАКРЫТИЕ МОДАЛКИ
// const closeModalBtn = document.querySelector('.btnClose');
// closeModalBtn.addEventListener('click', () => {
//     console.log('Окно закрыто');
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//     body.classList.remove('modalOpen');
//     document.querySelector('.quantity').textContent = 1
//     document.querySelectorAll('.addToCoffee').forEach(button =>{
//       button.className = 'addToCoffee'
//     })
// });


// // ОТКРЫТЬ КОРЗИНУ
// btnBasket.addEventListener('click', () => {
//   CartEmptyWarn.classList.add('hidden');
//   modalBasket.classList.remove('hidden');

//   if (([].slice.call(document.getElementById('innerbasketGoods').getElementsByClassName('basketGood'),0).length) <= 0  ) {
//     CartEmptyWarn.classList.remove('hidden');
//     document.querySelector('.MenyaZovutFilipp').parentElement.classList.add('hidden'); // СПРЯТАТЬ КНОПКУ
//   }
  
//   overlay.classList.remove('hidden');
//   body.classList.add('modalOpen');

//   const closeBasketBtn = document.querySelector('.basketClose');
//   closeBasketBtn.addEventListener('click', () => {
//     ChangeCartSumma();
//     modalBasket.classList.add('hidden');
//     overlay.classList.add('hidden');
//     body.classList.remove('modalOpen');
//     });
// });


// // ОБНОВИТЬ СУММУ ПОЗИЦИЙ НА КНОПКЕ С КОРЗИНОЙ
// function ChangeCartSumma(){
//   var childrens = [].slice.call(document.getElementById('innerbasketGoods').getElementsByClassName('basketGood'),0);
//   let summa = 0
//   childrens.forEach(children => {
//     summa += (Number(children.querySelector('.basketPrice').textContent.replace(' руб', '')))
//   });
//   btnBasket.innerHTML = `
//   <button>
//           <img class="basketImg" src="/assets/public/Img/icon basket.png" alt="" /> ${summa}₽
//         </button>`
//   btnBasket.style.display = 'flex';
//   document.querySelector('.MenyaZovutFilipp').textContent = `К оплате ${summa}₽`
// }


// let AddedAdditives = []
// // КНОПКИ С additives В МОДАЛ
// document.querySelectorAll('.addToCoffee ').forEach(button =>{

//   button.addEventListener('click', () =>{
//     let PRCBACK = document.querySelector('.price_for_backend')
//     let PRCDAYN = document.querySelector('.PriceDayn')
//     const quantityToMult = document.querySelector('.quantity').textContent
//     if (button.className.includes('modalActive')){
//       button.className = `addToCoffee`
//       AddedAdditives.pop(button.parentElement.querySelector('.additivesTitle').textContent)
//       PRCBACK.textContent =  Number(PRCBACK.textContent) - (Number(button.querySelector('.additivesPrice').textContent.replace(' руб', '')) * quantityToMult)

//       PRCDAYN.textContent =  Number(PRCDAYN.textContent.replace(' руб', '')) - (Number(button.querySelector('.additivesPrice').textContent.replace(' руб', '')) * quantityToMult) + ' руб'
//     }
//     else{
//       AddedAdditives.push(button.parentElement.querySelector('.additivesTitle').textContent)
//       PRCBACK.textContent = (Number(button.querySelector('.additivesPrice').textContent.replace(' руб', '')) * quantityToMult) + Number(PRCBACK.textContent)
//       PRCDAYN.textContent = (Number(button.querySelector('.additivesPrice').textContent.replace(' руб', '')) * quantityToMult) + Number(PRCDAYN.textContent.replace(' руб', '')) + ' руб'
//       button.className = `addToCoffee modalActive`
//     }
    
//   })
// })

// // КНОПКИ ХОТБАР
// document.querySelectorAll('.hotbarLink').forEach(button =>{ 
//   button.addEventListener('click', () =>{
//     if (button.className.includes('onActive')){
//     }
//     else{
//       document.querySelectorAll('.hotbarLink ').forEach(button =>{
//         button.className = `hotbarLink`
//       }
//     )
//       button.className = `hotbarLink onActive`
//     }
    
//   })
// })

// render();

