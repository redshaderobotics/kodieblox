
Blockly.Python['kb_nav'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Python into code variable.
  var code = "kb."+dropdown_direction+"()\n";
  return code;
};

Blockly.Python['kb_nav_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction_turn');
  // TODO: Assemble Python into code variable.
  var code = "kb."+dropdown_direction+"()\n";
  return code;
};


Blockly.Python['kb_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "kb.stop()\n";
  return code;
};


Blockly.Python['kb_led'] = function(block) {
  var dropdown_led_type = block.getFieldValue('led_type');
  var dropdown_led_status = block.getFieldValue('led_status');
  // TODO: Assemble Python into code variable.
  var code = "kb."+dropdown_led_type+"("+"'"+dropdown_led_status+"'"+")\n";
  return code;
};


Blockly.Python['kb_delay'] = function(block) {
  var number_name = block.getFieldValue('sec');
  // TODO: Assemble Python into code variable.
  var code = "time.sleep("+number_name+")\n";
  return code;
};


Blockly.Python['start_block'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code;
};


Blockly.Python['left_eye'] = function(block) {
  var dropdown_lft_eye_status = block.getFieldValue('lft_eye_status');
  // TODO: Assemble Python into code variable.
  var code = "kb.leftEye("+dropdown_lft_eye_status+")\n";
  return code;
};

Blockly.Python['right_eye'] = function(block) {
  var dropdown_rght_eye_status = block.getFieldValue('rght_eye_status');
  // TODO: Assemble Python into code variable.
  var code = "kb.rightEye("+dropdown_rght_eye_status+")\n";
  return code;
};

Blockly.Python['buzzer'] = function(block) {
  var dropdown_buzzer_status = block.getFieldValue('buzzer_status');
  // TODO: Assemble Python into code variable.
  var code = "kb.buzzer("+dropdown_buzzer_status+")\n";
  return code;
};


Blockly.Python['kb_getdistance'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "kb.getdistance()\n";
  return [code,Blockly.Python.ORDER_NONE];
};

Blockly.Python['kb_getMarkerId'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "cam.getMarkerId()\n";
  return [code,Blockly.Python.ORDER_NONE];
};

Blockly.Python['kb_speak'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "os.system(\"espeak"+" "+value_text+"\""+")\n";
  return code;
};


Blockly.Python['kb_speak_advanced'] = function(block) {
  var dropdown_voice = block.getFieldValue('voice');
  var dropdown_language = block.getFieldValue('language');
  var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "os.system(\"espeak"+" "+"-v"+dropdown_language+"+"+dropdown_voice+" "+value_name+"\")\n";
  return code;
};




Blockly.Python['kb_rgbLed'] = function(block) {
  var dropdown_led_side = block.getFieldValue('led_side');
  var dropdown_colorvalue = block.getFieldValue('colorvalue');
  // TODO: Assemble Python into code variable.
  var code = "kb.setLedColor(\""+dropdown_led_side+"\""+","+"\""+dropdown_colorvalue+"\")\n";
  return code;
};


Blockly.Python['kb_ledoff'] = function(block) {
  var dropdown_led_side = block.getFieldValue('led_side');
  // TODO: Assemble Python into code variable.
  var code = "kb.setLedOff(\""+dropdown_led_side+"\")\n";
  return code;
};
Blockly.Python['kb_playnote'] = function(block) {
  var dropdown_notelist = block.getFieldValue('notelist');
  // TODO: Assemble Python into code variable.
  var code = "os.system(\"aplay"+" "+"/home/kodiebot/sound/"+dropdown_notelist+"\")\n";
  return code;
};

Blockly.Python['oled_display'] = function(block) {
  var number_fontsize = block.getFieldValue('fontsize');
  var value_printoutput = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ="kb.printOnOLED("+value_printoutput+","+number_fontsize+")\n";
  return code;
};


Blockly.Python['take_photo'] = function(block) {
  var text_fname = block.getFieldValue('fname');
  var dropdown_extn = block.getFieldValue('extn');
  // TODO: Assemble Python into code variable.
  var code = "cam.takePhoto(\""+text_fname+"\""+","+"\""+dropdown_extn+"\")\n";
  return code;
};

Blockly.Python['kb_sound'] = function(block) {
  var dropdown_soundlist = block.getFieldValue('soundlist');
  // TODO: Assemble JavaScript into code variable.
  var code = "os.system(\"aplay"+" "+"/home/kodiebot/sound/"+dropdown_soundlist+"\")\n";
  return code;
};

Blockly.Python['kb_motorunits'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_value = block.getFieldValue('value');
  var dropdown_unit = block.getFieldValue('unit');
  // TODO: Assemble Python into code variable.
  var code = "kb.motor(\""+dropdown_direction+"\""+","+"\""+dropdown_unit+"\""+","+number_value+")\n";
 
  return code;
};

Blockly.Python['kb_motorturn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_value = block.getFieldValue('value');
  // TODO: Assemble Python into code variable.
  var code = "kb.motorturn(\""+dropdown_direction+"\""+","+number_value+")\n";

  return code;
};


Blockly.Python['kb_printposition'] = function(block) {
  var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
  var number_xpos = block.getFieldValue('xpos');
  var number_ypos = block.getFieldValue('ypos');
  // TODO: Assemble Python into code variable.
  var code = "kb.printpositionOLED("+number_xpos+","+number_ypos+","+value_position+")\n";
  return code;
};


Blockly.Python['kb_picamera'] = function(block) {
  var statements_cam_instance = Blockly.Python.statementToCode(block, 'cam_instance');
  // TODO: Assemble Python into code variable.
  var code = "cam.initaruco()\n"+"with picamera.PiCamera() as camera:\n\t";
  return code+statements_cam_instance;
};
