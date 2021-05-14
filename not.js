if (!("Notification" in window)) {
    alert("Desktop notifications is not supported by this browser. Try another.");
    return;
}
else if (Notification.permission === "granted") {
    var myNotification = new Notification("Welcome back on WebSparrow.org");
}
else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (userPermission) {
        if (userPermission === "granted") {
            var myNotification = new Notification("Welcome on WebSparrow.org");
        }
    });
}
var notification = new Notification(title,options)
