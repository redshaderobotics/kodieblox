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

# import of the predefined picamera packages
import picamera
import picamera.array
import cv2

# Function to take the photo and save it  to the directory 
def takePhoto(filename,extension):
	camera = picamera.PiCamera()
	rawCapture = picamera.array.PiRGBArray(camera)
	sleep(0.1)
	camera.capture(rawCapture,format="bgr")
	image = rawCapture.array
	cv2.imwrite('/home/kodiebot/images/'+filename+'.'+extension,image)
	camera.close()
   
# Declaration of the aruco with the dictionary size of 4 x 4
aruco = cv2.aruco
dictionary = aruco.getPredefinedDictionary(aruco.DICT_4X4_50)

# Function to get the id of the marker on the video stream
def getMarkerId():
        global id
        with picamera.PiCamera() as camera:
                with picamera.array.PiRGBArray(camera) as stream:
                        camera.resolution = (320, 240)
                        camera.capture(stream,'bgr',use_video_port=True)
                        ids = aruco.detectMarkers(stream.array, dictionary)
                        if len(ids[0]) > 0:
                                id = ids[1][0][0]
	return id	

