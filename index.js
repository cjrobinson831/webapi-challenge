const express = require('express');
const server = express();

const people = {
    id: 1,
    name: 'Black Panther',
    chores: [
        {
            id: 1,
            description: 'son of TChaka, king of the African nation of Wakanda',
            notes: 'TChalla came back to perform his duties in his tribe to become a man to lead the country',
            assignedTo: 1, // the id of Black Panther,
            completed: true
        },
        {
            id: 2,
            description: 'destroy the ring',
            notes: 'cast the ring into the fire inside Mount Doom',
            assignedTo: 1,
            completed: false
        },
    ],
    id: 2,
    name: 'Kilmonger',
    chores: [
        {
            id: 1,
            description: 'I lived my entire life waitin for this moment.I trained, I lied, I killed just to get here.I killed in America, Afghanistan, Iraq.I took life from my own brothers and sisters right here on this continent.And all this death, just so I could kill you.',
            notes: 'Everybody dies. Its just part of life around here.',
            assignedTo: 1, // the id of Kilmonger,
            completed: true
        },
        {
            id: 2,
            description: 'You can scar yourself as much as you like. To them, youll just be an outsider.Youre crazy to think that you can just walk in there.',
            notes: 'I found my daddy with panther claws in his chest! You aint the son of a king, youre the son of a murderer!',
            assignedTo: 1,
            completed: false
        },

    ],
    id: 3,
    name: 'Okoye',
    chores: [
        {
            id: 1,
            description: 'General of the Dora Milaje and the head of Wakandan armed forces and intel',
            notes: 'conflicted between her friendship with T_Challa, or her duty to her new king',
            assignedTo: 1, // the id ofOkoye,
            completed: true
        },
        {
            id: 2,
            description: 'He took a bullet for me! That was his choice.',
            notes: 'I am loyal to that throne. No matter who sits upon it.',
            assignedTo: 1,
            completed: false
        },

    ],
    id: 4,
    name: 'Zuri',
    chores: [
        {
            id: 1,
            description: 'Former member of the Wardogs',
            notes: 'Support the King ',
            assignedTo: 1, // the id of Zuri,
            completed: true
        },
        {
            id: 2,
            description: 'responsible for the death of Killmonger father',
            notes: 'Victory in ritual combat, comes by yield or death. If any tribe wishes to put forth a warrior, I now offer a path to the throne.',
            assignedTo: 1,
            completed: false
        },

    ]
}

server.listen(8000, () => {
    console.log(`\n*** Server Running on http://localhost:8000 ***\n`)
})