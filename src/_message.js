// var messagesRef = new Firebase('https://slack.firebaseio.com/');

// var messageField = $('#messageInput');

// var messageList = $('#messages');


// messageField.keypress(function (e) {
//     if (e.keyCode == 13) {
//         //フォームに入力された情報
//         // var username = nameField.val();
//         var message = messageField.val();

//         //データベースに保存する
//         messagesRef.push({text:message});
//         messageField.val('');

//         $('#scroller').scrollTop($('#messages').height());
//     }
// });

// console.log('step1');

// // データベースにデータが追加されたときに発動する
// messagesRef.limitToLast(10).on('child_added', function (snapshot) {
//     //取得したデータ
//     var data = snapshot.val();
//     // var username = data.name || "anonymous";
//     var message = data.text;
//     var messageElement = $("<il><p class='left_balloon'>" + message + "</p><p class='clear_balloon'></p></il>");



//     // if ( username == nameField.val() ) {

//     //     var messageElement = $("<il><p class='sender_name me'>" + username + "</p><p class='right_balloon'>" + message + "</p><p class='clear_balloon'></p></il>");

//     // } else {

//     //     var messageElement = $("<il><p class='sender_name'>" + username + "</p><p class='left_balloon'>" + message + "</p><p class='clear_balloon'></p></il>");

//     // }
//     //HTMLに取得したデータを追加する
//     messageList.append(messageElement)

//     //一番下にスクロールする
//     messageList[0].scrollTop = messageList[0].scrollHeight;
// });

