$(document).ready(function(){
    
    
    function backGround(){
    var imagesArr = ["url(images/BeachReads-1080x675.jpg)","url(images/picture-of-woman-reading-a-book-on-the-beach-photo.jpg)","url(images/101113-lifestyle-meditation-book-beach-relax-calm-vacation-reading.jpg.png)","url(images/link-hoang-31747-unsplash.jpg)", "url(images/videoblocks-v01323-maldives-beautiful-beach-background-white-sandy-tropical-paradise-island-with-blue-sky-sea-water-ocean-4k-reading-book_bbxvjjixpg_thumbnail-full01.png)"];
        var p = Math.floor(Math.random()*(imagesArr.length));
        $("body").css("background",imagesArr[p]).css("background-size","auto").css("background-repeat","no-repeat").css("background-attachment","fixed");
    }
    backGround();
    $(".btn").on("click", function(){
        
        $.ajax( {
            contentType: "application/javascript;charset=utf-8",
    url: "https://fr.wikiquote.org/w/api.php?origin=*&action=query&titles=Libert%C3%A9&format=json&formatversion=2&prop=revisions&rvprop=content",
    data: {format:'json'},
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'http://www.marchdev.com' },
    success: function(json) {
        
        var brut = json.query.pages[0].revisions[0].content;
        brut = brut.split("====");
        var QuotAuth = [];
        for(i=1;i<brut.length;i+=2){
            QuotAuth.push([brut[i],brut[i+1]]);
        } //a construit un tableau 2 dimensions : contenant l'auteur et ses citations.
        

        /*for(i=0;i< QuotAuth.length;i++){
            if(QuotAuth[i][1].length>50 && QuotAuth[i][1].length<600){
                arr.push( [QuotAuth[i][0],QuotAuth[i][1]] );   //si la longueur de la citation est comprise entre 100 et 600 caractères alors mettre la citation et son auteur dans le tableau arr 
            }
        }
        console.log(arr);*/
        var regexp = /((citation\|).*)/gi;
        var regexp2 = /[^\[\]]/gi; 
        var tab1 = [];
        var tab2 = [];
        var arr = [];
        for(i=0;i<QuotAuth.length;i++){
              tab1 = QuotAuth[i][0].match(regexp2);
                tab1 = tab1.join('');
              tab2 = QuotAuth[i][1].match(regexp);
                tab2 = tab2.join('');
               console.log(tab1);
               console.log(tab2);
            arr.push([tab1,tab2]);
        }
     console.log(arr);
        var c ="";
        var d ="";
        var arr2=[];
        for(i=0;i<arr.length;i++){
            if(arr[i][1].length > 50 && arr[i][1].length < 300){
                arr2.push([arr[i][0],arr[i][1]]);
            }
        }
        console.log(arr2);
        arr = arr2;
        var b = Math.floor(Math.random()*arr.length)+1;
        
        c = arr[b][1];
        c = c.replace(/citation\|citation=/gi,"");
        c = c.replace(/citation\|/gi,"");
        c = c.replace(/\|.*\]\]/gi,"");
        c = c.replace(/\|(.*?)\}\}/gi,"");

        c = c.replace(/\[\[/gi,"");
        c = c.replace(/\}\}/gi,"");
        c = c.replace(/\]\]/gi,"");
        c = c.replace(/\{\{/gi,"");

       
        
        d = arr[b][0];
        d = d.replace(/\[\[/gi,"");
        d = d.replace(/\}\}/gi,"");
        d = d.replace(/\]\]/gi,"");
        d = d.replace(/\{\{/gi,"");
        d = d.replace(/w:(.*?)\|/gi,"");
        d = d.replace(/\|/gi,"");
        
        console.log(arr[9][1]);
        $(".text").html(c);
        $(".author").html(d);
        
        $(".btn").html("Donne m'en une autre");
    
        backGround();
        //matches est un tableau regroupant mes citations

    }

});
            
    
             

    });
        
});
    
    




