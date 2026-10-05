// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
    /* I'll gonna try to explain to me first how the gamw works to create the plan according my thoughts.
    The plan is based on what I already habe under HTML and the reasoning of the game, I should say the plan is heat the forge which means create the fire, and thi fire will be the responsible for making swords but to create the fire I have to increase the value above 20 (because the 20 is the current value and it shows "Too cold" and once is too cold it's not possible to make swords because there's no fire).
    1st: Increase the Heat for the Forge (find heatForge) and stablish a value upper 20 until 100.
    2nd: makeSword using the value on the heat to make the sword
    3rd: Based on testing the numbers I'll see the Forge Condition, the image changing and the messages according to the HTML and the mood of the game.

    How practically I'll gonna go this:
    if (heat < 30) the fire is gonna be "Too cold" consequently the image is greyish and it's not gonna make any sword.
    else if (heat < 70) the fire is gonna be "Ready to forge" which means ready to make a sword.
    else () is gonna be the value between 70 to 100 = "Roaring fire. Keep crafting!" which means any value after 70 it's good to make a sword.

    Last but not least I have to reset which means reset the game to test things out and see what happen manipulating values. 
    */

    
// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
    const forgeCard = document.getElementById("forge");
    const heatValue = document.querySelector("#heat-value"); /* Find where is the heat value */
    const swordCount = document.querySelector("#sword-count");
    const forgeImage = document.querySelector("#forge-image");
    const forgeStatusMessage = document.querySelector("#forge-status");
    const actionMessage = document.querySelector("#action-message");


// 2. Create the two state variables: heat and swords made.
    let heat = 20; /* Current value of the heat and the value that I can change to play but it's not the same as the Id above */
    let swords = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
    function getForgeStatus(heatValue){
        if(heatValue < 30){
            return "Too cold";
        }else if(heatValue < 70){
            return "Ready to forge";
        }else{
            return "Roaring fire";
        }
    }

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
    function updateForge(){
        const status = getForgeStatus(heat);

        heatValue.textContent = heat;
        swordCount.textContent = swords;
        forgeStatusMessage.textContent = status;

        forgeCard.classList.remove("is-cold", "is-ready", "is-roaring");

        if(heat < 30){
            forgeCard.classList.add("is-cold");
            forgeImage.setAttribute("src", "assets/forge-cold.svg");
            forgeImage.setAttribute("alt", "A stone forge with dark coals and no flames.")
        }

        else if(heat < 70){
            forgeCard.classList.add("is-ready");
            forgeImage.setAttribute("src", "assets/forge-ready.svg");
            forgeImage.setAttribute("alt", "A stone forge with a small orange fire.")
        }

        else{
            forgeCard.classList.add("is-roaring");
            forgeImage.setAttribute("src", "assets/forge-roaring.svg");
            forgeImage.setAttribute("alt", "A stone forge with tall bright flames and sparks.")
        }
    }

// 5. Write resetForge(). Restore the state, message, and display.
    function resetForge(){
        heat = 20;
        swords = 0;
        actionMessage.textContent = "Welcome to the forge. Add heat to begin.";
        updateForge();
    }
// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
