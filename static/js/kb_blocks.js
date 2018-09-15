Blockly.Blocks['kb_nav'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"]]), "direction");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_nav_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "direction_turn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["redLed","redLed"], ["greenLed","greenLed"]]), "led_type")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["ON","ON"], ["OFF","OFF"]]), "led_status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kb_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for")
        .appendField(new Blockly.FieldNumber(0, 0), "sec")
        .appendField("sec");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['start_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drag Blocks Here!");
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['kb_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop KodieBot");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['left_eye'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set left Eye")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "lft_eye_status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['right_eye'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set right Eye")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "rght_eye_status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play buzzer")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "buzzer_status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['kb_getdistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getDistance");
    this.setOutput(true, "Number");


    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_getMarkerId'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getMarkerId");
    this.setOutput(true, "Number");


    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['kb_speak'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("Say");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kb_speak_advanced'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("Say with")
        .appendField(new Blockly.FieldDropdown([["male","m1"], ["female","f1"]]), "voice")
        .appendField("voice in")
        .appendField(new Blockly.FieldDropdown([["English","en"], ["Tamil","ta"], ["Kannada","kn"]]), "language");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};






Blockly.Blocks['kb_rgbLed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "led_side")
        .appendField("LED to")
        .appendField(new Blockly.FieldDropdown([["Red","red"], ["Green","blue"], ["Blue","green"], ["Yellow","magenta"], ["Magenta","yellow"], ["TurquouiseBlue","tblue"], ["White","white"]]), "colorvalue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_ledoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "led_side")
        .appendField("LED Off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kb_playnote'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play Sound")
        .appendField(new Blockly.FieldDropdown([["A","A.wav"], ["B","B.wav"], ["C","C.wav"], ["D","D.wav"], ["E","E.wav"], ["F","F.wav"], ["G","G.wav"]]), "notelist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['oled_display'] = {
  init: function() {
    this.appendValueInput("text")
        //.setCheck("String")
        .appendField("print with font size")
        .appendField(new Blockly.FieldNumber(0, 0, 20), "fontsize");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['take_photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take Photo as")
        .appendField(new Blockly.FieldTextInput("filename"), "fname")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["jpg","jpg"], ["bmp","bmp"], ["png","png"]]), "extn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play Sound")
        .appendField(new Blockly.FieldDropdown([["Ambulance","Ambulance.wav"], ["Applause","Applause.wav"], ["Beep","Beep.wav"], ["Bell","Bell.wav"], ["Bus","Bus.wav"], ["Car","Car.wav"], ["Cat","Cat.wav"], ["Cow","Cow.wav"], ["Dog_puppy","Dog_puppy.wav"], ["Dog_bark","Dog_bark.wav"], ["Elephant","Elephant.wav"], ["Fire_engine","Fire_engine.wav"], ["Horse","Horse.wav"], ["Lorry","Lorry.wav"], ["Parrot","Parrot.wav"], ["Siren","Siren.wav"], ["Sparrow","Sparrow.wav"]]), "soundlist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_motorunits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"]]), "direction")
	.appendField("for")
        .appendField(new Blockly.FieldNumber(0, 0), "value")
        .appendField(new Blockly.FieldDropdown([["sec","sec"], ["min","min"]]), "unit");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_motorturn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "direction")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(0, 0), "value")
        .appendField("sec");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kb_printposition'] = {
  init: function() {
    this.appendValueInput("position")
        .setCheck(null)
        .appendField("print at x=")
        .appendField(new Blockly.FieldNumber(0, 0, 120), "xpos")
        .appendField("y=")
        .appendField(new Blockly.FieldNumber(0, 10, 44), "ypos");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kb_picamera'] = {
  init: function() {
    this.appendStatementInput("cam_instance")
        .setCheck(null)
        .appendField("Start Camera");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
