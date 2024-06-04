const accordion = {

    init : function(){
        const titles = document.querySelectorAll('.title'); //selection of all the titles

        for (const title of titles) {
            title.addEventListener('click', accordion.handleClickTitles); 
        }
    },

    handleClickTitles: function (event) {
        const clickedTitle = event.currentTarget; // Get the clicked title element
        console.log(clickedTitle);
      
        clickedTitle.classList.toggle('open'); // Toggle class for the title
      
        const nextSibling = clickedTitle.firstElementChild; 
        
        console.log(nextSibling);// Get the element directly following the title, here the penguin emoji
        if (nextSibling && nextSibling.classList.contains('penguin')) {
          nextSibling.classList.toggle('penguin--open'); // Toggle class for the next penguin element
        }
      },


}

document.addEventListener('DOMContentLoaded', accordion.init);