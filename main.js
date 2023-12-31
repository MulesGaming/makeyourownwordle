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

let user_wordle_css_keyboard_src = `/* Rows */.row{display: flex;align-items: center;justify-content: center;margin-left: 10px;margin-right: 10px;}/* Buttons */.keyboard-button{color: white;background-color: rgb(156, 156, 156);border-radius: 5px;font-size: 15px;margin: 2px;font-family: Roboto, Arial;flex: 1;height: 3.5em;max-width: 50px;border: none;}.keyboard-button:hover{background-color: rgb(154, 154, 154);cursor: pointer;}.backspace-icon{width: 2em;}.row1{font-family: Font Icons;padding: 5px 15px 5px 15px;font-size: 35px;}/* Mobile */@media (max-width:540px) {.keyboard-button{width: 5px;font-size: 12px;margin: 1px;height: 3em}.row{margin: 0px;}}`;

let user_wordle_css_theme_src = `/* Styles when dark theme is active */:root{/* Dark theme vars */--incorrect-color-darktheme: rgb(0, 0, 0);--semicorrect-color-darktheme: rgb(92, 92, 53);--correct-color-darktheme: rgb(13, 52, 93);--tile-background-color-darktheme: #7e7e7e;}body{color: rgb(255, 255, 255)}.link{color: rgb(255, 255, 255)}main{background-color: rgb(0, 0, 0)}.keyboard-button{color: white;background-color: black;border-color: white;}.tile{background-color: var(--tile-background-color-darktheme);}`

let final_word_list = "{}"

let user_wordle_css_main = 'main.css';
let user_wordle_css_tiles = 'tiles.css';
let user_wordle_css_menu = 'menu.css';
let user_wordle_css_keyboard = 'keyboard.css';

// JS
user_wordle_js_main = getMain()
user_wordle_js_menu = getMenu()
user_wordle_js_streak = getStreak()
user_wordle_js_themes = getThemes()
user_wordle_js_writekeyboard = getWriteKeyboard()
user_wordle_js_inwordlist = getInWordList()

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
  zip.file("index.html", getHTML(user_wordle_title,user_wordle_desc,user_wordle_author,user_wordle_author_url));
  ///// CSS
  const css = zip.folder('styles')
  css.file("main.css", user_wordle_css_main_src);
  css.file("tiles.css", user_wordle_css_tiles_src);
  css.file("menu.css", user_wordle_css_menu_src);
  css.file("keyboard.css", user_wordle_css_keyboard_src);
  const themes = css.folder('themes')
  themes.file("dark.css", user_wordle_css_theme_src)
  ///// JS
  const js = zip.folder('scripts')
  js.file("main.js", user_wordle_js_main);
  js.file("menu.js", user_wordle_js_menu);
  js.file("streak.js", user_wordle_js_streak);
  js.file("themes.js", user_wordle_js_themes);
  js.file("writeKeyboard.js", user_wordle_js_writekeyboard);
  js.file("inWordList.js", user_wordle_js_inwordlist);
  ///// Words
  zip.file("words.json",final_word_list)
  ///// Valud words list
  zip.file("word_list.json",getWordList())
  ///// IMG
  zip.file("icon.png", imgPreview.src.replace(/^data:image\/?[A-z]*;base64,/).replace(undefined,''), {base64: true})
  // Download
  zip.generateAsync({type:"base64"}).then(function (content) {
     location.href="data:application/zip;base64," + content;
  });
}

