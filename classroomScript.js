// THIS IS FOR Classroom CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
    1: {
        title: "Entry #1: Pa-init, Pag-hatag ug ka-Init (hosted by the SU DOST)",
        content1: "I was invited by my friends at DOST sa SU because they were doing some community work. The activity was aimed to elevate the morale of the personnel and staff working at the University despite the harsh conditions of the weather at that time. Because we had no school due to suspensions, I wanted to go since my friends would also be there. I was a head along with my friends, we arranged the time and our flow of event.",
        content2: "It was a 10-man group so we didn’t have much manpower. The bad weather didn’t stop us however. My initial expectations would that it would be a little awkward since there are only a few of us, however I found the event as fun and rewarding. Although we were a little shy in the beginning, the smiles of the people whom we have given snacks to made us push on. The funds were actually raised from 0, it was only sent out to some people the night before and we actually were able to come up with 900php. This was just enough to get a box of meat bread with around 50 pieces, and got some coffee and paper cups for them. However, hilariously we weren’t able to get those wooden stirring sticks for their coffees.",
        content3: "This experience affected the way that I saw my anxiety for social gatherings. Especially with people who aren’t in my class that I became closer with. I also learned that initiative is really what the world needs because there many simple gifts or acts we can do for the people around us but we end up not initiating any action at all. I benefited because it helped me put into perspective what it takes to be active and feel the positive impact of our initiatives.",
        content4: "Because of this activity I am more positive about setting time from my schedule to help out the community and to do good in the world!",
        imageUrl1: "8ff1de32-1c8d-42ae-8c8d-e024f7d7a124.jpeg",
        imageUrl2: "489caba3-a820-4aad-a588-cf2bcfbb2c38.jpeg",
        imageUrl3: "17c7043e-6110-4400-85ce-fa521b26e623.jpeg",
    },
    2: {
        title: "Entry #2: Pa-init, Pag-hatag ug ka-Init (hosted by the SU DOST)",
        content1: "I was invited by my friends at DOST sa SU because they were doing some community work. The activity was aimed to elevate the morale of the personnel and staff working at the University despite the harsh conditions of the weather at that time. Because we had no school due to suspensions, I wanted to go since my friends would also be there. I was a head along with my friends, we arranged the time and our flow of event.",
        content2: "It was a 10-man group so we didn’t have much manpower. The bad weather didn’t stop us however. My initial expectations would that it would be a little awkward since there are only a few of us, however I found the event as fun and rewarding. Although we were a little shy in the beginning, the smiles of the people whom we have given snacks to made us push on. The funds were actually raised from 0, it was only sent out to some people the night before and we actually were able to come up with 900php. This was just enough to get a box of meat bread with around 50 pieces, and got some coffee and paper cups for them. However, hilariously we weren’t able to get those wooden stirring sticks for their coffees.",
        content3: "This experience affected the way that I saw my anxiety for social gatherings. Especially with people who aren’t in my class that I became closer with. I also learned that initiative is really what the world needs because there many simple gifts or acts we can do for the people around us but we end up not initiating any action at all. I benefited because it helped me put into perspective what it takes to be active and feel the positive impact of our initiatives.",
        content4: "Because of this activity I am more positive about setting time from my schedule to help out the community and to do good in the world!",
        imageUrl1: "8ff1de32-1c8d-42ae-8c8d-e024f7d7a124.jpeg",
        imageUrl2: "489caba3-a820-4aad-a588-cf2bcfbb2c38.jpeg",
        imageUrl3: "17c7043e-6110-4400-85ce-fa521b26e623.jpeg",
    },

    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    // Add similar entries for each box up to contentBox8
};

// Function to handle box clicks
function handleBoxClick(event) {
    const box = event.currentTarget; // Get the clicked box
    const contentNum = box.id.replace('contentBox', '');

    // If clicked box already has 'enlarged', reset to original state
    if (box.classList.contains('enlarged')) {
        resetBox(box);
    } else {
        // Enlarge the clicked box and update its content
        enlargeBox(box, contentNum);
    }
}

// Function to enlarge a box
function enlargeBox(box, contentNum) {
    // Enlarge the clicked box and update its content
    const { title, content1, content2, content3, content4, imageUrl1, imageUrl2, imageUrl3 } = contentData[contentNum];
    
    box.classList.add('enlarged');
    box.innerHTML = `
        <div class="boxInformation">
            <button class="close-button">&times;</button>
            <h2 style="margin: 0 auto; text-align: center;">${title}</h2>
            <h3 style="margin: 20px;">${content1}</h3>
            <h3 style="margin: 20px;">${content2}</h3>
            <h3 style="margin: 20px;">${content3}</h3>
            <h3 style="margin: 20px;">${content4}</h3>
            <div style="display: flex; justify-content: center; gap: 10px; align-items: center; margin: 15px;">
                <img src="${imageUrl1}" style="width: 33%; height: auto; border-radius: 20px; margin: 0 5px 30px;">
                <img src="${imageUrl2}" style="width: 33%; height: auto; border-radius: 20px; margin: 0 5px 30px;">
                <img src="${imageUrl3}" style="width: 33%; height: auto; border-radius: 20px; margin: 0 5px 30px;">
            </div>
        </div>
    `;

    // Add event listener for the close button
    const closeButton = box.querySelector('.close-button');
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the box from being clicked again
        resetBox(box);
    });

    // Disable all other boxes
    disableOtherBoxes(box);
}

// Function to reset a box
function resetBox(box) {
    box.classList.remove('enlarged');
    box.innerHTML = `<h2 id="contentBoxText${box.id.replace('contentBox', '')}"> Entry #${box.id.replace('contentBox', '')} </h2>`;
    enableAllBoxes();
}

// Function to disable other boxes
function disableOtherBoxes(activeBox) {
    contentBoxes.forEach(box => {
        if (box !== activeBox) {
            box.classList.add('disabled'); // Optionally style the disabled state
            box.removeEventListener('click', handleBoxClick); // Remove click event
        }
    });
}

// Function to enable all boxes
function enableAllBoxes() {
    contentBoxes.forEach(box => {
        box.classList.remove('disabled');
        box.addEventListener('click', handleBoxClick); // Re-add click event
    });
}

// Attach event listener for each content box
contentBoxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
});
