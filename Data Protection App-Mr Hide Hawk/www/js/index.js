
window.isLogin = false;// window object property(variable)
window.isAdmin = false;
var app = {
    isSignUp: false,
    listCount: 0,  // list count iniatialize 0
    // Application Constructor
    initialize: function() {
        this.bindEvents();  // calling bindEvent function *
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup.  Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        this.displayWelcomePage();// calling displayWelcomePage() and logout() function * 
        this.logout();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event.  This is an event that fires when PhoneGap is fully loaded.
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
    },
    displayWelcomePage: function() {// Displaying the search content page after the login
      

      var self = this;
      if(isLogin) {
        $("#none-login-user").hide(); //Hiding the first page
        $("#login-user").show(); // showing the search content(id = login-user) div after login

        $('#search-content').keypress(function (e) { //searching the content with the key press
         var key = e.which;  //The event.which property returns which keyboard key was pressed for the event.
         if(key == 13)  // the enter key code. Keycode 13 is the Enter key
          {
            self.getDataFromGoogleAPI(); // getting all the result into a list from custom search api google
          }
        }); 

        // display the list
        self.displayList();  //call the dislplay list function
      }else {
        $("#none-login-user").show();// showing the first page
        $("#login-user").hide(); // hiding the content page  (id = login-user) div
        $("#sign-up").on("click", function(){// click to navigate to the sign up page
          myApp.loginScreen();// framework 7 - method to open login screen with the javascript
          $(".login-screen-title").text("Sign Up"); // changing title Sign up
          $("#btn-sign-in").text("Sign Up"); // changing button to sign up
          self.isSignUp = true;
        });
        $("#sign-in").on("click", function(){// click to sign in page
          // myApp.loginScreen();
          $(".login-screen-title").text("Sign In");
          self.isSignUp = false;
        });
        $("#btn-sign-in").on("click", function(){
          self.login(self); // calling the login function
        });
      }

      // $("#home-btn").on("click", function() {
      //   $("#search-result-container>ul").empty();
      // });
    },
    getDataFromGoogleAPI: function() {
      var self = this;
      var search = $('#search-content').val();// taking the value from search input and setting into a var search
      $.ajax({// calling json data using ajax through custom search api google
        type: "GET",//     Google custom search api 
        url: "https://www.googleapis.com/customsearch/v1?q="+ search+"&cx=012004497887793491230:r1fyagbanxs&key=AIzaSyAc3HY_WwsxOpOVpWY3f7oLkXzASn0Mcxo",
        timeout: 2000, //sets timeout to 2 seconds
        dataType: "jsonp",// The data type expected of the server response
        beforeSend: function() {

        }, 
        complete: function(data) {

        },
        success: function(data) { 
          // $("#search-result-container").html(JSON.stringify(data));
          var formatData = [] // array creation // Formatting the json data
          _(data.items).each(function(d){// 
            var obj = {};                       //putting results into proper varible formatte for the further manipulation
            obj.titleNoFormatting = d.title; // putting all the data into variable for fomating the data with event handling data
            obj.url = d.link;                  // formatting data into simple form
            obj.visibleUrl = d.displayLink;
            obj.content = d.snippet;
            obj.status = "";
            //if the link of this search and currentuser from data algorithm can prevent future searches more convinient and will show your pending searches
            if(window.localStorage.getItem(d.link) && window.localStorage.getItem(d.link).indexOf(window.localStorage.getItem("currentUser")) != -1) {
              var valueArray =  window.localStorage.getItem(d.link).split("::");
              var status = valueArray[4];// retrieving status from local storage
              if(status == "Done") {         // else change status to pending 
                // do not push to the result array // if status is done do not push to array
              } else{
                formatData.push(obj);    
              }
              obj.status = "Pending";
            }else {
              formatData.push(obj); // push it anyway in search list
            }
            
          });

          var template = _.template($("#search-result-template").html());// calling the search list template
          $("#search-result-container>ul").html(template({// Displaying all the result with proper formatted data
              data: formatData
          }));
          $$('.swipeout-search-result').on('delete', function (e) {
            //myApp.alert('Item removed');
            console.log("swipe");    //Mobile swipe event              //swipe left for the request of deletion
            var url = $(e.target).find(".full-url").val();
            var title = $(e.target).find(".item-title").text().trim();//putting all the list result into variables
            var visibleUrl = $(e.target).find(".visibleUrl").text();
            var content = $(e.target).find(".content").text();
            var email = window.localStorage.getItem("currentUser");
            var status = "Pending";

            // save a list to local storage
            window.localStorage.setItem(url, email+"::" + title + "::" + visibleUrl + "::" + content + "::" + status);

            myApp.alert("Your selected item is being processed. You can see its status in My List. ", 'Save Successfully!');
            var template = _.template($("#list-container-template").html());
            $("#my-list-container>ul").append(template({// putting to the request in mylist template for mylist menu
                data: [{
                  titleNoFormatting: title, 
                  url: url,
                  visibleUrl: visibleUrl,
                  content: content,
                  status: "Pending"
                }]
            }));
            self.listCount++;   //counting the list
            self.updateListCount(); //calling the  updateListCount function
            $('.swipeout-mylist-result:last').on('delete', function (e) {// cancelling the request
              var url = $(e.target).find(".full-url").val();
              window.localStorage.removeItem(url);// removing the url of cancel request
              self.listCount--; //update the list no.
              self.updateListCount();// update the list
            });
          }); 
          
          
          $(".item-content-click").on("click", function(e){//calling the clickList Handler function
            self.clickListHandler(e);
          });
        },
        error: function(d) { // throwing an error
          $("#search-result-container").html("<h1>Oh no!</h1>");
        }
      });
    },
    login: function(self) {
      var email = $("#email").val();// setting email and password from the input fields
      var password = $("#password").val();

      var storage = window.localStorage; // setting local storage object into a variable
      var data = storage.getItem(email);  // retrieving all the email from local sto. and putting into a data var
      
      function success() {
        storage.setItem("currentUser", email);// saving the email to local storage as currentUser
        myApp.closeModal('.login-screen');// framework-7 closing the login screen
        window.isLogin = true;// this will initiate another method related to islogin
        if(email == "admin@hide-hawk.com" ) {
        // if(email == "bb@bb.bb" ) {
          window.isAdmin = true;
          self.showAdminMenu();// Dispalying admin profile (changing to reviewl list specially)
          $("#profile-picture img").attr("src", "img/admin.png"); // changing admin the profile pic
          $("#profile-picture").show(); // show profile pic
        }else {
          window.isAdmin = false;
          $("#profile-picture img").attr("src", "img/user.png"); // changing the  user profile pic
          $("#profile-picture").show(); // show  user profile pic
        }
        self.displayWelcomePage();  // Displaying the search content page that welcome page after login
        
      }

      if(email == "" || password == "") {// framework 7 alert error!!
        myApp.alert("You must put email and password", 'Error!');
      }else {
        if(data == null && self.isSignUp == true){ // sign up
          storage.setItem(email, md5(password));// saving the email and password in the local storage for sign up
          myApp.alert("Successfully logged in.", 'Sign up!');// framework 7 alert box
          success();// calling the success function

        }else if(data && data == md5(password)){ // sign in with user name and password
          myApp.alert("Successfully logged in.", 'Sign in!');// framework 7 alert box
          success();// calling the success function
        }else {
          myApp.alert("Invalid email or password!", "Error!"); // framework 7 alert box
        }
      }

    },
    displayList: function() {
      var self = this;
      var email = window.localStorage.getItem("currentUser");// get the current user email from  local storage
      $("#my-list-container>ul").empty();
      $.each(localStorage, function(key, value){// getting all the data from the local  storage

        if(value.indexOf(email) != -1) {
          var valueArray = value.split("::");  // for url split

          if(valueArray && valueArray.length > 0 && key != "currentUser") {// putting all the coulumns into variable
            var title = valueArray[1];
            var visibleUrl = valueArray[2];
            var content = valueArray[3];
            var status = valueArray[4];
            var template = _.template($("#list-container-template").html()); // My list template

            var bg = status == "Done" ? "background-color: lightgrey;" : "";// setting grey color in bg after list is done
            $("#my-list-container>ul").append(template({//putting all the updated list in my list 
                data: [{
                  titleNoFormatting: title, 
                  url: key,
                  visibleUrl: visibleUrl,
                  content: content,
                  status: status,
                  bg: bg
                }]
            }));
            $(".item-content-click").on("click", function(e){//calling the clickList Handler function
              self.clickListHandler(e);
            });
            self.listCount++;  // counting the list no.
          }
          
        }

      });
      
      self.updateListCount();//callig the udate list count function

      $$('.swipeout-mylist-result').on('delete', function (e) {// cancelling the request
        var url = $(e.target).find(".full-url").val();// getting  url fronm the list  
        window.localStorage.removeItem(url);// removing the url of cancel request
        self.listCount--; //update the list no.
        self.updateListCount();//callig the udate list count function
      });
    },
    clickListHandler: function(e) {//Handling the display after clicking the list
      var target = $(e.target).parent().parent().parent();
      var popupHTML = '<div class="popup" style="background-color:#EFEFF4;">'+
          '<div class="content-block">'+
           ' <div class="content-block-title">TITLE</div>'+
            '<div class="content-block">'+
             ' <div class="content-block-inner">'+
              '  <p>'+ $(target).find(".item-title").text().trim()+'</p>'+
              '</div>'+
            '</div>'+

            ' <div class="content-block-title">URL</div>'+
            '<div class="content-block">'+
             ' <div class="content-block-inner">'+
              '  <p>'+ $(target).find(".full-url").val()+'</p>'+
              '</div>'+
            '</div>'+

            ' <div class="content-block-title">CONTENT</div>'+
            '<div class="content-block">'+
             ' <div class="content-block-inner">'+
              '  <p>'+ $(target).find(".content").text()+'</p>'+
              '</div>'+
            '</div>'+

            ' <div class="content-block-title">STATUS</div>'+
            '<div class="content-block">'+
             ' <div class="content-block-inner">'+
              '  <p>'+ ($(target).find(".status").val() || "None" )+'</p>'+
              '</div>'+
            '</div>'+
            '<center><p><a href="#" class="close-popup">Close me</a></p></center>'+
          '</div>'+
        '</div>';
      myApp.popup(popupHTML);//framework 7 - open  Popups with JavaScript
    },
    updateListCount: function(){
      $("#my-list-badge").text(this.listCount).show(); //displaying all the updated list 
    },
    logout: function() {
      var self = this;
      $("#logout-btn").on("click", function(){
        window.isLogin = false;
        self.displayWelcomePage();
        $("#my-list-badge").hide();
        myApp.alert("Successfully logged out", "Logout!");
      });
    },
    showAdminMenu: function() {// Admin profile 
      $("#admin-btn").show(); //Dispalying the review list option for admin  div 
      $("#admin-btn").on("click", function() {// Onclick for review list option
        var self = this;
        var email = window.localStorage.getItem("currentUser");// getting the email of admin fro local storage
        $("#admin-result-container>ul").empty();// In the beginning it will empty all the lists
        $.each(localStorage, function(key, value){// retrieving all the data 

          if(key.indexOf("http://") != -1 || key.indexOf("https://") != -1) { // putting the condtition for putting 
            //all the data into variable through arrays
            var valueArray = value.split("::");
            var title = valueArray[1];
            var visibleUrl = valueArray[2];
            var content = valueArray[3];
            var status = valueArray[4];
            if(status == "Pending") {
              var template = _.template($("#admin-list-container-template").html());//putting admin list container template into a variable

              $("#admin-result-container>ul").append(template({
                  data: [{// putting all the list into a list template for admin menu will be empty
                    titleNoFormatting: title, 
                    url: key,
                    visibleUrl: visibleUrl,
                    content: content,
                    status: "Done"
                  }]
              }));

              
            }
            
            
          }

        });
        $$('.swipeout-admin-list-result').on('delete', function (e) {// admin control side on swipe
          var url = $(e.target).find(".full-url").val();
          var valueArray = window.localStorage.getItem(url).split("::");// placing all the data from local storage into variables through array
          var email = valueArray[0];
          var title = valueArray[1];
          var visibleUrl = valueArray[2];
          var content = valueArray[3];

          window.localStorage.setItem(url, email+"::"+title+"::"+visibleUrl+"::"+content+"::"+"Done");// setting status Done in local storage
        });
      });

      
    }
};
