load("page.js")


//--------------------------------------------------------------------------------------------------


function Quantization_Page(screen) {
    Page.call(this, screen)
}


Quantization_Page.prototype = create_object(Page.prototype)


//--------------------------------------------------------------------------------------------------


Quantization_Page.prototype.on_midi = function(status, data1, data2) {
    var is_handled = false

    if(status == 0x90) {
    }

    return is_handled
}


//--------------------------------------------------------------------------------------------------


Quantization_Page.prototype.enter = function() {
    Page.prototype.enter.call(this)

    var display = this.screen.launchpad.display

    display.clear_pads(0x00)

    display.set_pad(1, 7, 0x1)
    display.set_pad(0, 6, 0x1)
    display.set_pad(1, 6, 0x1)
    display.set_pad(1, 5, 0x1)
    display.set_pad(1, 4, 0x1)
    display.set_pad(1, 3, 0x1)

    display.set_pad(3, 7, 0x1)
    display.set_pad(4, 7, 0x1)
    display.set_pad(3, 6, 0x1)
    display.set_pad(3, 5, 0x1)
    display.set_pad(4, 5, 0x1)
    display.set_pad(3, 4, 0x1)
    display.set_pad(4, 4, 0x1)
    display.set_pad(3, 3, 0x1)
    display.set_pad(4, 3, 0x1)
}


//--------------------------------------------------------------------------------------------------


Quantization_Page.prototype.leave = function() {
    Page.prototype.leave.call(this)
}


//--------------------------------------------------------------------------------------------------
// Copyright (c) 2015 - Laurent Moussault <moussault.laurent@gmail.com>