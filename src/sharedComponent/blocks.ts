export const motionBlocks = [
  {
    type: "move",
    message0: "move %1 steps",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "x_position",
        value: 20,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "clockwise",
    message0: "turn %1 %2 degrees",
    category: "motion",
    args0: [
      {
        type: "field_image",
        src: "/rotate-right.svg",
        width: 16,
        height: 16,
      },
      {
        type: "field_number",
        name: "angle",
        value: 15,
        min: 0,
        max: 360,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "anticlockwise",
    message0: "turn %1 %2 degrees",
    category: "motion",
    args0: [
      {
        type: "field_image",
        src: "/rotate-left.svg",
        width: 16,
        height: 16,
      },
      {
        type: "field_number",
        name: "angle",
        value: 15,
        min: 0,
        max: 360,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "go_to",
    message0: "go to x: %1 y: %2",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "x_position",
        value: 0,
        min: -Infinity,
        max: Infinity,
      },
      {
        type: "field_number",
        name: "y_position",
        value: 0,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "go_to_random",
    message0: "go to random position",
    category: "motion",
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "glide",
    message0: "glide %1 secs to x: %2 y: %3",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "seconds",
        value: 1,
        min: 0,
      },
      {
        type: "field_number",
        name: "x_position",
        value: 0,
        min: -Infinity,
        max: Infinity,
      },
      {
        type: "field_number",
        name: "y_position",
        value: 0,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "glide_random",
    message0: "glide %1 secs to random position",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "seconds",
        value: 1,
        min: 0,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "point_in_direction",
    message0: "point in direction %1",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "direction",
        value: 90,
        min: 0,
        max: 360,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "point_towards",
    message0: "point towards %1",
    category: "motion",
    args0: [
      {
        type: "field_dropdown",
        name: "target",
        options: [
          ["mouse-pointer", "MOUSE_POINTER"],
        ],
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "change_x_by",
    message0: "change x by %1",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "delta_x",
        value: 10,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "set_x",
    message0: "set x to %1",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "x_position",
        value: 0,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "change_y_by",
    message0: "change y by %1",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "delta_y",
        value: 10,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
  {
    type: "set_y",
    message0: "set y to %1",
    category: "motion",
    args0: [
      {
        type: "field_number",
        name: "y_position",
        value: 0,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#4d97fe",
  },
];


export const looksBlocks = [
  {
    type: "say_for_seconds",
    message0: "say %1 for %2 seconds",
    category: "looks",
    args0: [
      {
        type: "field_input",
        name: "message",
        text: "Hello!",
      },
      {
        type: "field_number",
        name: "seconds",
        value: 2,
        min: 0,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#9966ff",
  },
  {
    type: "say",
    message0: "say %1",
    category: "looks",
    args0: [
      {
        type: "field_input",
        name: "message",
        text: "Hello!",
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#9966ff",
  },
  {
    type: "think_for_seconds",
    message0: "think %1 for %2 seconds",
    category: "looks",
    args0: [
      {
        type: "field_input",
        name: "message",
        text: "Hmm...",
      },
      {
        type: "field_number",
        name: "seconds",
        value: 2,
        min: 0,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#9966ff",
  },
  {
    type: "think",
    message0: "think %1",
    category: "looks",
    args0: [
      {
        type: "field_input",
        name: "message",
        text: "Hmm...",
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#9966ff",
  },
  {
    type: "change_size",
    message0: "change size by %1",
    category: "looks",
    args0: [
      {
        type: "field_number",
        name: "size",
        value: 2,
        min: -Infinity,
        max: Infinity,
      },
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "#9966ff",
  }
];

export const eventBlocks = [
  {
    type: "when_flag_clicked",
    message0: "when %1 clicked",
    category: "event",
    args0: [
      {
        type: "field_image",
        src: "/green-flag.svg",
        width: 24,
        height: 24,
      },
    ],
    nextStatement: true,
    colour: "#ffbf00",
  },
  {
    type: "when_key_pressed",
    message0: "when %1 key pressed",
    category: "event",
    args0: [
      {
        type: "field_dropdown",
        name: "key",
        options: [
          ["space", "SPACE"],
        ],
      },
    ],
    nextStatement: true,
    colour: "#ffbf00",
  },
  {
    type: "when_sprite_clicked",
    message0: "when this sprite clicked",
    category: "event",
    nextStatement: true,
    colour: "#ffbf00",
  }
];




