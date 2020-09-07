const menu=[{id:1,title:"Idly",category:"Breakfast",price:"13.99",img:"idly.jpg",desc:"Idli is made of urad dal or skinned black gram and rice. Urad dal is high in protein and calcium."},
{id:2,title:"Biriyani",category:"Lunch",price:"11.99",img:"biriyani.jpg",desc:"There are various forms of Hyderabadi biryani. One such biryani is the kachay gosht ki biryani or the dum biryani"},
{id:3,title:"Full Meals",category:"Lunch",price:"12.99",img:"full-meal.jpg",desc:"Buttermilk Sambar. A recipe that's sure to draw recipe requests"},
{id:4,title:"Dosa",category:"Breakfast",price:"13.99",img:"dosa.jpg",desc:"I guarantee you will have a nice crisp dosa! Why is my dosa sticking to the pan"},
{id:5,title:"Parota",category:"Dinner",price:"10.99",img:"poratta.jpg",desc:"Parotta is traditionally served with Beef Roast, Mutta Curry, or Vegetable Kurma for breakfast"},
{id:6,title:"Kothu Porata",category:"Dinner",price:"09.99",img:"kothu-poratta.jpg",desc:"Kothu Parotta is a popular street food in South-India. It is made with parotta, a soft, crispy, and layered flat bread, and left over chicken curry"},
{id:7,title:"Pongal",category:"Breakfast",price:"15.99",img:"pongal.jpg",desc:"Pongal is a popular South Indian food prepared with rice & moong dal, either to a sweet or savory dish"}]
const CategoryButton = document.querySelector(".btn-container")
var sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded",function(){
    displayMenu(menu);
    const categories = menu.reduce(function(values,items){
        if(!values.includes(items.category)){
            values.push(items.category);
        }
        return values
    },["All"]);
    //Mapping Buttons 
    const CategoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    CategoryButton.innerHTML = CategoryBtns;
    var filterbutton = document.querySelectorAll(".filter-btn");
    //filter items
filterbutton.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const catergory = e.currentTarget.dataset.id;
        const menucatergory = menu.filter(function(menuitem){
            if(menuitem.category === catergory){
                return menuitem;
            }
            
        });
        if(catergory=="All"){
            displayMenu(menu);
        }
        else{
            displayMenu(menucatergory);
        }
    });
});
   function displayMenu(Menuitem){
    let displayMenu = Menuitem.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt="">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p>${item.desc}</p>
        </div>
    </article>`
    });
    displayMenu= displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
   }
});

