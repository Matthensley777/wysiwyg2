//array of the cards

var famousPeople = [

    {
        title: "Rock Star",
        name: "Ringo Star",
        id: "Ringo",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },

    {
        title: "Rock Star",
        name: "Paul McCartney",
        id: "Paul",
        bio: "Sir James Paul McCartney, MBE is an English singer-songwriter, multi-instrumentalist, and composer. With John Lennon, George Harrison, and Ringo Starr, he gained worldwide fame with the rock band the Beatles.",
        image: "https://e.snmc.io/lk/f/a/bb762aed45757589ffc8a78dfdfc9fe6/1188523.jpg",
        lifespan: {
            birth: 1942,
            death: 2042
        }
    },

    {
        title: "Rock Star",
        name: "John Lennon",
        id: "John",
        bio: "John Winston Ono Lennon, MBE was an English singer and songwriter who co-founded the Beatles, the most commercially successful band in the history of popular music. He and fellow member Paul McCartney formed a celebrated songwriting partnership.",
        image: "http://2.darkroom.shortlist.com/980/322f1f6f28cb50da01bbef3346797c4b:4eef786afce2adfc5c7752e0cf04ab0c/john-lennon",
        lifespan: {
            birth: 1940,
            death: 1980
        }
    },

    {
        title: "Rock Star",
        name: "George Harrison",
        id: "George",
        bio: "George Harrison, MBE was an English guitarist, singer, songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles.",
        image: "https://beatlemedo.files.wordpress.com/2013/01/george-harrison-living.jpg",
        lifespan: {
            birth: 1943,
            death: 2001
        }
    }
]

famousPeople.map(function(beatles) {
    $("#famousPeople").append(`<div class="personCard"><h3> Title: ${beatles.title}</h3> <p> Name: ${beatles.name} </p> <p> Bio: ${beatles.bio} </p> <img src=${beatles.image}></div>`);
});

$(".delete").click(function() {
    $(this).parent().remove();
});








































