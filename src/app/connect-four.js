import { reactive } from "vue";

export const HolesArray = reactive([]);

export class Hole {
  static count = 0;
  static firstFull = null;
  static matchFound = false;
  static matchObject = {};
  static reset() {
    HolesArray.forEach((hole) => {
      hole.matched = false;
      hole.value = null;
      hole.empty = true;
      Hole.firstFull = null;
      Hole.matchFound = false;
      Hole.matchObject = {};
    });
  }
  constructor() {
    this.index = Hole.count++;
    let top = this.index - 7;
    let bottom = this.index + 7;
    let right = this.index + 1;
    let left = this.index - 1;
    if (this.index % 7 == 0 || this.index == 0) {
      left = -10;
    }
    if ((this.index + 1) % 7 == 0) {
      right = 500;
    }
    this.top = top >= 0 ? top : null;
    this.bottom = bottom < 42 ? bottom : null;
    this.right = right < 42 ? right : null;
    this.left = left >= 0 ? left : null;
    this.topRight = this.top + 1;
    this.topLeft = this.top - 1;
    this.bottomRight = this.bottom + 1;
    this.bottomLeft = this.bottom - 1;
    this.empty = true;
    this.value = null;
    this.matched = false;
    HolesArray.push(this);
  }
  fill(value) {
    if (!Hole.matchFound) {
      this.value = value;
      if (this.index < Hole.firstFull || Hole.firstFull == null) {
        Hole.firstFull = this.index;
      }
    }

    // Hole.checkAllDirections(this.index);
  }

  static matchHoles(args) {
    console.log("args", args);
    args.forEach((hole) => {
      HolesArray[hole].matched = true;
    });
  }

  // static checkAllDirections (start) {
  //   Hole.checkForMatch(start, 'top');
  //   Hole.checkForMatch(start, 'down');
  //   Hole.checkForMatch(start, 'bottom');
  //   Hole.checkForMatch(start, 'left');
  // }

  static checkForMatch(start, direction, direction2) {
    if (Hole.matchFound) {
      return Hole.matchObject;
    }
    let matches = 0;
    let currentHole = HolesArray[start];
    const matchObject = {
      matchedArray: [],
      winner: "",
      match: false,
    };
    // console.log("check", currentHole.value);
    let startHoleValue = currentHole.value;
    matchObject.winner = startHoleValue;
    matchObject.matchedArray.push(start);
    // console.log("start", startHoleValue);
    if (direction2 === undefined) {
      let nextIndex = currentHole[direction];
      if (startHoleValue != null) {
        for (let i = 0; i < 3; i++) {
          currentHole = HolesArray[nextIndex];
          if (currentHole != undefined) {
            if (currentHole.value == startHoleValue) {
              matches++;
              matchObject.matchedArray.push(currentHole.index);
              nextIndex = currentHole[direction];
            } else {
              break;
            }
          }
        }
      }
    } else {
      console.log(direction, direction2);
      let nextIndex;
      let directionIndex = currentHole[direction];
      if (HolesArray[directionIndex] != undefined) {
        if (HolesArray[directionIndex][direction2] != undefined) {
          nextIndex = HolesArray[currentHole[direction]][direction2];
        } else {
          return "";
        }
      } else {
        return "";
      }

      console.log("next", nextIndex);
      console.log(direction, direction2);
      if (startHoleValue != null) {
        for (let i = 0; i < 3; i++) {
          currentHole = HolesArray[nextIndex];
          if (currentHole != undefined) {
            if (currentHole.value == startHoleValue) {
              matches++;
              matchObject.matchedArray.push(currentHole.index);
              try {
                nextIndex = HolesArray[currentHole[direction]][direction2];
              } catch (error) {
                return "";
              }
            }
          }
        }
      }
    }

    if (matches === 3) {
      console.log("match:", true);
      Hole.matchFound = true;
      matchObject.match = true;
      Hole.matchObject = matchObject;
      Hole.matchHoles(matchObject.matchedArray);
      console.log(matchObject);
      return matchObject;
    } else {
      console.log("match:", false);
      return { match: false, matchedArray: [], winner: "" };
    }
  }
}

for (var i = 0; i < 42; i++) {
  new Hole();
}

HolesArray[41].fill("yellow");
HolesArray[40].fill("red");
HolesArray[39].fill("yellow");
HolesArray[38].fill("red");

HolesArray[0].fill("yellow");
HolesArray[7].fill("red");
HolesArray[14].fill("yellow");
HolesArray[21].fill("yellow");

HolesArray[13].fill("red");
HolesArray[12].fill("red");
HolesArray[11].fill("red");
HolesArray[19].fill("red");

Hole.checkForMatch(38, "right");

Hole.checkForMatch(0, "bottom");

Hole.checkForMatch(13, "left");

// Hole.matchHoles([0]);

// console.log('test',HolesArray[38])
// console.log(Hole.checkForMatch);

console.log(Hole.count);
console.log(Hole.firstFull);

console.log(HolesArray);
