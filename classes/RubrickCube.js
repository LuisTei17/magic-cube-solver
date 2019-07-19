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

        rubrickCube[0][0][0] = new Cube({front: 'red', left: 'green', top: 'blue'});
        rubrickCube[0][0][1] = new Cube({left: 'green', top: 'blue'});
        rubrickCube[0][0][2] = new Cube({back: 'yellow', left: 'green', top: 'blue'});

        rubrickCube[0][1][0] = new Cube({front: 'red', top: 'blue'});
        rubrickCube[0][1][1] = new Cube({top: 'blue'});
        rubrickCube[0][1][2] = new Cube({back: 'yellow', top: 'blue'});

        rubrickCube[0][2][0] = new Cube({front: 'red', right: 'orange', top: 'blue'});
        rubrickCube[0][2][1] = new Cube({ right: 'orange', top: 'blue'});
        rubrickCube[0][2][2] = new Cube({back: 'yellow', right: 'orange', top: 'blue'});


        rubrickCube[1][0][0] = new Cube({front: 'red', left: 'green'});
        rubrickCube[1][0][1] = new Cube({left: 'green'});
        rubrickCube[1][0][2] = new Cube({back: 'yellow', left: 'green'});

        rubrickCube[1][1][0] = new Cube({front: 'red'});
        rubrickCube[1][1][1] = new Cube({});
        rubrickCube[1][1][2] = new Cube({back: 'yellow'});

        rubrickCube[1][2][0] = new Cube({front: 'red', right: 'orange'});
        rubrickCube[1][2][1] = new Cube({right: 'orange'});
        rubrickCube[1][2][2] = new Cube({back: 'yellow', right: 'orange'});


        rubrickCube[2][0][0] = new Cube({front: 'red', left: 'green', bottom: 'white'});
        rubrickCube[2][0][1] = new Cube({left: 'green', bottom: 'white'});
        rubrickCube[2][0][2] = new Cube({back: 'yellow', left: 'green', bottom: 'white'});

        rubrickCube[2][1][0] = new Cube({front: 'red', bottom: 'white'});
        rubrickCube[2][1][1] = new Cube({bottom: 'white'});
        rubrickCube[2][1][2] = new Cube({back: 'yellow', bottom: 'white'});

        rubrickCube[2][2][0] = new Cube({front: 'red', right: 'orange', bottom: 'white'});
        rubrickCube[2][2][1] = new Cube({right: 'orange', bottom: 'white'});
        rubrickCube[2][2][2] = new Cube({back: 'yellow', right: 'orange', bottom: 'white'});

        return rubrickCube;
    }
}

module.exports = RubrikCube;