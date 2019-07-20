describe('Cube comparison',function() {

    it("should compare two cubes", function(done) {
        const RubrickCube = require('../classes/RubrickCube'),
            UnsolvedCube = require('../classes/UnsolvedCube'),
            cubeHelper = require('../helpers/cubeHelper'),
            solvedCube = new RubrickCube(),
            unsolvedCube = new UnsolvedCube();
            equalsCubes = cubeHelper.compareCubes(solvedCube.rubrickCube, solvedCube.rubrickCube);
            differentCubes = !cubeHelper.compareCubes(solvedCube.rubrickCube, unsolvedCube.rubrickCube);
        expect(equalsCubes).toBe(true);
        expect(differentCubes).toBe(true);
        done();
    });
});