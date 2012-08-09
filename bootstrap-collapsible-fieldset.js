$(function () {
    $('fieldset.collapsible > legend').append(' <i class="icon-caret-right"></i>');
    $('fieldset.collapsible > legend').live("click", function() {
	    var $this = $(this);
	    var $divs = $this.siblings();
	    var $legend = $this.find('i');
	    
        $divs.toggle();

	    if ($legend.hasClass("icon-caret-right")) {
	        $legend.removeClass("icon-caret-right").addClass("icon-caret-down");
	    }
	    else {
	         $legend.removeClass("icon-caret-down").addClass("icon-caret-right");
	    }
	});
});
