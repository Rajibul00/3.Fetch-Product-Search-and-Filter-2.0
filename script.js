let searchProduct = document.querySelector('input');
let container =    document.querySelector('.container');
let productdiscriptioncntainer = document.querySelector('.productdiscriptioncntainer')
window.addEventListener('load',async function(){
try {
    let response = await fetch(`https://fakestoreapi.com/products`);
    let data = await response.json();
    
 
for(i=0;i<data.length;i++){
    let productdiscriptiondiv = document.createElement('div');
    productdiscriptiondiv.className='productdiscription';
    productdiscriptioncntainer.appendChild(productdiscriptiondiv);
    productdiscriptiondiv.innerHTML=`

    
<section class="imgsection"><img src="${data[i].image}" alt="Product's Image"></section>

<section class="discription">
<section class="aboutandheading">
<section class="productheading">${data[i].title}</section>
<section class="aboutproduct">${data[i].description}</section>
</section>
<button class="price">${data[i].price}$</button>

</section>

    `;

}

} catch (error) {
   container.style.display='none';
document.body.style.textAlign='Center'
document.body.innerHTML='<h1>Check Your Internet Connection</h1>'
}
})



    async function getProducts(){

        productdiscriptioncntainer.innerHTML=''
              try {
               let response = await fetch('https://fakestoreapi.com/products');
               let data = await response.json();
               let searchProductfilter =searchProduct.value.toLowerCase();
       
        let newData = data.filter( (items)=> {
           return items.title.toLowerCase().includes(searchProductfilter)  || items.category.toLowerCase().includes(searchProductfilter) || items.price.toString().includes(searchProductfilter) 
        });
       if(newData.length>0){
           for(i=0;i<newData.length;i++){
       
       
               let productdiscriptiondiv = document.createElement('div');
               productdiscriptiondiv.className='productdiscription';
               productdiscriptioncntainer.appendChild(productdiscriptiondiv);
               productdiscriptiondiv.innerHTML= `<section class="imgsection"><img src="${newData[i].image}" alt="Product's Image"></section>
           
           <section class="discription">
           <section class="aboutandheading">
           <section class="productheading">${newData[i].title}</section>
           <section class="aboutproduct">${newData[i].description}</section>
           </section>
           <button class="price">${newData[i].price}$</button>
           
           </section>
           
               `;
           }
       }else{
           productdiscriptioncntainer.innerHTML='<h1>Sorry No such things available</h1>'
       }
       
       
          
        
           }
           catch (error) {
              container.style.display='none';
           document.body.style.textAlign='Center'
           document.body.innerHTML='<h1>Check Your Internet Connection</h1>'
           }
        }



searchProduct.addEventListener('keydown',function(event){
if(event.key=='Enter'){

    getProducts()
  
}
}
)
searchProduct.addEventListener('keydown',function(){

        getProducts()
      
})

window.addEventListener('load',function(){
let date = new Date();
let currentTime = date.getHours();
if(currentTime>6&&currentTime<18){
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
 
}else{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
 
}
}
)







