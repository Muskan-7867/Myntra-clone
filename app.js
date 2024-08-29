let bagItems =[];
onload();
function onload(){
   let  bagItemsStr = localStorage.getItem('bagitems');
   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePge();
  displayBagIcon();
}

 function addtobag(itemId){
    bagItems.push(itemId);
    localStorage.setItem("bagitems",JSON.stringify(bagItems));
    displayBagIcon();

 }
 function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility ='visible';
        bagItemCountElement.innerText = bagItems.length;
    } else{
        bagItemCountElement.style.visibility ='hidden';
    }
 }
 
 function displayItemsOnHomePge(){
  let itemsContainerElement = document.querySelector(".items-container");
  let innerHtml = '';
  
  items.forEach(item => {
      innerHtml += `
      
        <div class="item-container">
              <img class="item-img" src="${item.image}" alt="item-img">
              <div class="rating">
                  ${item.rating.stars}<i class="bi bi-star-fill"></i> | ${item.rating.count}
              </div>
              <div class="company-name">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price">
                  <span class='current price'>${item.current_price}</span>
                  <span class='original price'>${item.original_price}</span>
                  <span class="discount">${item.discount_percentage}</span>
              </div>
              <button class="bag" onclick="addtobag(${item.id})">Add to Bag</button>
      </div>`;
  });
  
  itemsContainerElement.innerHTML = innerHtml;
  
 }
