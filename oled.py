from luma.core.interface.serial import i2c
from luma.core.render import canvas
from luma.oled.device import ssd1306
from PIL import ImageFont

#initialization of the i2c device with address
serial = i2c(port=1, address=0x3C)

#setting up of the device ssd1306
device = ssd1306(serial)

#Function declaration to make the screen stand still after the operation is completed
def do_nothing(obj):
        pass


#device.cleanup = do_nothing


def printOutput(displayString,fontsize):
	font = ImageFont.truetype('/home/kodiebot/kodieblox-1.0.2/fonts/code.ttf',fontsize)
	#font = ImageFont.load_default()
	with canvas(device) as draw:
        	draw.text((0,10),str(displayString),font=font, fill="white")
	device.cleanup = do_nothing

def printposition(xpos,ypos,displayString):
        font = ImageFont.truetype('/home/kodiebot/kodieblox-1.0.2/fonts/code.ttf',20)
        #font = ImageFont.load_default()
        with canvas(device) as draw:
                draw.text((xpos,ypos),str(displayString),font=font, fill="white")
	device.cleanup = do_nothing

def clearoled():
	device.cleanup()



