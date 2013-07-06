(function($) {
    $.fn.bookmarkletHelperArrow = function(options) {
        // defaults
        var lw = 3;
        var pos = 150;
        var color = '#ffa500'
        var zindex = 1000;
        // optionally override defaults
        if (options !== undefined) {
            if (options.lw !== undefined)
                lw = options.lw
            if (options.pos !== undefined)
                pos = options.pos
            if (options.color !== undefined)
                color = options.color
            if (options.zindex !== undefined)
                zindex = options.zindex
        }

        this.click(function() {return false;})
        this.mousedown(function() {
            var move_func = function(e) {
                // drag events are a proxy for mouse events
                if (e.originalEvent !== undefined)
                    e = e.originalEvent;


                // wipe
                ctx.clearRect(0, 0, $(document).width(), $(document).height());
                if (e.clientY < h*3) return;
                // line
                ctx.beginPath();
                ctx.moveTo(e.clientX, e.clientY);
                ctx.quadraticCurveTo(pos, h*5, pos, h-1);
                ctx.stroke();
                // arrow
                ctx.moveTo(pos, 0);
                ctx.beginPath();
                ctx.lineTo(pos - w, h);
                ctx.lineTo(pos, 0);
                ctx.lineTo(pos + w, h);
                ctx.stroke();
                //ctx.closePath();
                //ctx.fill();
            }

            // create canvas for the arrow
            var canvas = $('<canvas>').css({
                position: 'fixed',
                top: 0,
                left: 0,
                'z-index': zindex,
                'pointer-events': 'none'
            }).appendTo('body').get(0);
            canvas.height = $(document).height();
            canvas.width = $(document).width();
            var ctx = canvas.getContext('2d');

            // comput style options
            var w = lw * 2;
            var h = Math.sqrt(3 * w * w)
            // set static style options
            ctx.lineWidth = lw;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;

            // not anonymous so that it can be unbound
            var unbind_move = function() {
                $(window).unbind('mousemove', move_func);
                $(canvas).remove();
            };
            $(window).bind('mousemove', move_func);
            $(window).one('mouseup', unbind_move);
            // switch from move to drag
            $(window).one('dragenter', function() {
                // remove nondrag bindings
                $(window).unbind('mouseup', unbind_move);
                $(window).unbind('mousemove', move_func)
                // setup drag bindings
                $(window).bind('dragover', move_func);
                $(window).one('dragend', function() {
                    $(window).unbind('dragover', move_func);
                    $(canvas).remove();
                });
            });
        });

        return this; // for chaining
    };
})(jQuery);
