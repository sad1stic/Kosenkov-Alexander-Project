#include <iostream>
#include <GL/glut.h>
#include <FreeImage.h>
#include <windows.h>
#include <math.h>
#include <vector>
#include <algorithm>
 
// Slide tr coord
#define XLEFT   x * 64
#define XRIGHT  (x + 1) * 64
#define YTOP    y * 64
#define YDOWN   (y + 1) * 64
 
// Define colors
#define blue 0.0F, 0.0F, 1.0F
#define red 1.0F, 0.0F, 0.0F
#define green 0.0F, 1.0F, 0.0F
#define black 0.0F, 0.0F, 0.0F
#define gold 255.0F, 226.0F, 28.0F
 
float shit = 0.0F;
 
void renderScene();
 
void myInit();
 
void renderGame();
 
void renderPoligonBlock(int xLeft, int xRight, int  yTop, int yDown, int mode);
 
void getKey(unsigned char key, int xmouse, int ymouse);
 
void loadImageTexture(const char *filename);
 
void trashSIXSEVENNASTYA();
 
enum MO {
    Floor = 0,
    Wall,
    Chest,
    Hero
};
 
GLuint textArr[10];
 
int point = 0;
int playerX = 1;
int playerY = 1;
 
std::vector<std::vector<int>> mapGame =
{
    {1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},
    {1,3,1,0,1,0,1,0,2,1,0,0,0,0,1,1,0,0,0,1},
    {1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,2,1},
    {1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1},
    {1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1},
    {1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1},
    {1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,1},
    {1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1},
    {1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1},
    {1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},
};
 
int Score = 3;
 
int main(int argc, char** argv) {
    // Init
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGBA);
    glutInitWindowPosition(0, 0);
    glutInitWindowSize(1280, 640);
    
    // Open Window.
    glutCreateWindow("RUN BOY RUUUN");
 
    glutDisplayFunc(renderScene);
 
    myInit();
    glutMainLoop();
    return 0;
}
 
 
void myInit() {
    glClearColor(0.0, 0.0, 0.0, 0.0);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    gluOrtho2D(0.0, 1280.0, 0.0, 640.0);
}
void renderScene() {
    glClearColor(1, 1, 1, 0);
    glClear(GL_COLOR_BUFFER_BIT);
 
    Sleep(10);
    // Отрисовка куба.
    renderGame();
    //trashSIXSEVENNASTYA();
    glFlush();
 
    glutKeyboardFunc(getKey);
 
    if (!Score) {
        return;
    }
 
    //glutSwapBuffers();
    glutPostRedisplay();
}
 
// Отрисовка стены
void renderGame() {
    for (int x = 0; x < 20; ++x) {
        for (int y = 0; y < 10; ++y) {
            renderPoligonBlock(XLEFT, XRIGHT, YTOP, YDOWN, mapGame[y][x]);
        }
    }
}
 
void renderPoligonBlock(int xLeft, int xRight, int  yTop, int yDown, int mode) {
 
    switch (mode) {
    case Wall:
        glBindTexture(GL_TEXTURE_2D, textArr[Wall]);
        break;
    case Floor:
        glBindTexture(GL_TEXTURE_2D, textArr[Floor]);
        break;
    case Chest:
        glBindTexture(GL_TEXTURE_2D, textArr[Chest]);
        break;
    default:
        glBindTexture(GL_TEXTURE_2D, textArr[Hero]);
    }
 
    //QUADS
    glBegin(GL_QUADS);
    glTexCoord2f(0, 0);
    glVertex2i(xLeft, yDown);
    glTexCoord2f(1, 0);
    glVertex2i(xRight, yDown);
    glTexCoord2f(1, 1);
    glVertex2i(xRight, yTop);
    glTexCoord2f(0, 1);
    glVertex2i(xLeft, yTop);
    glEnd();
}
 
void getKey(unsigned char key, int xmouse, int ymouse) {
 
    int xDl = playerX, yDl = playerY;
    switch (key) {
    case 'w':
        xDl = playerX + 1;
        yDl = playerY;
        break;
    case 's':
        xDl = playerX - 1;
        yDl = playerY;
        break;
    case 'a':
        xDl = playerX;
        yDl = playerY - 1;
        break;
    case 'd':
        xDl = playerX;
        yDl = playerY + 1;
        break;
    default:
        break;
    }
    switch (mapGame[xDl][yDl]) {
    case Wall:
        break;
    case Floor:
        mapGame[xDl][yDl] = Hero;
        mapGame[playerX][playerY] = Floor;
        playerX = xDl;
        playerY = yDl;
        break;
    case Chest:
        mapGame[xDl][yDl] = Hero;
        mapGame[playerX][playerY] = Floor;
        playerX = xDl;
        playerY = yDl;
        Score--;
        break;
    }
}
 
void loadImageTexture(const char* filename) {
 
    GLuint texture_ID;
    FIBITMAP* dib = NULL;
    FREE_IMAGE_FORMAT fif = FIF_UNKNOWN;
    BYTE* bits(0);
 
    unsigned int width(0);
    unsigned int height(0);
 
    fif = FreeImage_GetFileType(filename, 0);
    if (fif == FIF_UNKNOWN) {
        fif = FreeImage_GetFIFFromFilename(filename);
    }
    if (fif == FIF_UNKNOWN) {
        std::cerr << "shit is happend " << filename << std::endl;
        exit(EXIT_FAILURE);
    }
 
    if (FreeImage_FIFSupportsReading(fif))
        dib = FreeImage_Load(fif, filename);
    else
        std::cerr << "shit is IS" << std::endl;
 
    if (!dib) {
        std::cerr << "shit is REALY happend " << filename << std::endl;
        exit(EXIT_FAILURE);
    }
 
    bits = FreeImage_GetBits(dib);
    width = FreeImage_GetWidth(dib);
    height = FreeImage_GetHeight(dib);
 
    if (bits == 0 || height == 0 || width == 0) {
        std::cerr << "HUGSTONE WE HAVE A PROBLEM" << std::endl;
        exit(EXIT_FAILURE);
    }
    glGenTextures(1, &texture_ID);
    textArr[point++] = texture_ID;
    glBindTexture(GL_TEXTURE_2D, texture_ID);
 
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, bits);
 
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
 
    FreeImage_Unload(dib);
}
void trashSIXSEVENNASTYA() {
    glBegin(GL_QUADS);
    glBindTexture(GL_TEXTURE_2D, textArr[Wall]);
    glTexCoord2f(0, 0);
    glVertex2i(0, 0);
    glTexCoord2f(0, 1);
    glVertex2i(640, 0);
    glTexCoord2f(1, 1);
    glVertex2i(640, 640);
    glTexCoord2f(1, 0);
    glVertex2i(0, 640);
    glEnd();
}
