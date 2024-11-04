elements.Led = {
    name: "Led",
    behavior: behaviors.WALL,
    category: "Machines",
    state: "solid",
    color: "#141414"
    reactions: {},
};

elements.Led.onPlace = function(pixel) {
    input("Enter the hex code of the Led")
}

