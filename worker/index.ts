const activateEvent = () => {

  self.addEventListener("push", (event: any) => {
    const data = event.data.json();
    const title = data.title;
    const body = data.body;
    const icon = data.icon;
    const url = data.data.url;

    console.log(event)

    const notificationOptions = {
      body: body,
      tag: "unique-tag", // Use a unique tag to prevent duplicate notifications
      icon: icon,
      data: {
        url: url, // Replace with the desired URL for redirecting user to the desired page
      },
    };

    // @ts-ignore
    self.registration.showNotification(title, notificationOptions);
  });

}

activateEvent();