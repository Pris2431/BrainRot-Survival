# Skibidi-Survival
![WhatsApp Image 2024-11-24 at 13 55 19_2b91bb7f](https://github.com/user-attachments/assets/33a78bba-5dc6-4b85-88ab-8d6c6b54605c)


# BrainRot Survival - Readme

## Overview

Welcome to **BrainRot Survival**, a trivia-based game where your wits are your best weapon! Answer questions to survive, and manage your character's **Health** and **Aura** stats. Every correct answer boosts your stats, but get it wrong, and you’ll pay the price. Keep your stats balanced to avoid a total BrainRot! Can you survive the quiz and make it out on top?

## Features

- **Trivia Questions**: Each question tests your knowledge and impacts your character’s stats.
- **Character Stats**: Health and Aura bars dynamically change based on your choices.
- **Character Customization**: Watch your character evolve as you progress!
- **Game Over Condition**: If your Aura reaches zero, it's game over!
- **Real-Time Feedback**: Your stats are updated instantly as you answer questions.

## Getting Started

### Prerequisites

- A web browser to play the game.
- Basic understanding of HTML and JavaScript (optional if you just want to play).

### How to Play

1. **Download the Game**: Clone the repository or download the HTML and CSS files.
2. **Open the Game**: Launch the `main.html` file in any modern web browser.
3. **Answer Questions**: Select your answer to questions and keep an eye on your Health and Aura stats!
4. **Survive**: Keep both stats above zero to avoid a game over!

### File Structure

```
/assets
    └── fighter1.jpg       # Character image
/styles.css               # Styling file for the game
index.html                # Main HTML file containing the game logic
```

### Customization

You can easily modify the look of the game by editing the following:

- **Character Image**: Change the background image of the character in the `.character` class.
- **Health and Aura Bars**: Customize colors and widths in the `progress-bar` and `progress` classes in `styles.css`.
- **Fonts & Layout**: Play around with font styles and layout in `styles.css`.

## Code Explanation

### HTML

- **`index.html`** contains the game’s layout:
  - **`.left-section`** for questions and options.
  - **`.right-section`** to show your character and stats (Health and Aura).

### CSS

- **`styles.css`** handles the game’s visual design:
  - Button effects, fonts, layout, colors, and animations.
  - The character's image is styled in a circular frame with the `.character` class.
  - The Health and Aura bars are styled to reflect progress.

### JavaScript

- **`checkAnswer(isWrong)`**:
  - Handles the logic when you select an answer.
  - Increases or decreases Health and Aura based on whether the answer is correct or wrong.
  - Keeps progress bars within 0-100% range.
  - Ends the game if Aura depletes, or if Health maxes out at 100%.

## Future Plans

- **More Questions**: Add a larger question pool.
- **New Game Modes**: Include multiple difficulty levels.
- **Power-ups & Effects**: Add items or power-ups to alter gameplay.
- **Leaderboard**: Track scores and achievements for competitive play.
- **Sound and Animations**: Make the game more immersive.

## Contributing

Feel free to fork the project, improve it, and submit pull requests. Contributions are always welcome!

## License

This project is open source under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code
<hr>
Good luck surviving **BrainRot Survival**! 🎮💥
