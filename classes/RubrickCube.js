const Cube = require('./Cube');

class RubrikCube {

    constructor() {
        this.rubrickCube = this.mountCube();
    }
    
    mountCube() {
        let rubrickCube = [];
        rubrickCube[0] = new Array();
        rubrickCube[0][0] = new Array();
        rubrickCube[0][1] = new Array();
        rubrickCube[0][2] = new Array();

        rubrickCube[1] = new Array();
        rubrickCube[1][0] = new Array();
        rubrickCube[1][1] = new Array();
        rubrickCube[1][2] = new Array();

        rubrickCube[2] = new Array();
        rubrickCube[2][0] = new Array();
        rubrickCube[2][1] = new Array();
        rubrickCube[2][2] = new Array();

        rubrickCube[0][0][0] = new Cube({front: 'blue', left: 'orange', top: 'yellow'});
        rubrickCube[0][0][1] = new Cube({left: 'orange', top: 'yellow'});
        rubrickCube[0][0][2] = new Cube({back: 'green', left: 'orange', top: 'yellow'});

        rubrickCube[0][1][0] = new Cube({front: 'blue', top: 'yellow'});
        rubrickCube[0][1][1] = new Cube({top: 'yellow'});
        rubrickCube[0][1][2] = new Cube({back: 'green', top: 'yellow'});

        rubrickCube[0][2][0] = new Cube({front: 'blue', right: 'red', top: 'yellow'});
        rubrickCube[0][2][1] = new Cube({ right: 'red', top: 'yellow'});
        rubrickCube[0][2][2] = new Cube({back: 'green', right: 'red', top: 'yellow'});


        rubrickCube[1][0][0] = new Cube({front: 'blue', left: 'orange'});
        rubrickCube[1][0][1] = new Cube({left: 'orange'});
        rubrickCube[1][0][2] = new Cube({back: 'green', left: 'orange'});

        rubrickCube[1][1][0] = new Cube({front: 'blue'});
        rubrickCube[1][1][1] = new Cube({});
        rubrickCube[1][1][2] = new Cube({back: 'green'});

        rubrickCube[1][2][0] = new Cube({front: 'blue', right: 'red'});
        rubrickCube[1][2][1] = new Cube({right: 'red'});
        rubrickCube[1][2][2] = new Cube({back: 'green', right: 'red'});


        rubrickCube[2][0][0] = new Cube({front: 'blue', left: 'orange', bottom: 'white'});
        rubrickCube[2][0][1] = new Cube({left: 'orange', bottom: 'white'});
        rubrickCube[2][0][2] = new Cube({back: 'green', left: 'orange', bottom: 'white'});

        rubrickCube[2][1][0] = new Cube({front: 'blue', bottom: 'white'});
        rubrickCube[2][1][1] = new Cube({bottom: 'white'});
        rubrickCube[2][1][2] = new Cube({back: 'green', bottom: 'white'});

        rubrickCube[2][2][0] = new Cube({front: 'blue', right: 'red', bottom: 'white'});
        rubrickCube[2][2][1] = new Cube({right: 'red', bottom: 'white'});
        rubrickCube[2][2][2] = new Cube({back: 'green', right: 'red', bottom: 'white'});

        return rubrickCube;
    }
}

module.exports = RubrikCube;