// Mobile class
function Mobile(brand, model, netork, speed, os) {
    this.brand = brand;
    this.model = model;
    this.ramSize = ram;
    this.netork = netork;
    this.os = os;
    this.Speed = Speed;
    this.landline = true;
}
// Parent methods. The basic general things all phones can do.
Mobile.prototype.makeCall = function (number) {
    return "calling " + number + " with " + this.brand;
};
Mobile.prototype.installSoftware = function () {
    if (this.Speed > 2) {
        return "You can proceed with your download";
    } else {
        return "Installation failed, you need more than " + this.speed + " gb of ram to proceed with installation";
    }
};

Mobile.prototype.displayResolution = function (screen_size) {
    switch (screen_size) {
        case "9.7'":
            console.log("Screen Resolution: 2048 x 1536");
            break;
        case "5.7'":
            console.log("Screen Resolution: 1440 x 2560");
            break;
        case "4.3":
            console.log("Screen Resolution: 960 x 540");
            break;
        default:
            console.log("Screen Resolution: 1024 x 768");
    }
};


// Polymorphism. The is still a phone and can take sveral other forms.
Mobile.prototype.takePicture = function () {
    return "Instagram picture loading !!!";
};

Mobile.prototype.sendEmail = function () {
    return "Sending email";
};


//Encapsulation. You go to your music player and play songs and that happens it embedded away from you.
Mobile.prototype.playMusic = function () {
    return "Jamming jamz!!!";
};


//Samsung class calls the Mobile class
function Samsung(brand, model, netork, speed, os) {
    Mobile.call(this, brand, model, netork, speed, os);
}

// Samsung class extends Mobile class to create its own type of mobile phones Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

//Samsung method overides the Mobile sendEmail method 
Samsung.prototype.sendEmail = function () {
    return "Email has been sent";
};


// iPhone class calls the Mobile class
function iPhone(brand, model, netork, speed, os Mobile.call(this, brand, model, netork, speed, os) var productId = "499-OEM-64987-0028"; //private variable cant be accessed from outside
}
this.getProductId = function (productId) {
    return productId;
};

// iPhone extends Mobile class   
iPhone.prototype = Object.create(Mobile.prototype);
iPhone.prototype.constructor = iPhone;

//Iphone method  to send iMessages unique to only iPhones 
Samsung.prototype.sendiMessage = function () {
    return "mail has delivered to user";
};

// creates instances of mobile 
var mySamsung = new Samsung('Samsung', 'Edge', '4G', 'LTE', 'Andriod 6.0');
var iPhone = new iPhone('iPhone'
    '7S', '4G', 'LTE', 'iOS');
