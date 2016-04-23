//------------------------------------------------------------------------------

const colors = [
	0x00, 0x03, 0x09, 0x0d, 0x55, 0x11, 0x1d, 0x29, 0x31, 0x35, 0x05, 0x04, 0x60, 0x60, 0x60, 0x60,
	0x00, 0x01, 0x0b, 0x0f, 0x55, 0x13, 0x1f, 0x2b, 0x33, 0x37, 0x07, 0x07, 0x60, 0x60, 0x60, 0x60
]

//------------------------------------------------------------------------------

const colorSelectedOption = 0x01

const colorPressedkey = 0x0a

//------------------------------------------------------------------------------

const keyColorSchemes = [
    [
        [0x18, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x19, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x1a, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x02, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x03, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x05, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x07, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x08, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x09, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x0b, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
        [0x1a, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
    ],

    [
        [0x01, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18],
        [0x01, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19],
        [0x01, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a],
        [0x01, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02],
        [0x01, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03],
        [0x01, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05],
        [0x01, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07],
        [0x01, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08],
        [0x01, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09],
        [0x01, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a],
    ],

    [
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
        [0x01, 0x06, 0x05, 0x03, 0x02, 0x08, 0x07, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
    ]
]

//------------------------------------------------------------------------------

const drumColorSchemes = [
    [
        0x06, 0x06,
        0x09, 0x09,
        0x03, 0x03,
        0x07, 0x07,
        0x02, 0x02,
        0x05, 0x05,
        0x08, 0x08,
        0x0b, 0x0b,
    ],
    [
        0x06, 0x11,
        0x09, 0x11,
        0x03, 0x11,
        0x07, 0x11,
        0x02, 0x11,
        0x05, 0x11,
        0x08, 0x11,
        0x0b, 0x11,
    ],
    [
        0x06, 0x16,
        0x09, 0x19,
        0x03, 0x13,
        0x07, 0x17,
        0x02, 0x12,
        0x05, 0x15,
        0x08, 0x18,
        0x0b, 0x1b,
    ]
]

//------------------------------------------------------------------------------
// Copyright (c) 2015-2016 - Laurent Moussault <moussault.laurent@gmail.com>