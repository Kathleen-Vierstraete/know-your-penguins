// JS file to loop on the content and insert infos and tags in the DOM

console.log('loop init');

let loop = {

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
            img.alt = "image of the " + data.title;
    
            //inserting the img in the content div
            contentDiv.append(img);
    
            //creating a second p for the second part of the content
            const contentElment2 = document.createElement("p");
            contentElment2.textContent = data.content2; 
            contentDiv.append(contentElment2);
    
            //inserting the contentDiv into the accordion div
            divElement.append(contentDiv);
        }
    },

        //information taken from various sources, such as wikipedia or national geographic pages
        datas : [

            {
                title : "Emperor penguin", 
                content1 : "Emperors are the largest of all penguins—an average bird stands some 45 inches tall. These flightless animals live on the Antarctic ice and in the frigid surrounding waters. Penguins employ physiological adaptations and cooperative behaviors in order to deal with an incredibly harsh environment, where wind chills can reach -60°C.",
                img :"./images/emperor-penguins-429128_640.jpg",
                content2 : "Like all penguins, it is flightless, with a streamlined body, and wings stiffened and flattened into flippers for a marine habitat. Its diet consists primarily of fish, but also includes crustaceans, such as krill, and cephalopods, such as squid. While hunting, the species can remain submerged around 20 minutes, diving to a depth of 535 m (1,755 ft). It has several adaptations to facilitate this, including an unusually structured haemoglobin to allow it to function at low oxygen levels, solid bones to reduce barotrauma, and the ability to reduce its metabolism and shut down non-essential organ functions.",
            },
    
            {
                title : "King penguin", 
                content1 : "The king penguin is the second largest penguin on Earth. In fact, the bird gets its common name from the belief that it was the largest of all penguin species—a belief that was overturned in 1884 when its close relative the emperor penguin, which can measure nearly a foot taller, was recognized as a separate species. The easiest way to distinguish a king penguin from the other 17 penguin species is by the splash of yellow-orange feathers the bird sports on its upper chest and by the teardrop-shaped patches of color on the sides of its head. Some other penguins boast yellow feathers too, but none so prominently as the king penguin.",
                img :"./images/king-penguin-by-paul-carroll-Tz3A1ByTkq0-unsplash.jpg", 
                content2 : "King penguins mainly eat lanternfish, squid, and krill. On foraging trips, king penguins repeatedly dive to over 100 metres (300 ft), and have been recorded at depths greater than 300 metres (1,000 ft). Predators of the king penguin include giant petrels, skuas, the snowy sheathbill, the leopard seal, and the orca.",
            },
    
            {
                title : "Gentoo penguin", // aka in french le manchot papou
                content1 : "With flamboyant red-orange beaks, white-feather caps, and peach-colored feet, gentoo penguins stand out against their drab, rock-strewn Antarctic habitat. These charismatic waddlers, who populate the Antarctic Peninsula and numerous islands around the frozen continent, are the penguin world’s third largest members, reaching a height of 30 inches and a weight of 12 pounds.",
                img :"./images/gentoo-penguin-by-andrew-dawes-ZL7y64RtSps-unsplash.jpg", 
                content2 : "Gentoos mainly live on fish, crustaceans such as krill and shrimp, and cephalopods. In February and March, crustaceans make up about 10% of the diet, but from March to June, it is about 75%. From June to October, grey rockcod make up 90% of their diet. Cephalopods make up only 10% of the diet throughout the year.Gentoos are opportunistic feeders",
            },
    
            {
                title : "Chinstrap penguin", 
                content1 : "The chinstrap penguin is a species of penguin that inhabits a variety of islands and shores in the Southern Pacific and the Antarctic Oceans. Its name stems from the narrow black band under its head, which makes it appear as if it were wearing a black helmet, making it easy to identify. Other common names include ringed penguin, bearded penguin, and stonecracker penguin, due to its loud, harsh call.",
                img :"./images/chinstrap-penguin-by-michael-jerrard-81Wu7Rp2QL0-unsplash.jpg", 
                content2 : "The diet of the chinstrap penguin consists of small fish, krill, shrimp, and squid, which they swim up to 80 km (50 mi) offshore each day to obtain. The chinstrap penguin's tightly packed feathers provide a waterproof coat, enabling it to swim in freezing waters. Additionally, thick blubber deposits and intricate blood vessels in the flippers and legs assist in the preservation of heat.",
            },
    
            {
                title : "Adélie penguin", 
                content1 : "The Adélie penguin is a species of penguin common along the entire coast of the Antarctic continent, which is the only place where it is found. It is the most widespread penguin species, and, along with the emperor penguin, is the most southerly distributed of all penguins. It is named after Adélie Land, in turn, named for Adèle Dumont d'Urville, who was married to French explorer Jules Dumont d'Urville, who first discovered this penguin in 1840. Adélie penguins obtain their food by both predation and foraging, with a diet of mainly krill and fish.",
                img :"./images/adelie-penguins-by-hubert-neufeld-bZvdX5Ysm44-unsplash.jpg", 
                content2 : "The Adélie penguin is known to feed mainly on Antarctic krill, ice krill, Antarctic silverfish, lanternfish, amphipods sea krill, glacial squid and other cephalopods (diet varies depending on geographic location) during the chick-rearing season. The stable isotope record of fossil eggshell accumulated in colonies over the last 38,000 years reveals a sudden change from a fish-based diet to krill that began around 200 years ago. This is most likely due to the decline of the Antarctic fur seal since the late 18th century and baleen whales during the early 20th century. The reduction of competition from these predators has resulted in a surplus of krill, which the penguins now exploit as an easier source of food.",
            },
    
            {
                title : "Yellow eyed penguin", 
                content1 : "The yellow-eyed penguin, known also as hoiho, is a species of penguin endemic to New Zealand.Previously thought closely related to the little penguin, molecular research has shown it more closely related to penguins of the genus Eudyptes. Like most penguins, it is mainly piscivorous.The species breeds along the eastern and south-eastern coastlines of the South Island of New Zealand, as well as Stewart Island, Auckland Islands, and Campbell Islands. Colonies on the Otago Peninsula are a popular tourist venue, where visitors may closely observe penguins from hides, trenches, or tunnels.",
                img :"./images/yellowed_eyed_penguin_by_brent_beaven.jpg", 
                content2 : "Around 90% of the yellow-eyed penguin's diet is made up of fish, chiefly demersal species that live near the seafloor, including silversides, blue cod, red cod, and opalfish. Other species taken are New Zealand blueback sprat and cephalopods such as arrow squid. They also eat some crustaceans, including krill. Recently, jellyfish were found to be targeted by the penguins. While initially thought that the birds would prey on jellyfish itself, deployments of camera loggers revealed that the penguins were going after juvenile fish and fish larvae associated with jellyfish.",
            },
    
            {
                title : "Royal penguin", 
                content1 : "The royal penguin is a species of penguin, which can be found only on the sub-Antarctic Macquarie Island and adjacent islands. They inhabit the waters surrounding Antarctica. Royals look very much like macaroni penguins, but have a white face and chin instead of the macaronis' black visage. They are 65–76 cm (26–30 in) long and weigh 5–6 kg (11–13 lb). Males are larger than females. Royal penguins breed only on Macquarie Island and adjacent islands. Like other penguins, they spend much of their time at sea, where they are assumed to be pelagic.",
                img :"./images/royal-penguin-171704_640.jpg", 
                content2 : "Royal penguins feed on krill, small fish, and small amounts of squid. During breeding season, royal penguins will hunt in localised areas in conjunction to neighbouring colonies. This implies a cohabitation with other colonies by sectoring off fishing areas for certain colonies, nearly eliminating resource competition.",
            },
    
            {
                title : "Southern Rockhopper penguin", 
                content1 : "The southern rockhopper penguin is a species of rockhopper penguin, that is sometimes considered distinct from the northern rockhopper penguin. It occurs in subantarctic waters of the western Pacific and Indian Oceans, as well as around the southern coasts of South America. This is the smallest yellow-crested, black-and-white penguin in the genus Eudyptes. It has slate-grey upper parts and has straight, bright yellow eyebrows ending in long yellowish plumes projecting sideways behind a red eye.",
                img :"./images/southern-rockhopper-penguin-7625174_640.jpg", 
                content2 : "Royal penguins feed on krill, small fish, and small amounts of squid. During breeding season, royal penguins will hunt in localised areas in conjunction to neighbouring colonies. This implies a cohabitation with other colonies by sectoring off fishing areas for certain colonies, nearly eliminating resource competition.",
            },
    
            {
                title : "Northern Rockhopper penguin", 
                content1 : "The northern rockhopper penguin, Moseley's rockhopper penguin, or Moseley's penguin is a penguin species native to the southern Indian and Atlantic Oceans. It is described as distinct from the southern rockhopper penguin. Analysis of a part of a mitochondrial control region from a northern rockhopper penguin found on the Kerguelen Islands showed that it may have come from Gough Island, 6,000 km away, and that the southern and northern rockhoppers are genetically separate, though some individuals may disperse from their breeding colonies. Many taxonomists have yet to recognize the split, although some are beginning to do so.",
                img :"./images/northern-eudyptes-chrysocome-a038_p5.jpg", 
                content2 : "The northern rockhopper penguin feeds on krill and other sea life such as crustaceans, squid, octopus and fish. In the Happy Feet and Happy Feet Two films, the Barry White-like love guru, Lovelace, is a rockhopper penguin, who will instil his wisdom for the price of rocks. Lovelace is voiced by Robin Williams.",
            },
    
            {
                title : "Fiordland crested penguin", 
                content1 : "The Fiordland penguin, also known as the Fiordland crested penguin (in Māori, tawaki or pokotiwha), is a crested penguin species endemic to New Zealand. It currently breeds along the south-western coasts of New Zealand's South Island as well as on Stewart Island/Rakiura and its outlying islands. Because it originally ranged beyond Fiordland, it is sometimes referred to as the New Zealand crested penguin. It is occasionally found in Australia.",
                img :"./images/fiordland-by-cameron-witney-Y3OhmJbZ_yw-unsplash.jpg", 
                content2 : "The main prey species reported are cephalopods, followed by crustaceans and fish. Prey taken seems to vary between Codfish Island and northern Fiordland. This species is a medium-sized, yellow-crested, black-and-white penguin, growing to approximately 60 cm (24 in) long and weighing on average 3.7 kg (8.2 lb). It has dark, bluish-grey upperparts with a darker head, and white underparts. Its broad, yellow eyebrow-stripe extends over the eye and drops down the neck. ",
            },
    
            {
                title : "Erect crested penguin", 
                content1 : "The erect-crested penguin is a penguin endemic to the New Zealand region and only breeds on the Bounty and Antipodes Islands. It has black upper parts, white underparts and a yellow eye stripe and crest. It spends the winter at sea and little is known about its biology and breeding habits.",
                img :"./images/gorfou-huppe-op2.jpg", 
                content2 : "It presumably feeds on small fish, krill and squid like other crested penguin species. This is a small-to-medium-sized, yellow-crested, black-and-white penguin. The male is slightly larger than the female and as in most crested penguins has a larger bill. It has bluish-black to jet black upper parts and white underparts, and a broad, bright yellow eyebrow-stripe which extends over the eye to form a short, erect crest.",
            },
    
            {
                title : "Macaroni penguin", 
                content1 : "The macaroni penguin is a species of penguin found from the Subantarctic to the Antarctic Peninsula. One of six species of crested penguin, it is very closely related to the royal penguin, and some authorities consider the two to be a single species. It bears a distinctive yellow crest that resembles macaroni, from which its name is derived. Its face and upperparts are black and sharply delineated from the white underparts.",
                img :"./images/macaroni-by-angie-corbett-kuiper-bZTQDlOU6zQ-unsplash.jpg", 
                content2 : "The diet of the macaroni penguin consists of a variety of crustaceans, squid and fish; the proportions that each makes up vary with locality and season. Krill, particularly Antarctic krill, account for over 90% of food during breeding season. Cephalopods and small fish such as the marbled rockcod, painted notie, the lanternfish species become more important during chick-rearing. Like several other penguin species, the macaroni penguin sometimes deliberately swallows small (10– to 30-mm-diameter) stones; this behaviour has been speculated to aid in providing ballast for deep-sea diving, or to help grind food, especially the exoskeletons of crustaceans which are a significant part of its diet.",
            },
    
            {
                title : "Snares crested penguin", 
                content1 : "The Snares penguin, also known as the Snares crested penguin and the Snares Islands penguin, is a penguin from New Zealand. The species breeds on the Snares Islands, a group of islands off the southern coast of the South Island.  It has dark blue-black upper parts and white underparts. It has a bright yellow eyebrow-stripe which extends over the eye to form a drooping, bushy crest. It has bare pink skin at the base of its large red-brown bill.",
                img :"./images/gorfou-snares-op3.jpg", 
                content2 : "The Snares penguin's main prey is krill, supplemented by squid and small fish. The penguin can make a large variety of vocal noises. It is difficult to verbally describe these noises, but they range from hisses and explosive cries when threatened to rhythmical braying and trumpeting sounds that can be heard from long distances at sea.",
            },
    
            {
                title : "African penguin", 
                content1 : "The African penguin, also known as Cape penguin or South African penguin, is a species of penguin confined to southern African waters. Like all penguins, it is flightless, with a streamlined body and wings stiffened and flattened into flippers for a marine habitat. The African penguin is a pursuit diver and feeds primarily on fish and squid.",
                img :"./images/african-penguins-birds-7108368_640.jpg", 
                content2 : "The species has distinctive pink patches of skin above the eyes and a black facial mask. The body's upper parts are black and sharply delineated from the white underparts, which are spotted and marked with a black band. African penguins forage in the open sea, where they feed on pelagic fish such as sardines, Cape horse mackerels, red-eye round herrings and anchovies and marine invertebrates such as squids and small crustaceans, primarily krills and shrimps.",
            },
    
            {
                title : "Magellanic penguin", 
                content1 : "The Magellanic penguin is a South American penguin, breeding in coastal Patagonia, including Argentina, Chile, and the Falkland Islands. Magellanic penguins are medium-sized penguins which grow to be 61–76 cm (24–30 in) tall and weigh between 2.7 and 6.5 kg (6.0 and 14.3 lb). The males are larger than the females, and the weight of both drops while the parents raise their young.",
                img :"./images/magellanic-zwartvoetpinguin-4461638_640.jpg", 
                content2 : "Magellanic penguins feed in the water, preying on small pelagic fish, hagfish,[5] cuttlefish, squid, krill, and other crustaceans, and ingest sea water with their prey. They do not experience a severe shortage of food like the Galapagos penguins, because they have a consistent food supply being located on the Atlantic coast of South America. The presence of the large continental shelf in the Atlantic Ocean lets Magellanic penguins forage far from their breeding colony.",
            },
    
            {
                title : "Galapagos penguin", 
                content1 : "The Galápagos penguin  is a penguin endemic to the Galápagos Islands and Ecuador. It is the only penguin found north of the equator. Most inhabit Fernandina Island and the west coast of Isabela Island. Due to their warm environment, Galápagos penguins have developed techniques to stay cool. The feathers on their back, flippers, and head are black, and they have a white belly and a stripe looping from their eyes down to their neck and chin.",
                img :"./images/gal-penguin-2203693_640.jpg", 
                content2 : "Galápagos penguins have a black head with a white border running from behind the eye, around the black ear coverts and chin, to join on the throat. The top of the beaks are black and fade into pink on the bottom. They have two black bands across the breast that connect to the back, the lower band extending down the flanks to the thigh. They eat small schooling fish, mainly mullet, sardines, pilchards and anchovies, and sometimes crustaceans.",
            },
    
            {
                title : "Humboldt penguin", 
                content1 : "The Humboldt penguin is a medium-sized penguin. It resides in South America, its range mainly contains most of coastal Peru. Its nearest relatives are the African penguin, the Magellanic penguin and the Galápagos penguin. It is a migrant species. Humboldt penguins nest on islands and rocky coasts, burrowing holes in guano and sometimes using scrapes or caves. In South America the Humboldt penguin is found only along the Pacific coast, and the range of the Humboldt penguin overlaps that of the Magellanic penguin on the central Chilean coast. ",
                img :"./images/humboldt-penguin-7283765_640.jpg", 
                content2 : "The sex of the Humboldt penguin cannot be recognised via differences in plumage, as they are monomorphic. Humboldt penguins have a black head with a white border that runs from behind the eye, around the black ear-coverts and chin, and joins at the throat. They have blackish-grey upperparts and whitish underparts, with a black breast-band that extends down the flanks to the thigh. They have a fleshy-pink base to the bill. ",
            },
    
            {
                title : "Little blue penguin", 
                content1 : "The little penguin is a species of penguin from New Zealand. They are commonly known as fairy penguins, little blue penguins, or blue penguins, owing to their slate-blue plumage and are also known by their Māori name kororā. They are fossorial birds. Like those of all penguins, the wings of Eudyptula species have developed into flippers used for swimming.",
                img :"./images/lttile-blue-by-kunal-kalra-QMAS1QF3UAk-unsplash.jpg", 
                content2 : "Little penguins feed by hunting small clupeoid fish, cephalopods, and crustaceans, for which they travel and dive quite extensively including to the sea floor. Important little penguin prey items include arrow squid, slender sprat, Graham's gudgeon, red cod, and ahuru.",
            },
    
        ],
}

document.addEventListener('DOMContentLoaded', loop.init);

