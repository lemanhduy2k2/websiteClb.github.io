export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
const LoginBtn = $('.login-btn');
const Module = $('.module');
const ModuleRetangle = $('.module--rectagle');
const RegisterModule = $('.module--rectagle-register');
const CloseLoginBtn = $('.close-btn');
const CloseRegisterBtn = $('.register-close-btn');
const registerBtn = $('.Register-blog-btn');
const LoginBlogBtn = $('.register-login-blog');

const NotificationIcon = $('.notification');
const NotificationBox = $('.notification--box');

//Get circleBTN 

const circleBtn = $('.circle--content');
const headerNav = $('.navigation');
const headerAllItems = $$('.navigation--items');

const allWebsite = {

    handleHeaderNav,
    handleHeaderNavItems,
    handleModule,

    start: function() {
        this.handleHeaderNav();
        this.handleHeaderNavItems(headerAllItems);
        this.handleModule(LoginBtn);
    },
};

allWebsite.start();


//Handle Circle Btn when user click In
function handleHeaderNav() {
    let checkPress = false;
    circleBtn.onclick = (e)=> {
       if(checkPress) {
        const visible = $('.navigation.hidden');
        if(visible) {
            visible.classList.remove('hidden');
        }

        headerNav.classList.add('visible');
        checkPress = !checkPress;
       } else {
        const visible = $('.navigation.visible');
        if(visible) {
            visible.classList.remove('visible');
        }

        headerNav.classList.add('hidden');
        checkPress = !checkPress;
       }
    }
};

function handleHeaderNavItems(allItems) {
    allItems.forEach((item)=> {
        item.addEventListener('click', (e)=> {
            const mainItem = e.target.closest('.navigation--items');
            if(mainItem) {
                const Act_Pre_Item = $('.navigation--items.active');
                Act_Pre_Item.classList.remove('active');
                mainItem.classList.add('active');
            }
        })
    })
};

function handleModule(LoginBtn) {
    LoginBtn.addEventListener('click' ,OpenModule);
    Module.addEventListener('click',hiddenModule);
    ModuleRetangle.addEventListener('click',(e)=> {
        e.stopPropagation();
    })
    RegisterModule.addEventListener('click' , (e)=> {
        e.stopPropagation();
    })

    CloseLoginBtn.addEventListener('click',()=> {
        hiddenModule();
    })
    
    CloseRegisterBtn.addEventListener('click',(e)=> {
        hiddenModule();
    })

    registerBtn.addEventListener('click', (e)=> {
        ModuleRetangle.classList.add('hidden');
        RegisterModule.classList.add('open');
    })

    LoginBlogBtn.addEventListener('click', (e)=> {
        RegisterModule.classList.remove('open');
        ModuleRetangle.classList.remove('hidden');
    })
    let checkNoti = false;
    NotificationIcon.onclick = (e)=> {
        if(checkNoti) {
            NotificationBox.classList.remove('open');
            checkNoti = !checkNoti;
        }
        else {
            NotificationBox.classList.add('open');
            checkNoti = !checkNoti;
        }
    }
}

function OpenModule() {
    Module.classList.add('open');
}

function hiddenModule() {
    Module.classList.remove('open');
}

