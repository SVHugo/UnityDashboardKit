const index =["/html/index.html","/html/campaigns.html"]
let box_link_escritorio = document.querySelectorAll('#box_dashboard_links_escritorio');
var URLactual = window.location.pathname

console.log()

/*//////////////////////// */
let overview = document.querySelector('#overview');
let campaigns = document.querySelector('#campaigns');
let schedules = document.querySelector('#schedules');
let payouts = document.querySelector('#payouts');
let products = document.querySelector('#products');
let statement = document.querySelector('#statement');
let settings = document.querySelector('#settings');
if(URLactual == index[0]){
    overview.style.background="#6C5DD3";
    overview.style.color = "white";
}else if(URLactual == index[1]){
    campaigns.style.background="#6C5DD3";
    campaigns.style.color = "white";
}


