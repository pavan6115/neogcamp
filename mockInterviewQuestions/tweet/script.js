console.log('connected!')

const txt = document.querySelector('#tweet')
const tweetBtn = document.querySelector('#tweet-btn')

tweetBtn.disabled = true;

function checkinp(){
    if(txt.value !== null){
        tweetBtn.disabled = false
    }
    else {
        tweetBtn.disabled = true
    }
}

txt.addEventListener('keypress', checkinp)
