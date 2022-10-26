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
const combackBtn = $('.comeback');

// Start about Mobile Javascript
const mobileMenuIcon = $('.mobile-content-menu');
const mobileNavigation = $('.mobile-navigation');

//Get circleBTN 

const circleBtn = $('.circle--content');
const navBar = $('.nav-bar');
const headerNav = $('.navigation');
const headerAllItems = $$('.navigation--items');
let navBarHeight = navBar.clientHeight;


// Start about transfrom member
const TIMETRANSF = 3000;
let indexMember = 0;
let indexInterval;

const allWebsite = {

    handleHeaderNav,
    handleHeaderNavItems,
    handleModule,
    AutoTransformMember,

    start: function() {
        this.handleHeaderNav();
        this.handleHeaderNavItems(headerAllItems);
        this.handleModule(LoginBtn);
        this.AutoTransformMember();
    },
};

allWebsite.start();

function AutoTransformMember() {
    let orderArr = [];
    const allItems = $$('.outstanding-members--items');
    const WrapperItem = $('.outstanding-members--list');
    const ReactItem = allItems[0].getBoundingClientRect();
    const widthItem = ReactItem.width;

    let lengthItems = allItems.length / 2;

    indexInterval = setInterval(incrementMember , TIMETRANSF);
    MemberWrapperEvents();

    function incrementMember() {
        if(orderArr.length == 4) {
          if(indexMember === 0) {
            orderArr = [];
          } else {
            indexMember--;
          }
        }
        else {
          orderArr.push(indexMember);
          indexMember++;
        }
        setSlideView(indexMember);
      }

      function setSlideView(index) {
        indexMember = index;
        WrapperItem.style.transform = `translateX(${-index * widthItem}px)`;
      }

      function MemberWrapperEvents() {
        // stop transform when hover to view
        WrapperItem.addEventListener("mouseover", () => {
          clearInterval(indexInterval);
        });
      
        WrapperItem.addEventListener("mouseout", () => {
            indexInterval = activeMember();
        });
      }

      function activeMember() {
        return setInterval(() => {
            incrementMember();
        }, TIMETRANSF);
      }
}


//Handle Circle Btn when user click In
function handleHeaderNav() {
    let checkPress = false;
    circleBtn.onclick = (e)=> {
       if(checkPress) {
        const visible = $('.navigation.hidden');
        if(visible) {
            navBar.style.height = `${navBarHeight}px`;
            visible.classList.remove('hidden');
        }

        headerNav.classList.add('visible');
        checkPress = !checkPress;
       } else {
        const visible = $('.navigation.visible');
        if(visible) {
            visible.classList.remove('visible');
        }
        navBar.style.height = "auto";
        headerNav.classList.add('hidden');
        checkPress = !checkPress;
       }
    }
};

function handleHeaderNavItems(allItems) {
    allItems.forEach((item)=> {
        item.onclick =  (e)=> {
            const mainItem = e.target.closest('.navigation--items');
            if(mainItem) {
                let Pre_Items = document.querySelector('.navigation--items.active');
                Pre_Items.classList.remove('active');
                mainItem.classList.add('active');
            }
        }
    });
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

let checkMobileIcon = false;

mobileMenuIcon.onclick = (e)=> {
    if(checkMobileIcon) {
        mobileNavigation.style.display = 'none';
        checkMobileIcon = false;
    } else {
        mobileNavigation.style.display = 'block';
        checkMobileIcon = true;
    }
}


document.onscroll = (e)=> {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop >= 2800) {
        headerNav.classList.add('hidden');
        navBar.style.height = "auto";
     }


     if(e.isTrusted == true) {
        combackBtn.classList.remove('hidden');
     }
}


