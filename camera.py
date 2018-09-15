import picamera
import picamera.array
import cv2


def takePhoto(filename,extension):
	camera = picamera.PiCamera()
	rawCapture = picamera.array.PiRGBArray(camera)
	sleep(0.1)
	camera.capture(rawCapture,format="bgr")
	image = rawCapture.array
	cv2.imwrite('/home/kodiebot/images/'+filename+'.'+extension,image)
	camera.close()
   

aruco = cv2.aruco
dictionary = aruco.getPredefinedDictionary(aruco.DICT_4X4_50)

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

