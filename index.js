let unsolvedCube = [];
unsolvedCube[0] = new Array();
unsolvedCube[0][0] = new Array();
unsolvedCube[0][1] = new Array();
unsolvedCube[0][2] = new Array();

unsolvedCube[1] = new Array();
unsolvedCube[1][0] = new Array();
unsolvedCube[1][1] = new Array();
unsolvedCube[1][2] = new Array();

unsolvedCube[2] = new Array();
unsolvedCube[2][0] = new Array();
unsolvedCube[2][1] = new Array();
unsolvedCube[2][2] = new Array();

unsolvedCube[0][0][0] = {front: 'red', left: 'green', top: 'blue'};
unsolvedCube[0][0][1] = {left: 'green', top: 'blue'};
unsolvedCube[0][0][2] = {back: 'yellow', left: 'green', top: 'blue'};

unsolvedCube[0][1][0] = {front: 'red', top: 'blue'};
unsolvedCube[0][1][1] = {top: 'blue'};
unsolvedCube[0][1][2] = {back: 'yellow', top: 'blue'};

unsolvedCube[0][2][0] = {front: 'red', right: 'orange', top: 'blue'};
unsolvedCube[0][2][1] = { right: 'orange', top: 'blue'};
unsolvedCube[0][2][2] = {back: 'yellow', right: 'orange', top: 'blue'};


unsolvedCube[1][0][0] = {front: 'red', left: 'green'};
unsolvedCube[1][0][1] = {left: 'green'};
unsolvedCube[1][0][2] = {back: 'yellow', left: 'green'};

unsolvedCube[1][1][0] = {front: 'red'};
unsolvedCube[1][1][1] = {};
unsolvedCube[1][1][2] = {back: 'yellow'};

unsolvedCube[1][2][0] = {front: 'red', right: 'orange'};
unsolvedCube[1][2][1] = {right: 'orange'};
unsolvedCube[1][2][2] = {back: 'yellow', right: 'orange'};


unsolvedCube[2][0][0] = {front: 'red', left: 'green', bottom: 'white'};
unsolvedCube[2][0][1] = {left: 'green', bottom: 'white'};
unsolvedCube[2][0][2] = {back: 'yellow', left: 'green', bottom: 'white'};

unsolvedCube[2][1][0] = {front: 'red', bottom: 'white'};
unsolvedCube[2][1][1] = {bottom: 'white'};
unsolvedCube[2][1][2] = {back: 'yellow', bottom: 'white'};

unsolvedCube[2][2][0] = {front: 'red', right: 'orange', bottom: 'white'};
unsolvedCube[2][2][1] = {right: 'orange', bottom: 'white'};
unsolvedCube[2][2][2] = {back: 'yellow', right: 'orange', bottom: 'white'};


console.table(unsolvedCube)