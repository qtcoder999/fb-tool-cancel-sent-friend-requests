(function() {
    console.clear();
    let intervalId;
    let timeGap = 3000;
    
    keepClickingSeeMoreRequestsButton();

    function keepClickingSeeMoreRequestsButton() {
        let seeMoreRequestsButtonSelector = ".pam.uiBoxLightblue._5cz.uiMorePagerPrimary";
        intervalId = setInterval(()=>{
            try {
                document.querySelector(seeMoreRequestsButtonSelector).click();
            } catch (e) {
                console.log(e);
                clearInterval(intervalId);
                startCancellingRequests();
            }
        }
        , 2000);
    }

    function startCancellingRequests() {
        var selector = "button._42ft._4jy0.FriendRequestOutgoing.enableFriendListFlyout.outgoingButton.enableFriendListFlyout._4jy3._517h._51sy";
        var cancelSelector = ".FriendListActionMenu .FriendListCancel";

        var divs = document.querySelectorAll(selector);

        for (let i = 0; i < divs.length; i++) {

            setTimeout(()=>{
                console.log("cancel click executed")
                document.querySelector(cancelSelector).click();
            }
            , i * timeGap + 500);

            setTimeout(function timer() {
                let currentDiv = divs[i];

                console.log(currentDiv.innerText, "found");
                simulateMouseover(currentDiv);

            }, i * timeGap);

        }
    }

    function simulateMouseover(myTarget) {
        var event = new MouseEvent('mouseover',{
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        var canceled = !myTarget.dispatchEvent(event);
        if (canceled) {// A handler called preventDefault.
        //         alert("canceled");
        } else {// None of the handlers called preventDefault.
        //         alert("not canceled");
        }
    }

}
)()
