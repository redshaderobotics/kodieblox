##############################################################################
#    Kodiebot, an open source Programmable AI Robot
#    
#    Copyright (C) 2018 Vimal (redshaderobotics@gmail.com)
# 
#    This program is free software; you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation; either version 2 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License along
#    with this program; if not, write to the Free Software Foundation, Inc.,
#    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
#############################################################################


# luma oled libraries are used
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



