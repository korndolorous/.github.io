var fname,lname,hnum,street,city,province,zip,phonenum,cellphonenum,bday,citizen,zsign,zyear,wday;
   fname      = document.forms["myForm"]["firstName"];
   lname      = document.forms["myForm"]["lastName"];
   hnum       = document.forms["myForm"]["houseNumber"];
   street     = document.forms["myForm"]["street"];
   city       = document.forms["myForm"]["city"];
   province   = document.forms["myForm"]["province"];
   zip        = document.forms["myForm"]["zipcode"];
   phonenum   = document.forms["myForm"]["phoneNumber"];
   cellphonenum  = document.forms["myForm"]["cellphoneNumber"];
   bday       = document.forms["myForm"]["birthday"];
   citizen    = document.forms["myForm"]["citizenshipNumber"];
   zsign      = document.forms["myForm"]["zodiacSign"];
   zyear      = document.forms["myForm"]["zodiacYear"];
   wday    = document.forms["myForm"]["dayOfWeek"];

function validateForm() {
   alert("submit");
   if(!ValidateHouseNumber()){
	document.getElementById("hne").innerHTML = "* House number must start with number";
	return false;
   }	
   if(!validatePhone()){
	document.getElementById("pe").innerHTML = "* Phone number must be in form +xxx-xxx-xxx";
	return false;
   }
   if(!validateCellphone()){
	document.getElementById("cpe").innerHTML = "* Cell phone number must be in form +xxxx-xxx-xxxx";
	return false;
   }
   if(!validateCitizenshipNumber()){
	document.getElementById("cne").innerHTML = "* Citizenship number must be 13 digits";
	return false;        
   }
   if(!validateDate()){
	document.getElementById("de").innerHTML = "* Must select date ";
	return false;     
   }

   alert("Cookie has been created using citizenship number: "+citizen.value+" and phone number: "+phone.value);
   localStorage.setItem("cookieCitizen",citizen.value);
   localStorage.setItem("cookiePhone",phone.value);
   save();
}

function ValidateHouseNumber(){
    var hno = hnum.value;
    if (isNaN(hno.charAt(0))) {
        return false
    }
    return true;
}
function validatePhone(){
    var phoneV = phonenum.value;
    if (phoneV.length != 12 ) {
        return false;
    }
    if (phoneV.slice(0,1)!="+") {
        return false;
    }
    if(phoneV.charAt(4) != '-' && phoneV.charAt(8) != '-'){
	      return false;
    }
    if(isNaN(phoneV.slice(5,8)) || isNaN(phoneV.slice(9,12))){
	      return false;
    }
    return true;
}

function validateCellphone(){
    var phoneV = cellphonenum.value;
    if (phoneV.length != 14 ) {
        return false;
    }
    if (phoneV.slice(0,1)!="+") {
        return false;
    }
    if(phoneV.charAt(5) != '-' && phoneV.charAt(9) != '-'){
        return false;
    }
    if(isNaN(phoneV.slice(3,5)) || isNaN(phoneV.slice(6,9)) || isNaN(phoneV.slice(10,14))){
	  return false;
    }
    return true;
}
function validateCitizenshipNumber(){
    var citizenNo = citizen.value;
    if (citizenNo.length != 13 ) {
        return false;
    }
    return true;
}
function validateDate(){
    var bthday = bday.value;
    if (!bthday) {
      return false;
    }
    return true;
}

function save(){
   alert("save");
   localStorage.setItem("fname", fname.value);
   localStorage.setItem("lname", lname.value);
   localStorage.setItem("hnum", hnum.value);
   localStorage.setItem("street", street.value);
   localStorage.setItem("city", city.value);
   localStorage.setItem("province", province.value);
   localStorage.setItem("zip", zip.value);
   localStorage.setItem("phonenum", phonenum.value);
   localStorage.setItem("cellphonenum", cellphonenum.value);
   localStorage.setItem("bday", bday.value);
   localStorage.setItem("citizen", citizen.value);
   localStorage.setItem("zsign", zsign.value);
   localStorage.setItem("zyear", zyear.value);
   localStorage.setItem("wday", wday.value);
}

fname.value = localStorage.getItem("fname");
lname.value = localStorage.getItem("lname");
hnum.value = localStorage.getItem("hnum");
street.value = localStorage.getItem("street");
city.value = localStorage.getItem("city");
province.value = localStorage.getItem("province");
zip.value = localStorage.getItem("zip");
phonenum.value = localStorage.getItem("phonenum");
cellphonenum.value = localStorage.getItem("cellphonenum");
bday.value = localStorage.getItem("bday");
citizen.value = localStorage.getItem("citizen");
zsign.value = localStorage.getItem("zsign");
zyear.value = localStorage.getItem("zyear");
wday.value = localStorage.getItem("wday");