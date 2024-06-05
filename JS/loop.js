// JS file to loop on the content and insert infos and tags in the DOM

console.log('loop init');

let loop = {

    //having fake and random data for a start
    datas : [

        {
            title : "emeperor penguin", 
            content1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ante velit, vitae blandit arcu venenatis et. Mauris nec velit vitae est bibendum porttitor. Nam a purus non tellus mattis facilisis elementum luctus nisi. Praesent sed dui nibh. Nunc mattis eu enim vel rutrum. Nulla sodales faucibus congue. Nam rutrum semper est ac congue. Praesent suscipit risus vitae ante aliquet porttitor. Maecenas eget velit vitae urna porta tempor. Quisque et tristique erat. Aliquam vitae dapibus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed volutpat turpis ex, vitae dictum est viverra id.",
            img :"./images/penguin-6503804_1280.jpg", 
            content2 : "Etiam interdum in ante id rutrum. Donec efficitur quis lectus quis auctor. Mauris sapien orci, imperdiet id massa ut, auctor fringilla nunc. Nullam at interdum orci, eget mollis est. Duis viverra sodales vulputate. Proin sit amet eros sed enim posuere pellentesque. Fusce sed erat maximus, hendrerit eros quis, venenatis ipsum.",
        },

        {
            title : "emeperor penguin", 
            content1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ante velit, vitae blandit arcu venenatis et. Mauris nec velit vitae est bibendum porttitor. Nam a purus non tellus mattis facilisis elementum luctus nisi. Praesent sed dui nibh. Nunc mattis eu enim vel rutrum. Nulla sodales faucibus congue. Nam rutrum semper est ac congue. Praesent suscipit risus vitae ante aliquet porttitor. Maecenas eget velit vitae urna porta tempor. Quisque et tristique erat. Aliquam vitae dapibus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed volutpat turpis ex, vitae dictum est viverra id.",
            img :"images/penguin-6503804_1280.jpg", 
            content2 : "Etiam interdum in ante id rutrum. Donec efficitur quis lectus quis auctor. Mauris sapien orci, imperdiet id massa ut, auctor fringilla nunc. Nullam at interdum orci, eget mollis est. Duis viverra sodales vulputate. Proin sit amet eros sed enim posuere pellentesque. Fusce sed erat maximus, hendrerit eros quis, venenatis ipsum.",
        }
    ],

    init : function() {
        loop.handleContent();

    },

    handleContent : function() {
        //selecting the div accordion to insert tags into it later
        const divElement = document.querySelector(".accordion"); 

        //making a loop to insert data in the proper tags
        for (const data of loop.datas) {
            //creating a h2 for the title content
            const contentTitle = document.createElement("h2");
            //inserting the content in the created h2
            contentTitle.textContent = data.title;
            //making sure to have the proper class for the h2
            contentTitle.className = "title";

            //creating the penguin emoji element
            const penguinElement = document.createElement("div");
            penguinElement .className = "penguin" ;
            penguinElement .textContent ="🐧"; 

            //inserting the penguin emoji div in the h2 title
            contentTitle.append(penguinElement); 

            divElement.append(contentTitle);

            //creating a div to insert content into the DOM + adding a classname
            const contentDiv= document.createElement("div");
            contentDiv.className = "content";
    
            //creating a p to insert the first paragraph and the content that goes with it
            const contentElement1 = document.createElement("p");
            contentElement1.textContent = data.content1;
            contentDiv.append(contentElement1);
    
            //creating the image + its source + its alt
            const img = document.createElement("img"); 
            img.src = data.img; 
            img.alt = "image du " + data.title;
    
            //inserting the img in the content div
            contentDiv.append(img);
    
            //creating a second p for the second part of the content
            const contentElment2 = document.createElement("p");
            contentElment2.textContent = data.content2; 
            contentDiv.append(contentElment2);
    
            //inserting the contentDiv into the accordion div
            divElement.append(contentDiv);
        }
    }
}

document.addEventListener('DOMContentLoaded', loop.init);

