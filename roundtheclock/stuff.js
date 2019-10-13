$('.validate-form').on('submit', function(event) {
    event.preventDefault();
    var newURL = 'localhost:8080/homepage';
    window.location.href = newURL;

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
    '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"><img src="..." class="rounded mr-2" alt="..." /><strong class="mr-auto">Mom Home Update</strong><small>30 secs ago</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast"aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div> <div class="toast-body"> Temperature exceeded max heat. Air conditioning turned on. </div>  </div>'
  );

setTimeout($('#update1').append($update1), 5000);
setTimeout($('#update2').append($update2), 5000);
setTimeout($('#update3').append($update3), 5000);
