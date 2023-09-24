// Message

console.log('JS loaded');

// Set vars

let user_wordle_title = 'Unamed Wordle';
let user_wordle_author = 'Example';
let user_wordle_author_url = location.href;
let user_wordle_desc = 'This is a description';

const submit_button = document.getElementById('send_info')

submit_button.addEventListener('click',setVars)

const user_wordle_input_title = document.getElementById('user_wordle_input_title')
const user_wordle_input_desc = document.getElementById('user_wordle_input_desc')
const user_wordle_input_author_name = document.getElementById('user_wordle_input_author_name')
const user_wordle_input_author_website = document.getElementById('user_wordle_input_author_website')

function setVars(){

  // Title
  if (user_wordle_input_title.value == ''){
    user_wordle_input_title.style.borderColor = 'red';
  }else{
    user_wordle_title = user_wordle_input_title.value;
    user_wordle_input_title.style.borderColor = 'black';
  }
  // Desc
  if (user_wordle_input_desc.value == ''){
    user_wordle_input_desc.style.borderColor = 'red';
  }else{
    user_wordle_desc = user_wordle_input_desc.value;
    user_wordle_input_desc.style.borderColor = 'black';
  }
  // Author
  if (user_wordle_input_author_name.value == ''){
    user_wordle_input_author_name.style.borderColor = 'red';
  }else{
    user_wordle_author = user_wordle_input_author_name.value;
    user_wordle_input_author_name.style.borderColor = 'black';
  }
  // Author URL
  if (user_wordle_input_author_website.value == ''){
    user_wordle_input_author_website.style.borderColor = 'red';
  }else{
    user_wordle_author_url = user_wordle_input_author_website.value;
    user_wordle_input_author_website.style.borderColor = 'black';
  }
}

// Logo

const fileSelector = document.getElementById('fileUpload')
const imgPreview = document.getElementById('imgPreview')

