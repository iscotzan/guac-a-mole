//this is an option to rearrange translations in a clearer way, will need to pass through the
//TransformTranslationFormat function to conform to the default format
import transformFunction from "../../../common/TransformTranslationFormat";
const customTranslation = {
  gb: {
    title: "About Page",
    aboutText: `We're no strangers to love You know the rules and so do I A full
        commitment's what I'm thinking of You wouldn't get this from any other
        guy I just wanna tell you how I'm feeling Gotta make you understand
        Never gonna give you up Never gonna let you down Never gonna run around
        and desert you Never gonna make you cry Never gonna say goodbye Never
        gonna tell a lie and hurt you We've known each other for so long Your
        heart's been aching, but You're too shy to say it Inside, we both know
        what's been going on We know the game and we're gonna play it And if you
        ask me how I'm feeling Don't tell me you're too blind to see Never gonna
        give you up Never gonna let you down Never gonna run around and desert
        you Never gonna make you cry Never gonna say goodbye Never gonna tell a
        lie and hurt you` 
  },
  es: {
    title: "Sobre page",
    aboutText: `Nosotros no somos extraños para el amor Usted sabe las reglas y por lo que hago Un completo
    el compromiso es lo que estoy pensando en Ti no se esta de cualquier otro
    guy sólo quiero decirte cómo me siento tengo que hacerte entender
    Nunca te voy a entregar Nunca te voy a defraudar Nunca voy a correr por ahí
    y desierto Nunca vas a hacerte llorar Nunca voy a decir adiós Nunca
    voy a decir una mentira y el daño que Nos hemos conocido durante tanto tiempo Su
    el corazón ha estado doliendo, pero eres demasiado tímido para decirlo Dentro, ambos sabemos
    lo que ha estado pasando sabemos el juego y vamos a jugar Y si usted
    pregúntame cómo me siento no me digas que estás demasiado ciego para ver que Nunca vas a
    dar hasta Nunca voy a dejar que Nunca va a correr y desierto
    Nunca vas a llorar Nunca voy a decir adiós Nunca voy a decir una
    mentir y lastimarte` 
  },
  fr: {
    title: "à propos de page",
    aboutText: `nous ne sommes pas des étrangers à aimer. vous connaissez les règles.
    l'engagement, c'est ce à quoi je pense.
    je veux juste te dire ce que je ressens. je veux que tu comprennes.
    je ne te laisserai jamais tomber je ne te laisserai jamais courir
    et le désert tu ne vas jamais te faire pleurer tu ne vas jamais dire au revoir jamais
    je vais te mentir et te faire du mal. on se connaît depuis si longtemps.
    le cœur est douloureux, mais tu es trop timide pour le dire à l'intérieur, nous savons tous les deux
    ce qui s'est passé nous connaissons le jeu et nous allons le jouer et si vous
    demande - moi comment je me sens ne me dis pas que tu es trop aveugle pour voir que jamais
    je ne te laisserai jamais tomber je ne te laisserai jamais courir et déserter
    tu ne vas jamais te faire pleurer tu ne vas jamais dire au revoir
    te faire du mal` 
  },
  ru: {
    title: "О странице",
    aboutText: `Мы не чужие любить Вы знаете правила и я тоже полная
    приверженность то, что я думаю Вы не получите это от любой другой
    парень, я просто хочу сказать тебе, как я себя чувствую должен заставить тебя понять
    Никогда не отдам тебя никогда не позволю тебе вниз никогда не будем бегать
    и пустыня вас никогда не заставлю тебя плакать никогда не собираешься попрощаться никогда
    мы будем лгать и причинять тебе боль мы знаем друг друга так долго
    сердце болело, но ты слишком застенчив, чтобы сказать это внутри мы оба знаем,
    что происходило на мы знаем игру и мы собираемся играть и если вы
    спроси меня, как я себя чувствую, не говори мне, что ты слишком слеп, чтобы никогда не увидеть
    я тебя никогда не подведу никогда не буду бегать и дезертировать
    ты никогда не заставишь себя плакать никогда не попрощаешься никогда не скажешь
    лгать и причинять тебе боль` 
  },
  he: {
    title: "עמוד אודות",
    aboutText: `אנחנו לא זרים לאהבה את יודעת את החוקים וגם אני 
    מחויבות מלאה היא מה אני חושב עליו לא היית מקבלת את זה מכל בחור אחר
    , אני רק רוצה להגיד לך איך אני מרגיש חייב לגרום לך להבין
    לא אוותר עלייך לעולם לא אאכזב אותך, לא לרוץ
    במדבר אתה לעולם לא אגרום לך לבכות אף פעם לא אומר שלום לעולם
    הולך לשקר ולפגוע בך אנחנו מכירים אחד את השני כל כך הרבה זמן שלך.
    הלב כואב, אבל אתה מתבייש להגיד את זה בפנים, שנינו יודעים.
     מה קורה אנחנו מכירים את המשחק, אנחנו הולכים לשחק אותה. ואם
    לשאול אותי איך אני מרגיש, אל תגיד לי שאתה עיוור מכדי לראות את אף פעם לא הולך
    לוותר עלייך לעולם לא אאכזב אותך, לא לרוץ במדבר
    אתה לעולם לא אגרום לך לבכות לעולם לא להיפרד אף פעם לא הולך להגיד.
    לשקר, לפגוע בך` 
  }
};

const translation = transformFunction(customTranslation);
export default translation;
