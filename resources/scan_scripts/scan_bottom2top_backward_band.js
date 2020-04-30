/*
 * bottom to top
 * backward
 * bands
 */

var bandX = image.width - 1;

do {
    for (var y = image.height - 1; y >= 0; y--) {
        for (var x = 0; x < image.bandSize; x++) {
            image.addPoint(bandX - x, y);
        }
    }
    bandX -= image.bandSize;
} while (bandX >= 0);
