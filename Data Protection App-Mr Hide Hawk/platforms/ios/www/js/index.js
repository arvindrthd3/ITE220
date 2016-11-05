/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
window.isLogin = false;
window.isAdmin = false;
var app = {
    isSignUp: false,
    listCount: 0,
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        this.displayWelcomePage();
        this.logout();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
    },
    displayWelcomePage: function() {
      

      var self = this;
      if(isLogin) {
        $("#none-login-user").hide();
        $("#login-user").show();

        $('#search-content').keypress(function (e) {
         var key = e.which;
         if(key == 13)  // the enter key code
          {
            self.getDataFromGoogleAPI();
          }
        }); 

        // display the list
        self.displayList();  
      }else {
        $("#none-login-user").show();
        $("#login-user").hide();
        $("#sign-up").on("click", function(){
          myApp.loginScreen();
          $(".login-screen-title").text("Sign Up");
          $("#btn-sign-in").text("Sign Up");
          self.isSignUp = true;
        });
        $("#sign-in").on("click", function(){
          // myApp.loginScreen();
          $(".login-screen-title").text("Sign In");
          self.isSignUp = false;
        });
        $("#btn-sign-in").on("click", function(){
          self.login(self);
        });
      }

      // $("#home-btn").on("click", function() {
      //   $("#search-result-container>ul").empty();
      // });
    },
    getDataFromGoogleAPI: function() {
      var self = this;
      var search = $('#search-content').val();
      $.ajax({
        type: "GET",
        url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=AIzaSyBiGsM8PHEkOkSPFEObYzzMV_Ntx1d_QGo&q="+search + "&start=0&rsz=8",
        timeout: 2000,
        dataType: "jsonp",
        beforeSend: function() {

        }, 
        complete: function(data) {

        },
        success: function(data) {
          // $("#search-result-container").html(JSON.stringify(data));
          var formatData = []
          _(data.responseData.results).each(function(d){
            var obj = {};
            obj.titleNoFormatting = d.titleNoFormatting;
            obj.url = d.url;
            obj.visibleUrl = d.visibleUrl;
            obj.content = d.content;
            obj.status = "";
            if(window.localStorage.getItem(d.url) && window.localStorage.getItem(d.url).indexOf(window.localStorage.getItem("currentUser")) != -1) {
              var valueArray =  window.localStorage.getItem(d.url).split("::");
              var status = valueArray[4];
              if(status == "Done") {
                // do not push to the result array
              } else{
                formatData.push(obj);    
              }
              obj.status = "Pending";
            }else {
              formatData.push(obj);
            }
            
          });

          var template = _.template($("#search-result-template").html());
          $("#search-result-container>ul").html(template({
              data: formatData
          }));
          $$('.swipeout-search-result').on('delete', function (e) {
            //myApp.alert('Item removed');
            console.log("swipe");
            var url = $(e.target).find(".full-url").val();
            var title = $(e.target).find(".item-title").text().trim();
            var visibleUrl = $(e.target).find(".visibleUrl").text();
            var content = $(e.target).find(".content").text();
            var email = window.localStorage.getItem("currentUser");
            var status = "Pending";

            // save a list to local storage
            window.localStorage.setItem(url, email+"::" + title + "::" + visibleUrl + "::" + content + "::" + status);

            myApp.alert("Your selected item is being processed. You can see its status in My List. ", 'Save Successfully!');
            var template = _.template($("#list-container-template").html());
            $("#my-list-container>ul").append(template({
                data: [{
                  titleNoFormatting: title, 
                  url: url,
                  visibleUrl: visibleUrl,
                  content: content,
                  status: "Pending"
                }]
            }));
            self.listCount++;
            self.updateListCount();
            $('.swipeout-mylist-result:last').on('delete', function (e) {
              var url = $(e.target).find(".full-url").val();
              window.localStorage.removeItem(url);
              self.listCount--;
              self.updateListCount();
            });
          }); 
          
          
          $(".item-content-click").on("click", function(e){
            self.clickListHandler(e);
          });
        },
        error: function(d) {
          $("#search-result-container").html("<h1>Oh no!</h1>");
        }
      });
    },
    login: function(self) {
      var email = $("#email").val();
      var password = $("#password").val();

      var storage = window.localStorage;
      var data = storage.getItem(email);
      
      function success() {
        storage.setItem("currentUser", email);
        myApp.closeModal('.login-screen');
        window.isLogin = true;
        if(email == "admin@hide-hawk.com" ) {
        // if(email == "bb@bb.bb" ) {
          window.isAdmin = true;
          self.showAdminMenu();
          $("#profile-picture img").attr("src", "img/admin.png");
          $("#profile-picture").show();
        }else {
          window.isAdmin = false;
          $("#profile-picture img").attr("src", "img/user.png");
          $("#profile-picture").show();
        }
        self.displayWelcomePage();
        
      }

      if(email == "" || password == "") {
        myApp.alert("You must put email and password", 'Error!');
      }else {
        if(data == null && self.isSignUp == true){ // sign up
          storage.setItem(email, md5(password));
          myApp.alert("Successfully logged in.", 'Sign up!');
          success();

        }else if(data && data == md5(password)){ // sign in
          myApp.alert("Successfully logged in.", 'Sign in!');
          success();
        }else {
          myApp.alert("Invalid email or password!", "Error!");
        }
      }

    },
    displayList: function() {
      var self = this;
      var email = window.localStorage.getItem("currentUser");
      $("#my-list-container>ul").empty();
      $.each(localStorage, function(key, value){

        if(value.indexOf(email) != -1) {
          var valueArray = value.split("::");

          if(valueArray && valueArray.length > 0 && key != "currentUser") {
            var title = valueArray[1];
            var visibleUrl = valueArray[2];
            var content = valueArray[3];
            var status = valueArray[4];
            var template = _.template($("#list-container-template").html());

            var bg = status == "Done" ? "background-color: lightgrey;" : "";
            $("#my-list-container>ul").append(template({
                data: [{
                  titleNoFormatting: title, 
                  url: key,
                  visibleUrl: visibleUrl,
                  content: content,
                  status: status,
                  bg: bg
                }]
            }));
            $(".item-content-click").on("click", function(e){
              self.clickListHandler(e);
            });
            self.listCount++;
          }
          
        }

      });
      
      self.updateListCount();

      $$('.swipeout-mylist-result').on('delete', function (e) {
        var url = $(e.target).find(".full-url").val();
        window.localStorage.removeItem(url);
        self.listCount--;
        self.updateListCount();
      });
    },
    clickListHandler: function(e) {
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
      myApp.popup(popupHTML);
    },
    updateListCount: function(){
      $("#my-list-badge").text(this.listCount).show();
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
    showAdminMenu: function() {
      $("#admin-btn").show();
      $("#admin-btn").on("click", function() {
        var self = this;
        var email = window.localStorage.getItem("currentUser");
        $("#admin-result-container>ul").empty();
        $.each(localStorage, function(key, value){

          if(key.indexOf("http://") != -1 || key.indexOf("https://") != -1) {
            var valueArray = value.split("::");
            var title = valueArray[1];
            var visibleUrl = valueArray[2];
            var content = valueArray[3];
            var status = valueArray[4];
            if(status == "Pending") {
              var template = _.template($("#admin-list-container-template").html());

              $("#admin-result-container>ul").append(template({
                  data: [{
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
        $$('.swipeout-admin-list-result').on('delete', function (e) {
          var url = $(e.target).find(".full-url").val();
          var valueArray = window.localStorage.getItem(url).split("::");
          var email = valueArray[0];
          var title = valueArray[1];
          var visibleUrl = valueArray[2];
          var content = valueArray[3];

          window.localStorage.setItem(url, email+"::"+title+"::"+visibleUrl+"::"+content+"::"+"Done");
        });
      });

      
    }
};
