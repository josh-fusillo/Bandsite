
// Array for shows section

const showsTable = [
    {
        date: "Mon Dec 17 2018",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: "BUY TICKETS"

    },
    {
        date: "Tue Jul 18 2019",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
  
    },
    {
        date: "Fri Jul 22 2019",
        venue: "View Loungue",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    },
    {
        date: "Sat Aug 12 2019",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    },
    {
        date: "Fri Sep 05 2019",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    },
    {
        date: "Wed Aug 11 2019",
        venue: "Pres Club",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    } 
];

    // Grabbing all data from the objects for the shows tickets section
    const showsContainer = document.querySelector(".shows__main-container");

    function displayShows(listArray) {
        for (let i = 0; i < showsTable.length; i++) {

        const dateContainer = document.createElement("div");
        showsContainer.appendChild(dateContainer);
        dateContainer.className = "shows__date";
        
        const dateHeader = document.createElement("h5");
        dateHeader.innerText = "DATE";       
        dateContainer.appendChild(dateHeader);  
        dateContainer.className = "shows__date-header";      
        
        const dateText = document.createElement("p");            
        dateContainer.appendChild(dateText);
        dateText.innerText = showsTable[i]["date"];
        dateText.className = "shows__date-text";

        const venueContainer = document.createElement("div");
        showsContainer.appendChild(venueContainer);
        venueContainer.className = "shows__venue";

        const venueHeader = document.createElement("h5");
        venueHeader.innerText = "VENUE";
        venueContainer.appendChild(venueHeader);
        venueHeader.className = "shows__venue-header";

        const venueText = document.createElement("p"); 
        venueText.innerText = showsTable[i]["venue"];           
        venueContainer.appendChild(venueText);       
        venueText.className = "shows__venue-text";

        const locationContainer = document.createElement("div");
        showsContainer.appendChild(locationContainer);
        locationContainer.className = "shows__location";

        const locationHeader = document.createElement("h5");
        locationHeader.innerText = "LOCATION";
        locationContainer.appendChild(locationHeader);
        locationHeader.className = "shows__location-header";

        const locationText = document.createElement("p");
        locationContainer.appendChild(locationText);
        locationText.innerText = showsTable[i]["location"];
        locationText.className = "shows__location-text";

        let ticketButton = document.createElement("button");
        ticketButton.innerHTML = listArray[i]["button"];
        showsContainer.appendChild(ticketButton);
        ticketButton.className = "shows__button";

        let breakLine = document.createElement("div");
        showsContainer.appendChild(breakLine);
        breakLine.className = "shows__breakline";
        
        
        
    }

    
}

displayShows(showsTable);

        const showsContainerLarge = document.querySelector(".shows__main-container-large");

        const headerContainer = document.createElement("div");
        showsContainerLarge.appendChild(headerContainer);
        headerContainer.className = "shows__header-container"; 
        
        const sectionContainer = document.createElement("div");
        showsContainerLarge.appendChild(sectionContainer);
        sectionContainer.className = "shows__section-container"; 

        const dateHeader = document.createElement("h5");
        dateHeader.innerText = "DATES";       
        headerContainer.appendChild(dateHeader);  
        dateHeader.className = "shows__date-header-large";  

        const venueHeader = document.createElement("h5");
        venueHeader.innerText = "VENUE";
        headerContainer.appendChild(venueHeader);
        venueHeader.className = "shows__venue-header-large";

        const locationHeader = document.createElement("h5");
        locationHeader.innerText = "LOCATION";
        headerContainer.appendChild(locationHeader);
        locationHeader.className = "shows__location-header-large";        

        function displayShowsLarge(listArray) {
        for (let i = 0; i < showsTable.length; i++) {

            const infoContainer = document.createElement("div");
            sectionContainer.appendChild(infoContainer);
            infoContainer.className = "shows__info-container";

            const dateText = document.createElement("p");            
            infoContainer.appendChild(dateText);
            dateText.innerText = showsTable[i]["date"];
            dateText.className = "shows__date-text";

            const venueText = document.createElement("p"); 
            venueText.innerText = showsTable[i]["venue"];           
            infoContainer.appendChild(venueText);       
            venueText.className = "shows__venue-text";

            const locationText = document.createElement("p");
            infoContainer.appendChild(locationText);
            locationText.innerText = showsTable[i]["location"];
            locationText.className = "shows__location-text";

            let ticketButton = document.createElement("button");
            ticketButton.innerHTML = listArray[i]["button"];
            infoContainer.appendChild(ticketButton);
            ticketButton.className = "shows__button";

            
        }

    }; 

displayShowsLarge(showsTable);