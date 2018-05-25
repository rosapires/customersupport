


let customer_link = "https://kea-alt-del.dk/customersupport/";
let customer_template = document.querySelector(".customer_template").content;
console.log(customer_template)

let list = document.querySelector("#list");


function getData(link) {
    fetch(link).then(function (response) {
        return response.json();
    }).then(function (json) {
        return show(json);
    });
}

function show(json) {
    json.forEach(function (customer) {
        
        let clone = customer_template.cloneNode(true);
        let fullname = clone.querySelector(".fullname");
        let importance = clone.querySelector(".importance");
        //console.log(clone)
importance.textContent = "Importance: " + customer.importance;
        



       





        //clone.querySelector('.fullname').textContent = "Name: " + customer.first + " " + customer.middle + " " + customer.last;
        
        fullname.textContent = customer.first + " ";
        if (customer.middle !== undefined) {
            fullname.textContent += customer.middle + " ";
        }
        fullname.textContent += customer.last;

        clone.querySelector('.place').textContent = "Place: " + customer.place;
        clone.querySelector('.time').textContent = "Date: " + customer.time.year + "-" + customer.time.month + "-" +customer.time.day +  " Time: " + customer.time.hour + "h " + customer.time.minute +  "m " + customer.time.second + "s ";
        clone.querySelector('.message').textContent = "Message: " + customer.message;
        clone.querySelector('.fullmsg').textContent = "Message: " + customer.full;

        if (customer.importance < 30 ){
            console.log(customer.importance)
            clone.querySelector(".list-customer").classList.add("low");
        }

        if (customer.importance > 30 ){
            console.log(customer.importance)
            clone.querySelector(".list-customer").style.background = "yellow";
        }
        
        if (customer.importance > 80 ){
            console.log(customer.importance)
            clone.querySelector(".list-customer").style.background = "red";
        }
        
        
        clone.querySelector(".solve").addEventListener("click", function(e){
            console.log(e.target.parentElement.parentElement.parentElement.remove());
            e.target.parentElement.parentElement.parentElement.classList.add(".snow");
            //console.log(customer);
            

        })


        list.appendChild(clone);


    })
    
}


getData(customer_link);

let myS = document.querySelectorAll(".snow");

TweenLite.to(myS, 2.5, { ease: SlowMo.ease.config(0.7, 0.7, false), y: -500 });