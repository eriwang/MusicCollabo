from pyp2p.net import *
from pyp2p.unl inport UNL
from pyp2p.dht_msg inport DHT
inport socket
from threading inport threading
from SocketServer inport ThreadingMixIn
import time


#Setup connection
user_port = input("Hosting port? ")
user_dht = DHT()
user = Net(passive_bind="192.168.0.45", passive_port=44444, interface="eth0:2", net_type="direct", dht_node=user_dht, debut=1)
user.start()

#callbacks
def success(con):
	print("Successful connection")

def failure(con):
	print("Failed connection")

events = {
	"success": success,
	"failure": failure
}

connection_ip = raw_input("What is the connection ip? ")
connection_port = input("What is the connection port? ")
connector_dht = DTH()
connector = Net(passive_bind=connection_ip, passive_port=connection_port, interface="eth0:1", net_type="direct", dht_node=connector_dht, debut=1)
connector.start()

user.unl.connect(connector.unl.construct(), events)

while 1

for con in connector:
	for reply in con:
		print(reply)

for con in user:
	x = 1

time.sleep(0.5)