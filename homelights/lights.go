package main

import (
	"net"
	"os"
	"time"
	"log"
	"strconv"

	magichome "github.com/moonliightz/magic-home/pkg"
)

func checkError(err error) {
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
}

func getTime() (int, int) {
	hours, minutes, _ := time.Now().Clock()
	return hours, minutes
}

func getAddress() []string {
	devices, err := magichome.Discover(magichome.DiscoverOptions{
		BroadcastAddr: "255.255.255.255",
		Timeout:       1,
	})
	checkError(err)
	var deviceList []string

	for _, device := range *devices {
		deviceList = append(deviceList, device.IP.String())
	}
	return deviceList

}

func setColor(localController magichome.Controller, red uint8, green uint8, blue uint8, white uint8) {
	err := localController.SetState(magichome.On)
	checkError(err)
	localController.SetColor(magichome.Color{
		R: red,
		G: green,
		B: blue,
		W: white,
	})
}

func logLights(message string) {
        file, err := os.OpenFile("/home/pi/.homelight.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
        if err != nil {
            log.Fatal(err)
        }
	log.SetOutput(file)
	log.Print(message)
}

func main() {

	hours, _ := getTime()
	logLights("case: " + strconv.Itoa(hours))

	ipAddresses := getAddress()

	controller, err := magichome.New(net.ParseIP(ipAddresses[0]), 5577)
	checkError(err)

	switch hours {
	case 16:
		setColor(*controller, 125, 125, 100, 0)
	case 17:
		setColor(*controller, 75, 75, 40, 0)
	case 18:
		setColor(*controller, 50, 50, 30, 0)
	case 19, 20:
		setColor(*controller, 30, 30, 10, 0)
	case 21, 22:
		setColor(*controller, 5, 5, 2, 0)
	case 6:
		setColor(*controller, 50, 50, 25, 0)
	case 7:
		setColor(*controller, 75, 75, 50, 0)
	case 8:
		setColor(*controller, 100, 100, 75, 0)
	case 9:
		setColor(*controller, 175, 175, 150, 0)
	case 10, 11, 12, 13, 14, 15:
		setColor(*controller, 250, 250, 250, 0)
	default:
		setColor(*controller, 10, 10, 5, 0)

	}

	err = controller.Close()
	checkError(err)
}

// controller, err := magichome.New(net.ParseIP("192.168.1.4"), 5577)
// checkError(err)

// err = controller.SetState(magichome.On)
// checkError(err)

// err = controller.SetColor(magichome.Color{
// 	R: 255,
// 	G: 255,
// 	B: 255,
// 	W: 0,
// })
// checkError(err)

// err = controller.SetState(magichome.Off)
// checkError(err)

// err = controller.Close()
// checkError(err)
// }
