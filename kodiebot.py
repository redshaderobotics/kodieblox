import RPi.GPIO as GPIO
import time
import oled as od

#Setting the Board Numbering for Programming

GPIO.setmode(GPIO.BCM)

GPIO.setwarnings(False)

#Setting up the motor outputs
GPIO.setup(18,GPIO.OUT)
GPIO.setup(23,GPIO.OUT)
GPIO.setup(21,GPIO.OUT)
GPIO.setup(20,GPIO.OUT)

#setting up the Left and Right RGB Leds
#Left RGB LED
GPIO.setup(24,GPIO.OUT) 
GPIO.setup(12,GPIO.OUT) 
GPIO.setup(25, GPIO.OUT) 

#Right RGB LED
GPIO.setup(17, GPIO.OUT)
GPIO.setup(27, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)

#Setting up the HC-SR04 Sensor
GPIO.setup(26, GPIO.OUT)
GPIO.setup(19, GPIO.IN)


#motor forward
def backward():
	GPIO.output(18,GPIO.HIGH)
	GPIO.output(23,GPIO.LOW)
	GPIO.output(21,GPIO.HIGH)
	GPIO.output(20,GPIO.LOW)
	

#motor backward
def forward():
	GPIO.output(18,GPIO.LOW)	
	GPIO.output(23,GPIO.HIGH)
	GPIO.output(21,GPIO.LOW)
        GPIO.output(20,GPIO.HIGH)
	

#motor right
def right():
	GPIO.output(18,GPIO.HIGH)
        GPIO.output(23,GPIO.LOW)
        GPIO.output(21,GPIO.LOW)
        GPIO.output(20,GPIO.HIGH)
	
#motor left
def left():
	GPIO.output(18,GPIO.LOW)
        GPIO.output(23,GPIO.HIGH)
        GPIO.output(21,GPIO.HIGH)
        GPIO.output(20,GPIO.LOW)
		
#motor stop
def stop():
	GPIO.output(18,GPIO.LOW)
        GPIO.output(23,GPIO.LOW)
        GPIO.output(21,GPIO.LOW)
        GPIO.output(20,GPIO.LOW)


#Freeup the resources of the pi
def freeup():
	stop()
	setLColor(0,0,0)
	setRColor(0,0,0)
	

#clean the GPIOs
def cleanup():
	GPIO.cleanup()

#Get Distance from HC-SR04
def getdistance():
	GPIO.output(26, False)
	time.sleep(0.1)

	GPIO.output(26,True)
	time.sleep(0.00001)
	GPIO.output(26, False)

	while GPIO.input(19) == 0:
		pulse_start = time.time()

	while GPIO.input(19) == 1:
		pulse_end = time.time()

	pulse_duration = pulse_end-pulse_start

	distance = pulse_duration * 17150

	distance = round(distance, 2)
	
	return distance

#RGB Color setting
def setLColor(r,g,b):
	GPIO.output(24,r)
	GPIO.output(12,g)
	GPIO.output(25,b)

def setRColor(r,g,b):
	GPIO.output(17,r)
	GPIO.output(27,g)
	GPIO.output(22,b)



#Swtiches off the LEDS
def setLedOff(side):
	if(side == "left"):
		setLColor(0,0,0)
	elif(side == "right"):
		setRColor(0,0,0)

#Set the Right & Left RGB LED Color
def setLedColor(side,colorvalue):
    if(side == 'left'):
        if(colorvalue == 'red'):
            setLColor(1,0,0)
        if(colorvalue == 'green'):
            setLColor(0,1,0)
        if(colorvalue == 'blue'):
            setLColor(0,0,1)
        if(colorvalue == 'yellow'):
            setLColor(1,1,0)
        if(colorvalue == 'magenta'):
            setLColor(1,0,1)
        if(colorvalue == 'tblue'):
            setLColor(0,1,1)
        if(colorvalue == 'white'):
            setLColor(1,1,1)
    elif(side == 'right'):
        if(colorvalue == 'red'):
            setRColor(1,0,0)
        if(colorvalue == 'green'):
            setRColor(0,1,0)
        if(colorvalue == 'blue'):
            setRColor(0,0,1)
        if(colorvalue == 'yellow'):
            setRColor(1,1,0)
        if(colorvalue == 'magenta'):
            setRColor(1,0,1)
        if(colorvalue == 'tblue'):
            setRColor(0,1,1)
        if(colorvalue == 'white'):
            setRColor(1,1,1)
    else:
        setLColor(0,0,0)
        setRColor(0,0,0)

#Setting the RGB color in PWM Mode
def setLedPWM(side,colorvalue):
	p_RL = GPIO.PWM(24,2000)
	p_GL = GPIO.PWM(12,2000)
	p_BL = GPIO.PWM(25,2000)
	
	p_RR = GPIO.PWM(17,2000)
	p_GR = GPIO.PWM(27,2000)
	p_BR = GPIO.PWM(22,2000)
	
	rgb = tuple(map(ord,colorvalue[1:].decode('hex')))

	r = smap(rgb[0],0,255,0,100)
	g = smap(rgb[1],0,255,0,100)
	b = smap(rgb[2],0,255,0,100)

	if (side =='left'):
		p_RL.start(r)
        	p_GL.start(g)
        	p_BL.start(b)
	elif(side =='right'):
        	p_RR.start(r)
        	p_GR.start(g)
        	p_BR.start(b)
	
	time.sleep(0.1)


def smap(x, in_min, in_max, out_min, out_max):
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

#Printing on the OLED Display Module
def printOnOLED(displayString,fontsize):
	od.printOutput(displayString,fontsize)

#Motor direction with time units
def motor(direction,unit,timeval):
	if (direction == 'forward'):
		if (unit == 'sec'):
			forward()
			time.sleep(timeval)
			stop()
		elif (unit == 'min'):
			forward()
			time.sleep(timeval*60)
			stop()
	if(direction == 'backward'):
		if (unit == 'sec'):
			backward()
                        time.sleep(timeval)
                        stop()
                elif (unit == 'min'):
                        backward()
			time.sleep(timeval*60)
                        stop()

# Motor turning with time unit
def motorturn(turn,timeval):
	if (turn == 'left'):
		left()
                time.sleep(timeval)
                stop()
        if(turn == 'right'):
                right()
                time.sleep(timeval)
                stop()
#Print of OLED with position
def printpositionOLED(xpos,ypos,displayString):
        od.printposition(xpos,ypos,displayString)
