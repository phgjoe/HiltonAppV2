$.mobile.pushStateEnabled = false;

jQuery( document ).ready(function() {
    console.log('start');
    login();
    calculator();
    // jQuery('#outerpanel').panel( "open" );
    globalPopUps();   
    video(); 
});

jQuery(document).on('pageshow', '#login-page', function(){     
    setTimeout(function () {
        jQuery( "#loginPopup" ).popup();
        jQuery( "#loginPopup" ).popup();
        jQuery( "#loginPopup" ).popup( "open" );
    }, 500);
});

jQuery(document).on('pageshow', '#home-page', function(){       
    jQuery( "#menuPanel" ).panel( "open");
});


//Sliders//

//Chiller
jQuery(document).on('pageshow', '#hvac-equipment-technology-chillers-slide-page', function(){       

    var id = window.location.hash.split("?")[1];

    if(isNaN(id) || id==''){
        id=1;
    }

    chillers = jQuery('#slide-chiller').bxSlider({
        startSlide: id-1,
        pager: false,
        controls: false,
        infiniteLoop: true
    });
    jQuery('#chillerPrev').on('click touch', function(e){
        e.preventDefault();
        chillers.goToPrevSlide();
    });
    jQuery('#chillerNext').on('click touch', function(e){
        e.preventDefault();
        chillers.goToNextSlide();
    });
});

jQuery(document).on('pagebeforehide', '#hvac-equipment-technology-chillers-slide-page', function(){  
    chillers.destroySlider();
});


//air handle
jQuery(document).on('pageshow', '#hvac-equipment-technology-air-handling-units-slide-page', function(){       

    var id = window.location.hash.split("?")[1];
    

    if(isNaN(id) || id==''){
        id=1;
    }

    airhandle = jQuery('#air-handlers').bxSlider({
        startSlide: id-1,
        pager: false,
        controls: false,
        infiniteLoop: true
    });
    jQuery('#airhandlePrev').on('click touch', function(e){
        e.preventDefault();
        airhandle.goToPrevSlide();
    });
    jQuery('#airhandleNext').on('click touch', function(e){
        e.preventDefault();
        airhandle.goToNextSlide();
    });
});

jQuery(document).on('pagebeforehide', '#hvac-equipment-technology-air-handling-units-slide-page', function(){  
    airhandle.destroySlider();
});

//packaged products 
jQuery(document).on('pageshow', '#hvac-equipment-technology-packaged-products-slide-page', function(){       

    var id = window.location.hash.split("?")[1];
    

    if(isNaN(id) || id==''){
        id=1;
    }

    packagedproducts = jQuery('#packaged-products').bxSlider({
        startSlide: id-1,
        pager: false,
        controls: false,
        infiniteLoop: true
    });
    jQuery('#packagedproductsPrev').on('click touch', function(e){
        e.preventDefault();
        packagedproducts.goToPrevSlide();
    });
    jQuery('#packagedproductsNext').on('click touch', function(e){
        e.preventDefault();
        packagedproducts.goToNextSlide();
    });
});

jQuery(document).on('pagebeforehide', '#hvac-equipment-technology-packaged-products-slide-page', function(){  
    packagedproducts.destroySlider();
});


//vrf 
jQuery(document).on('pageshow', '#hvac-equipment-technology-vrf-products-slide-page', function(){       

    var id = window.location.hash.split("?")[1];
    

    if(isNaN(id) || id==''){
        id=1;
    }

    vrfproducts = jQuery('#vrf-products').bxSlider({
        startSlide: id-1,
        pager: false,
        controls: false,
        infiniteLoop: true
    });
    jQuery('#vrfproductsPrev').on('click touch', function(e){
        e.preventDefault();
        vrfproducts.goToPrevSlide();
    });
    jQuery('#vrfproductsNext').on('click touch', function(e){
        e.preventDefault();
        vrfproducts.goToNextSlide();
    });
});

jQuery(document).on('pagebeforehide', '#hvac-equipment-technology-vrf-products-slide-page', function(){  
    vrfproducts.destroySlider();
});

function login(){
    jQuery('#login').on('submit', function(e){
        e.preventDefault();
        if(jQuery('#pw').val() == 'hilton'){
            jQuery.mobile.changePage($('#home-page'));
        }
        else{
            alert('Incorrect Password');
        }
    });
    jQuery('#welcome').on('click touch submit keypress', function(e){        
        e.preventDefault();
        if(jQuery('#pw').val() == 'hilton'){
            jQuery.mobile.changePage($('#home-page'));
        }
        else{
            alert('Incorrect Password');
        }
        // jQuery.mobile.changePage($('#home-page'));
    });
}

function calculator(){
    // jQuery('#calculate').on('click', function(e){
    jQuery('#calcForm').on('keyup', function(e){

        e.preventDefault();

        //get values
        var LCWT = jQuery('#LCWT').val();
        var ECWT = jQuery('#ECWT').val();
        var SCT = jQuery('#SCT').val();
        var SST = jQuery('#SST').val();
        var LCHWT = jQuery('#LCHWT').val();
        var ECHWT = jQuery('#ECHWT').val();
        var Tons = jQuery('#Tons').val();

        //calculate values
        var Lift = SCT - SST;
        var condenserapproach = SCT - LCWT;
        var evaporatorapproach = LCHWT - SST;

        //display values
        jQuery('#LT').html(Lift);
        jQuery('#CA').html(condenserapproach);
        jQuery('#EA').html(evaporatorapproach);
    });
}

function globalPopUps(){
    jQuery( "#servicesPopMenuA" ).enhanceWithin().popup();
    jQuery( "#servicesPopMenuB" ).enhanceWithin().popup();
}

function video(){
    // $("#vid1")[0].webkitEnterFullScreen();
    // console.log('asdfasdfasdf');
    // var elem = document.getElementById("vid1");
    // if (elem.requestFullscreen) {
    //     console.log('1');
    //   elem.requestFullscreen();
    // } else if (elem.msRequestFullscreen) {
    //     console.log('2');
    //   elem.msRequestFullscreen();
    // } else if (elem.mozRequestFullScreen) {
    //     console.log('3');
    //   elem.mozRequestFullScreen();
    // } else if (elem.webkitRequestFullscreen) {
    //     console.log('4');
    //   elem.webkitRequestFullscreen();
    // }
    
}
