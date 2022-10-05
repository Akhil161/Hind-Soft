
window.onscroll = function() {myFunction()};
        
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  }); 

  function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// Animation On Scroll 

(function() {
    var Util,
      __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  
    Util = (function() {
      function Util() {}
  
      Util.prototype.extend = function(custom, defaults) {
        var key, value;
        for (key in custom) {
          value = custom[key];
          if (value != null) {
            defaults[key] = value;
          }
        }
        return defaults;
      };
  
      Util.prototype.isMobile = function(agent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
      };
  
      return Util;
  
    })();
  
    this.WOW = (function() {
      WOW.prototype.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      };
  
      function WOW(options) {
        if (options == null) {
          options = {};
        }
        this.scrollCallback = __bind(this.scrollCallback, this);
        this.scrollHandler = __bind(this.scrollHandler, this);
        this.start = __bind(this.start, this);
        this.scrolled = true;
        this.config = this.util().extend(options, this.defaults);
      }
  
      WOW.prototype.init = function() {
        var _ref;
        this.element = window.document.documentElement;
        if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
          return this.start();
        } else {
          return document.addEventListener('DOMContentLoaded', this.start);
        }
      };
  
      WOW.prototype.start = function() {
        var box, _i, _len, _ref;
        this.boxes = this.element.getElementsByClassName(this.config.boxClass);
        if (this.boxes.length) {
          if (this.disabled()) {
            return this.resetStyle();
          } else {
            _ref = this.boxes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              this.applyStyle(box, true);
            }
            window.addEventListener('scroll', this.scrollHandler, false);
            window.addEventListener('resize', this.scrollHandler, false);
            return this.interval = setInterval(this.scrollCallback, 50);
          }
        }
      };
  
      WOW.prototype.stop = function() {
        window.removeEventListener('scroll', this.scrollHandler, false);
        window.removeEventListener('resize', this.scrollHandler, false);
        if (this.interval != null) {
          return clearInterval(this.interval);
        }
      };
  
      WOW.prototype.show = function(box) {
        this.applyStyle(box);
        return box.className = "" + box.className + " " + this.config.animateClass;
      };
  
      WOW.prototype.applyStyle = function(box, hidden) {
        var delay, duration, iteration;
        duration = box.getAttribute('data-wow-duration');
        delay = box.getAttribute('data-wow-delay');
        iteration = box.getAttribute('data-wow-iteration');
        return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
      };
  
      WOW.prototype.resetStyle = function() {
        var box, _i, _len, _ref, _results;
        _ref = this.boxes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box.setAttribute('style', 'visibility: visible;'));
        }
        return _results;
      };
  
      WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
        var style;
        style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
        if (duration) {
          style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
        }
        if (delay) {
          style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
        }
        if (iteration) {
          style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
        }
        return style;
      };
  
      WOW.prototype.scrollHandler = function() {
        return this.scrolled = true;
      };
  
      WOW.prototype.scrollCallback = function() {
        var box;
        if (this.scrolled) {
          this.scrolled = false;
          this.boxes = (function() {
            var _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              if (!(box)) {
                continue;
              }
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              _results.push(box);
            }
            return _results;
          }).call(this);
          if (!this.boxes.length) {
            return this.stop();
          }
        }
      };
  
      WOW.prototype.offsetTop = function(element) {
        var top;
        top = element.offsetTop;
        while (element = element.offsetParent) {
          top += element.offsetTop;
        }
        return top;
      };
  
      WOW.prototype.isVisible = function(box) {
        var bottom, offset, top, viewBottom, viewTop;
        offset = box.getAttribute('data-wow-offset') || this.config.offset;
        viewTop = window.pageYOffset;
        viewBottom = viewTop + this.element.clientHeight - offset;
        top = this.offsetTop(box);
        bottom = top + box.clientHeight;
        return top <= viewBottom && bottom >= viewTop;
      };
  
      WOW.prototype.util = function() {
        return this._util || (this._util = new Util());
      };
  
      WOW.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
      };
  
      return WOW;
  
    })();
  
  }).call(this);
  
  
  wow = new WOW(
    {
      animateClass: 'animated',
      offset: 100
    }
  );
  wow.init();
  

//   Counter-Section 

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 5000,duration: 10000});
$('#number2').jQuerySimpleCounter({end: 3210,duration: 10000});
$('#number3').jQuerySimpleCounter({end: 4000,duration: 10000});
$('#number4').jQuerySimpleCounter({end: 4500,duration: 10000});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


// Testimonial-section 

if ($(".ts-testimonial-slide").length > 0) {
    
    $(".ts-testimonial-slide").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 1000,
        navigation: false,
        pagination: true,
        singleItem: true
    });
};