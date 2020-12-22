#include "bmp.h"
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
 
void bmp_gray(bmp_image image)
{
    unsigned int i, j, k, l;
 
    double *image_buf;
    image_buf = (double*) (malloc(image.header.width * image.header.height * 3 * sizeof(double)));
 

    unsigned int w = image.header.width;
    unsigned int h = image.header.height;
    double blue = 0.0;
    double green = 0.0;
    double red = 0.0;
 
    double blue_sum = 0.0;
    double red_sum = 0.0;
    double green_sum = 0.0;
 
    for (i = 0; i <= h + 4; i += 4) {

        for (j = 0; j <= w + 4; j += 4) {
 
            blue_sum = 0.0;
            red_sum = 0.0; 
            green_sum = 0.0;
 
            for (k = i; k < i + 4; k++) {
                for (l = j; l < j + 4; l++) {
                    if (!(k > h || l > w)) {
                        blue = image.pixel_array[0 * h * w + k * w + l];
                        green = image.pixel_array[1 * h * w + k * w + l];
                        red = image.pixel_array[2 * h * w + k * w + l];
                    }
                    blue_sum += blue * blue;
                    green_sum += green * green;
                    red_sum += red * red;
                }
            }

            if (i + 4 <= h && j + 4 <= w) {
                for (k = i; k < i + 4; k++) {
                    for (l = j; l < j + 4; l++) {
                        if (!(k > h || l > w)) {
                            image_buf[0 * h * w + k * w + l] = sqrt(blue_sum / 16);
                            image_buf[1 * h * w + k * w + l] = sqrt(green_sum / 16);
                            image_buf[2 * h * w + k * w + l] = sqrt(red_sum / 16);
                        }
                    }
                }
            }
        }
    }
    for (i = 0; i < h - (h % 4); i++) {
        for (j = 0; j < w - (w % 4); j++) {
            image.pixel_array[0 * h * w + i * w + j] =
                image_buf[0 * h * w + i * w + j];
            image.pixel_array[1 * h * w + i * w + j] =
                image_buf[1 * h * w + i * w + j];
            image.pixel_array[2 * h * w + i * w + j] =
                image_buf[2 * h * w + i * w + j];
        }
    }
 
    image.header.width -= w % 4;
    image.header.height -= h % 4;
    free(image_buf);
}
