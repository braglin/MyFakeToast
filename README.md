# :bread: MyFakeToast :bread:

A JQuery plugin to show a "toast like" popup message to be used in HTML application.

[DEMO](https://codepen.io/fabiobraglin/pen/XaveJy/)
<br><br>
ScreenShot:<br>
![MyFakeToast](https://github.com/braglin/MyFakeToast/blob/master/MyFakeToast.png)

## How to use
Add the my-fake-toast.js into the html page's head
```
<script src="js/my-fake-toast.js"></script>
```
Now add the toast to the body
```
<div class="toastMe"></div>
```
To show up the toast use the command bellow:
```
toastMe(msg(string), time(ms));

e.g. toastMe("Hi! I'm a toast!", 2000);
```

## Requirements
- [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js)
