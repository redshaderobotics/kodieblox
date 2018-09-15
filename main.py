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


from flask import Flask, render_template,request,jsonify
import time
from multiprocessing import Process
import sys
import os
import kodiebot as kbot
import oled

prog_path = "/home/kodiebot/program/"
app = Flask(__name__)

sys.path.insert(0,'/run')


#########################################################################################################
#                                                                                                       #
#				Creation of the kodie.py in the ram disk for reimporting as multiprocessing             #
#                                                                                                       #
#########################################################################################################
def create_file(input_str):
	prefix_str = "import kodiebot as kb\n"+"import time\n"+"import os\n"+"import camera as cam\n"+"def prog():\n\t"
	input_str = input_str.replace("\n","\n\t")
	final_str = prefix_str + input_str
	file = open("/run/kodie.py","w")
	file.write(final_str)
	
##Function to import the kodie.py and use it in the multiprocessing
def prog_execute():
	import kodie
	kodie = reload(kodie)
	global proc
	proc = Process(target = kodie.prog)
	proc.start()

##Function stops all the GPIO pins and set it to LOW
def prog_stop():
	proc.terminate()
	proc.join()
	import kodiebot as kb
	kb.freeup()
	
## Index file to load when the program starts
@app.route('/')
def index():
	return render_template('index.html')

## Listing the available programs in the program folder
@app.route('/load_file',methods=['POST','GET'])
def load_file():
	dir = os.listdir(prog_path)
	mylist = dir
	return jsonify(mylist)

## Get the name of the file to be loaded and reading the file  and returning as JSON data
@app.route('/open_file',methods=['POST','GET'])
def open_file():
	data = request.args.get('data',type=str)
	data = prog_path+data
	with open(data,"r") as f:
		file_data=f.read()
	return jsonify(file_data)

## Saving the file with extension as kbx in the program directory
@app.route('/save_file',methods=['POST','GET'])
def save_file():
	data = request.args.get('prog',type=str)
	fname = request.args.get('prog_name',type=str)
	fname = prog_path+fname+".kbx"
	if(os.path.isfile(fname)):
		ret_data = "file_available"

	else:
		with open(fname,"w") as f:
			f.write(data)
		f.close()
		ret_data = "saved"
	return jsonify(ret_data)

## To delete a File in Built in Memory
@app.route('/delete_file',methods=['POST','GET'])
def delete_file():
	fname = request.args.get('data',type=str)
	file_to_remove = prog_path+fname
	os.remove(file_to_remove)
	return jsonify("ok")


## Stopping the Kodiebot
@app.route('/stop')
def stop_kodiebot():
	prog_stop()
	return jsonify("Terminated")

## Execute the program in the workspace
@app.route('/process')
def process():
	data = request.args.get('data',type=str)
	create_file(data)
	prog_execute()
	while proc.is_alive() == True:
		succ_str = "Done"
	proc.terminate()
	proc.join()
	return jsonify(succ_str)


## PowerOff the Kodiebot
@app.route('/poweroff')
def poweroff():
	kbot.cleanup()
	time.sleep(1)
	os.system("sudo shutdown now")
	return jsonify("Shutting Down")


## Reboot the Kodiebot
@app.route('/reboot')
def reboot():
	kbot.cleanup()
	time.sleep(1)
	os.system("sudo reboot now")
	return jsonify("Rebooting...")




if __name__ == '__main__':
	app.run(host ='0.0.0.0',debug=False)
