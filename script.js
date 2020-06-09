// level string
let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class Level {
    constructor(plan) {
        // console.log(`The level plan ${plan}`);
        let rows = plan.trim().split("\n").map(line => [...line]);
        console.log(rows)
    }
}

let level1 = new Level(simpleLevelPlan);

