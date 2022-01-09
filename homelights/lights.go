package main

import (
	"fmt"
	"net"
	"os"

	// "os"
	"time"

	magichome "github.com/moonliightz/magic-home/pkg"
)

func checkError(e error) {
	if e != nil {
		fmt.Println("Error: ", e)
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

func main() {

	hours, _ := getTime()

	ipAddresses := getAddress()

	controller, err := magichome.New(net.ParseIP(ipAddresses[0]), 5577)
	checkError(err)

	switch hours {
	case 15:
		setColor(*controller, 125, 125, 100, 0)
	case 16:
		setColor(*controller, 100, 100, 75, 0)
	case 17, 18:
		setColor(*controller, 75, 75, 40, 0)
	case 19, 20, 21, 22:
		setColor(*controller, 50, 50, 20, 0)
	case 8:
		setColor(*controller, 75, 75, 40, 0)
	case 9:
		setColor(*controller, 100, 100, 75, 0)
	case 10, 11:
		setColor(*controller, 125, 125, 100, 0)
	case 12, 13, 14:
		setColor(*controller, 150, 150, 150, 0)
	default:
		setColor(*controller, 30, 30, 15, 0)

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
