class BuyPepe extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buypepe;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (pepeTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    pepeTowerDesired = true;
                }
            }



        }
    }
}

class BuyDoge extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buyDoge;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (dogeTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    dogeTowerDesired = true;
                }


            }
        }
    }

}

class BuyGrump extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = grump;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (grumpDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    grumpDesired = true;
                }
            }
        }
    }

}

class BuyWonka extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = wonkafactory;
    }


    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (wonkaTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    wonkaTowerDesired = true;
                }
            }
        }
    }

}

class BuyWeaboo extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buyweaboo;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (weabooDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    weabooDesired = true;
                }
            }
        }
    }

}

class BuyRoss extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buyRoss;
    }


    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (rossTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    rossTowerDesired = true;
                }


            }
        }
    }

}

class BuyNed extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = winterfell;
    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (nedTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    nedTowerDesired = true;
                }


            }
        }
    }

}

class BuySquidward extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = squidtower;
    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (squidTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    squidTowerDesired = true;
                }


            }
        }
    }

}

class BuyBitcoin extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buybitcoin;
    }


    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (bitcoinTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    bitcoinTowerDesired = true;
                }


            }
        }
    }

}

class BuySanic extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buySanic;
    }


    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (sanicTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    sanicTowerDesired = true;
                }


            }
        }
    }

}

class BuyLogic extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buyLogic;
    }


    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                if (logicTowerDesired) {
                    clearDesire();
                } else {
                    clearDesire();
                    logicTowerDesired = true;
                }
            }
        }
    }

}