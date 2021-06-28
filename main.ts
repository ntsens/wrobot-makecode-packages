/*
Riven
modified from pxt-servo/servodriver.ts
load dependency
"robotbit": "file:../pxt-robotbit"
*/


//% color="#31C7D5" weight=10 icon="\uf1d0"
namespace writingrobot {
    
    serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
        basic.showIcon(IconNames.Asleep)
        rev = serial.readString()
        if (rev.substr(0, 2) == "ok") {
            state = 1
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    })

    let rev = ""
    let state = 0
    serial.redirect(
        SerialPin.P0,
        SerialPin.P1,
        BaudRate.BaudRate115200
    )
    basic.showIcon(IconNames.House)

    /**
     * TODO: Linear Move
     * @param x 在此处描述参数, eg: 0.0
     * @param y 在此处描述参数, eg: 0.0
     * @param z 在此处描述参数, eg: 0.0
     */
    //% block
    export function moveXYZ(x: number, y: number, z: number): void {
        // Add code here
        state = 0
        let x_str = x.toString()
        let y_str = y.toString()
        let z_str = z.toString()
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G0 X" + x_str + " Y" + y_str + " Z" + z_str + " F3000")
        while (state == 0) {
            basic.pause(1)
        }
    }

    /**
     * TODO: Go to origin on all axes
     */
    //% block
    export function autoHome(): void {
        // Add code here
        state = 0
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G28")
        while (state == 0) {
            basic.pause(1)
        }
    }

    /**
    * TODO: Go to coordinate origin
    */
    //% block
    export function moveCoordOrigin(): void {
        // Add code here
        moveXYZ(0, 0, 0);
    }

    /**
    * TODO: Set angle control mode
    */
    //% block
    export function setAngleControl(): void {
        // Add code here
        state = 0
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G95")
        while (state == 0) {
            basic.pause(1)
        }
    }

    /**
    * TODO: Set absolute coordinate system Mode
    */
    //% block
    export function setAbsoluteCoordSys(): void {
        // Add code here
        state = 0
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G90")
        while (state == 0) {
            basic.pause(1)
        }
    }

    /**
    * TODO: Set absolute coordinate system Mode
    */
    //% block
    export function setRelativeCoordSys(): void {
        // Add code here
        state = 0
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G91")
        while (state == 0) {
            basic.pause(1)
        }
    }

}
