const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "{title}" is now overdue.`;
const notification = new Notification("To do list", {body: text, icon: img});


export const askNotificationPermission = () => {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // set the button to shown or hidden, depending on what the user answers
    console.log(permission);
  });
}
