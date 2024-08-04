/*
@title: Mancala
@author: Lenochodik
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const pit = "1"
const tile = "2"
const half1 = "3"
const half2 = "4"
const nothing = "5"

const tile1 = "q"
const tile2 = "w"
const tile3 = "e"
const tile4 = "r"
const tile5 = "t"
const tile6 = "y"
const tile7 = "u"
const tile8 = "i"
const tile9 = "o"
const tile10 = "a"

setLegend(
  [player, bitmap`
C99C11111122CC9C
99C1LLLLLLLL2C99
C91LLLLLLLLLL2C9
C1LLLLLLLLLLLL1C
1LLLLLLLLLLLLLL1
1LLLLLL12LLLLLL2
1LLLLL1112LLLLL2
1LLLL111112LLLL1
1LLLL111112LLLL1
1LLLLL1111LLLLL1
1LLLLLL11LLLLLL1
1LLLLLLLLLLLLLL1
C1LLLLLLLLLLLL1C
9C1LLLLLLLLLL199
9CC1LLLLLLLL199C
999C11111111C9CC`],
  [pit, bitmap`
C9CC11111111C999
99C1LLLLLLLL2CC9
9C1LLLLLLLLLL2CC
91LLLLLLLLLLLL2C
1LLLLLLLLLLLLLL2
1LLLL111111LLLL2
1LLL11111111LLL2
1LL1111111111LL1
1LL1111111111LL1
1LL1111111111LL1
1LL1111111111LL1
1LL1111111111LL1
1LL1111111121LL1
1LL1111111111LL1
1LL1111111121LL1
1LL1111111121LL1`],
  [tile, bitmap`
1LL1111111121LL2
1LL1111111121LL1
1LL1111111121LL2
1LL1111111121LL2
1LL1111111121LL1
1LL1111111111LL1
1LL1111111121LL1
1LL1111111121LL1
1LL1111111211LL1
1LLL11112211LLL1
1LLLL111111LLLL1
1LLLLLLLLLLLLLL1
C1LLLLLLLLLLLL1C
9C1LLLLLLLLLL199
99C1LLLLLLLL1C9C
C9CC11111111C99C`],
  [half1, bitmap`
LLLLLLLLLLLLLLLL
1111111111111111
1111111111211222
999CCCCCCCCCCC99
CC99C999999999C9
CC99C99CCCCCC99C
C99CCCC999CCCC9C
99CCCCCCC9CCC99C
C99999CCCC9CC9C9
CCCCC9CCCC9C99C9
CCCCC99CCC9C9CC9
CC9999CCCC9CC9C9
99C9CCCCC9CCC9C9
99CCCCCC99CCC9CC
C9CCCC999CCC99CC
CC99999CCCC99CC9`],
  [half2, bitmap`
CC9CCCCCC999CC99
C9CC999C99C99CC9
C9C9CC9C9CCC9CC9
C999C99C9CC99CCC
CC9999CC9CC99CCC
CCC9CCCC99CC99CC
999CCC9CC99CC9CC
C9CC9999CC99C9CC
C9999CC9CCC9C99C
9999CC99CCC9CC9C
99C999CCCCC9CC99
C99999CCCC99CC99
CCCCC999999CCCCC
1111111111222121
1111111111111111
LLLLLLLLLLLLLLLL`],
  [nothing, bitmap`
99C99999999CCC99
C9CC99CCCC9C99CC
CCCCC99CCC9C9CCC
C9CCCC9CC9CC9CCC
C9C9999CC9CC9999
9CC9CCCCC9CCCCC9
CCC9CC9999999CCC
999999CC99C999CC
CC9CCCCCC99CC999
CC9CCC999C9CCC9C
C9999C9C99C999CC
CCCC9C9CC99CC99C
CC999C9CCC9CC99C
C99CCC9CCC9CC9CC
C9CCCC9CCC9999CC
CC99999CCCCCCCC9`],
  // Tiles
  [tile1, bitmap`
9C9C900999CC99C9
999C0220C99C9C9C
C99C0220CC99999C
CC99022000CC99CC
999C0220120C9999
99CC022012000CC9
C99902201201100C
000C0220L2012010
0110022L120L20L0
021L022222L120L0
002L021212222L20
C001L22121212220
9C0012222212120C
99C0122222222109
CC9C0L1111111L09
C9C90LLLLLLLL0C9`],
  [tile2, bitmap`
C99C11111122CC9C
99C1LLLLLLLL2C99
C91LLLLLLLLLL2C9
C1LLLLLLLLLLLL1C
1LLLLLLLLLLLLLL1
1LLLLLL12LLLLLL2
1LLLLL1112LLLLL2
1LLLL111112LLLL1
1LLLL111112LLLL1
1LLLLL1111LLLLL1
1LLLLLL11LLLLLL1
1LLLLLLLLLLLLLL1
C1LLLLLLLLLLLL1C
9C1LLLLLLLLLL199
9CC1LLLLLLLL199C
999C11111111C9CC`],
  [tile3, bitmap`
C99C11111122CC9C
99C1LLLLLLLL2C99
C91LLLLLLLLLL2C9
C1LLLLLLLLLLLL1C
1LLLLLLLLLLLLLL1
1LLLLLL12LLLLLL2
1LLLLL1112LLLLL2
1LLLL111112LLLL1
1LLLL111112LLLL1
1LLLLL1111LLLLL1
1LLLLLL11LLLLLL1
1LLLLLLLLLLLLLL1
C1LLLLLLLLLLLL1C
9C1LLLLLLLLLL199
9CC1LLLLLLLL199C
999C11111111C9CC`],
  [tile4, bitmap`.`],
  [tile5, bitmap`.`],
  [tile6, bitmap`.`],
  [tile7, bitmap`.`],
  [tile8, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`],
  [tile9, bitmap`.`],
  [tile10, bitmap`.`],
)



setSolids([])

let level = 0
const levels = [
  map`
5555555555
55pppppp55
5555555555
5144444415
5233333325
5555555555
55pppppp55
55q5555555`
]

setMap(levels[level])

setPushables({
  [player]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {

})
