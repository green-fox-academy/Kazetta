# Coding Dojo: Tennis game

Get more familiar with refactoring.

## Materials & Resources

### Training

| Material                                                                                              |            Time |
| :---------------------------------------------------------------------------------------------------- | --------------: |
| [Clean Code](https://github.com/green-fox-academy/teaching-materials/tree/master/material/clean-code) | Chapter 1,2,3,6 |

### Optional

| Material                                          |               Time |
| :------------------------------------------------ | -----------------: |
| [Clean Code](http://lmgtfy.com/?q=clean+code+pdf) | Chapter 7,9, 10,11 |

### Requirements

- Functions
- Unit Testing
- [Clean Code](https://github.com/green-fox-academy/teaching-materials/tree/master/material/clean-code)
- [Styleguide](https://github.com/green-fox-academy/teaching-materials/tree/master/styleguide)

### Tennis Refactoring Kata

Tennis has a rather quirky scoring system, and to newcomers it can be a little
difficult to keep track of. The local tennis club has some code that is
currently being used to update the scoreboard when a player scores a point. They
has recently acquired two smaller tennis clubs, and they two each have a similar
piece of code.

You have just been employed by the tennis club, and your job is to refactor all
three codebases until you are happy to work with any of them. The future is
uncertain, new features may be needed, and you want to be thoroughly on top of
your game when that happens.

Summary of Tennis scoring:

1. A game is won by the first player to have won at least four points in total
   and at least two points more than the opponent.
1. The running score of each game is described in a manner peculiar to tennis:
   scores from zero to three points are described as “love”, “fifteen”,
   “thirty”, and “forty” respectively.
1. If at least three points have been scored by each player, and the scores are
   equal, the score is “deuce”.
1. If at least three points have been scored by each side and a player has one
   more point than his opponent, the score of the game is “advantage” for the
   player in the lead.

There are three versions of this refactoring kata, each with their own
challenges. I suggest you start with the first one, with the class
"TennisGame1". You should not need to change the tests, only run them often as
you refactor. Below you can find your coding language:

- [C#](csharp/)
- [Java](java/)
- [Javascript](javascript/)
- [C](c/)