function previewFile() {
  const preview = imgPreview;
  const file = fileSelector.files[0];
  const reader = new FileReader();

  preview.alt = file.name;
  preview.title = file.name;

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

fileSelector.addEventListener('change',previewFile)

// Words

let wordList = new Set()

const add_word_button = document.getElementById('add_word')
const add_word_item = document.getElementById('add_word_item')
const all_words_div = document.getElementById('wordList')

add_word_button.addEventListener('click',createWordItem)
add_word_item.addEventListener('click',addWordToList)

function createWordItem(){
  all_words_div.innerHTML += '<div class="word-item"><input type="text" class="user_wordle_input_word" placeholder="Word"><input type="text" class="user_wordle_input_word_desc" placeholder="Word description">'
}

function addWordToList(){

  for (let i = 0; i < document.getElementsByClassName('word-item').length; i++) {

    const descElement = document.getElementsByClassName('user_wordle_input_word_desc')
    const wordElement = document.getElementsByClassName('user_wordle_input_word')
    const wordWarningDivElement = document.getElementById('wordWarning')

    if (wordElement[i].value == '' || descElement[i].value == ''){
      wordWarningDivElement.innerHTML = '<p class="error">Field(s) missing!</p>'
      if (wordElement[i].value == ''){
        wordElement[i].style.borderColor = "red";
      }else{
        wordElement[i].style.borderColor = "black";
      }
      if (descElement[i].value == ''){
        descElement[i].style.borderColor = "red";
      }else{
        descElement[i].style.borderColor = "black";
      }
    }else{
      wordWarningDivElement.innerHTML = ''
      console.log('Words added!')
      wordList.add({'word':wordElement[i].value,'desc':descElement[i].value})
    }
  }
}

// Final Files

// CSS

let user_wordle_css_main_src = `/* Universal styles */body{margin: 0px;font-family: Roboto, Arial;color: white;background-image: url("/media/img/grass_block.png");}.capital-letter{text-transform: uppercase;}main{background-color: rgb(53, 42, 42);}.link{color: white;text-decoration: underline;cursor: pointer;}/* Custom highlight color */::selection{background-color: yellow;color: black;}/* Font */@font-face {font-family: Font Icons;font-weight: normal;src: url(/media/fonts/text-icons.ttf);}/* Warnings */.warnings{position: relative;align-items: top;vertical-align: top;}.error{background-color: red;padding: 5px 10px 5px 10px;border-radius: 5px;max-width: 100%;position: absolute;top: 20%;left: 50%;transform: translate(-50%, -50%);text-align: center;visibility: hidden;z-index: 100;}/* Header and description */.header,.desc{text-align: center;}.header{margin-top: 0px;}/* Main game */.main-game{text-align: center;}`;

let user_wordle_css_tiles_src = `/* Define vars */:root {--incorrect-color: rgb(92, 92, 92);--semicorrect-color: rgb(173, 173, 47);--correct-color: rgb(2, 158, 2);--tile-background-color: rgb(33, 29, 29)}/* Tiles */.tile{border: 5px solid black;background-color: rgb(33, 29, 29);border-radius: 2px;display: inline-block;position: relative;}.tile{border: 5px solid black;background-color: rgb(33, 29, 29);border-radius: 2px;display: inline-block;position: relative;}.dark-theme-tile{background-color: white;}.tile::before {content: '';display: block;padding-bottom: 55px;padding-left: 55px;}/* Tile letters */.tile-letter{position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 25px;font-weight: 500;text-transform: uppercase;}/* Answer colors */.incorrect{background-color: var(--incorrect-color, gray);}.semicorrect{background-color: var(--semicorrect-color, yellow);}.correct{background-color: var(--correct-color, green);}`;

let user_wordle_css_menu_src = `:root{ --menu-background-color: rgb(55, 54, 54) } /* Menu icons */ .menu-icons{ display: flex; } .menu-show, .theme-switcher, .info-box{ font-family: Font Icons, Roboto, Arial; color: rgb(154, 154, 154); cursor: pointer; width: 25px; font-size: 30px; margin-right: 5px; } .info-box{ margin-left: auto; margin-right: 15px; } .theme-switcher-text{ color: rgb(154, 154, 154); text-decoration: none; } /* Tile demo text */ .info-menu{ z-index: 99; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: visible;/* Change to hidden one done editing appearance. */ background-color: var(--menu-background-color, gray); padding: 5px 35px 10px 35px; border-radius: 15px; text-align: center; width: 50%; visibility: hidden; } .green-tile-demo{ color: var(--correct-color, green); } .yellow-tile-demo{ color: var(--semicorrect-color, yellow); } .gray-tile-demo{ color: var(--incorrect-color, gray); } /* Demo tiles */ .tile-demo{ border: 5px solid black; background-color: rgb(33, 29, 29); border-radius: 2px; display: inline-block; position: relative; } .tile-demo::before { content: ''; display: block; padding-bottom: 55px; padding-left: 55px; } .demo-letter{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 25px; font-weight: 500; text-transform: uppercase; } .green-demo-tile{ background-color: var(--correct-color, green); } .yellow-demo-tile{ background-color: var(--semicorrect-color, yellow); } .gray-demo-tile{ background-color: var(--incorrect-color, gray); } /* Main Menu popup */ .main-menu{ z-index: 100; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: visible;/* Change to hidden one done editing appearance. */ background-color: var(--menu-background-color, gray); padding: 5px 35px 10px 35px; border-radius: 15px; text-align: center; width: 50%; visibility: hidden; } .close-menu-div{ position: relative; } .facts-header, .close-menu-button{ margin: 15px; display: inline-block; } .close-menu-button{ /* Text */ color: rgb(255, 255, 255); font-size: 18px; /* Pos */ position: absolute; top: 10px; right: 10px; /* Button */ background-color: transparent; border-radius: 50px; border: none; cursor: pointer; } .close-menu-button:hover{ color: black; background-color: rgb(157, 157, 157); opacity: 0.6; transition: 1s; } .minecraft-wiki-page{ background-color: blue; padding: 15px 30px 15px 30px; border-radius: 5px; color: white; cursor: pointer; } /* Current Streak */ .streak-holder{ margin-top: 10px; } #currentStreakNumber{ font-weight: 500; } /* Share */ .share{ list-style-type: none; grid-template-columns: minmax(auto, 2fr) minmax(auto, 2fr) minmax(auto, 2fr); display: grid; min-width: 0; overflow: scroll; overflow-y: hidden; padding-left: 0px; scrollbar-width: none; } .share::-webkit-scrollbar{ display: none; } .twitter-share, .email-share, .link-share{ background: none; border: none; display: block; cursor: pointer; color: white; width: 160px; height: 40px; position: sticky; } .email-link, .twitter-link{ color: black; text-decoration: none; } .share-image{ width: 40px; vertical-align: middle; padding-right: 5px; } .github-holder{ margin-top: 10px; } .github-button{ background-color: black; color: white; border: 2px white solid; border-radius: 5px; padding: 15px 30px 15px 30px; cursor: pointer; } /* More */ .more{ padding-top: 10px; } .contact, .play-agian{ margin-bottom: 10px; display: block; }`;

let user_wordle_css_main = 'main.css';
let user_wordle_css_tiles = 'tiles.css';
let user_wordle_css_menu = 'menu.css';
let user_wordle_css_keyboard = 'keyboard.css';

// JS

user_wordle_js_streak = ''
user_wordle_js_main = ''
user_wordle_js_menu = ''
user_wordle_js_themes = ''
user_wordle_js_writekeyboard = ''
user_wordle_js_inwordlist = ''

// HTML

let final_html = `<!DOCTYPE html> <html lang="en"> <head> <title>${user_wordle_title}</title> <link rel="icon" type="image/x-icon" href="/media/img/logo.png"> <meta name="description" content="${user_wordle_desc}"> <meta name="viewport" content="width=device-width,initial-scale=1"> <meta name="author" content="${user_wordle_author}"> <meta charset="UTF-8"> <!-- OpenGraph --> <meta property="og:title" content="${user_wordle_title}"> <meta property="og:description" content="${user_wordle_desc}"> <meta name='og:site_name' content='${user_wordle_title}'> <!-- Fonts --> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"> <!-- CSS --> <link rel="stylesheet" href="${user_wordle_css_main}"> <link rel="stylesheet" href="${user_wordle_css_tiles}"> <link rel="stylesheet" href="${user_wordle_css_menu}"> <!-- No Script CSS --> <noscript><style>.no-js{background-color: red; padding: 5px 10px 5px 10px; border-radius: 5px; max-width: 100%; position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 100; }</style></noscript> </head> <body class="body" id="body"> <!-- Body area --> <!-- Popup menu (hidden by default) --> <section class="main-menu" id="mainMenu"> <div class="top"> <h1 class="facts-header">Facts about todays word</h1> <!-- Close --> <button class="close-menu-button" id="closeMenu" onclick="minimizeMenu()">X</button> </div> <div class="menu-body"> <p class="about-word" id="aboutWord"><!-- JS will insert about here. --></p> </div> <div class="streak-holder"> <span class="current-streak" id="currentStreak">Your current streak is: <span id="currentStreakNumber"></span> words.</span> </div> <div class="share-holder"> <h1 class="share-header">Share</h1> <ul class="share"> <li><a href="#" class="twitter-link" id="twitterLink" target="_blank"><button class="twitter-share"><img alt="Twitter logo" title="Twitter icon" src="https://www.mulesgaming.com/media/images/twitter_logo.png" class="share-image">Share to Twitter</button></a></li> <li><a href="#" class="email-link" id="emailLink" target="_blank"><button class="email-share"><img alt="Email icon" title="Email icon, from Google fonts" src="/media/img/email-icon.svg" class="share-image">Share as email</button></a></li> <li><button class="link-share" onclick="copyLink (currentPageURL)"><img alt="Link icon" title="Link icon, from Google fonts" src="/media/img/link-icon.svg" class="share-image">Copy share link </button></li> </ul> </div> <div class="more" id="menuMore"> <span class="play-agian" id="menuPlayAgian">To play again, all you need to do is <span onclick="location.reload();" class="link">reload</span> the page!</span> </div> </section> <section class="info-menu" id="infoMenu"> <div> <h1 class="how-to-play-header">How to Play</h1> <!-- Close --> <button class="close-menu-button" id="closeMenu" onclick="minimizeInfoMenu()">X</button> </div> <div class="menu-body"> <p class="about-word" id="aboutWord">To play the ${user_wordle_title} you can use the on screen keyboard or computer keyboard to enter letters. When a letter is in the correct spot, <span class="green-tile-demo">it's this green</span> color. When the letter is in the wrong spot but in the word <span class="yellow-tile-demo">it's this yellow</span> color, and if the letter is not in the word at all, <span class="gray-tile-demo">it's this gray</span> color.</p> <br> <div class="info-menu-example"><span>For instance if the word was "learn" and you entered slows the tiles would look like this: </span><div> <div class="tile-demo green-demo-tile"><span class="demo-letter">L</span></div> <div class="tile-demo gray-demo-tile"><span class="demo-letter">E</span></div> <div class="tile-demo green-demo-tile"><span class="demo-letter">A</span></div> <div class="tile-demo yellow-demo-tile"><span class="demo-letter">R</span></div> <div class="tile-demo gray-demo-tile"><span class="demo-letter">N</span></div> </div> </div> </section> <!-- Main everything --> <main class="main" id="main"> <!-- Menu Icons --> <section class="menu-icons" id="menuIconContanier"> <div class="theme-switcher" title="Change theme"><a class="theme-switcher-text" id="themeSwitcherText" href="?theme=dark">dark</a></div> <div class="menu-show" id="showMenu" title="Show Menu"></div> <div class="info-box" title="How to play"><span class="info-box-text" id="infoBoxText" onclick="openInfoBox()">info</span></div> </section> <!-- Header and description --> <h1 class="header" id="header">${user_wordle_title}</h1> <!-- Warnings--> <section class="warnings" id="warnings"> <div class="error too-many-letters" id="tooManyLetters">Too many letters!</div> <div class="error not-enough-letters" id="notEnoughLetters">Not enough letters!</div> <div class="error not-real-word" id="notRealWord">Word is not in word list!</div> <div class="error correct-letter" id="correctWordWarning">The correct word was: <!-- JS inserts correct word here--></div> <!-- Error loading word --> <div class="error word-load-error" id="errorLoadingWord">There was a problem loading the word! Try reloading the page</div> <!-- No JS warning --> <noscript class="no-js"><div>JAVASCRIPT IS NOT ENABLED!! Javascript is the language that makes this website run. The ${user_wordle_title} will NOT work without Javascript. This error might occur because you have javascript disabled in browser settings, or have a extension that disables it.</div></noscript>      </section> <div class="desc" id="descWarnings"> <p class="desc" id="description">${user_wordle_title} is a version of the <a class="link wordle-link" target="_blank" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> made by <a class="link author-link" target="_blank" href="${user_wordle_author_url}">${user_wordle_author}</a>.</p> </div> <!-- Main game --> <section id="mainGame" class="main-game"> <!-- Guesses --> <div class="guesses" id="guesses"> <div class="guess-row guess-row-1" id="guessRow1"> <!-- Tiles --> <div class="tile tile1" ><span class="tile-letter tile-letter1"></span></div> <div class="tile tile2" ><span class="tile-letter tile-letter2"></span></div> <div class="tile tile3" ><span class="tile-letter tile-letter3"></span></div> <div class="tile tile4" ><span class="tile-letter tile-letter4"></span></div> <div class="tile tile5" ><span class="tile-letter tile-letter5"></span></div> </div> <div class="guess-row guess-row-2" id="guessRow2"> <!-- Tiles --> <div class="tile tile1"><span class="tile-letter tile-letter1"></span></div> <div class="tile tile2"><span class="tile-letter tile-letter2"></span></div> <div class="tile tile3"><span class="tile-letter tile-letter3"></span></div> <div class="tile tile4"><span class="tile-letter tile-letter4"></span></div> <div class="tile tile5"><span class="tile-letter tile-letter5"></span></div> </div> <div class="guess-row guess-row-3" id="guessRow3"> <!-- Tiles --> <div class="tile tile1"><span class="tile-letter tile-letter1"></span></div> <div class="tile tile2"><span class="tile-letter tile-letter2"></span></div> <div class="tile tile3"><span class="tile-letter tile-letter3"></span></div> <div class="tile tile4"><span class="tile-letter tile-letter4"></span></div> <div class="tile tile5"><span class="tile-letter tile-letter5"></span></div> </div> <div class="guess-row guess-row-4" id="guessRow4"> <!-- Tiles --> <div class="tile tile1"><span class="tile-letter tile-letter1"></span></div> <div class="tile tile2"><span class="tile-letter tile-letter2"></span></div> <div class="tile tile3"><span class="tile-letter tile-letter3"></span></div> <div class="tile tile4"><span class="tile-letter tile-letter4"></span></div> <div class="tile tile5"><span class="tile-letter tile-letter5"></span></div> </div> <div class="guess-row guess-row-5" id="guessRow5"> <!-- Tiles --> <div class="tile tile1"><span class="tile-letter tile-letter1"></span></div> <div class="tile tile2"><span class="tile-letter tile-letter2"></span></div> <div class="tile tile3"><span class="tile-letter tile-letter3"></span></div> <div class="tile tile4"><span class="tile-letter tile-letter4"></span></div> <div class="tile tile5"><span class="tile-letter tile-letter5"></span></div> </div> <div class="guess-row guess-row-6" id="guessRow6"> <!-- Tiles --> <div class="tile tile1"><span class="tile-letter tile-letter1"></span></div> <div class="tile tile2"><span class="tile-letter tile-letter2"></span></div> <div class="tile tile3"><span class="tile-letter tile-letter3"></span></div> <div class="tile tile4"><span class="tile-letter tile-letter4"></span></div> <div class="tile tile5"><span class="tile-letter tile-letter5"></span></div> </div> </div> <!-- Keyboard --> <div class="keyboard-root" id="keyboardRoot"> <div class="keyboard" id="keyboard"> <!-- Keyboard shadow writen by writeKeyboard.js --> </div> </div> </section> </main> <!-- Scripts --> <script src="${user_wordle_js_streak}"></script> <script src="${user_wordle_js_main}"></script> <script src="${user_wordle_js_menu}"></script> <script src="${user_wordle_js_themes}"></script> <script src=${user_wordle_js_writekeyboard}"></script> <script src="${user_wordle_js_inwordlist}"></script> </body> </html>`;

// Notificaion popup

function popup(text){

  const notificaionDiv = document.getElementById('notificationsHolder');

  notificaionDiv.innerHTML = `<div class="notification" title="${text}">${text}</div>`;

  // Hide

  setTimeout(function() {
    notificaionDiv.innerHTML = ``;
  }, 3000);

}

// Download

const downloadButton = document.getElementById('download')

downloadButton.addEventListener('click',start_download)

function start_download(){
  download_files()
}  

function download_files(){
  // Notification
  popup('Downloading...')
  // Make Zip
  var zip = new JSZip();
  // Make file
  ///// HTML
  zip.file("index.html", final_html);
  ///// CSS
  zip.file("CSS.txt", "css");
  ///// JS
  zip.file("JS.txt", "js");
  ///// IMG
  zip.file("icon.png", imgPreview.src.replace(/^data:image\/?[A-z]*;base64,/).replace(undefined,''), {base64: true})
  // Download
  zip.generateAsync({type:"base64"}).then(function (content) {
     location.href="data:application/zip;base64," + content;
  });


}

