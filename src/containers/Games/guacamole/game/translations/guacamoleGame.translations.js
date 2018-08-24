//this is an option to rearrange translations in a clearer way, will need to pass through the
//TransformTranslationFormat function to conform to the default format
// import transformFunction from "../../../../common/TransformTranslationFormat";
import transformFunction from "./../../../../../common/TransformTranslationFormat";
const customTranslation = {
    gb: {
        scoreBoardText: "Dead Avocados: ",
        score: "Score",
        highScore: "High Score",
        lastScore: "Last Score",
        play: "Play",
        forfeit: "Forfeit",
        gameOver: "Game Over",
        yourScore: "Your Score ",
        leaveGameInTheMiddleText: "You sure you want to leave them avocados alone?",
        leaveGameInTheMiddleCancel: "You sure you want to leave them avocados alone?",
        leaveGameInTheMiddleYesForfeit: "Stop This Maddness!"
    },
    es: {
        scoreBoardText: "aguacates muertos: ",
        score: "Resultado",
        highScore: "Puntaje alto",
        lastScore: "Último resultado",
        play: "Jugar",
        forfeit: "Rendir",
        gameOver: "Juego terminado",
        yourScore: "Su Puntuación ",
        leaveGameInTheMiddleText: "¿Seguro que quieres dejar los aguacates en paz?",
        leaveGameInTheMiddleCancel: "No Importa, Guacamole!",
        leaveGameInTheMiddleYesForfeit: "Detener Esta Locura!"
    },
    fr: {
        scoreBoardText: "morts avocats: ",
        score: "Résultat",
        highScore: "score élevé",
        lastScore: "Dernier résultat",
        play: "Jouer",
        forfeit: "Reddition",
        gameOver: "Jeu terminé",
        yourScore: "votre score ",
        leaveGameInTheMiddleText: "tu es sûr de vouloir laisser ces avocats tranquilles?",
        leaveGameInTheMiddleCancel: "laisse tomber, guacamole!",
        leaveGameInTheMiddleYesForfeit: "arrêtez cette folie!"
    },
    ru: {
        scoreBoardText: "мертвые авокадо: ",
        score: "счет",
        highScore: "Высокий балл",
        lastScore: "Последний результат",
        play: "Играть",
        forfeit: "Сдача",
        gameOver: "Игра закончена",
        yourScore: "ваш счет ",
        leaveGameInTheMiddleText: "Уверен, что хочешь оставить авокадо в покое?",
        leaveGameInTheMiddleCancel: "Ничего Страшного, Гуакамоле!",
        leaveGameInTheMiddleYesForfeit: "остановите это безумие!"
    },
    he: {
        scoreBoardText: "אבוקדואים מתים: ",
        score: "תוצאה",
        highScore: "תוצאת שיא",
        lastScore: "תוצאה אחרונה",
        play: "שחק",
        forfeit: "כניעה",
        gameOver: "המשחק נגמר",
        yourScore: "התוצאה שלך ",
        leaveGameInTheMiddleText: "אתה בטוח שאתה רוצה לעזוב את האבוקדואים לבד?",
        leaveGameInTheMiddleCancel: "לא משנה, גוואקאמולי!",
        leaveGameInTheMiddleYesForfeit: "עצור את הטירוף הזה!"
    }
  };

const translation = transformFunction(customTranslation);
export default translation;
