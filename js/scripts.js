//function to register all users
function signup() {
    //récupération des données
    var fName = document.getElementById('firstName').value;
    //controle de saisie
    //FN.length>=3
    var isFNameValid = checkLength(fName, 3)
    if (isFNameValid == false) {
        document.getElementById('FNameError').innerHTML = "First name should be at least 3 caracters"
    }
    else {
        document.getElementById('FNameError').innerHTML = ""
    }
    var lName = document.getElementById('lastName').value;
    var isLNameValid = checkLength(lName, 4)
    if (isLNameValid == false) {
        document.getElementById('LNameError').innerHTML = "Last name should be at least 4 caracters"
    }
    else {
        document.getElementById('LNameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isPasswordValid = checkLength(password, 6)
    if (isPasswordValid == false) {
        document.getElementById('passwordError').innerHTML = "Password should be at least 6 caracters"
    }
    else {
        document.getElementById('passwordError').innerHTML = ""
    }
    var confirmPassword = document.getElementById('confirmPassword').value;
    var isconfirmpasswordValid = isEqaul(password, confirmPassword);
    if (isconfirmpasswordValid == false) {
        document.getElementById('confirmpasswordError').innerHTML = "Please check password";
    }
    else {
        document.getElementById('confirmpasswordError').innerHTML = ""
    }
    var tel = document.getElementById('tel').value;
    var isTelValid = checkPhone(tel, 8);
    if (isTelValid == false) {
        document.getElementById('telError').innerHTML = "Tel should be 8 numbers";
    }
    else {
        document.getElementById('telError').innerHTML = "";
    }
    var adress = document.getElementById('adress').value;
    if (isLNameValid == true && isLNameValid == true && isPasswordValid == true && isconfirmpasswordValid && isTelValid) {
       var usersTab = getFromLS('users');
        //create user obj
        var user = {
            id: generateId(usersTab) + 1,
            FN: fName,
            LN: lName,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            adress:adress,
            role:"client",

        }
        //save into LS

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace('login.html');
    }

    // Fonction de validation pour verifier la longueur d'une chaine
}
function signupStore() {
    //récupération des données
    var nameStore = document.getElementById('storetName').value;
    var fName = document.getElementById('firstName').value;
    //controle de saisie
    //FN.length>=3
    
    var isFNameValid = checkLength(fName, 3)
    if (isFNameValid == false) {
        document.getElementById('firstNameError').innerHTML = "First name should be at least 3 caracters"
    }
    else {
        document.getElementById('firstNameError').innerHTML = ""
    }
    
    var lName = document.getElementById('lasttName').value;
    var isLNameValid = checkLength(lName, 4)
    if (isLNameValid == false) {
        document.getElementById('lastNameError').innerHTML = "Last name should be at least 4 caracters"
    }
    else {
        document.getElementById('lastNameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isPasswordValid = checkLength(password, 6)
    if (isPasswordValid == false) {
        document.getElementById('passwordError').innerHTML = "Password should be at least 6 caracters"
    }
    else {
        document.getElementById('passwordError').innerHTML = ""
    }
    var confirmPassword = document.getElementById('confirmPassword').value;
    var isconfirmpasswordValid = isEqaul(password, confirmPassword);
    if (isconfirmpasswordValid == false) {
        document.getElementById('confirmpasswordError').innerHTML = "Please check password";
    }
    else {
        document.getElementById('confirmpasswordError').innerHTML = ""
    }
    var tel = document.getElementById('tel').value;
    var isTelValid = checkPhone(tel, 8);
    if (isTelValid == false) {
        document.getElementById('telError').innerHTML = "Tel should be 8 numbers";
    }
    else {
        document.getElementById('telError').innerHTML = "";
    }
    var adressStore = document.getElementById('adress').value;
    if (isLNameValid == true && isLNameValid == true && isPasswordValid == true && isconfirmpasswordValid && isTelValid) {
       
        var usersTab = getFromLS('users');
        //create user obj
        var user = {
            id: generateId(usersTab) + 1,
            storeName:nameStore,
            FN: fName,
            LN: lName,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            adress:adressStore,
            role:"store",
            status:'NOK'

        }
        //save into LS

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace('login.html');
    }
    }
    function signupAdmin() {
    //récupération des données
    var fName = document.getElementById('firstName').value;
    //controle de saisie
    //FN.length>=3
    
    var isFNameValid = checkLength(fName, 3)
    if (isFNameValid == false) {
        document.getElementById('firstNameError').innerHTML = "First name should be at least 3 caracters"
    }
    else {
        document.getElementById('firstNameError').innerHTML = ""
    }
    
    var lName = document.getElementById('lasttName').value;
    var isLNameValid = checkLength(lName, 4)
    if (isLNameValid == false) {
        document.getElementById('lastNameError').innerHTML = "Last name should be at least 4 caracters"
    }
    else {
        document.getElementById('lastNameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isPasswordValid = checkLength(password, 6)
    if (isPasswordValid == false) {
        document.getElementById('passwordError').innerHTML = "Password should be at least 6 caracters"
    }
    else {
        document.getElementById('passwordError').innerHTML = ""
    }
    var confirmPassword = document.getElementById('confirmPassword').value;
    var isconfirmpasswordValid = isEqaul(password, confirmPassword);
    if (isconfirmpasswordValid == false) {
        document.getElementById('confirmpasswordError').innerHTML = "Please check password";
    }
    else {
        document.getElementById('confirmpasswordError').innerHTML = ""
    }
    var tel = document.getElementById('tel').value;
    var isTelValid = checkPhone(tel, 8);
    if (isTelValid == false) {
        document.getElementById('telError').innerHTML = "Tel should be 8 numbers";
    }
    else {
        document.getElementById('telError').innerHTML = "";
    }
    var adress = document.getElementById('adress').value;
    if (isLNameValid == true && isLNameValid == true && isPasswordValid == true && isconfirmpasswordValid && isTelValid) {
       
        var usersTab = getFromLS('users');
        //create user obj
        var user = {
            id: generateId(usersTab) + 1,
            
            FN: fName,
            LN: lName,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            adress:adress,
            role:"admin",

        }
        //save into LS

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace('login.html');
    }
    }

    // Fonction de validation pour verifier la longueur d'une chaine

function generateId(T) {
    var max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
    }
    for (i = 1; i < T.length; i++) {
        if (T[i].id > max) {
            max = T[i].id;
        }

    }
    return max;
}
function checkLength(ch, nb) {
    return (ch.length >= nb);

}
function isEqaul(ch1, ch2) {
    return (ch1 == ch2);
}
function checkPhone(ch, n) {
    return (ch.length == n)
}
function checkNumber(n1, n2) {
    return (Number(n1) > n2);

}

function addProducts() {
    //récupération des données
    var Nproduct = document.getElementById('nameProduct').value;
    var isNproductValid = checkLength(Nproduct, 4)
    if (isNproductValid == false) {
        document.getElementById('NproductError').innerHTML = "Product name should have at least 4 caracters"
    }
    else {
        document.getElementById('NproductError').innerHTML = ""
    }
    var price = document.getElementById('price').value;
    var ispriceValid = checkNumber(price, 0)
    if (ispriceValid == false) {
        document.getElementById('priceError').innerHTML = "Product price should be > 0 "
    }
    else {
        document.getElementById('priceError').innerHTML = ""
    }
    var stock = document.getElementById('stock').value;
    var istockValid = checkNumber(stock, 20)
    if (istockValid == false) {
        document.getElementById('stockError').innerHTML = "stock should be > 20"
    }
    else {
        document.getElementById('stockError').innerHTML = ""
    }
    var category = document.getElementById('category').value;
    //if all conditions are true, create obj and save into LS
    if (isNproductValid == true && ispriceValid == true && istockValid == true) {
        var productTab = getFromLS('products');
        var connectedUserId=localStorage.getItem('connectedUserId');
        //création de l'objet product
        var product = {
            id: generateId(productTab) + 1,
            NP: Nproduct,
            Price: price,
            Stock: stock,
            category: category,
            idStore: connectedUserId,
        }
        //save into LS

        productTab.push(product);
        localStorage.setItem("products", JSON.stringify(productTab))
    }

}
function addCategory() {
    var categoryName = document.getElementById('nameCategory').value;
    var isnamecategoryValid = checkLength(categoryName, 4)
    if (isnamecategoryValid == false) {
        document.getElementById('categorynameError').innerHTML = "Category name should have at least 4 caracters"
    }
    else {
        document.getElementById('categorynameError').innerHTML = "";
    }

    if (isnamecategoryValid) {
        var categoryTab = getFromLS('categories');
        //Creation de l'obj category
        var category = {
            id: generateId(categoryTab) + 1,
            NC: categoryName

        }
     
        categoryTab.push(category);
        localStorage.setItem("categories", JSON.stringify(categoryTab))
    }

}

function login() {
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;
    var findedUser;
    //check if email & pwd exist
    var userTab = getFromLS('users');
    for (i = 0; i < userTab.length; i++) {
        if (userTab[i].email == emailValue && userTab[i].pwd == passwordValue) {
            findedUser = userTab[i];
            break;
        }
    }
    //on a trouvé user
    if (findedUser) {
        //l'user trouvé est un client 
        if (findedUser.role=="client") {
            localStorage.setItem('connectedUserId', findedUser.id)
        location.replace('index.html')
        //l'user trouvé est un store
        }
        else if (findedUser.role=="store") {
            if (findedUser.status=="NOK") {
                document.getElementById('storeStatusError').innerHTML="Account not yet verified"
                document.getElementById('storeStatusError').style.color="red";
            }
            else{
                localStorage.setItem('connectedUserId', findedUser.id)
                location.replace('Store.html')
            }
           
        }
        //l'user trouvé est un admin
        else{
            localStorage.setItem('connectedUserId', findedUser.id)
            location.replace('admin.html');
        }
    }
    else {
        document.getElementById('loginError').innerHTML = 'Please check email/pwd'
        document.getElementById('loginError').style.color = 'red';
    }
}
//function to display all products saves in LS
function displayProducts() {
   var productsTab= getFromLS('products');
   var content='';
   for (i =0; i < productsTab.length; i++) {
   content= content + `
   <div class="col-lg-4 col-md-6">
                    <div class="single-product">
                        <img class="img-fluid" src="img/product/p${i+1}.jpg" alt="">
                        <div class="product-details">
                            <h6>${productsTab[i].NP}</h6>
                            <div class="price">
                                <h6>${productsTab[i].Price} DT</h6>
                                
                            </div>
                            <div class="prd-bottom">

                                <a href="" class="social-info">
                                    <span class="ti-bag"></span>
                                    <p class="hover-text">add to bag</p>
                                </a>
                                <a href="" class="social-info">
                                    <span class="lnr lnr-heart"></span>
                                    <p class="hover-text">Wishlist</p>
                                </a>
                                <a href="" class="social-info">
                                    <span class="lnr lnr-sync"></span>
                                    <p class="hover-text">compare</p>
                                </a>
                                <a href="" class="social-info">
                                    <span class="lnr lnr-move"></span>
                                    <p class="hover-text">view more</p>
                                </a>
                            </div>
                            <button class="btn-warning display" onClick="goToDisplayProduct(${productsTab[i].id})"> Display </button>
                        </div>
                    </div>
                </div>
   ` 
   }
   document.getElementById('productsDiv').innerHTML=content;
}
//fonction pour passer à une nouvelle page html pour avoir les détails d'un produit x
function goToDisplayProduct(id) {
    localStorage.setItem('displayProductId', id)
   
    location.replace('productDetails.html')
}
// Fonction qui affiche d'une facon dynamique les détails du produit sélectionné
function displayProductDetails() {
    var id= localStorage.getItem('displayProductId');
    var productsTab= getFromLS('products');
    var displayProduct; 
    
    for ( i = 0;  i< productsTab.length; i++) {
        if (productsTab[i].id==id) {
            displayProduct= productsTab[i];
            break;
        }
    }
    document.getElementById('prNameDiv').innerHTML=displayProduct.NP;
    document.getElementById('prPriceDiv').innerHTML=displayProduct.Price;
    
    document.getElementById('prCategoryDiv').innerHTML=displayProduct.category;
if (displayProduct.Stock>0) {
    document.getElementById('prStockDiv').innerHTML=('in stock');
}
else {
    document.getElementById('prStockDiv').innerHTML=('out of stock');

}
}
// fonction qui ajoute une commande d'un produit séléctionné dans le panier
function addToBasket() {
    //récupérer la quantité de produits à commander donné par l'utilisateur
    var qty= document.getElementById('qty').value;
    var userId=localStorage.getItem('connectedUserId');
    var productId=localStorage.getItem('displayProductId');
    var product=searchObject(productId,"products")
    if (Number(qty)>0 && Number(qty)<=(product.Stock)) {
        //création d'obj
    var ordersTab= getFromLS ('orders');
    var order={
        id: generateId(ordersTab)+1,
        userId:userId,
        productId:productId,
        qty:qty
    }
    //save into Ls
    
    ordersTab.push(order);
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    updateStock(productId, Number(qty));
    
    location.replace('basket.html')
    }
    else{
        document.getElementById('qtyError').innerHTML="Please check qty or stock unvailaible"
        document.getElementById('qtyError').style.color="red";
    }
    
}
//update stock after reservation o
function updateStock(id,qty) {
    var productsTab=getFromLS ('products');
    for (var i = 0;  i< productsTab.length; i++) {
        if (productsTab[i].id==id) {
            productsTab[i].Stock= productsTab[i].Stock- (qty);
            break;
        }
        
    }
    localStorage.setItem('products', JSON.stringify(productsTab));
}
//fonction qui affiche un tableau content toutes les commandes
function displayAllOrders() {
    var ordersTab= getFromLS ('orders');
    var content='';
    var totalSum=0;
    for (var i=0; i < ordersTab.length; i++) {
        var idStore = searchObject(ordersTab[i].productId,'products').idStore
     totalSum =totalSum + ordersTab[i].qty*searchObject(ordersTab[i].productId, "products").Price
       content=content+`
       <tr>
       <td>
       ${ordersTab[i].id}  
       </td>
       <td>
       ${ordersTab[i].productId}  
       </td>
       <td>
       ${searchObject(ordersTab[i].userId, "users").FN}
       </td>
       <td>
           ${searchObject(ordersTab[i].productId, "products").NP}
           </td>
           <td>
           ${searchObject(ordersTab[i].productId, "products").Price}
           </td>
           <td>
       ${ordersTab[i].qty}
       </td>

       <td>
       ${ordersTab[i].qty*searchObject(ordersTab[i].productId, "products").Price}
       </td>
       <td>
       ${searchObject(idStore, "users").storeName}
       </td>
       <td scope="col">
        <button class='btn btn-warning'>Update</>
        <button class='btn btn-warning'>Delete</>
        </td>

   </tr>
       `
    }
    content=content+`totalSum: ${totalSum}`;
    document.getElementById('ordersDiv').innerHTML=content;
}

//fonction qui affiche un tableau content les commandes de l'utilisateur connecté
function displayMyOrders() {
    var ordersTab= getFromLS ('orders');
    var connectedUserId= localStorage.getItem('connectedUserId')
    var content='';
    var totalSum=0;
    var myOrdersTab=[];
    for (var i = 0; i< ordersTab.length; i++) {
        if (connectedUserId==ordersTab[i].userId) {
            myOrdersTab.push(ordersTab[i])  
        }
        
    }
    for (var i=0; i < myOrdersTab.length; i++) {
        
     totalSum =totalSum + myOrdersTab[i].qty*searchObject(myOrdersTab[i].productId, "products").Price
       content=content+`
       <tr>
       <td>
       ${myOrdersTab[i].id}  
       </td>
       <td>
           ${searchObject(myOrdersTab[i].userId, "users").FN}
           </td>
       <td>
           ${searchObject(myOrdersTab[i].productId, "products").NP}
           </td>
           <td>
           ${searchObject(myOrdersTab[i].productId, "products").Price}
           </td>
           <td>
       ${myOrdersTab[i].qty}
       </td>

       <td>
       ${myOrdersTab[i].qty*searchObject(myOrdersTab[i].productId, "products").Price}
       </td>
       <td> <button class="btn btn-danger" onclick="deleteOrder(${myOrdersTab[i].id})"> Delete </button> </td>

   </tr>
       `
    }
    content=content+`totalSum: ${totalSum}`;
    document.getElementById('ordersDiv').innerHTML=content;
}
//fonction qui supprime la commande selon l'ID
function deleteOrder(id) {
    var ordersTab=getFromLS ('orders');
    var pos = searchOrderPositionById(id)
    var order=searchObject(id,'orders')
    var products=getFromLS('products')
    for (var i = 0; i < products.length; i++) {
       if (products[i].id==id) {
        products[i].Stock= Number(products[i].Stock)+ Number(order.qty);
        break;
       }
        
    }
    ordersTab.splice(pos,1);
    localStorage.setItem('orders', JSON.stringify(ordersTab))
    localStorage.setItem('orders', JSON.stringify(products))
    location.reload();
}
//fonction qui retourne la position de l'objet selon IS
function searchOrderPositionById(id) {
    var position;
    var ordersTab=getFromLS ('orders');
    for (var i = 0; i < ordersTab.length; i++) {
      if (ordersTab[i].id==id) {
        position=i;
        break;
      }
        
    }
    return position;
}

// function searchUser(id) {
//     var UserTab=JSON.parse (localStorage.getItem('users')|| '[]');
//     var findedUser;
//     for (var i = 0; i < UserTab.length; i++) {
//         if (UserTab[i].id==id) {
//             findedUser=UserTab[i];
//             break;
//         }
        
//     }
// return findedUser
// }
// function searchProduct(id) {
//     var productsTab=JSON.parse (localStorage.getItem('products')|| '[]');
//     var findedProduct;
//     for (var i = 0; i < productsTab.length; i++) {
//         if (productsTab[i].id==id) {
//             findedProduct=productsTab[i];
//             break;
//         }
        
//     }
// return findedProduct
// }
//fonction qui fait la recherche d'un objet selon l'ID et la clé et retourne tout l'objet
function searchObject(id,key) {
    var T=JSON.parse (localStorage.getItem(key)|| '[]');
    var findedObj;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id==id) {
            findedObj=T[i];
            break;
        }
        
    }
return findedObj;
}
//fonction pour générer un header dynamique
function generateHeader() {
    var connectedUserId=localStorage.getItem('connectedUserId');
var content='';
var connectedUser= searchObject(connectedUserId,'users');
if (connectedUserId) {
    if (connectedUser.role=="client") {
        content=   `<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
    <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
    <li class="nav-item"><a class="nav-link" href="profile.html">Hello ${connectedUser.FN} ${connectedUser.LN}</a></li>
    <li class="nav-item"><a class="nav-link" href="basket.html">Basket</a></li>
    <li class="nav-item"><a class="nav-link" onclick='logout()'>logout</a></li>`  
    }
    else if (connectedUser.role=="store") {
        content=   `<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="store.html">Hello ${connectedUser.storeName} </a></li>
        <li class="nav-item"><a class="nav-link" onclick='logout()'>logout</a></li>`  
    }
    else{
        content=   `<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        
        <li class="nav-item"><a class="nav-link" href="admin.html">Hello Admin ${connectedUser.FN} ${connectedUser.LN}</a></li>
       
        <li class="nav-item"><a class="nav-link" onclick='logout()'>logout</a></li>` 
    }
   
    
}
else{
    //not connected
    content=`
<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
<li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
<li class="nav-item">Are you a <a class="nav-link" href="Signup.html">Client</a> or <a class="nav-link" href="signupStore.html">Store</a>?</li>
`

}
document.getElementById('headerId').innerHTML=content;
}
function displayProfile() {
    var connectedUserId=localStorage.getItem('connectedUserId');
    var content='';
    var connectedUser= searchObject(connectedUserId,'users');
    if (connectedUserId) {
        content=`
    	<section class="login_box_area section_gap">
		
			<div class="row">
            <img src="img/product/p1.jpg" width="100px" alt="">
				
					<div class="login_form_inner">
						
						<div class="row login_form" >
							<div>
                           
							</div>
							
							<div class="col-md-12 form-group">
								<input type="text" class="form-control"  placeholder="${connectedUser.FN}">
                                
							</div>
                            <div class="col-md-12 form-group">
								<input type="text" class="form-control"  placeholder="${connectedUser.LN}">
                                
							</div>
                            <div class="col-md-12 form-group">
								<input type="email" class="form-control"  placeholder="${connectedUser.email}" >
							</div>
							
                            <div class="col-md-12 form-group">
								<input type="tel" class="form-control"  placeholder="${connectedUser.tel}">
                                
							</div>
							
						</div>
					</div>
				
			</div>
			
			
		
	</section>
        
        `
    }
    document.getElementById('profileId').innerHTML=content;
}

//fonction pour se déconnecter
function logout() {
    localStorage.removeItem('connectedUserId')
    location.replace('index.html');
}
function getFromLS(key) {
    return  JSON.parse(localStorage.getItem(key) || "[]");
}
function displayAdminProducts() {
    var  productsTab= getFromLS ('products');
    var content="";
    for (var i = 0; i < productsTab.length; i++) {
       content= content+`
       <tr>
                                    
                                    <td scope="col">${productsTab[i].id}</td>
                                    <td scope="col">${productsTab[i].NP}</td>
                                    <td scope="col">${productsTab[i].Price}</td>
                                    <td scope="col">${productsTab[i].category} </td>
                                    <td scope="col">${productsTab[i].Stock}</td>
                                    <td scope="col">
                                    <button class='btn btn-warning' onclick='updateProductByAdmin(${productsTab[i].id})'>Update</>
                                    <button class='btn btn-danger' onclick='deleteProductByAdmin(${i})'>Delete</>
                                    </td>
                                </tr>
       `
        
    }
    document.getElementById('productsAdminDiv').innerHTML=content;
}
function displayAdminUsers() {
    var  usersTab= getFromLS ('users');
    
    var content="";
    storesAndClients=[];
    for (var i = 0; i < usersTab.length; i++) {
       if (usersTab[i].role!="admin") {
        storesAndClients.push(usersTab[i]);
    }
        
}
var isDisplayed=false;
for (var i = 0; i < storesAndClients.length; i++) {
    isDisplayed=(storesAndClients[i].role=='store'&& storesAndClients[i].status=='NOK');
    if (isDisplayed==true) {
        content= content+`
        <tr>
                                     
                                     <td scope="col">${usersTab[i].id}</td>
                                     <td scope="col">${usersTab[i].storeName}</td>
                                     <td scope="col">${usersTab[i].FN}</td>
                                     <td scope="col">${usersTab[i].LN}</td>
                                     <td scope="col">${usersTab[i].email}</td>
                                     <td scope="col">${usersTab[i].pwd}</td>
                                     <td scope="col">${usersTab[i].tel}</td>
                                     <td scope="col">${usersTab[i].adress}</td>
                                     <td scope="col">${usersTab[i].status}</td>
                                     <td scope="col">${usersTab[i].role}</td>
                                     <td scope="col">
                                     <button class='btn btn-dander' onclick='deleteUsersByAdmin(${storesAndClients[i].id})'>Delete</>
                                     <button class='btn btn-warning' onclick='validateUsersByAdmin(${storesAndClients[i].id})'>Validate</>
                                    
                                     </td>
                                 </tr>
        `
    
    }
    else{
        content= content+`
        <tr>
                                     
                                     <td scope="col">${usersTab[i].id}</td>
                                     <td scope="col">${usersTab[i].storeName}</td>
                                     <td scope="col">${usersTab[i].FN}</td>
                                     <td scope="col">${usersTab[i].LN}</td>
                                     <td scope="col">${usersTab[i].email}</td>
                                     <td scope="col">${usersTab[i].pwd}</td>
                                     <td scope="col">${usersTab[i].tel}</td>
                                     <td scope="col">${usersTab[i].adress}</td>
                                     <td scope="col">${usersTab[i].status}</td>
                                     <td scope="col">${usersTab[i].role}</td>
                                     <td scope="col">
                                     <button class='btn btn-warning' onclick='deleteUsersByAdmin(${storesAndClients[i].id})'>Delete</>
                                    
                                     </td>
                                 </tr>
        `
    }
    
         
}
        
    document.getElementById('usersAdminDiv').innerHTML=content;
}
function deleteUsersByAdmin(id) {
    var users=getFromLS('users')
    var position;
    for (var i = 0; i < users.length; i++) {
       if (users[i].id==id) {
        position=i;
        break
       }
        
    }
    users.splice(position,1)
    localStorage.setItem('users',JSON.stringify(users));
    location.reload();
}
function validateUsersByAdmin(id) {
    var users=getFromLS('users');
    for (var i = 0; i < users.length; i++) {
        if (users[i].id==id) {
            users[i].status='ok';
            break;
        } 
        
    }
    localStorage.setItem('users',JSON.stringify(users));
    location.reload();
}



function deleteProductByAdmin(pos) {
    var productsTab= getFromLS('products');
    productsTab.splice(pos,1);
    localStorage.setItem('products', JSON.stringify(productsTab));
    location.reload;

}
//fonction qui affiche un formulaire repmli avec les anciennes valeurs après click sur le bouton update
function updateProductByAdmin(id) {
    var product= searchObject(id,'products');
    var form=`
    <div class="row login_form" >
							
                            <div class="col-md-12 form-group">
								<input type="number" class="form-control" id='newPrice' value=${product.Price}>
                                
							</div>
                            <div class="col-md-12 form-group">
								<input type="number" class="form-control" id='newStock' value=${product.Stock}>
                               
							</div>
                            
							
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn" onclick='validateEdit(${(product.id)})'>Validate</button>
								
							</div>
						</div>
    `
    document.getElementById('updatePrId').innerHTML=form;
}
//fonction pour afficher les nouvelles valeurs
function validateEdit(id) {
    var newPrice= document.getElementById('newPrice').value;
    var newStock= document.getElementById('newStock').value;
    var productsTab= getFromLS('products');
    for (var i = 0; i < productsTab.length; i++) {
       if (productsTab[i].id==id) {
        productsTab[i].Price=newPrice;
        productsTab[i].Stock=newStock;
        break;
       }
        
    }
    localStorage.setItem('products', JSON.stringify(productsTab));
    location.reload();
}
function displayStoreProducts() {
    var  productsTab= getFromLS ('products');
    var connectedUserId=localStorage.getItem('connectedUserId')
    var myProducts=[];
    for (var i = 0; i < productsTab.length; i++) {
        if (productsTab[i].idStore==connectedUserId) {
            myProducts.push(productsTab[i]);
        }
        
    }
    var content="";
    for (var i = 0; i < myProducts.length; i++) {
       content= content+`
       <tr>
                                    
                                    <td scope="col">${myProducts[i].id}</td>
                                    <td scope="col">${myProducts[i].NP}</td>
                                    <td scope="col">${myProducts[i].Price}</td>
                                    <td scope="col">${myProducts[i].category} </td>
                                    <td scope="col">${myProducts[i].Stock}</td>
                                    <td scope="col">
                                    <button class='btn btn-warning' onclick=''>Update</>
                                    <button class='btn btn-danger' onclick=''>Delete</>
                                    </td>
                                </tr>
       `
        
    }
    document.getElementById('productsStoreDiv').innerHTML=content;
}
function displayStoreOrders() {
    var productsTab= getFromLS('products');
    var connectedUserId=localStorage.getItem('connectedUserId');
    myProducts=[];
    for (var i = 0; i < productsTab.length; i++) {
        if (productsTab[i].idStore==connectedUserId) {
            myProducts.push(productsTab[i]);
        }
        
    }
    var ordersTab= getFromLS('orders');
    myOrders=[];
    for (var i = 0; i < myProducts.length; i++) {
        for (var j = 0; j < ordersTab.length; j++) {
            if (myProducts[i].id== ordersTab[j].productId) {
                myOrders.push(ordersTab[j])
            }
            
        }
    }
    var content='';
    for (var i = 0; i < myOrders.length; i++) {
        content= content+ `
    <tr>
                                    
                                    <td scope="col">${myOrders[i].id}</td>
                                    <td scope="col">${myOrders[i].qty}</td>
                                    
                                    <td scope="col">
                                    <button class='btn btn-warning' onclick=''>Update</>
                                    <button class='btn btn-danger' onclick=''>Delete</>
                                    </td>
                                </tr>
    
    
    
    
    `
        
    }
    
    document.getElementById('ordersStoreDiv').innerHTML=content;
}
function serachProduct() {
    var searchName= document.getElementById('searchName')
    var findedProducts=[];
    var products=getFromLS('products');
    for (var i = 0; i < products.length; i++) {
       if ((products[i].NP==searchName)) {
        findedProducts.push(products[i])
       }
        
    }
    var content='';
    for (i =0; i < findedProducts.length; i++) {
    content= content + `
    <div class="col-lg-4 col-md-6">
                     <div class="single-product">
                         <img class="img-fluid" src="img/product/p${i+1}.jpg" alt="">
                         <div class="product-details">
                             <h6>${findedProducts[i].NP}</h6>
                             <div class="price">
                                 <h6>${findedProducts[i].Price} DT</h6>
                                 
                             </div>
                             <div class="prd-bottom">
 
                                 <a href="" class="social-info">
                                     <span class="ti-bag"></span>
                                     <p class="hover-text">add to bag</p>
                                 </a>
                                 <a href="" class="social-info">
                                     <span class="lnr lnr-heart"></span>
                                     <p class="hover-text">Wishlist</p>
                                 </a>
                                 <a href="" class="social-info">
                                     <span class="lnr lnr-sync"></span>
                                     <p class="hover-text">compare</p>
                                 </a>
                                 <a href="" class="social-info">
                                     <span class="lnr lnr-move"></span>
                                     <p class="hover-text">view more</p>
                                 </a>
                             </div>
                             <button class="btn-warning display" onClick="goToDisplayProduct(${findedProducts[i].id})"> Display </button>
                         </div>
                     </div>
                 </div>
    ` 
    }
    document.getElementById('searchDiv').innerHTML=content;
}
