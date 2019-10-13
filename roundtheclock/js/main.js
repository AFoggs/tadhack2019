(function($) {
  /*==================================================================
    [ Validate ]*/

  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function() {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    var newURL = window.location.href + 'homepage';

    window.location.href = newURL;
    return check;
  });

  $('.validate-form .input100').each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if (
        $(input)
          .val()
          .trim() == ''
      ) {
        return false;
      }
    }
  }

  $('.validate-form').on('submit', function() {});

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }

  var $update1 = $(
    '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"><img src="..." class="rounded mr-2" alt="..." /><strong class="mr-auto">Mom Home Update</strong><small>50 mins ago</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast"aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div> <div class="toast-body"> Potential fall detected by Stairs. Emergency call being placed.   </div>  </div>'
  );

  var $update2 = $(
    '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"><img src="..." class="rounded mr-2" alt="..." /><strong class="mr-auto">Mom Home Update</strong><small>12 mins ago</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast"aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div> <div class="toast-body"> Unexpected exit from home. Text alert sent. </div>  </div>'
  );

  var $update3 = $(
    '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"><img src="..." class="rounded mr-2" alt="..." /><strong class="mr-auto">Mom Home Update</strong><small>30 secs ago</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast"aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div> <div class="toast-body"> Temperature exceeded max heat. Air conditioning turned on. </div>  </div>'
  );

  var $update4 = $(
    '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"><img src="..." class="rounded mr-2" alt="..." /><strong class="mr-auto">Mom Home Update</strong><small>10 secs ago</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast"aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div> <div class="toast-body"> Blood pressure dropped to dangerous levels. 9-1-1 call has been automatically placed. </div>  </div>'
  );

  var updateone = setTimeout(updateIt1, 10000);
  var updatetwo = setTimeout(updateIt2, 25000);
  var updatethree = setTimeout(updateIt3, 40000);
  var updatefour = setTimeout(updateIt4, 60000);

  function updateIt1() {
    $('#update1').append($update1);
  }
  function updateIt2() {
    $('#update2').append($update2);
  }

  function updateIt3() {
    $('#update3').append($update3);
  }

  function updateIt4() {
    $('#update4').append($update4);
  }

  //   setTimeout(function() {
  //     $('#update1').append($update1);
  //   }, 5000);
  //   setTimeout(function() {
  //     $('#update2').append($update2);
  //   }, 5000);
  //   setTimeout(function() {
  //     $('#update3').append($update3);
  //   }, 5000);
})(jQuery);
