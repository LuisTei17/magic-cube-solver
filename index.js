const RubrickCube = require('./classes/RubrickCube'),
   { rubrickCube } = new RubrickCube(),
   cubeHelper = require('./helpers/cubeHelper');

cubeHelper.moveHorizontally(rubrickCube, 0);